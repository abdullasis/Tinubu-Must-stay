import React, { useState } from 'react';
import { UserPlus, CheckCircle2, AlertCircle, ShieldCheck, Printer, RefreshCw } from 'lucide-react';
import { NIGERIA_STATES_AND_LGAS } from '../data/nigeriaData';
import {
  submitRegistration,
  validateNigerianPhone,
  RegistrationPayload
} from '../services/registrationService';

const APC_LOGO_URL = 'https://i.ibb.co/kgtLKFR3/APC-Logo.jpg';

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

  const [registeredData, setRegisteredData] = useState<{
    registrationId: string;
    fullName: string;
    phone: string;
    state: string;
    lga: string;
    ward: string;
    timestamp: string;
  } | null>(null);

  const availableLgas = state ? NIGERIA_STATES_AND_LGAS[state] || [] : [];

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
    setLga('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!privacyAccepted) {
      setErrorMsg('You must review and accept the Privacy Notice & Consent before submitting.');
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

    const res = await submitRegistration(payload);

    setLoading(false);

    if (res.success && res.registrationId) {
      setRegisteredData({
        registrationId: res.registrationId,
        fullName: fullName.trim(),
        phone: phone.trim(),
        state,
        lga,
        ward,
        timestamp: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      });
    } else {
      setErrorMsg(res.error || 'Unable to complete registration. Please check details and try again.');
    }
  };

  const resetForm = () => {
    setRegisteredData(null);
    setFullName('');
    setPhone('');
    setState('');
    setLga('');
    setWard('');
    setEndorsePledge(false);
    setErrorMsg(null);
  };

  const handlePrint = () => {
    window.print();
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

          {!registeredData ? (
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-6">
              
              {/* Error Banner */}
              {errorMsg && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-1">Validation Notice</span>
                    <p>{errorMsg}</p>
                  </div>
                </div>
              )}

              {/* Full Name & Phone */}
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
                  Your personal details (Name, Phone, Location) are collected solely for APC Youth Strategic Vanguard mobilization.
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
                <span>{loading ? 'Registering...' : 'CONFIRM MEMBERSHIP & PLEDGE VOTE'}</span>
              </button>

            </form>
          ) : (
            /* Authentic Digital Membership Pass View */
            <div id="form-success-msg" className="p-8 sm:p-10 space-y-6">
              
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-emerald-100 text-apc-green rounded-full flex items-center justify-center mx-auto text-3xl shadow-sm">
                  <CheckCircle2 className="w-10 h-10 text-apc-green" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Registration Confirmed & Pledge Recorded!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you for standing with APC and President Asiwaju Bola Ahmed Tinubu. Your official digital membership record has been generated below.
                </p>
              </div>

              {/* Digital Membership Card */}
              <div className="max-w-xl mx-auto bg-slate-900 text-white rounded-2xl overflow-hidden border-2 border-apc-green shadow-2xl relative">
                <div className="apc-flag-stripe h-2 w-full" />
                
                <div className="p-6 space-y-6">
                  {/* Card Header */}
                  <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white p-1 border border-apc-green shrink-0 flex items-center justify-center">
                        <img src={APC_LOGO_URL} alt="APC Logo" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-emerald-400 uppercase tracking-widest">
                          APC YOUTH STRATEGIC VANGUARD
                        </span>
                        <h4 className="text-lg font-black text-white leading-tight">
                          OFFICIAL MEMBERSHIP PASS
                        </h4>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold rounded uppercase tracking-wider border border-emerald-500/30">
                      VERIFIED ENDORSER
                    </span>
                  </div>

                  {/* Card Body Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Full Name</span>
                      <span className="text-sm font-bold text-white block mt-0.5">{registeredData.fullName}</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Phone Number</span>
                      <span className="text-sm font-mono font-bold text-amber-300 block mt-0.5">{registeredData.phone}</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Location</span>
                      <span className="text-xs font-medium text-slate-200 block mt-0.5">
                        {registeredData.ward}, {registeredData.lga} LGA
                      </span>
                      <span className="text-xs font-semibold text-emerald-400 block">{registeredData.state} State</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Date Registered</span>
                      <span className="text-xs font-mono text-slate-300 block mt-0.5">{registeredData.timestamp}</span>
                    </div>
                  </div>

                  {/* Card Reference Banner */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Registration ID</span>
                      <span className="text-base font-mono font-black text-amber-300 tracking-wider">
                        {registeredData.registrationId}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-emerald-400 font-semibold block">STATUS: ACTIVE</span>
                      <span className="text-[10px] text-slate-400 font-mono">2027 ENDORSED</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/80 px-6 py-2.5 text-[10px] text-slate-400 text-center border-t border-slate-800">
                  Official Record of Tinubu Must Stay Youth Support Movement · All Progressives Congress
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
                <button
                  onClick={handlePrint}
                  className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition flex items-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Save Membership Slip</span>
                </button>

                <button
                  onClick={resetForm}
                  className="px-5 py-2.5 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold hover:bg-slate-200 transition flex items-center gap-2 cursor-pointer border border-slate-300"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Register Another Member</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
};
