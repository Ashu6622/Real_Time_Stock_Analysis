import { readPortfolio } from "../services/excelService.js";
import { fetchCMP } from "../services/yahooService.js";
import { symbolMap } from "../services/symbolMap.js";

export async function getStocks(req, res, next) {
  try {
    let rows = readPortfolio();

    const cleanRows = rows.filter(r => r.stock && r.qty > 0);

    const enriched = await Promise.all(
      cleanRows.map(async (r) => {

        // ✅ Fix symbol
        const symbol = symbolMap[r.stock] || symbolMap[r.symbol] || r.symbol + ".NS";

        const cmp = await fetchCMP(symbol);
        const presentValue = cmp * r.qty;
        const gainLoss = presentValue - r.investment;

        return {
          ...r,
          symbol,
          cmp,
          presentValue,
          gainLoss
        };
      })
    );

    res.json(enriched);
  } catch (error) {
    next(error);
  }
}
