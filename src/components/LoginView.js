import React, { useState } from 'react';
import { Icons } from './Icons.js';

export const LoginView = ({ onLoginSuccess, isModal = false, onClose }) => {
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [userRole, setUserRole] = useState('borrower'); // 'borrower' or 'partner'
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier || !password) {
      setMessage({ type: 'error', text: 'Please fill in all required credentials.' });
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMessage({ type: 'success', text: authMode === 'login' ? 'Login successful! Welcome back.' : 'Account created successfully!' });
      if (onLoginSuccess) {
        onLoginSuccess({ identifier, role: userRole });
      }
    }, 900);
  };

  const handleDemoFill = (role) => {
    setUserRole(role);
    if (role === 'borrower') {
      setIdentifier('demo.borrower@andromeda.com');
      setPassword('Password@123');
    } else {
      setIdentifier('partner.lender@banknetwork.com');
      setPassword('PartnerSecret@456');
    }
  };

  const content = (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-2xl relative">
      {/* Close button if in modal */}
      {isModal && onClose && (
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
        >
          <Icons.X className="w-5 h-5" />
        </button>
      )}

      {/* Header with Logo */}
      <div className="text-center mb-8">
        <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white mx-auto mb-3 shadow-md shadow-blue-600/20">
          <Icons.Logo className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 brand-font">
          {authMode === 'login' ? 'Welcome to Andromeda' : 'Create an Account'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          {authMode === 'login' ? 'Access your loan applications and real-time status' : 'Join thousands of borrowers and verified financial partners'}
        </p>
      </div>

      {/* Account Type Toggle */}
      <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-xl mb-6 text-xs font-bold">
        <button
          type="button"
          onClick={() => setUserRole('borrower')}
          className={`py-2 rounded-lg transition-all ${
            userRole === 'borrower' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Borrower Portal
        </button>
        <button
          type="button"
          onClick={() => setUserRole('partner')}
          className={`py-2 rounded-lg transition-all ${
            userRole === 'partner' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Partner / Lender
        </button>
      </div>

      {/* Alert Messages */}
      {message && (
        <div className={`p-3 rounded-xl mb-4 text-xs font-semibold ${
          message.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
        }`}>
          {message.text}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {authMode === 'register' && (
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. David Vance"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white"
            />
          </div>
        )}

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Email / Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Icons.Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="you@email.com or +1 555-0100"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Password <span className="text-red-500">*</span>
            </label>
            {authMode === 'login' && (
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("A reset link has been sent to your verified contact."); }} className="text-xs font-semibold text-blue-600 hover:underline">
                Forgot Password?
              </a>
            )}
          </div>
          <div className="relative">
            <Icons.Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl shadow-md shadow-blue-600/20 transition-all text-sm flex items-center justify-center gap-2 mt-2"
        >
          {isLoading ? (
            <span>Authenticating...</span>
          ) : (
            <>
              <span>{authMode === 'login' ? 'Login' : 'Create Account'}</span>
              <Icons.ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

      </form>

      {/* Quick Demo Switcher */}
      <div className="mt-6 pt-4 border-t border-slate-100 text-center">
        <span className="text-[11px] text-slate-400 block mb-2 font-medium">Quick Demo Autofill:</span>
        <div className="flex justify-center gap-2">
          <button
            type="button"
            onClick={() => handleDemoFill('borrower')}
            className="px-2.5 py-1 text-[11px] font-semibold bg-slate-100 hover:bg-blue-50 hover:text-blue-600 rounded-md text-slate-600 border border-slate-200"
          >
            Demo Borrower
          </button>
          <button
            type="button"
            onClick={() => handleDemoFill('partner')}
            className="px-2.5 py-1 text-[11px] font-semibold bg-slate-100 hover:bg-blue-50 hover:text-blue-600 rounded-md text-slate-600 border border-slate-200"
          >
            Demo Partner
          </button>
        </div>
      </div>

      {/* Switch auth mode */}
      <div className="mt-6 text-center text-xs text-slate-500">
        {authMode === 'login' ? (
          <p>
            Don't have an Andromeda account?{' '}
            <button
              onClick={() => { setAuthMode('register'); setMessage(null); }}
              className="font-bold text-blue-600 hover:underline"
            >
              Create Account
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <button
              onClick={() => { setAuthMode('login'); setMessage(null); }}
              className="font-bold text-blue-600 hover:underline"
            >
              Login
            </button>
          </p>
        )}
      </div>

    </div>
  );

  if (isModal) {
    return content;
  }

  return (
    <div className="bg-slate-50 min-h-screen py-16 flex items-center justify-center px-4">
      {content}
    </div>
  );
};
