// File: src/pages/chaldexnet/components/MessageList.tsx
import React, { forwardRef } from 'react';
import { Message } from '../types.ts';
import { MessageRow } from './MessageRow.tsx';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export const MessageList = forwardRef<HTMLDivElement, MessageListProps>(({ messages, isLoading }, ref) => (
  <div ref={ref} className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
    {messages.map((msg, i) => (
      <MessageRow key={i} message={msg} />
    ))}
    {isLoading && (
      <div className="flex gap-5 animate-pulse">
        <div className="w-10 h-10 rounded bg-slate-100 dark:bg-slate-800"></div>
        <div className="flex-1 space-y-2 py-1">
          <div className="h-2 w-20 bg-slate-100 dark:bg-slate-800 rounded"></div>
          <div className="h-4 w-1/2 bg-slate-50 dark:bg-slate-900 rounded"></div>
        </div>
      </div>
    )}
  </div>
));

MessageList.displayName = 'MessageList';
