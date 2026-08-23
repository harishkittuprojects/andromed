// Centralized Environment & Credentials Loader for Andromeda Platform
// Automatically reads from Vite (import.meta.env), Node/Webpack (process.env), or window.__ENV__

const getEnv = (key, fallback = '') => {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
    return import.meta.env[key];
  }
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key];
  }
  if (typeof window !== 'undefined' && window.__ENV__ && window.__ENV__[key]) {
    return window.__ENV__[key];
  }
  return fallback;
};

export const ENV = {
  // Supabase
  SUPABASE_URL: getEnv('VITE_SUPABASE_URL', getEnv('SUPABASE_URL', 'https://rssmbnvjnjdbsgixivwz.supabase.co')),
  SUPABASE_ANON_KEY: getEnv('VITE_SUPABASE_ANON_KEY', getEnv('SUPABASE_ANON_KEY', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzc21ibnZqbmpkYnNnaXhpdnd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczMDA1MTIsImV4cCI6MjEwMjg3NjUxMn0.VPiTy3TCIACo2fe27DP7YMbUz44aVQei97hsVt66sso')),

  // Cloudinary
  CLOUDINARY_CLOUD_NAME: getEnv('VITE_CLOUDINARY_CLOUD_NAME', getEnv('CLOUDINARY_CLOUD_NAME', 'cla8h056')),
  CLOUDINARY_API_KEY: getEnv('VITE_CLOUDINARY_API_KEY', getEnv('CLOUDINARY_API_KEY', '898375328312285')),
  CLOUDINARY_API_SECRET: getEnv('VITE_CLOUDINARY_API_SECRET', getEnv('CLOUDINARY_API_SECRET', 'rY_h02poikyEMlWLKu_ePx4btTg')),
  CLOUDINARY_UPLOAD_PRESET: getEnv('VITE_CLOUDINARY_UPLOAD_PRESET', getEnv('CLOUDINARY_UPLOAD_PRESET', 'unsigned_uploads')),

  // Admin
  ADMIN_EMAIL: getEnv('ADMIN_EMAIL', 'admin@andromeda.com'),
  ADMIN_PASSWORD: getEnv('ADMIN_PASSWORD', 'andromeda@2026')
};
