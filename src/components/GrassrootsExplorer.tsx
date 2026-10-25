import React, { useState } from 'react';
import { Network, Search, CheckCircle2, Info } from 'lucide-react';
import { NIGERIA_STATES_AND_LGAS } from '../data/nigeriaData';
import { getLocationMetrics, LocationMetrics } from '../data/grassrootsData';

export const GrassrootsExplorer: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedLga, setSelectedLga] = useState<string>('');
  const [wardFilter, setWardFilter] = useState<string>('');
  const [verifiedResult, setVerifiedResult] = useState<{
    state: string;
    lga: string;
    ward?: string;
    metrics: LocationMetrics;
  } | null>(null);

  const availableLgas = selectedState ? NIGERIA_STATES_AND_LGAS[selectedState] || [] : [];

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedLga('');
    setWardFilter('');
    setVerifiedResult(null);
  };

  const handleLgaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lga = e.target.value;
    setSelectedLga(lga);
    setVerifiedResult(null);
  };

  const handleVerify = () => {
    if (!selectedState || !selectedLga) {
      setVerifiedResult(null);
      return;
    }

    const metrics = getLocationMetrics(selectedState, selectedLga);

    setVerifiedResult({
      state: selectedState,
      lga: selectedLga,
      ward: wardFilter.trim() || undefined,
      metrics
    });
  };

  return (
    <section id="structure" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 w-max mx-auto">
            <Network className="w-3.5 h-3.5" />
            <span>Grassroots Footprint</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
            37 States, 774 LGAs, 8,820 Wards
          </h2>
          <p className="text-slate-400 mt-2 text-sm">
            Explore our structured organizational presence down to your local polling unit.
          </p>
        </div>

        {/* Explorer Container */}
        <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            
            {/* State Select */}
            <div>
              <label htmlFor="state-select" className="block text-xs font-bold text-slate-300 uppercase mb-2">
                Select State *
              </label>
              <select
                id="state-select"
                value={selectedState}
                onChange={handleStateChange}
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-apc-green focus:ring-1 focus:ring-apc-green cursor-pointer transition"
              >
                <option value="">-- Choose State --</option>
                {Object.keys(NIGERIA_STATES_AND_LGAS).sort().map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* LGA Select */}
            <div>
              <label htmlFor="lga-select" className="block text-xs font-bold text-slate-300 uppercase mb-2">
                Select Local Government (LGA) *
              </label>
              <select
                id="lga-select"
                value={selectedLga}
                onChange={handleLgaChange}
                disabled={!selectedState}
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-apc-green focus:ring-1 focus:ring-apc-green disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition"
              >
                <option value="">
                  {selectedState ? '-- Choose LGA --' : '-- Select State First --'}
                </option>
                {availableLgas.map((lga) => (
                  <option key={lga} value={lga}>
                    {lga}
                  </option>
                ))}
              </select>
            </div>

            {/* Ward Verification Button */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-2">
                Ward Mobilization Status
              </label>
              <button
                id="search-ward-btn"
                onClick={handleVerify}
                disabled={!selectedState || !selectedLga}
                className="w-full bg-apc-green hover:bg-emerald-600 disabled:bg-slate-700 disabled:text-slate-400 text-white font-bold rounded-xl py-3 text-sm transition flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <Search className="w-4 h-4" />
                <span>Verify Structure</span>
              </button>
            </div>

          </div>

          {/* Results Area */}
          <div id="structure-result" className="bg-slate-950/80 rounded-xl p-6 border border-slate-800 text-center">
            {!verifiedResult ? (
              <div className="py-6 space-y-2">
                <Network className="w-8 h-8 text-slate-600 mx-auto" />
                <p className="text-slate-400 text-sm">
                  Select a State and LGA above to view the active ward commanders and youth voting readiness.
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-left">
                
                {/* Result Banner Header */}
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <span className="text-[10px] sm:text-xs text-slate-400 font-mono font-bold uppercase tracking-wider">
                    STRUCTURE VERIFIED
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] rounded font-mono font-bold uppercase flex items-center gap-1 border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>ACTIVE WARD COMMAND</span>
                  </span>
                </div>

                {/* Location Title */}
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  {verifiedResult.lga} LGA, {verifiedResult.state} State
                  {verifiedResult.ward && <span className="text-slate-400 font-normal text-sm sm:text-base ml-2">({verifiedResult.ward})</span>}
                </h4>

                {/* Dynamic Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  
                  {/* Card 1: Wards Activated */}
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                    <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                      Wards Activated
                    </div>
                    <div className="text-base font-bold text-amber-300 mt-1 font-mono">
                      {verifiedResult.metrics.isConfigured && verifiedResult.metrics.wardsActivated > 0
                        ? `${verifiedResult.metrics.wardsActivated} Wards`
                        : 'Data not yet available'}
                    </div>
                  </div>

                  {/* Card 2: Mobilized Youths */}
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                    <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                      Mobilized Youths
                    </div>
                    <div className="text-base font-bold text-emerald-400 mt-1 font-mono">
                      {verifiedResult.metrics.isConfigured && verifiedResult.metrics.mobilizedYouths > 0
                        ? `${verifiedResult.metrics.mobilizedYouths.toLocaleString()} Voters`
                        : 'Data not yet available'}
                    </div>
                  </div>

                  {/* Card 3: APC Status - Always 100% Prepared */}
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                    <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                      APC Status
                    </div>
                    <div className="text-base font-bold text-apc-blue mt-1 font-mono">
                      100% Prepared
                    </div>
                  </div>

                </div>

                {/* Discreet Backend Notice */}
                <div className="pt-2 border-t border-slate-900 flex items-center gap-2 text-xs text-slate-400">
                  <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <p className="leading-relaxed">
                    Grassroots figures are based on the currently configured location data. Live coordinator records will be available when the database is connected.
                  </p>
                </div>

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
