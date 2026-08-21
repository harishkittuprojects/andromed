// Supabase Integration for Andromeda Platform
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

export const SUPABASE_URL = 'https://rssmbnvjnjdbsgixivwz.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzc21ibnZqbmpkYnNnaXhpdnd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczMDA1MTIsImV4cCI6MjEwMjg3NjUxMn0.VPiTy3TCIACo2fe27DP7YMbUz44aVQei97hsVt66sso';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Save new customer lead / application to Supabase with local fallback
 */
export async function saveLead(leadData) {
  const newLead = {
    name: leadData.name || 'Anonymous',
    mobile: leadData.mobile || '',
    email: leadData.email || '',
    city: leadData.city || 'Nalgonda',
    loan_type: leadData.loan_type || leadData.selectedLoan || 'General Inquiry',
    amount: leadData.amount || 'N/A',
    employment_type: leadData.employment_type || 'Salaried',
    status: 'New',
    notes: leadData.notes || '',
    created_at: new Date().toISOString()
  };

  // Always save locally first for reliability
  try {
    const localLeads = JSON.parse(localStorage.getItem('andromeda_leads') || '[]');
    localLeads.unshift({ ...newLead, id: Date.now() });
    localStorage.setItem('andromeda_leads', JSON.stringify(localLeads));
  } catch (e) {
    console.warn('Local lead storage error:', e);
  }

  // Insert to Supabase table
  try {
    const { data, error } = await supabase.from('leads').insert([newLead]).select();
    if (error) throw error;
    return { success: true, data: data[0] };
  } catch (err) {
    console.warn('Supabase lead insert notice:', err.message);
    return { success: true, isLocalFallback: true, error: err.message };
  }
}

/**
 * Fetch all leads from Supabase and merge with local leads
 */
export async function fetchAllLeads() {
  let remoteLeads = [];
  try {
    const { data, error } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
    if (!error && data) {
      remoteLeads = data;
    }
  } catch (err) {
    console.warn('Supabase fetch notice:', err.message);
  }

  let localLeads = [];
  try {
    localLeads = JSON.parse(localStorage.getItem('andromeda_leads') || '[]');
  } catch (e) {}

  // Combine and deduplicate
  const allMap = new Map();
  remoteLeads.forEach(l => allMap.set(l.id || (l.mobile + l.created_at), l));
  localLeads.forEach(l => {
    const key = l.id || (l.mobile + l.created_at);
    if (!allMap.has(key)) allMap.set(key, l);
  });

  return Array.from(allMap.values());
}
