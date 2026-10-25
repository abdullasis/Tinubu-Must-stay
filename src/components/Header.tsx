import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle } from 'lucide-react';

const APC_LOGO_URL = 'https://i.ibb.co/kgtLKFR3/APC-Logo.jpg';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Movement Title */}
          <a href="#hero" className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-apc-green rounded-lg p-1">
            <div className="w-12 h-12 rounded-full border-2 border-apc-green p-0.5 bg-white shadow-sm flex items-center justify-center overflow-hidden shrink-0">
              {!logoError ? (
                <img
                  src={APC_LOGO_URL}
                  alt="APC Emblem"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#008751" strokeWidth="3"/>
                  <path d="M 15,50 A 35,35 0 0,1 50,15 L 50,85 A 35,35 0 0,1 15,50 Z" fill="#008751"/>
                  <path d="M 50,15 A 35,35 0 0,1 85,50 A 35,35 0 0,1 50,85 Z" fill="#00A3E0"/>
                  <rect x="15" y="65" width="70" height="20" fill="#E4002B"/>
                  <text x="50" y="79" fontFamily="Arial" fontWeight="900" fontSize="14" fill="#ffffff" textAnchor="middle">APC</text>
                  <circle cx="50" cy="40" r="14" fill="#ffffff"/>
                  <path d="M 46,28 L 54,28 L 52,48 L 48,48 Z" fill="#D4AF37"/>
                </svg>
              )}
            </div>
            <div>
              <span className="block text-xl font-black tracking-tight text-slate-900 group-hover:text-apc-green transition leading-none">
                TINUBU MUST STAY
              </span>
              <span className="block text-[10px] sm:text-xs font-bold text-apc-green tracking-widest uppercase mt-1">
                APC Youth Strategic Vanguard
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-700">
            <a href="#hero" className="hover:text-apc-green transition focus:outline-none focus:text-apc-green">Home</a>
            <a href="#patron" className="hover:text-apc-green transition focus:outline-none focus:text-apc-green">Grand Patron</a>
            <a href="#mandate" className="hover:text-apc-green transition focus:outline-none focus:text-apc-green">Youth Mandate</a>
            <a href="#structure" className="hover:text-apc-green transition focus:outline-none focus:text-apc-green">Grassroots Structure</a>
            <a href="#register" className="hover:text-apc-green transition focus:outline-none focus:text-apc-green">Register</a>
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#endorse"
              className="bg-gradient-to-r from-apc-green to-emerald-700 hover:from-emerald-700 hover:to-apc-green text-white px-5 py-2.5 rounded-xl font-bold shadow-md shadow-emerald-900/10 transition transform hover:-translate-y-0.5 text-sm flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <CheckCircle className="w-4 h-4 text-amber-300" />
              <span>Endorse 2027</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 hover:text-apc-green focus:outline-none focus:ring-2 focus:ring-apc-green p-2 rounded-lg"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <a
            href="#hero"
            onClick={closeMenu}
            className="block py-2 text-slate-800 font-medium hover:text-apc-green transition border-b border-slate-100"
          >
            Home
          </a>
          <a
            href="#patron"
            onClick={closeMenu}
            className="block py-2 text-slate-800 font-medium hover:text-apc-green transition border-b border-slate-100"
          >
            Grand Patron & Leadership
          </a>
          <a
            href="#mandate"
            onClick={closeMenu}
            className="block py-2 text-slate-800 font-medium hover:text-apc-green transition border-b border-slate-100"
          >
            Youth Mandate
          </a>
          <a
            href="#structure"
            onClick={closeMenu}
            className="block py-2 text-slate-800 font-medium hover:text-apc-green transition border-b border-slate-100"
          >
            Grassroots Network
          </a>
          <a
            href="#register"
            onClick={closeMenu}
            className="block py-2 text-slate-800 font-medium hover:text-apc-green transition border-b border-slate-100"
          >
            Registration
          </a>
          <a
            href="#endorse"
            onClick={closeMenu}
            className="block py-2.5 text-center bg-apc-green text-white font-bold rounded-lg shadow transition hover:bg-emerald-700"
          >
            Pledge Youth Vote
          </a>
        </div>
      )}
    </header>
  );
};
