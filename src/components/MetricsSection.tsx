import React from 'react';
import { MapPin, Building2, GitFork, Users, Database } from 'lucide-react';
import { isBackendConfigured, getLocalRegistrationsCount } from '../services/registrationService';

export const MetricsSection: React.FC = () => {
  const isConnected = isBackendConfigured();
  const localCount = getLocalRegistrationsCount();

  return (
    <section className="py-12 bg-slate-900 text-white relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Database className="w-3.5 h-3.5" />
            <span>NATIONWIDE ADMINISTRATIVE STRUCTURE & METRICS</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Consolidated Grassroots Scope
          </h2>
          {!isConnected && (
            <p className="text-xs text-amber-300 mt-2 bg-amber-950/60 border border-amber-800/60 py-1 px-3 rounded-full inline-block">
              Note: Database backend (Supabase) unconfigured. Simulated counters have been disabled per strict verification policy.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          
          {/* Stat 1: States */}
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/60 shadow-inner">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl">
              <MapPin className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">37</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">States & FCT</div>
            <div className="text-[10px] text-emerald-400 font-mono mt-2 uppercase tracking-wide">
              100% NATIONWIDE ADMINISTRATIVE SCOPE
            </div>
          </div>

          {/* Stat 2: LGAs */}
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/60 shadow-inner">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-500/20 text-apc-blue flex items-center justify-center text-xl">
              <Building2 className="w-6 h-6 text-apc-blue" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">774</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Local Governments</div>
            <div className="text-[10px] text-apc-blue font-mono mt-2 uppercase tracking-wide">
              CONSTITUTIONAL LGA UNITS
            </div>
          </div>

          {/* Stat 3: Wards */}
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/60 shadow-inner">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl">
              <GitFork className="w-6 h-6 text-amber-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">8,820</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Political Wards</div>
            <div className="text-[10px] text-amber-400 font-mono mt-2 uppercase tracking-wide">
              ELECTORAL WARD UNITS
            </div>
          </div>

          {/* Stat 4: Live Members */}
          <div className="bg-gradient-to-br from-emerald-950 to-slate-800 p-6 rounded-2xl border border-emerald-500/40 shadow-xl relative overflow-hidden">
            <div className="absolute top-2 right-2 flex items-center space-x-1">
              <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="text-[10px] text-emerald-300 font-bold uppercase">
                {isConnected ? 'LIVE SYNC' : 'OFFLINE MODE'}
              </span>
            </div>
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-xl">
              <Users className="w-6 h-6 text-emerald-300" />
            </div>
            
            <div className="text-2xl sm:text-3xl font-black text-amber-300 tracking-tight font-mono">
              {isConnected ? 'Connected' : (localCount > 0 ? `${localCount} Local Draft(s)` : 'Awaiting Data')}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
              Verified Registered Members
            </div>
            <div className="text-[10px] text-slate-400 font-mono mt-2">
              {isConnected ? 'Live Database Query Active' : 'Requires Supabase Backend Connection'}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
