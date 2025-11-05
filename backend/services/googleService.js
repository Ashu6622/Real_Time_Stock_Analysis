import fetch from "node-fetch";

export async function fetchPERatioAndEarnings(symbol) {
  if (!symbol) return { peRatio: null, earnings: null };

  try {
    const url = `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${symbol}?modules=financialData,defaultKeyStatistics`;

    const response = await fetch(url);
    const json = await response.json();

    const stats = json.quoteSummary?.result?.[0]?.defaultKeyStatistics;
    const fin = json.quoteSummary?.result?.[0]?.financialData;

    return {
      peRatio: stats?.trailingPE?.raw || null,
      earnings: fin?.netIncome?.raw || null,
    };
  } catch (err) {
    console.log("⚠️ PE/Earnings Fetch Failed for", symbol);
    return { peRatio: null, earnings: null };
  }
}
