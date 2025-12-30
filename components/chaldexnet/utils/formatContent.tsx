// File: src/pages/chaldexnet/utils/formatContent.tsx
import React from 'react';

export const formatContent = (content: string): React.ReactNode[] => {
  const parts = content.split(/(@\w+)/g);
  return parts.map((part, i) => {
    if (part.startsWith('@')) {
      return (
        <span 
          key={i} 
          className="text-blue-600 dark:text-blue-400 font-bold bg-blue-500/10 px-1 rounded cursor-pointer hover:bg-blue-500/20 transition-colors"
        >
          {part}
        </span>
      );
    }
    return part;
  });
};
