// File: pages/dashboard/components/LeylineChartCard.tsx
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ManaPoint } from '../types.ts';
import { useGlobalStatus } from '../../../context/StatusContext.tsx';

interface LeylineChartCardProps {
  data: ManaPoint[];
  viewMode: 'basic' | 'standard' | 'analyst';
  chartRange: string;
  chartDetail: 'smoothed' | 'normal' | 'raw';
  reduceMotion: boolean;
}

export const LeylineChartCard: React.FC<LeylineChartCardProps> = ({
  data,
  viewMode,
  chartRange,
  chartDetail,
  reduceMotion
}) => {
  const { status } = useGlobalStatus();
  const isDark = status.settings.theme === 'dark';

  return (
    <div className={`lg:col-span-8 bg-white dark:bg-slate-900/20 border border-slate-200 dark:border-slate-900 p-8 rounded relative shadow-sm dark:shadow-none ${viewMode === 'basic' ? 'h-[300px]' : ''}`}>
      <div className="flex justify-between items-start mb-8">
        <h3 className="text-[10px] font-mono text-slate-500 dark:text-slate-500 uppercase tracking-widest font-bold flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse-soft"></span>
          Leyline Energy Flux [MW/h]
        </h3>
        <div className="text-[8px] font-mono text-slate-400 dark:text-slate-700 uppercase space-x-4">
          <span className="text-blue-500 dark:text-blue-400">Range: {chartRange}</span>
          <span className="text-blue-500 dark:text-blue-400">Mode: {chartDetail}</span>
        </div>
      </div>
      <div className={`${viewMode === 'basic' ? 'h-[180px]' : 'h-[280px]'}`}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#1e293b" : "#e2e8f0"} vertical={false} />
            <XAxis dataKey="time" stroke={isDark ? "#475569" : "#94a3b8"} fontSize={9} axisLine={false} tickLine={false} />
            <YAxis stroke={isDark ? "#475569" : "#94a3b8"} fontSize={9} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDark ? '#0f172a' : '#ffffff', 
                border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`, 
                borderRadius: '4px', 
                fontSize: '10px', 
                color: isDark ? '#f8fafc' : '#0f172a' 
              }}
            />
            <Area 
              type={chartDetail === 'smoothed' ? 'monotone' : 'linear'} 
              dataKey="value" 
              stroke="#3b82f6" 
              fill="#3b82f6" 
              fillOpacity={isDark ? (viewMode === 'analyst' ? 0.2 : 0.08) : 0.15} 
              strokeWidth={chartDetail === 'raw' ? 2 : 1.5} 
              isAnimationActive={!reduceMotion}
              animationDuration={800}
            />
            {viewMode === 'analyst' && (
              <Area 
                type="stepAfter" 
                dataKey="value" 
                stroke="#ef4444" 
                strokeDasharray="4 4" 
                fill="transparent" 
                strokeWidth={1} 
                opacity={0.4} 
                isAnimationActive={!reduceMotion}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};