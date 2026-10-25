import React, { useState } from 'react';
import { Award, Star, Shield, UserCheck, ArrowRight, Settings } from 'lucide-react';

const TINUBU_IMAGE_URL = 'https://i.ibb.co/HDm5cqFH/Bola-Ahmad-Tinubu.jpg';
const MASARI_IMAGE_URL = 'https://i.ibb.co/RkvRr8TW/Ibrahim-Masari.jpg';
const APC_LOGO_URL = 'https://i.ibb.co/kgtLKFR3/APC-Logo.jpg';

export const HeroSection: React.FC = () => {
  const [tinubuError, setTinubuError] = useState(false);
  const [masariError, setMasariError] = useState(false);
  const [apcLogoError, setApcLogoError] = useState(false);

  return (
    <section id="hero" className="hero-pattern relative text-white pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Header Banner */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-md">
            <Settings className="w-4 h-4 text-amber-400" />
            <span>Consolidated Grassroots Youth Alliance for APC</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
            TINUBU MUST STAY
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Nigerian Youths Stand Firmly for Continuity, Renewal, and Sustainable Development under the Leadership of His Excellency <span className="text-emerald-400 font-semibold">Bola Ahmed Tinubu (GCFR)</span>.
          </p>
        </div>

        {/* Leadership Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* CARD 1: PRESIDENT BOLA AHMED TINUBU (GCFR) */}
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl text-slate-900 flex flex-col transform transition hover:scale-[1.01]">
            <div className="bg-gradient-to-r from-emerald-800 to-apc-green p-4 text-white text-center border-b border-emerald-600/30">
              <span className="text-xs font-extrabold tracking-widest text-amber-300 uppercase">
                President & Commander-in-Chief
              </span>
              <h2 className="text-xl font-bold">His Excellency</h2>
            </div>
            
            <div className="p-6 flex flex-col md:flex-row items-center gap-6 flex-grow bg-white">
              <div className="relative group shrink-0">
                <div className="w-48 h-56 sm:w-52 sm:h-64 rounded-xl overflow-hidden border-4 border-apc-green shadow-xl bg-slate-100 flex items-center justify-center">
                  {!tinubuError ? (
                    <img
                      src={TINUBU_IMAGE_URL}
                      alt="His Excellency President Bola Ahmed Tinubu (GCFR)"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                      onError={() => setTinubuError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-b from-emerald-800 to-emerald-950 flex flex-col items-center justify-center p-4 text-center text-white">
                      <Award className="w-12 h-12 text-amber-400 mb-2" />
                      <span className="text-xs font-bold">President Bola Ahmed Tinubu (GCFR)</span>
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-3 -right-3 bg-amber-400 text-slate-900 p-2 rounded-full shadow-lg border-2 border-white">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <div className="flex-grow text-center md:text-left space-y-3">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-apc-green font-bold text-xs rounded-full">
                  GRAND COMMANDER OF THE FEDERAL REPUBLIC
                </span>
                <h3 className="text-2xl font-black text-slate-900 leading-snug">
                  ASIWAJU BOLA AHMED TINUBU <span className="text-sm font-semibold text-slate-500">(GCFR)</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  President, Commander-in-Chief of the Armed Forces, Federal Republic of Nigeria. Champion of the Renewed Hope Agenda and Economic Transformation.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5 text-apc-green" /> 2nd Term Youth Endorsement
                  </span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5 text-apc-green" /> Renewed Hope
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border-t border-slate-100 px-6 py-3 flex justify-between items-center text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-apc-blue" /> National Leadership
              </span>
              <span className="text-apc-green font-bold">2027 Mobilization Ready</span>
            </div>
          </div>

          {/* CARD 2: ALHAJI IBRAHIM KABIR MASARI (GRAND PATRON) */}
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl text-slate-900 flex flex-col transform transition hover:scale-[1.01]">
            <div className="bg-gradient-to-r from-apc-blue to-cyan-700 p-4 text-white text-center border-b border-cyan-500/30">
              <span className="text-xs font-extrabold tracking-widest text-amber-300 uppercase">
                Movement Grand Patron
              </span>
              <h2 className="text-xl font-bold">Special Adviser to the President</h2>
            </div>

            <div className="p-6 flex flex-col md:flex-row items-center gap-6 flex-grow bg-white">
              <div className="relative group shrink-0">
                <div className="w-48 h-56 sm:w-52 sm:h-64 rounded-xl overflow-hidden border-4 border-apc-blue shadow-xl bg-slate-100 flex items-center justify-center">
                  {!masariError ? (
                    <img
                      src={MASARI_IMAGE_URL}
                      alt="Alhaji Ibrahim Kabir Masari"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                      onError={() => setMasariError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-b from-cyan-800 to-slate-900 flex flex-col items-center justify-center p-4 text-center text-white">
                      <Star className="w-12 h-12 text-amber-400 mb-2" />
                      <span className="text-xs font-bold">Alhaji Ibrahim Kabir Masari</span>
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-3 -right-3 bg-apc-blue text-white p-2 rounded-full shadow-lg border-2 border-white">
                  <Star className="w-5 h-5 text-amber-300 fill-amber-300" />
                </div>
              </div>

              <div className="flex-grow text-center md:text-left space-y-3">
                <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 font-bold text-xs rounded-full">
                  GRAND PATRON OF THE MOVEMENT
                </span>
                <h3 className="text-2xl font-black text-slate-900 leading-snug">
                  ALHAJI IBRAHIM KABIR MASARI
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Special Adviser to the President on Political and Other Matters. Visionary Leader and National Anchor for Grassroots Youth Integration.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5 text-apc-blue" /> Political Mentorship
                  </span>
                  <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5 text-apc-blue" /> Grassroots Mobilizer
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border-t border-slate-100 px-6 py-3 flex justify-between items-center text-xs font-semibold text-slate-500">
              <span>Patronage & Oversight</span>
              <span className="text-apc-blue font-bold">Patron, Tinubu Must Stay</span>
            </div>
          </div>

        </div>

        {/* APC Loyalty Pledge Banner */}
        <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 max-w-4xl mx-auto text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-16 h-16 rounded-xl bg-white p-2 shrink-0 flex items-center justify-center shadow-lg">
              {!apcLogoError ? (
                <img
                  src={APC_LOGO_URL}
                  alt="APC Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                  onError={() => setApcLogoError(true)}
                />
              ) : (
                <div className="w-full h-full bg-apc-red text-white font-black flex items-center justify-center text-xs rounded">
                  APC
                </div>
              )}
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Unwavering Loyalty to All Progressives Congress (APC)</h4>
              <p className="text-xs text-slate-300">
                The youth of Nigeria are united, prepared, and fully resolved to re-elect President Asiwaju Bola Ahmed Tinubu for a second term.
              </p>
            </div>
          </div>
          <a
            href="#register"
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3 rounded-xl transition text-sm shrink-0 shadow-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
