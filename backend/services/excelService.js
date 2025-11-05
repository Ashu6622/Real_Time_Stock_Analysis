import xlsx from "xlsx";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function readPortfolio() {
  const filePath = path.join(__dirname, "../data/8_bit_excel.xlsx");
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = xlsx.utils.sheet_to_json(sheet, { header: 1 });

  let sector = "";
  const stocks = [];

  rows.forEach((row) => {
    if (!row || !row[1]) return;

    const cell = row[1].toString().trim();

    // ✅ Detect ANY group header
    const isHeader =
      cell.toLowerCase().includes("sector") ||
      ["consumer", "power", "others", "financial", "tech", "pipe"].some(keyword =>
        cell.toLowerCase().includes(keyword)
      );

    if (isHeader) {
      sector = cell;
      return;
    }

    // ✅ Stock row detection
    if (!isNaN(row[0]) && row[2] && row[3]) {
      stocks.push({
        stock: cell,
        purchasePrice: Number(row[2]),
        qty: Number(row[3]),
        investment: Number(row[4]),
        symbol: row[6]?.toString().trim() || cell,
        sector // ✅ now always mapped correctly
      });
    }
  });

  return stocks;
}
