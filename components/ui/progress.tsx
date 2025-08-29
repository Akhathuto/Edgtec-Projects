
import React from 'react';
export const Progress: React.FC<{ value: number, className?: string }> = ({ value, className }) => (
    <div className={`w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 ${className}`}>
        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${value}%` }}></div>
    </div>
);
