
import React from 'react';

export const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={`bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden ${className}`}>{children}</div>
);
export const CardHeader: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
export const CardTitle: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <h3 className={`text-lg font-semibold text-slate-900 dark:text-white ${className}`}>{children}</h3>
);
export const CardDescription: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <p className={`text-sm text-slate-600 dark:text-slate-400 ${className}`}>{children}</p>
);
export const CardContent: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);
