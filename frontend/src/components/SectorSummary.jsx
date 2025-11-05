
export default function SectorSummary({ summary = {} }) 
{
  const sectors = Object.entries(summary); // Convert object → array

  if (!sectors.length) {
    return (
      <p className="text-slate-500 text-center py-8">
        No sector data available.
      </p>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Sector Summary</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-slate-400">
            <th className="text-left py-2">Sector</th>
            <th className="text-right py-2">Investment</th>
            <th className="text-right py-2">Weight</th>
          </tr>
        </thead>
        <tbody>
          {sectors.map(([sector, data]) => (
            <tr
              key={sector}
              className="border-b border-slate-800/50 hover:bg-slate-800/30"
            >
              <td className="py-2">{sector}</td>
              <td className="text-right py-2">
                ₹{data.investment.toLocaleString()}
              </td>
              <td className="text-right py-2">
                {data.weight}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
