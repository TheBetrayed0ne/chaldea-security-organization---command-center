import React from 'react';
import { LoadCategory } from '../types';

interface LoadDistributionProps {
  loadCategories: LoadCategory[];
}

export const LoadDistribution: React.FC<LoadDistributionProps> = ({ loadCategories }) => {
  return (
    <div className="bg-slate-900/40 border border-slate-700 p-6 mb-6" style={{ maxWidth: '1200px', maxHeight: '400px' }}>
      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Load & Distribution</h2>
      <div className="space-y-3">
        {loadCategories.map((load) => (
          <div key={load.id} className="flex items-center gap-4">
            <div className="w-40 text-sm text-slate-300">{load.name}</div>
            <div className="flex-1 relative h-6 bg-slate-800 border border-slate-600">
              <div
                className={`absolute inset-y-0 left-0 ${
                  load.priority === 'CRITICAL'
                    ? 'bg-red-500/40 border-r-2 border-red-500'
                    : load.priority === 'HIGH'
                    ? 'bg-orange-500/40 border-r-2 border-orange-500'
                    : load.priority === 'NORMAL'
                    ? 'bg-cyan-500/40 border-r-2 border-cyan-500'
                    : 'bg-slate-500/40 border-r-2 border-slate-500'
                }`}
                style={{ width: `${(load.currentDraw / load.maxDraw) * 100}%` }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-200">
                {load.currentDraw} / {load.maxDraw} MW
              </div>
            </div>
            <div
              className={`w-20 text-[9px] font-bold uppercase ${
                load.priority === 'CRITICAL'
                  ? 'text-red-400'
                  : load.priority === 'HIGH'
                  ? 'text-orange-400'
                  : load.priority === 'NORMAL'
                  ? 'text-cyan-400'
                  : 'text-slate-400'
              }`}
            >
              {load.priority}
            </div>
            <div className={`w-24 text-[9px] uppercase ${load.sheddable ? 'text-amber-400' : 'text-slate-600'}`}>
              {load.sheddable ? 'SHEDDABLE' : 'PROTECTED'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
