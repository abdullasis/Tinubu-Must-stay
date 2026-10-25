import React, { useState } from 'react';
import { UserPlus, CheckCircle2, AlertCircle, Database, ShieldCheck, Lock, Info } from 'lucide-react';
import { NIGERIA_STATES_AND_LGAS } from '../data/nigeriaData';
import {
  submitRegistration,
  isBackendConfigured,
  validateNigerianPhone,
  RegistrationPayload
} from '../services/registrationService';

export const RegistrationSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [lga, setLga] = useState('');
  const [ward, setWard] = useState('');
  const [endorsePledge, setEndorsePledge] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [allowLocalDraft, setAllowLocalDraft] = useState(false);

  const [successResult, setSuccessResult] = useState<{
    registrationId: string;
    savedLocally: boolean;
  } | null>(null);

  const isConnected = isBackendConfigured();
  const availableLgas = state ? NIGERIA_STATES_AND_LGAS[state] || [] : [];

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
    setLga('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Form client-side checks
    if (!privacyAccepted) {
      setErrorMsg('You must review and accept the Privacy Notice & Consent flow before submitting personal details.');
      return;
    }

    const phoneCheck = validateNigerianPhone(phone);
    if (!phoneCheck.isValid) {
      setErrorMsg(phoneCheck.message || 'Invalid Nigerian phone number.');
      return;
    }

    setLoading(true);

    const payload: RegistrationPayload = {
      fullName,
      phone,
      state,
      lga,
      ward,
      endorsePledge
    };

    const res = await submitRegistration(payload, allowLocalDraft);

    setLoading(false);

    if (res.success && res.registrationId) {
      setSuccessResult({
        registrationId: res.registrationId,
        savedLocally: Boolean(res.savedLocally)
      });
    } else {
      setErrorMsg(res.error || 'Submission failed.');
    }
  };

  const resetForm = () => {
    setSuccessResult(null);
    setFullName('');
    setPhone('');
    setState('');
    setLga('');
    setWard('');
    setEndorsePledge(false);
    setErrorMsg(null);
  };

  return (
    <section id="register" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          
          {/* Form Header */}
          <div className="bg-gradient-to-r from-apc-green via-emerald-800 to-slate-900 p-8 text-white text-center relative">
            <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              APC Youth Movement
            </div>
            <h2 className="text-3xl font-black">Register & Join APC Youth Vanguard</h2>
            <p className="text-emerald-100 text-sm mt-2 max-w-xl mx-auto">
              Stand to be counted as part of the youth majority dedicated to democratic progress and second-term continuity under President Bola Ahmed Tinubu.
            </p>
          </div>

          {/* Backend Status Notice */}
          <div className={`p-4 text-xs flex items-start gap-3 border-b ${isConnected ? 'bg-emerald-50 text-emerald-900 border-emerald-200' : 'bg-amber-50 text-amber-900 border-amber-200'}`}>
            <Database className={`w-4 h-4 shrink-0 mt-0.5 ${isConnected ? 'text-apc-green' : 'text-amber-600'}`} />
            <div>
              <span className="font-bold uppercase tracking-wider">
                Backend Status: {isConnected ? 'Supabase Live Connected' : 'Server Unconfigured'}
              </span>
              <p className="mt-0.5 text-[11px] text-slate-700">
                {isConnected
                  ? 'Registrations will be verified and stored directly in your secure database.'
                  : 'Supabase URL & Anon key are not yet configured. Per strict guidelines, no fake server registrations will be issued until a real backend is connected.'}
              </p>
            </div>
          </div>

          {!successResult ? (
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-6">
              
              {/* Validation Error Banner */}
              {errorMsg && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-bold block mb-1">Registration Error</span>
                    <p>{errorMsg}</p>
                    {!isConnected && !allowLocalDraft && errorMsg.includes('not yet connected') && (
                      <div className="mt-3 pt-2 border-t border-rose-200 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setAllowLocalDraft(true);
                            setErrorMsg(null);
                          }}
                          className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition cursor-pointer"
                        >
                          Enable Local Staging Draft Mode
                        </button>
                        <span className="text-[10px] text-slate-500">
                          (Saves to local browser storage for offline UI demo)
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full-name" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Full Name *
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ibrahim Abubakar"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-apc-green focus:outline-none text-sm transition"
                  />
                </div>

                <div>
                  <label htmlFor="phone-number" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Phone Number (Nigerian Format) *
                  </label>
                  <input
                    id="phone-number"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 08012345678 or +2348012345678"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-apc-green focus:outline-none text-sm transition"
                  />
                </div>
              </div>

              {/* State, LGA, Ward */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="reg-state" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    State *
                  </label>
                  <select
                    id="reg-state"
                    required
                    value={state}
                    onChange={handleStateChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-apc-green focus:outline-none text-sm transition cursor-pointer"
                  >
                    <option value="">Select State</option>
                    {Object.keys(NIGERIA_STATES_AND_LGAS).sort().map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="reg-lga" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    LGA *
                  </label>
                  <select
                    id="reg-lga"
                    required
                    value={lga}
                    onChange={(e) => setLga(e.target.value)}
                    disabled={!state}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-apc-green focus:outline-none text-sm transition disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <option value="">{state ? 'Select LGA' : 'Select State First'}</option>
                    {availableLgas.map((lg) => (
                      <option key={lg} value={lg}>
                        {lg}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="reg-ward" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Ward *
                  </label>
                  <input
                    id="reg-ward"
                    type="text"
                    required
                    value={ward}
                    onChange={(e) => setWard(e.target.value)}
                    placeholder="Enter Ward Name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-apc-green focus:outline-none text-sm transition"
                  />
                </div>
              </div>

              {/* Endorsement Pledge */}
              <div id="endorse" className="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-200 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="endorse-check"
                  required
                  checked={endorsePledge}
                  onChange={(e) => setEndorsePledge(e.target.checked)}
                  className="mt-1 w-5 h-5 text-apc-green rounded focus:ring-apc-green border-slate-300 cursor-pointer shrink-0"
                />
                <label htmlFor="endorse-check" className="text-xs text-slate-700 leading-relaxed font-medium cursor-pointer">
                  I solemnly pledge as a young Nigerian citizen to endorse, support, and vote for His Excellency, <strong className="text-slate-900">President Asiwaju Bola Ahmed Tinubu (GCFR)</strong> under the banner of the <strong className="text-apc-green">All Progressives Congress (APC)</strong> for a second term.
                </label>
              </div>

              {/* Privacy Notice & Consent Flow */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-apc-green" />
                  <span>Privacy Notice & Data Protection Consent</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Your personal details (Name, Phone, Location) are collected solely for APC Youth Strategic Vanguard mobilization. We respect your data privacy and do not sell or expose your information to unauthorized third parties.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="privacy-check"
                    required
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="w-4 h-4 text-apc-green rounded focus:ring-apc-green border-slate-300 cursor-pointer shrink-0"
                  />
                  <label htmlFor="privacy-check" className="text-xs text-slate-700 font-semibold cursor-pointer">
                    I agree to the privacy notice and consent to data processing for APC Youth Vanguard.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-apc-green to-emerald-700 hover:from-emerald-700 hover:to-apc-green disabled:opacity-60 text-white font-extrabold text-base py-4 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <UserPlus className="w-5 h-5" />
                <span>{loading ? 'Processing...' : 'CONFIRM MEMBERSHIP & PLEDGE VOTE'}</span>
              </button>

            </form>
          ) : (
            /* Success Confirmation Box */
            <div id="form-success-msg" className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-apc-green rounded-full flex items-center justify-center mx-auto text-3xl">
                <CheckCircle2 className="w-10 h-10 text-apc-green" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                {successResult.savedLocally ? 'Local Staging Draft Saved!' : 'Pledge Received & Registered!'}
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{fullName}</strong>, for standing with APC and President Bola Ahmed Tinubu.
                {successResult.savedLocally ? (
                  <span className="block text-amber-700 font-medium text-xs mt-2 bg-amber-50 p-2 rounded border border-amber-200">
                    Record saved to local browser staging draft. To save to a central live database, configure Supabase credentials.
                  </span>
                ) : (
                  ' Your record has been successfully written to the verified database.'
                )}
              </p>
              
              <div className="p-4 bg-slate-100 rounded-xl font-mono text-xs text-slate-700 inline-block border border-slate-200">
                REGISTRATION REFERENCE:{' '}
                <span className="font-bold text-apc-green">{successResult.registrationId}</span>
              </div>

              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition cursor-pointer"
                >
                  Register Another Member
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
