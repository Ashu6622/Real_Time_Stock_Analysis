import fetch from "node-fetch";

/**
 * Fetch sector name for a given symbol using Yahoo Finance
 */
export async function fetchSector(symbol) {
  if (!symbol) return "Unknown";

  try {
    const url = `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${symbol}?modules=summaryProfile`;

    const res = await fetch(url);
    const json = await res.json();

    const sector = json.quoteSummary?.result?.[0]?.summaryProfile?.sector;
    return sector || "Unknown";
  } catch (err) {
    console.log("⚠️ Sector Fetch Failed for:", symbol);
    return "Unknown";
  }
}
