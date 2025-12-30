// File: components/SaintGraph/detail/components/OperationalCard.tsx
import React from 'react';

interface OperationalCardProps {
  label: string;
  val: string;
  icon?: React.ReactNode;
  color?: string;
}

export const OperationalCard: React.FC<OperationalCardProps> = ({ 
  label, 
  val, 
  icon, 
  color = "text-slate-300" 
}) => (
  <div className="bg-slate-800/20 border border-slate-800 p-5 rounded relative">
    <h4 className="text-[9px] font-mono text-slate-600 uppercase mb-3 flex items-center gap-2">
      {icon && <span>{icon}</span>}
      {label}
    </h4>
    <p className={`text-xs leading-relaxed ${color}`}>{val}</p>
  </div>
);
