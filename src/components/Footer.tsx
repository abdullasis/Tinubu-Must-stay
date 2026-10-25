import React from 'react';
import { Flag } from 'lucide-react';
import { isBackendConfigured, getLocalRegistrationsCount } from '../services/registrationService';

export const Footer: React.FC = () => {
  const isConnected = isBackendConfigured();
  const localCount = getLocalRegistrationsCount();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-apc-green bg-white p-1 flex items-center justify-center shrink-0">
                <span className="font-black text-apc-green text-xs">APC</span>
              </div>
              <span className="text-lg font-black text-white">TINUBU MUST STAY</span>
            </div>
            
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Official Grassroots Youth Support Movement for President Bola Ahmed Tinubu (GCFR). Operating under the patronage of Alhaji Ibrahim Kabir Masari across all 36 States, FCT, 774 LGAs, and 8,820 Wards.
            </p>
            
            <div className="flex items-center space-x-3 text-sm pt-1">
              <span className="text-xs font-semibold text-slate-500">Party Alignment:</span>
              <span className="px-2.5 py-1 bg-emerald-950 text-emerald-400 rounded text-xs font-bold border border-emerald-800 flex items-center gap-1.5">
                <Flag className="w-3.5 h-3.5 text-apc-blue" />
                <span>All Progressives Congress (APC)</span>
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-emerald-400 transition">Leadership Profiles</a></li>
              <li><a href="#patron" className="hover:text-emerald-400 transition">Grand Patron Desk</a></li>
              <li><a href="#mandate" className="hover:text-emerald-400 transition">Youth Mandate</a></li>
              <li><a href="#structure" className="hover:text-emerald-400 transition">Ward Directory</a></li>
              <li><a href="#register" className="hover:text-emerald-400 transition">Join Movement</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Administrative Scope</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li>States & FCT: <span className="text-white font-bold">37</span></li>
              <li>LGAs: <span className="text-white font-bold">774</span></li>
              <li>Political Wards: <span className="text-white font-bold">8,820</span></li>
              <li>
                Database Status:{' '}
                <span className={`font-bold ${isConnected ? 'text-amber-300' : 'text-slate-400'}`}>
                  {isConnected ? 'Live Sync Active' : (localCount > 0 ? `${localCount} Local Draft(s)` : 'Awaiting Connection')}
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Tinubu Must Stay Movement. All Rights Reserved. Prepared for the Advancement of Progress and National Development under APC.
          </p>
        </div>
      </div>
    </footer>
  );
};
