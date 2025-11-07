import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

export default function Charts({ stocks = [] })
 {
  if (!stocks.length)
    return <p className="text-slate-500 text-center">No data</p>;

  // Group by Sector
  const sectorTotals = {};
  stocks.forEach((s) => {
    const sector = s.sector || "Unknown";
    sectorTotals[sector] = (sectorTotals[sector] || 0) + s.investment;
  });

  // Convert to chart ready format
  const data = Object.entries(sectorTotals).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = [
    "#5ecf19",
    "#4ade80",
    "#60a5fa",
    "#f472b6",
    "#facc15",
    "#fb923c",
    "#a78bfa",
    "#38bbc8",
  ];

  return (
    <div className="h-72">
      <h2 className="text-lg font-semibold mb-3">Sector Allocation</h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie dataKey="value" data={data} outerRadius={100} label>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
