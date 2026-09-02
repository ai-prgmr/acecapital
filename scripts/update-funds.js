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
    'PPFAS Mutual Fund'
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
    const latestNAV = parseFloat(navData[0].nav);

    const getPastNAV = (daysAgo) => {
        const target = new Date();
        target.setDate(target.getDate() - daysAgo);
        const record = navData.find((entry) => {
            const [d, m, y] = entry.date.split('-');
            return new Date(`${y}-${m}-${d}`) <= target;
        });
        return record ? parseFloat(record.nav) : null;
    };

    const nav1Y = getPastNAV(365);
    const nav3Y = getPastNAV(365 * 3);
    const nav5Y = getPastNAV(365 * 5);

    return {
        nav: latestNAV,
        date: navData[0].date,
        r1y: nav1Y ? parseFloat((((latestNAV - nav1Y) / nav1Y) * 100).toFixed(2)) : null,
        r3y: nav3Y ? parseFloat(((Math.pow(latestNAV / nav3Y, 1 / 3) - 1) * 100).toFixed(2)) : null,
        r5y: nav5Y ? parseFloat(((Math.pow(latestNAV / nav5Y, 1 / 5) - 1) * 100).toFixed(2)) : null,
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

            const metrics = computeReturns(json.data);
            if (!metrics) return null;

            return {
                code: scheme.schemeCode,
                scheme: json.meta.scheme_name || scheme.schemeName,
                amc: json.meta.fund_house,
                category: json.meta.scheme_category,
                ...metrics
            };
        } catch (err) {
            return null;
        }
    });

    const finalDataset = dataset.filter(Boolean);

    const outputPath = path.join(__dirname, '../public/data/funds.json');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(finalDataset));

    console.log(`Saved ${finalDataset.length} schemes to public/data/funds.json`);
}

run();