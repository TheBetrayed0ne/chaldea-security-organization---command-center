// File: pages/chaldexnet/utils/getUsernameColor.ts

export const getUsernameColor = (user: string): string => {
  if (user === 'VoidOnStandby') return 'text-sky-600 dark:text-sky-400';
  if (user === 'DefinitelyNotBB') return 'text-purple-600 dark:text-purple-400';
  if (user === 'Master_Zero') return 'text-black dark:text-white font-bold';
  if (user === 'Shield_Admin') return 'text-blue-600 dark:text-blue-300';
  if (user === 'ModVinci') return 'text-amber-600 dark:text-amber-400';
  if (user === 'GoringHard') return 'text-rose-600 dark:text-rose-400';
  return 'text-slate-500 dark:text-slate-400';
};