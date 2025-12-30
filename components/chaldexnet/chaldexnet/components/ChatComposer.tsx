// File: pages/chaldexnet/components/ChatComposer.tsx
import React from 'react';
import { StatusLegend } from './StatusLegend.tsx';

interface ChatComposerProps {
  input: string;
  setInput: (val: string) => void;
  onSend: (e: React.FormEvent) => void;
  isLoading: boolean;
  channelName: string;
}

export const ChatComposer: React.FC<ChatComposerProps> = ({ 
  input, 
  setInput, 
  onSend, 
  isLoading, 
  channelName 
}) => (
  <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-950/40 backdrop-blur-sm flex gap-4 items-center">
    <StatusLegend />

    <form onSubmit={onSend} className="flex-1 flex gap-4 items-center">
      <div className="flex-1 relative">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
          placeholder={`Message #${channelName}...`}
          className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all dark:text-slate-200"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-3 text-slate-400">
          <button type="button" className="hover:text-blue-500 transition-colors">☺</button>
          <button type="button" className="hover:text-blue-500 transition-colors">+</button>
        </div>
      </div>
      <button 
        type="submit" 
        disabled={isLoading || !input.trim()}
        className="bg-blue-600 hover:bg-blue-500 disabled:opacity-30 text-white font-bold px-6 py-3 rounded-lg transition-all shadow-lg shadow-blue-500/20 uppercase text-[10px] tracking-widest"
      >
        Send
      </button>
    </form>
  </div>
);