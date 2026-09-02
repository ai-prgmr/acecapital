// lib/amfi-parser.ts

export interface AMFIFund {
  code: number;
  scheme: string;
  amc: string;
  category: string;
  nav: number;
  date: string;
  r1y: number | null;
  r3y: number | null;
  r5y: number | null;
}

/**
 * Fetch static AMFI Mutual Fund data produced by the GitHub Action workflow.
 * Falls back across potential base path variations for both local dev and GitHub Pages.
 */
export async function fetchAMFIData(): Promise<AMFIFund[]> {
  const candidatePaths = [
    "/acecapital/data/funds.json",
    "/data/funds.json",
    "./data/funds.json",
  ];

  for (const path of candidatePaths) {
    try {
      const res = await fetch(path, {
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          return data;
        }
      }
    } catch {
      // Continue to next path candidate
    }
  }

  return [];
}

// Backwards-compatibility alias
export const parseFullAMFIData = fetchAMFIData;