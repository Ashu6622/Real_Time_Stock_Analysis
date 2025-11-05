"use client";
import { useMemo } from "react";
import { useTable, useSortBy } from "react-table";

export default function PortfolioTable({ data = [] }) {
  // ✅ Ensure stable (avoids infinite render loop)
  const memoData = useMemo(() => data, [data]);

  const columns = useMemo(() => [
    { Header: "Stock", accessor: "stock" },
    { Header: "Purchase Price", accessor: "purchasePrice" },
    { Header: "Qty", accessor: "qty" },
    { Header: "Investment", accessor: "investment" },
    { Header: "Exchange", accessor: "exchange" },
    { Header: "CMP", accessor: "cmp" },
    { Header: "Present Value", accessor: "presentValue" },
    { Header: "Gain/Loss", accessor: "gainLoss" },
    { Header: "P/E", accessor: "peRatio" },
    { Header: "Earnings", accessor: "earnings" },
  ], []);

  const tableInstance = useTable({ columns, data: memoData }, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="overflow-auto max-h-[500px]">
      <table {...getTableProps()} className="w-full text-sm text-slate-200">
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, j) => (
                <th
                  key={j}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-3 py-2 border-b border-slate-700 bg-slate-800/50 text-left"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, k) => {
            prepareRow(row);
            return (
              <tr key={k} {...row.getRowProps()}>
                {row.cells.map((cell, m) => (
                  <td
                    key={m}
                    {...cell.getCellProps()}
                    className="px-3 py-2 border-b border-slate-800"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
