"use client";
import { useState, useEffect } from "react";

// Fetch helper
async function apiGet(path) {
  const res = await fetch(`http://localhost:5000/api${path}`, {
    cache: "no-store",
  });
  return res.json();
}

export default function useStocks() {
  const [stocks, setStocks] = useState([]);
  const [sectorSummary, setSectorSummary] = useState({});
  const [totals, setTotals] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await apiGet("/stocks");

        setStocks(data);

        const totalInvestment = data.reduce((sum, s) => sum + (s.investment || 0), 0);
        const totalPresentValue = data.reduce((sum, s) => sum + (s.presentValue || 0), 0);
        const gainLoss = totalPresentValue - totalInvestment;

        setTotals({ investment: totalInvestment, presentValue: totalPresentValue, gainLoss });

        const map = {};
        data.forEach((item) => {
          const sector = item.sector || "Unknown";
          if (!map[sector]) map[sector] = { investment: 0 };
          map[sector].investment += item.investment || 0;
        });

        Object.keys(map).forEach((sector) => {
          map[sector].weight =
            totalInvestment > 0
              ? ((map[sector].investment / totalInvestment) * 100).toFixed(2)
              : 0;
        });

        setSectorSummary(map);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { stocks, loading, error, sectorSummary, totals };
}
