import React from "react";
import { Sliders } from "lucide-react";

interface AIComparisonTableProps {
  title?: string;
  headers: string[];
  rows: string[][];
}

export default function AIComparisonTable({ title = "Operations Comparison Matrix", headers, rows }: AIComparisonTableProps) {
  return (
    <div className="space-y-4 my-8">
      <div className="flex items-center gap-2">
        <Sliders className="w-4 h-4 text-[#8B5CF6]" />
        <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
          {title}
        </h4>
      </div>

      <div className="w-full overflow-x-auto rounded-2xl border border-white/5 glass-panel">
        <table className="w-full border-collapse text-left font-sans text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02]">
              {headers.map((header, idx) => (
                <th 
                  key={idx} 
                  className={`p-4 font-mono text-xs uppercase tracking-wider text-gray-400 font-semibold ${
                    idx === 0 ? "w-1/3" : ""
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((row, rowIdx) => (
              <tr 
                key={rowIdx} 
                className="hover:bg-white/[0.01] transition-colors"
              >
                {row.map((cell, cellIdx) => (
                  <td 
                    key={cellIdx} 
                    className={`p-4 ${
                      cellIdx === 0 
                        ? "font-mono font-medium text-white" 
                        : cellIdx === 2
                          ? "text-[#00D2FF] font-semibold"
                          : "text-gray-400"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[10px] font-mono text-gray-600 italic text-right">
        * Metrics calculated based on average sandboxed runtime diagnostic traces.
      </p>
    </div>
  );
}
