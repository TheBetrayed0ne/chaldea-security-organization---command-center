// File: components/HRDepartment/components/BoundaryRule.tsx
import React from 'react';

interface BoundaryRuleProps {
  zone: string;
  rules: string[];
  color: string;
}

export const BoundaryRule: React.FC<BoundaryRuleProps> = ({ zone, rules, color }) => (
  <div>
    <h5 className={`text-xs font-black uppercase mb-2 ${color}`}>{zone} Protocol</h5>
    <ul className="space-y-1 pl-3">
      {rules.map((r: string, i: number) => (
        <li key={i} className="text-[10px] text-slate-600 dark:text-slate-500 font-mono flex gap-2">
          <span className="opacity-30">#</span> {r}
        </li>
      ))}
    </ul>
  </div>
);
