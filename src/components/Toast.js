import React, { useEffect } from 'react';
import { Icons } from './Icons.js';

export const Toast = ({ toast, onClose }) => {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  const isSuccess = toast.type !== 'error';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up max-w-sm w-full">
      <div className={`rounded-2xl p-4 shadow-2xl border flex items-start space-x-3 ${
        isSuccess 
          ? 'bg-slate-900 text-white border-slate-700' 
          : 'bg-red-900 text-white border-red-700'
      }`}>
        <div className={`p-1.5 rounded-lg shrink-0 ${isSuccess ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
          {isSuccess ? <Icons.Check className="w-5 h-5" /> : <Icons.X className="w-5 h-5" />}
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-bold uppercase tracking-wider">{toast.title || 'Notification'}</h4>
          <p className="text-xs text-slate-300 mt-0.5">{toast.message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1"
        >
          <Icons.X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
