"use client";
import Charts from "../components/Charts";
import Navbar from "../components/Navbar";
import PortfolioTable from "../components/PortfolioTable";
import SectorSummary from "../components/SectorSummary";
import Loader from "../components/Loader";
import useStocks from "../hooks/useStocks";

export default function Page() {
  const { stocks, loading, error, sectorSummary, totals } = useStocks();

  return (
    <main className="max-w-6xl mx-auto px-4 pb-12">
      <Navbar />

      {error && (
        <div className="mt-4 p-3 rounded bg-red-500/10 border border-red-500/30 text-red-200">
          Failed to load live data.
        </div>
      )}

      {loading ? (
        <div className="mt-12">
          <Loader />
        </div>
      ) : (
        <>
          <section className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-ai">
              <h3 className="text-sm text-slate-400">Total Investment</h3>
              <p className="text-2xl font-semibold">₹{totals.investment?.toLocaleString()}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-ai">
              <h3 className="text-sm text-slate-400">Present Value</h3>
              <p className="text-2xl font-semibold">₹{totals.presentValue?.toLocaleString()}</p>
            </div>

            <div
              className={`p-4 rounded-2xl border shadow-ai ${
                totals?.gainLoss >= 0
                  ? "bg-emerald-900/30 border-emerald-700/40"
                  : "bg-rose-900/30 border-rose-700/40"
              }`}
            >
              <h3 className="text-sm text-slate-200">Gain / Loss</h3>
              <p className="text-2xl font-semibold">
                ₹{totals?.gainLoss?.toLocaleString()}
              </p>
            </div>
          </section>

          <section className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-ai">
              <PortfolioTable data={stocks} />
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-ai">
              <SectorSummary summary={sectorSummary} />
            </div>
          </section>

          <section className="mt-6 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-ai">
            <Charts stocks={stocks} />
          </section>
        </>
      )}
    </main>
  );
}
