// lib/amcLogos.ts or component file

export const AMC_LOGOS = [
    { keywords: ["uti"], file: "uti.webp", name: "UTI Mutual Fund" },
    { keywords: ["nippon"], file: "nippon.png", name: "Nippon India Mutual Fund" },
    { keywords: ["axis"], file: "axis.svg", name: "Axis Mutual Fund" },
    { keywords: ["aditya birla", "absl"], file: "absl.png", name: "Aditya Birla Sun Life Mutual Fund" },
    { keywords: ["franklin"], file: "franklin.png", name: "Franklin Templeton Mutual Fund" },
    { keywords: ["kotak"], file: "kotak.svg", name: "Kotak Mahindra Mutual Fund" },
    { keywords: ["dsp"], file: "dsp.svg", name: "DSP Mutual Fund" },
    { keywords: ["tata"], file: "tata.svg", name: "Tata Mutual Fund" },
    { keywords: ["bandhan", "idfc"], file: "bandhan.svg", name: "Bandhan Mutual Fund" },
    { keywords: ["hdfc"], file: "hdfc.svg", name: "HDFC Mutual Fund" },
    { keywords: ["sbi"], file: "sbi.svg", name: "SBI Mutual Fund" },
    { keywords: ["icici"], file: "icici.jpeg", name: "ICICI Prudential Mutual Fund" },
    { keywords: ["hsbc"], file: "hsbc.svg", name: "HSBC Mutual Fund" },
    { keywords: ["ppfas", "parag parikh"], file: "ppfas.svg", name: "PPFAS Mutual Fund" }
];

export function getAmcLogo(amcString: string) {
    if (!amcString) return '/assets/logos/default-amc.png';
    const match = AMC_LOGOS.find(item =>
        item.keywords.some(kw => amcString.toLowerCase().includes(kw))
    );
    return match ? `/assets/logos/${match.file}` : '/assets/logos/default-amc.png';
}