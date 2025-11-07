
export async function fetchCMP(symbol) {
  if (!symbol) return 0;

  const ticker = symbol.toUpperCase();

  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d`;

    const response = await fetch(url, {
      headers: { "user-agent": "Mozilla/5.0" }
    });

    const data = await response.json();

    const price =
      data?.chart?.result?.[0]?.meta?.regularMarketPrice ?? null;

    // console.log("CMP:", ticker, "→", price);

    return price ? Number(price) : 0;
  } catch (err) {
    throw new Error(`Failed to fetch price for ${ticker}: ${err.message}`);
  }
}
