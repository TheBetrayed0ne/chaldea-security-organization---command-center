// File: pages/dashboard/utils/buildManaData.ts
import { ManaPoint } from '../types.ts';

export const buildManaData = (
  chartRange: '6h' | '24h' | '72h' | '1h',
  chartDetail: 'smoothed' | 'normal' | 'raw',
  viewMode: 'basic' | 'standard' | 'analyst'
): ManaPoint[] => {
  const points = viewMode === 'analyst' ? 24 : 15;
  const data: ManaPoint[] = [];
  const now = new Date();
  const seed = chartRange.charCodeAt(0) + chartDetail.length;
  
  for (let i = points - 1; i >= 0; i--) {
    let timeStr = "";
    const d = new Date(now.getTime());
    
    if (chartRange === '1h') {
      d.setMinutes(d.getMinutes() - (i * (60 / points)));
      timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    } else if (chartRange === '6h') {
      d.setMinutes(d.getMinutes() - (i * (360 / points)));
      timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    } else if (chartRange === '24h') {
      d.setHours(d.getHours() - (i * (24 / points)));
      timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    } else if (chartRange === '72h') {
      d.setHours(d.getHours() - (i * (72 / points)));
      timeStr = `${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:00`;
    }

    const wave = Math.sin((i + seed) * 0.8) * 120 + Math.cos(i * 0.3) * 50;
    const baseValue = 600 + wave;
    
    const noiseIntensity = chartDetail === 'raw' ? 60 : (chartDetail === 'normal' ? 10 : 0);
    const noise = (Math.random() - 0.5) * noiseIntensity;
    
    data.push({
      time: timeStr,
      value: Math.max(50, Math.round(baseValue + noise))
    });
  }
  return data;
};
