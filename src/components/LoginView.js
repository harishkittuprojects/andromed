import React, { useState } from 'react';
import { Icons } from './Icons.js';

export const LoginView = ({ onLoginSuccess, isModal = false, onClose, onNavigateRegister }) => {
  const [partnerType, setPartnerType] = useState('dsa'); // 'dsa' or 'connector'
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleTabChange = (type) => {
    setPartnerType(type);
    setCode('');
    setMessage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code || !password) {
      setMessage({ type: 'error', text: `Please enter your ${partnerType === 'dsa' ? 'DSA Code' : 'Connector Code'} and password.` });
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMessage({ type: 'success', text: `Login successful! Welcome to the ${partnerType === 'dsa' ? 'DSA' : 'Connector'} Portal.` });
      if (onLoginSuccess) {
        onLoginSuccess({ identifier: code, role: partnerType });
      }
    }, 800);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMessage({ type: 'success', text: 'Google authentication verified! Accessing portal...' });
      if (onLoginSuccess) {
        onLoginSuccess({ identifier: 'partner.google@andromeda.in', role: partnerType });
      }
    }, 700);
  };

  const content = (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      
      {/* ========================================================================= */}
      {/* 1. TOP EXPLAINER SECTION: WHAT IS DSA / CONNECTOR CODE? */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
        
        {/* Close Button if inside Modal */}
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors z-20"
          >
            <Icons.X className="w-5 h-5" />
          </button>
        )}



      {/* ========================================================================= */}
      {/* 2. BOTTOM SECTION: SPLIT LOGIN CARD */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
        
        {/* Left Side: Dark Blue Portal Presentation */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#0A2540] via-[#0B3A75] to-[#071E3D] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Brand Logo */}
          <div className="relative z-10 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <Icons.Logo className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white brand-font block">
                  ANDROMEDA
                </span>
                <span className="text-[10px] font-bold text-blue-200 tracking-wider uppercase">
                  Loan Distribution Platform
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white brand-font">
                {partnerType === 'dsa' ? 'DSA Portal' : 'Connector Portal'}
              </h2>
              <p className="text-xs sm:text-sm text-blue-200 mt-1">
                One Platform. Many Possibilities.
              </p>
            </div>

            {/* 3 Portal Feature Cards */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3.5 p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-blue-500/30 text-cyan-300 flex items-center justify-center shrink-0">
                  <Icons.Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Manage Leads</h4>
                  <p className="text-[11px] text-blue-200">Track and manage your leads in one place</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-blue-500/30 text-cyan-300 flex items-center justify-center shrink-0">
                  <Icons.FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Track Applications</h4>
                  <p className="text-[11px] text-blue-200">Real-time status of all your loan applications</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-blue-500/30 text-cyan-300 flex items-center justify-center shrink-0">
                  <Icons.TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">View Earnings</h4>
                  <p className="text-[11px] text-blue-200">Check your commissions and performance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Cityscape vector graphic / badge */}
          <div className="pt-8 relative z-10">
            <div className="flex items-center justify-between text-[11px] text-blue-300/80 border-t border-white/10 pt-4">
              <span>Direct Banker API Login</span>
              <span>256-bit Encrypted</span>
            </div>
          </div>

        </div>

        {/* Right Side: Clean Login Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          
          <div className="max-w-md w-full mx-auto space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-2xl font-extrabold text-slate-900 brand-font">
                  {partnerType === 'dsa' ? 'DSA Login' : 'Connector Login'}
                </h3>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                  {partnerType === 'dsa' ? 'DSA Channel' : 'Connector'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500">
                Login to your account to continue
              </p>
            </div>

            {/* Alert Message */}
            {message && (
              <div className={`p-3.5 rounded-xl text-xs font-semibold ${
                message.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              }`}>
                {message.text}
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* DSA / Connector Code Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {partnerType === 'dsa' ? 'DSA Code' : 'Connector Code'}
                </label>
                <div className="relative">
                  <Icons.User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder={partnerType === 'dsa' ? 'Enter DSA Code (provided by Admin)' : 'Enter Connector Code (provided by Admin)'}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors font-medium uppercase placeholder:normal-case"
                  />
                </div>
                <p className="text-[11px] text-slate-500 font-semibold mt-1.5 flex items-center gap-1">
                  <span>🔒</span>
                  <span>Your unique code is issued and authorized by the admin after joining.</span>
                </p>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Icons.Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <Icons.EyeOff className="w-4 h-4" /> : <Icons.Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password Row */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center space-x-2 cursor-pointer select-none text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Remember me</span>
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Password reset instructions have been dispatched for ${code || 'your account'}. Please check your registered mobile and email.`);
                  }}
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-[#0B4DA2] hover:bg-[#083a7c] active:bg-blue-900 text-white font-bold rounded-xl shadow-md shadow-blue-600/20 transition-all text-sm flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span>Authenticating...</span>
                ) : (
                  <span>Login</span>
                )}
              </button>

            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-4">
              <div className="border-t border-slate-200 w-full"></div>
              <span className="bg-white px-3 text-xs text-slate-400 font-medium absolute uppercase">or</span>
            </div>

            {/* Google Login Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full py-2.5 px-4 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2.5 shadow-2xs"
            >
              {/* Multicolored Google 'G' Icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Login with Google</span>
            </button>

            {/* Register Link */}
            <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
              New {partnerType === 'dsa' ? 'DSA' : 'Connector'}?{' '}
              <button
                type="button"
                onClick={() => {
                  if (onNavigateRegister) onNavigateRegister();
                  else if (onClose) onClose();
                }}
                className="font-bold text-blue-600 hover:underline"
              >
                Register Now
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );

  if (isModal) {
    return (
      <div className="w-full max-w-5xl mx-auto p-2">
        {content}
      </div>
    );
  }

  return (
    <div className="bg-[#F0F4F8] min-h-screen py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {content}
    </div>
  );
};
