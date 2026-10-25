import React from 'react';
import { Flag } from 'lucide-react';
import { isBackendConfigured, getLocalRegistrationsCount } from '../services/registrationService';

interface AnnouncementBarProps {
  onJoinClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onJoinClick }) => {
  const isConnected = isBackendConfigured();
  const localCount = getLocalRegistrationsCount();

  return (
    <>
      <div className="apc-flag-stripe h-2.5 w-full" aria-hidden="true" />
      <div className="bg-slate-900 text-white text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2">
            <span className={`inline-block w-2.5 h-2.5 rounded-full ${isConnected ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
            <span className="font-medium text-emerald-300 uppercase tracking-wider text-[11px] sm:text-xs">
              MOBILIZATION REPOSITORY:
            </span>
            <span className="font-mono font-bold tracking-wider text-amber-300">
              {isConnected ? 'LIVE BACKEND ACTIVE' : (localCount > 0 ? `${localCount} Local Draft(s)` : 'Awaiting Server Connection')}
            </span>
            <span className="hidden sm:inline text-slate-400 text-xs">
              ({isConnected ? 'Verified Live Database' : 'Backend Unconfigured'})
            </span>
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <span className="text-slate-300 flex items-center gap-1">
              <Flag className="w-3.5 h-3.5 text-apc-blue" />
              <span>Official APC Support Movement</span>
            </span>
            <button
              onClick={onJoinClick}
              className="bg-apc-green hover:bg-emerald-600 text-white px-2.5 py-1 rounded text-xs transition font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
            >
              Join Movement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
