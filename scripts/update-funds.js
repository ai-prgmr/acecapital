const fs = require('fs');
const path = require('path');

// Target AMC Keywords to match against `meta.fund_house` or `scheme_name`
const TARGET_AMCS = [
    'UTI Mutual Fund',
    'Nippon India Mutual Fund',
    'Axis Mutual Fund',
    'Aditya Birla Sun Life Mutual Fund',
    'Franklin Templeton Mutual Fund',
    'Kotak Mahindra Mutual Fund',
    'DSP Mutual Fund',
    'Tata Mutual Fund',
    'Bandhan Mutual Fund',
    'HDFC Mutual Fund',
    'SBI Mutual Fund',
    'ICICI Prudential Mutual Fund',
    'HSBC Mutual Fund',
    'Parag Parikh Mutual Fund'
];

const LIST_ENDPOINT = 'https://api.mfapi.in/mf';
const DETAILS_ENDPOINT = 'https://api.mfapi.in/mf/';
const CONCURRENCY_LIMIT = 15;

async function mapConcurrent(items, limit, fn) {
    const results = [];
    const executing = new Set();

    for (const item of items) {
        const p = Promise.resolve().then(() => fn(item));
        results.push(p);
        executing.add(p);
        const clean = () => executing.delete(p);
        p.then(clean, clean);
        if (executing.size >= limit) {
            await Promise.race(executing);
        }
    }
    return Promise.all(results);
}

function computeReturns(navData) {
    if (!navData || navData.length === 0) return null;

    const latestEntry = navData[0];
    const latestNAV = parseFloat(latestEntry.nav);
    if (isNaN(latestNAV) || latestNAV === 0) return null;

    // Helper: Find the closest valid NAV on or immediately prior to (targetDate)
    const getHistoricalNAV = (daysAgo) => {
        const [d, m, y] = latestEntry.date.split('-');
        const latestDate = new Date(`${y}-${m}-${d}`);

        const targetDate = new Date(latestDate);
        targetDate.setDate(targetDate.getDate() - daysAgo);

        // Search for closest entry on or before target date
        const record = navData.find((entry) => {
            const [ed, em, ey] = entry.date.split('-');
            const entryDate = new Date(`${ey}-${em}-${ed}`);
            return entryDate <= targetDate;
        });

        if (!record) return null;
        const navVal = parseFloat(record.nav);
        return isNaN(navVal) || navVal === 0 ? null : navVal;
    };

    const nav1M = getHistoricalNAV(30);
    const nav1Y = getHistoricalNAV(365);
    const nav3Y = getHistoricalNAV(365 * 3);
    const nav5Y = getHistoricalNAV(365 * 5);

    // 1-Month & 1-Year Simple Absolute Return
    const r1m = nav1M ? (((latestNAV - nav1M) / nav1M) * 100) : null;
    const r1y = nav1Y ? (((latestNAV - nav1Y) / nav1Y) * 100) : null;

    // 3-Year & 5-Year Annualized CAGR
    const r3y = nav3Y ? ((Math.pow(latestNAV / nav3Y, 1 / 3) - 1) * 100) : null;
    const r5y = nav5Y ? ((Math.pow(latestNAV / nav5Y, 1 / 5) - 1) * 100) : null;

    return {
        nav: latestNAV,
        date: latestEntry.date,
        r1m: r1m !== null ? parseFloat(r1m.toFixed(2)) : null,
        r1y: r1y !== null ? parseFloat(r1y.toFixed(2)) : null,
        r3y: r3y !== null ? parseFloat(r3y.toFixed(2)) : null,
        r5y: r5y !== null ? parseFloat(r5y.toFixed(2)) : null,
    };
}

async function run() {
    console.log('Fetching master scheme list...');
    const listRes = await fetch(LIST_ENDPOINT);
    const allSchemes = await listRes.json();

    // Filter scheme list by AMC keywords in scheme names first to avoid unnecessary requests
    const filteredSchemes = allSchemes.filter((scheme) =>
        TARGET_AMCS.some((amc) => scheme.schemeName.toLowerCase().includes(amc.split(' ')[0].toLowerCase()))
    );

    console.log(`Matched ${filteredSchemes.length} schemes for targeted AMCs. Processing NAV data...`);

    const dataset = await mapConcurrent(filteredSchemes, CONCURRENCY_LIMIT, async (scheme) => {
        try {
            const res = await fetch(`${DETAILS_ENDPOINT}${scheme.schemeCode}`);
            const json = await res.json();

            const fundHouse = json.meta?.fund_house || '';
            // Strict check against meta.fund_house
            const isTargetAMC = TARGET_AMCS.some(amc => fundHouse.toLowerCase().includes(amc.toLowerCase().split(' ')[0]));

            if (!isTargetAMC) return null;

            const schemeName = json.meta.scheme_name || scheme.schemeName;
            const nameLower = schemeName.toLowerCase();
            
            // Filter out direct and IDCW plans
            if (nameLower.includes('direct') || nameLower.includes('idcw')) {
                return null;
            }

            const metrics = computeReturns(json.data);
            if (!metrics) return null;

            return {
                code: scheme.schemeCode,
                scheme: schemeName,
                amc: json.meta.fund_house,
                category: json.meta.scheme_category,
                ...metrics
            };
        } catch (err) {
            return null;
        }
    });

    let finalDataset = dataset.filter(Boolean);

    if (finalDataset.length > 0) {
        // Find the absolute maximum date in the format dd-mm-yyyy
        const parseDate = (dStr) => {
            const [d, m, y] = dStr.split('-');
            return new Date(`${y}-${m}-${d}`).getTime();
        };

        const maxDateTs = Math.max(...finalDataset.map(f => parseDate(f.date)));
        
        // Convert back to string if needed, or just filter by maxDateTs
        finalDataset = finalDataset.filter(f => parseDate(f.date) === maxDateTs);
    }

    const outputPath = path.join(__dirname, '../public/data/funds.json');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(finalDataset));

    console.log(`Saved ${finalDataset.length} schemes to public/data/funds.json`);
}

run();