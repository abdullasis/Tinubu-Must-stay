const fs = require('fs');
const path = require('path');

const b64Data = JSON.parse(fs.readFileSync(path.join(__dirname, 'images_base64.json'), 'utf8'));

const tinubuB64 = b64Data.tinubu;
const apcLogoB64 = b64Data.apcLogo;
const masariB64 = b64Data.masari;

const htmlContent = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tinubu Must Stay | Official APC Youth Movement</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        apc: {
                            green: '#008751',
                            blue: '#00A3E0',
                            red: '#E4002B',
                            darkGreen: '#005c37',
                            gold: '#D4AF37'
                        }
                    },
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        .apc-gradient {
            background: linear-gradient(135deg, #008751 0%, #005c37 50%, #00331e 100%);
        }
        .apc-flag-stripe {
            background: linear-gradient(90deg, #008751 0% 33%, #FFFFFF 33% 34%, #00A3E0 34% 66%, #E4002B 66% 100%);
        }
        .hero-pattern {
            background-color: #00331e;
            background-image: radial-gradient(rgba(0, 163, 224, 0.15) 1px, transparent 0);
            background-size: 24px 24px;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-apc-green selection:text-white">

    <!-- Top Announcement Bar -->
    <div class="apc-flag-stripe h-2.5 w-full" aria-hidden="true"></div>
    <div class="bg-slate-900 text-white text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
            <div class="flex items-center space-x-2">
                <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span class="font-medium text-emerald-300 uppercase tracking-wider text-[11px] sm:text-xs">MOBILIZATION REPOSITORY:</span>
                <span class="font-mono font-bold tracking-wider text-amber-300">ADMINISTRATIVE SCOPE ACTIVE</span>
                <span class="hidden sm:inline text-slate-400 text-xs">(37 States & FCT Covered)</span>
            </div>
            <div class="flex items-center space-x-4 text-xs">
                <span class="text-slate-300 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-apc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/></svg>
                    Official APC Support Movement
                </span>
                <a href="#register" class="bg-apc-green hover:bg-emerald-600 text-white px-2.5 py-1 rounded text-xs transition font-semibold">Join Movement</a>
            </div>
        </div>
    </div>

    <!-- Main Navigation Header -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                
                <!-- Logo & Movement Title -->
                <a href="#hero" class="flex items-center space-x-3 group">
                    <div class="w-12 h-12 rounded-full border-2 border-apc-green p-0.5 bg-white shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                        <img src="${apcLogoB64}" alt="APC Logo" class="w-full h-full object-contain" />
                    </div>
                    <div>
                        <span class="block text-xl font-black tracking-tight text-slate-900 group-hover:text-apc-green transition leading-none">
                            TINUBU MUST STAY
                        </span>
                        <span class="block text-[10px] sm:text-xs font-bold text-apc-green tracking-widest uppercase mt-1">
                            APC Youth Strategic Vanguard
                        </span>
                    </div>
                </a>

                <!-- Desktop Navigation -->
                <nav class="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-700">
                    <a href="#hero" class="hover:text-apc-green transition">Home</a>
                    <a href="#patron" class="hover:text-apc-green transition">Grand Patron</a>
                    <a href="#mandate" class="hover:text-apc-green transition">Youth Mandate</a>
                    <a href="#structure" class="hover:text-apc-green transition">Grassroots Structure</a>
                    <a href="#register" class="hover:text-apc-green transition">Register</a>
                </nav>

                <!-- Action Button -->
                <div class="hidden lg:flex items-center space-x-3">
                    <a href="#endorse" class="bg-gradient-to-r from-apc-green to-emerald-700 hover:from-emerald-700 hover:to-apc-green text-white px-5 py-2.5 rounded-xl font-bold shadow-md shadow-emerald-900/10 transition transform hover:-translate-y-0.5 text-sm flex items-center gap-2">
                        <svg class="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        Endorse 2027
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="md:hidden text-slate-700 hover:text-apc-green focus:outline-none p-2 rounded-lg" aria-label="Toggle Menu">
                    <svg id="menu-icon-bars" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                    <svg id="menu-icon-x" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu Dropdown -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <a href="#hero" class="mobile-nav-link block py-2 text-slate-800 font-medium hover:text-apc-green border-b border-slate-100">Home</a>
            <a href="#patron" class="mobile-nav-link block py-2 text-slate-800 font-medium hover:text-apc-green border-b border-slate-100">Grand Patron & Leadership</a>
            <a href="#mandate" class="mobile-nav-link block py-2 text-slate-800 font-medium hover:text-apc-green border-b border-slate-100">Youth Mandate</a>
            <a href="#structure" class="mobile-nav-link block py-2 text-slate-800 font-medium hover:text-apc-green border-b border-slate-100">Grassroots Network</a>
            <a href="#register" class="mobile-nav-link block py-2 text-slate-800 font-medium hover:text-apc-green border-b border-slate-100">Registration</a>
            <a href="#endorse" class="mobile-nav-link block py-2.5 text-center bg-apc-green text-white font-bold rounded-lg shadow">Pledge Youth Vote</a>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section id="hero" class="hero-pattern relative text-white pt-12 pb-20 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div class="text-center max-w-4xl mx-auto mb-12">
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-md">
                    <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    Consolidated Grassroots Youth Alliance for APC
                </div>
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
                    TINUBU MUST STAY
                </h1>
                <p class="text-lg sm:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                    Nigerian Youths Stand Firmly for Continuity, Renewal, and Sustainable Development under the Leadership of His Excellency <span class="text-emerald-400 font-semibold">Bola Ahmed Tinubu (GCFR)</span>.
                </p>
            </div>

            <!-- Leadership Showcase Cards -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
                
                <!-- CARD 1: PRESIDENT BOLA AHMED TINUBU -->
                <div class="glass-card rounded-2xl overflow-hidden shadow-2xl text-slate-900 flex flex-col transform transition hover:scale-[1.01]">
                    <div class="bg-gradient-to-r from-emerald-800 to-apc-green p-4 text-white text-center border-b border-emerald-600/30">
                        <span class="text-xs font-extrabold tracking-widest text-amber-300 uppercase">President & Commander-in-Chief</span>
                        <h2 class="text-xl font-bold">His Excellency</h2>
                    </div>
                    
                    <div class="p-6 flex flex-col md:flex-row items-center gap-6 flex-grow bg-white">
                        <div class="relative group shrink-0">
                            <div class="w-48 h-56 sm:w-52 sm:h-64 rounded-xl overflow-hidden border-4 border-apc-green shadow-xl bg-slate-100 flex items-center justify-center">
                                <img src="${tinubuB64}" alt="His Excellency President Bola Ahmed Tinubu (GCFR)" class="w-full h-full object-cover object-top" />
                            </div>
                            <div class="absolute -bottom-3 -right-3 bg-amber-400 text-slate-900 p-2 rounded-full shadow-lg border-2 border-white flex items-center justify-center">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                            </div>
                        </div>

                        <div class="flex-grow text-center md:text-left space-y-3">
                            <span class="inline-block px-3 py-1 bg-emerald-100 text-apc-green font-bold text-xs rounded-full">
                                GRAND COMMANDER OF THE FEDERAL REPUBLIC
                            </span>
                            <h3 class="text-2xl font-black text-slate-900 leading-snug">
                                ASIWAJU BOLA AHMED TINUBU <span class="text-sm font-semibold text-slate-500">(GCFR)</span>
                            </h3>
                            <p class="text-slate-600 text-sm leading-relaxed">
                                President, Commander-in-Chief of the Armed Forces, Federal Republic of Nigeria. Champion of the Renewed Hope Agenda and Economic Transformation.
                            </p>
                            <div class="pt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                                <span class="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5 text-apc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> 2nd Term Youth Endorsement
                                </span>
                                <span class="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5 text-apc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Renewed Hope
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-slate-50 border-t border-slate-100 px-6 py-3 flex justify-between items-center text-xs font-semibold text-slate-500">
                        <span class="flex items-center gap-1">
                            <svg class="w-4 h-4 text-apc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg> National Leadership
                        </span>
                        <span class="text-apc-green font-bold">2027 Mobilization Ready</span>
                    </div>
                </div>

                <!-- CARD 2: ALHAJI IBRAHIM KABIR MASARI -->
                <div class="glass-card rounded-2xl overflow-hidden shadow-2xl text-slate-900 flex flex-col transform transition hover:scale-[1.01]">
                    <div class="bg-gradient-to-r from-apc-blue to-cyan-700 p-4 text-white text-center border-b border-cyan-500/30">
                        <span class="text-xs font-extrabold tracking-widest text-amber-300 uppercase">Movement Grand Patron</span>
                        <h2 class="text-xl font-bold">Special Adviser to the President</h2>
                    </div>

                    <div class="p-6 flex flex-col md:flex-row items-center gap-6 flex-grow bg-white">
                        <div class="relative group shrink-0">
                            <div class="w-48 h-56 sm:w-52 sm:h-64 rounded-xl overflow-hidden border-4 border-apc-blue shadow-xl bg-slate-100 flex items-center justify-center">
                                <img src="${masariB64}" alt="Alhaji Ibrahim Kabir Masari" class="w-full h-full object-cover object-top" />
                            </div>
                            <div class="absolute -bottom-3 -right-3 bg-apc-blue text-white p-2 rounded-full shadow-lg border-2 border-white flex items-center justify-center">
                                <svg class="w-5 h-5 text-amber-300 fill-amber-300" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            </div>
                        </div>

                        <div class="flex-grow text-center md:text-left space-y-3">
                            <span class="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 font-bold text-xs rounded-full">
                                GRAND PATRON OF THE MOVEMENT
                            </span>
                            <h3 class="text-2xl font-black text-slate-900 leading-snug">
                                ALHAJI IBRAHIM KABIR MASARI
                            </h3>
                            <p class="text-slate-600 text-sm leading-relaxed">
                                Special Adviser to the President on Political and Other Matters. Visionary Leader and National Anchor for Grassroots Youth Integration.
                            </p>
                            <div class="pt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                                <span class="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5 text-apc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Political Mentorship
                                </span>
                                <span class="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium flex items-center gap-1">
                                    <svg class="w-3.5 h-3.5 text-apc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Grassroots Mobilizer
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-slate-50 border-t border-slate-100 px-6 py-3 flex justify-between items-center text-xs font-semibold text-slate-500">
                        <span>Patronage & Oversight</span>
                        <span class="text-apc-blue font-bold">Patron, Tinubu Must Stay</span>
                    </div>
                </div>

            </div>

            <!-- APC Loyalty Pledge Banner -->
            <div class="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 max-w-4xl mx-auto text-center flex flex-col md:flex-row items-center justify-between gap-6">
                <div class="flex items-center gap-4 text-left">
                    <div class="w-16 h-16 rounded-xl bg-white p-2 shrink-0 flex items-center justify-center shadow-lg">
                        <img src="${apcLogoB64}" alt="APC Logo" class="w-full h-full object-contain" />
                    </div>
                    <div>
                        <h4 class="text-lg font-bold text-white">Unwavering Loyalty to All Progressives Congress (APC)</h4>
                        <p class="text-xs text-slate-300">The youth of Nigeria are united, prepared, and fully resolved to re-elect President Asiwaju Bola Ahmed Tinubu for a second term.</p>
                    </div>
                </div>
                <a href="#register" class="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3 rounded-xl transition text-sm shrink-0 shadow-lg flex items-center gap-2">
                    REGISTER NOW
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
            </div>

        </div>
    </section>

    <!-- LIVE METRICS SECTION -->
    <section class="py-12 bg-slate-900 text-white relative border-y border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-8">
                <span class="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21 3.582 4 8 4s8-1.79 8-4"/></svg>
                    NATIONWIDE ADMINISTRATIVE STRUCTURE & METRICS
                </span>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-1">Consolidated Grassroots Scope</h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div class="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/60 shadow-inner">
                    <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl">
                        <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <div class="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">37</div>
                    <div class="text-xs sm:text-sm font-semibold text-slate-300 mt-1">States & FCT</div>
                    <div class="text-[10px] text-emerald-400 font-mono mt-2 uppercase tracking-wide">100% NATIONWIDE REACH</div>
                </div>

                <div class="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/60 shadow-inner">
                    <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-500/20 text-apc-blue flex items-center justify-center text-xl">
                        <svg class="w-6 h-6 text-apc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                    </div>
                    <div class="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">774</div>
                    <div class="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Local Governments</div>
                    <div class="text-[10px] text-apc-blue font-mono mt-2 uppercase tracking-wide">CONSTITUTIONAL LGA UNITS</div>
                </div>

                <div class="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/60 shadow-inner">
                    <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl">
                        <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>
                    </div>
                    <div class="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">8,820</div>
                    <div class="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Political Wards</div>
                    <div class="text-[10px] text-amber-400 font-mono mt-2 uppercase tracking-wide">ELECTORAL WARD UNITS</div>
                </div>

                <div class="bg-gradient-to-br from-emerald-950 to-slate-800 p-6 rounded-2xl border border-emerald-500/40 shadow-xl relative overflow-hidden">
                    <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center text-xl">
                        <svg class="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                    </div>
                    <div class="text-2xl sm:text-3xl font-black text-amber-300 tracking-tight font-mono" id="stat-members-count">263,084</div>
                    <div class="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Verified Endorsed Members</div>
                    <div class="text-[10px] text-emerald-300 font-mono mt-2 uppercase">VERIFIED DATABASE ACTIVE</div>
                </div>
            </div>
        </div>
    </section>

    <!-- PATRON SECTION -->
    <section id="patron" class="py-20 bg-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="px-3 py-1 rounded-full bg-apc-blue/10 text-apc-blue text-xs font-bold uppercase tracking-widest">Patronage & Vision</span>
                <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mt-2">Under the Guidance of Strategic Leadership</h2>
                <p class="text-slate-600 mt-3 text-sm sm:text-base">Anchored by seasoned statesman Alhaji Ibrahim Kabir Masari, championing youth inclusion and political continuity.</p>
            </div>

            <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div class="lg:col-span-5 bg-slate-900 text-white relative min-h-[350px]">
                    <img src="${masariB64}" alt="Alhaji Ibrahim Kabir Masari" class="w-full h-full object-cover object-top opacity-90" />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 right-6 z-10">
                        <span class="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">Grand Patron</span>
                        <h3 class="text-2xl font-black text-white">Alhaji Ibrahim Kabir Masari</h3>
                        <p class="text-xs text-slate-300 mt-0.5">Special Adviser to the President on Political & Other Matters</p>
                    </div>
                </div>

                <div class="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center space-y-6">
                    <div class="space-y-3">
                        <h3 class="text-2xl font-bold text-slate-900">The Strategic Engine for APC Youth Mobilization</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">
                            As Grand Patron of the <strong class="text-slate-900">Tinubu Must Stay</strong> movement, Alhaji Ibrahim Kabir Masari provides vital strategic direction, ensuring Nigerian youths across all 36 States, the FCT, 774 LGAs, and 8,820 Wards are organized, empowered, and mobilized to safeguard democratic stability and political continuity.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div class="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                            <div class="p-2.5 bg-emerald-100 text-apc-green rounded-lg shrink-0">
                                <svg class="w-5 h-5 text-apc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h18m-5 8a2 2 0 100-4m0 4a2 2 0 110-4"/></svg>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm">Grassroots Outreach</h4>
                                <p class="text-xs text-slate-500">Structured ward-by-ward youth alignment.</p>
                            </div>
                        </div>

                        <div class="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                            <div class="p-2.5 bg-blue-100 text-apc-blue rounded-lg shrink-0">
                                <svg class="w-5 h-5 text-apc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5a1.5 1.5 0 013 0v5.5m0 0V14"/></svg>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm">Political Mentorship</h4>
                                <p class="text-xs text-slate-500">Bridging federal governance with youth action.</p>
                            </div>
                        </div>
                    </div>

                    <blockquote class="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-400 text-xs italic text-slate-700 flex gap-3">
                        <svg class="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                        <span>"The future of Nigeria rests upon the active participation and unwavering resolve of our youth. President Asiwaju Bola Ahmed Tinubu's vision requires sustained commitment to deliver full transformation."</span>
                    </blockquote>
                </div>
            </div>
        </div>
    </section>

    <!-- MANDATE SECTION -->
    <section id="mandate" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="px-3 py-1 rounded-full bg-apc-green/10 text-apc-green text-xs font-bold uppercase tracking-widest">Pillars of the Movement</span>
                <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mt-2">Why Nigerian Youths Stand With Asiwaju Bola Ahmed Tinubu</h2>
                <p class="text-slate-600 mt-3 text-sm sm:text-base">We stand firmly with APC because performance, courage, and vision deserve second-term continuity.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-slate-50 rounded-2xl p-8 border border-slate-200/70 hover:shadow-xl transition duration-300 flex flex-col justify-between">
                    <div>
                        <div class="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl mb-6 shadow-md shadow-emerald-600/20">
                            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Youth Empowerment & Student Loans</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Implementation of the Nigerian Student Loan Scheme (NELFUND) providing tuition-free higher education access for millions of young Nigerians across the federation.
                        </p>
                    </div>
                    <div class="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-apc-green">Direct Youth Educational Support</div>
                </div>

                <div class="bg-slate-50 rounded-2xl p-8 border border-slate-200/70 hover:shadow-xl transition duration-300 flex flex-col justify-between">
                    <div>
                        <div class="w-14 h-14 rounded-2xl bg-apc-blue text-white flex items-center justify-center text-2xl mb-6 shadow-md shadow-blue-600/20">
                            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">3MTT & Digital Economy</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Training 3 million technical talents and creating tech-driven jobs, empowering the youth to lead Africa's digital economy revolution under APC.
                        </p>
                    </div>
                    <div class="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-apc-blue">Technology & Skills Pipeline</div>
                </div>

                <div class="bg-slate-50 rounded-2xl p-8 border border-slate-200/70 hover:shadow-xl transition duration-300 flex flex-col justify-between">
                    <div>
                        <div class="w-14 h-14 rounded-2xl bg-apc-red text-white flex items-center justify-center text-2xl mb-6 shadow-md shadow-red-600/20">
                            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Economic Reform & Infrastructure</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Bold fiscal reforms, infrastructure developments, and direct youth inclusion in cabinet decisions positioning Nigeria for long-term prosperity.
                        </p>
                    </div>
                    <div class="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-apc-red">Long-term Structural Transformation</div>
                </div>
            </div>
        </div>
    </section>

    <!-- GRASSROOTS FOOTPRINT EXPLORER -->
    <section id="structure" class="py-20 bg-slate-900 text-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-12">
                <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 w-max mx-auto">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                    Grassroots Footprint
                </span>
                <h2 class="text-3xl sm:text-4xl font-black text-white mt-3">37 States, 774 LGAs, 8,820 Wards</h2>
                <p class="text-slate-400 mt-2 text-sm">Explore our structured organizational presence down to your local polling unit.</p>
            </div>

            <div class="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-2xl max-w-5xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div>
                        <label for="state-select" class="block text-xs font-bold text-slate-300 uppercase mb-2">Select State *</label>
                        <select id="state-select" class="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-apc-green">
                            <option value="">-- Choose State --</option>
                        </select>
                    </div>

                    <div>
                        <label for="lga-select" class="block text-xs font-bold text-slate-300 uppercase mb-2">Select Local Government (LGA) *</label>
                        <select id="lga-select" class="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-apc-green disabled:opacity-50" disabled>
                            <option value="">-- Choose LGA --</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-300 uppercase mb-2">Ward Mobilization Status</label>
                        <button id="search-ward-btn" class="w-full bg-apc-green hover:bg-emerald-600 disabled:bg-slate-700 text-white font-bold rounded-xl py-3 text-sm transition flex items-center justify-center gap-2" disabled>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                            Verify Structure
                        </button>
                    </div>
                </div>

                <div id="structure-result" class="bg-slate-950/80 rounded-xl p-6 border border-slate-800 text-center">
                    <svg class="w-8 h-8 text-slate-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                    <p class="text-slate-400 text-sm">Select a State and LGA above to view the active ward commanders and youth voting readiness.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- REGISTRATION FORM SECTION -->
    <section id="register" class="py-20 bg-slate-50 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                <div class="bg-gradient-to-r from-apc-green via-emerald-800 to-slate-900 p-8 text-white text-center relative">
                    <div class="absolute top-4 right-4 bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase">
                        APC Youth Movement
                    </div>
                    <h2 class="text-3xl font-black">Register & Join APC Youth Vanguard</h2>
                    <p class="text-emerald-100 text-sm mt-2 max-w-xl mx-auto">
                        Stand to be counted as part of the youth majority dedicated to democratic progress and second-term continuity under President Bola Ahmed Tinubu.
                    </p>
                </div>

                <form id="member-reg-form" class="p-8 sm:p-10 space-y-6">
                    <div id="error-banner" class="hidden p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-start gap-3">
                        <svg class="w-5 h-5 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        <div id="error-text"></div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label for="reg-name" class="block text-xs font-bold text-slate-700 uppercase mb-2">Full Name *</label>
                            <input id="reg-name" type="text" required placeholder="e.g. Ibrahim Abubakar" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-apc-green focus:outline-none text-sm" />
                        </div>
                        <div>
                            <label for="reg-phone" class="block text-xs font-bold text-slate-700 uppercase mb-2">Phone Number (Nigerian Format) *</label>
                            <input id="reg-phone" type="tel" required placeholder="08012345678 or +2348012345678" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-apc-green focus:outline-none text-sm" />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <label for="form-state" class="block text-xs font-bold text-slate-700 uppercase mb-2">State *</label>
                            <select id="form-state" required class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-apc-green focus:outline-none text-sm">
                                <option value="">Select State</option>
                            </select>
                        </div>
                        <div>
                            <label for="form-lga" class="block text-xs font-bold text-slate-700 uppercase mb-2">LGA *</label>
                            <select id="form-lga" required disabled class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-apc-green focus:outline-none text-sm disabled:opacity-50">
                                <option value="">Select State First</option>
                            </select>
                        </div>
                        <div>
                            <label for="form-ward" class="block text-xs font-bold text-slate-700 uppercase mb-2">Ward *</label>
                            <input id="form-ward" type="text" required placeholder="Enter Ward Name" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-apc-green focus:outline-none text-sm" />
                        </div>
                    </div>

                    <div id="endorse" class="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-start gap-3">
                        <input type="checkbox" id="endorse-check" required class="mt-1 w-5 h-5 text-apc-green rounded focus:ring-apc-green border-slate-300" />
                        <label for="endorse-check" class="text-xs text-slate-700 leading-relaxed font-medium">
                            I solemnly pledge as a young Nigerian citizen to endorse, support, and vote for His Excellency, <strong class="text-slate-900">President Asiwaju Bola Ahmed Tinubu (GCFR)</strong> under the banner of the <strong class="text-apc-green">All Progressives Congress (APC)</strong> for a second term.
                        </label>
                    </div>

                    <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                        <div class="flex items-center gap-2 text-xs font-bold text-slate-800">
                            <svg class="w-4 h-4 text-apc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                            Privacy Notice & Consent
                        </div>
                        <p class="text-[11px] text-slate-600 leading-relaxed">
                            Personal details are collected solely for APC Youth Strategic Vanguard mobilization. Data is handled with strict confidentiality.
                        </p>
                        <div class="flex items-center gap-2 pt-1">
                            <input type="checkbox" id="privacy-check" required class="w-4 h-4 text-apc-green rounded focus:ring-apc-green border-slate-300" />
                            <label for="privacy-check" class="text-xs text-slate-700 font-semibold">
                                I agree to the privacy notice and consent to data processing for APC Youth Vanguard.
                            </label>
                        </div>
                    </div>

                    <button type="submit" class="w-full bg-gradient-to-r from-apc-green to-emerald-700 hover:from-emerald-700 hover:to-apc-green text-white font-extrabold text-base py-4 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>
                        CONFIRM MEMBERSHIP & PLEDGE VOTE
                    </button>
                </form>

                <!-- Digital Membership Pass View -->
                <div id="form-result-box" class="hidden p-8 sm:p-10 space-y-6">
                    <div class="text-center space-y-2">
                        <div class="w-16 h-16 bg-emerald-100 text-apc-green rounded-full flex items-center justify-center mx-auto text-3xl shadow-sm">
                            <svg class="w-10 h-10 text-apc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <h3 class="text-2xl font-black text-slate-900">Registration Confirmed & Pledge Recorded!</h3>
                        <p class="text-slate-600 text-sm max-w-md mx-auto">
                            Thank you for standing with APC and President Asiwaju Bola Ahmed Tinubu. Your official digital membership record has been generated below.
                        </p>
                    </div>

                    <!-- Official Membership Card -->
                    <div class="max-w-xl mx-auto bg-slate-900 text-white rounded-2xl overflow-hidden border-2 border-apc-green shadow-2xl relative">
                        <div class="apc-flag-stripe h-2 w-full"></div>
                        
                        <div class="p-6 space-y-6">
                            <div class="flex justify-between items-start border-b border-slate-800 pb-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-12 h-12 rounded-full bg-white p-1 border border-apc-green shrink-0 flex items-center justify-center">
                                        <img src="${apcLogoB64}" alt="APC Logo" class="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <span class="block text-xs font-bold text-emerald-400 uppercase tracking-widest">
                                            APC YOUTH STRATEGIC VANGUARD
                                        </span>
                                        <h4 class="text-lg font-black text-white leading-tight">
                                            OFFICIAL MEMBERSHIP PASS
                                        </h4>
                                    </div>
                                </div>
                                <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold rounded uppercase tracking-wider border border-emerald-500/30">
                                    VERIFIED ENDORSER
                                </span>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                                <div>
                                    <span class="text-[10px] text-slate-400 uppercase font-semibold block">Full Name</span>
                                    <span id="pass-name" class="text-sm font-bold text-white block mt-0.5"></span>
                                </div>

                                <div>
                                    <span class="text-[10px] text-slate-400 uppercase font-semibold block">Phone Number</span>
                                    <span id="pass-phone" class="text-sm font-mono font-bold text-amber-300 block mt-0.5"></span>
                                </div>

                                <div>
                                    <span class="text-[10px] text-slate-400 uppercase font-semibold block">Location</span>
                                    <span id="pass-location" class="text-xs font-medium text-slate-200 block mt-0.5"></span>
                                    <span id="pass-state" class="text-xs font-semibold text-emerald-400 block"></span>
                                </div>

                                <div>
                                    <span class="text-[10px] text-slate-400 uppercase font-semibold block">Date Registered</span>
                                    <span id="pass-date" class="text-xs font-mono text-slate-300 block mt-0.5"></span>
                                </div>
                            </div>

                            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
                                <div>
                                    <span class="text-[10px] text-slate-400 uppercase font-semibold block">Registration ID</span>
                                    <span id="pass-reg-id" class="text-base font-mono font-black text-amber-300 tracking-wider"></span>
                                </div>
                                <div class="text-right">
                                    <span class="text-[10px] text-emerald-400 font-semibold block">STATUS: ACTIVE</span>
                                    <span class="text-[10px] text-slate-400 font-mono">2027 ENDORSED</span>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-950/80 px-6 py-2.5 text-[10px] text-slate-400 text-center border-t border-slate-800">
                            Official Record of Tinubu Must Stay Youth Support Movement · All Progressives Congress
                        </div>
                    </div>

                    <div class="flex flex-wrap justify-center items-center gap-3 pt-2">
                        <button id="print-pass-btn" class="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
                            Print / Save Membership Slip
                        </button>

                        <button id="reset-form-btn" class="px-5 py-2.5 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold hover:bg-slate-200 transition border border-slate-300 flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                            Register Another Member
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div class="space-y-4 md:col-span-2">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 rounded-full border border-apc-green bg-white p-1 flex items-center justify-center shrink-0">
                            <img src="${apcLogoB64}" alt="APC Logo" class="w-full h-full object-contain" />
                        </div>
                        <span class="text-lg font-black text-white">TINUBU MUST STAY</span>
                    </div>
                    <p class="text-xs text-slate-400 max-w-md leading-relaxed">
                        Official Grassroots Youth Support Movement for President Bola Ahmed Tinubu (GCFR). Operating under the patronage of Alhaji Ibrahim Kabir Masari across all 36 States, FCT, 774 LGAs, and 8,820 Wards.
                    </p>
                    <div class="flex items-center space-x-3 text-sm pt-1">
                        <span class="text-xs font-semibold text-slate-500">Party Alignment:</span>
                        <span class="px-2.5 py-1 bg-emerald-950 text-emerald-400 rounded text-xs font-bold border border-emerald-800 flex items-center gap-1.5">
                            <svg class="w-3.5 h-3.5 text-apc-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/></svg>
                            All Progressives Congress (APC)
                        </span>
                    </div>
                </div>

                <div>
                    <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-xs">
                        <li><a href="#hero" class="hover:text-emerald-400 transition">Leadership Profiles</a></li>
                        <li><a href="#patron" class="hover:text-emerald-400 transition">Grand Patron Desk</a></li>
                        <li><a href="#mandate" class="hover:text-emerald-400 transition">Youth Mandate</a></li>
                        <li><a href="#structure" class="hover:text-emerald-400 transition">Ward Directory</a></li>
                        <li><a href="#register" class="hover:text-emerald-400 transition">Join Movement</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-4">Administrative Scope</h4>
                    <ul class="space-y-2 text-xs text-slate-400 font-mono">
                        <li>States & FCT: <span class="text-white font-bold">37</span></li>
                        <li>LGAs: <span class="text-white font-bold">774</span></li>
                        <li>Political Wards: <span class="text-white font-bold">8,820</span></li>
                        <li>Database Status: <span class="text-amber-300 font-bold">Verified Active</span></li>
                    </ul>
                </div>
            </div>

            <div class="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                <p>&copy; 2026 Tinubu Must Stay Movement. All Rights Reserved. Prepared for the Advancement of Progress and National Development under APC.</p>
            </div>
        </div>
    </footer>

    <!-- JAVASCRIPT & DATA CONTROLLER -->
    <script>
        // Validated Administrative Data for 36 States + FCT
        const NIGERIA_DATA = {
            "Abia": ["Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umu Nneochi"],
            "Adamawa": ["Demsa", "Fufure", "Ganye", "Gayuk", "Gombi", "Grie", "Hong", "Jada", "Lamurde", "Madagali", "Maiha", "Mayo Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South"],
            "Akwa Ibom": ["Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono-Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat-Enin", "Nsit-Atai", "Nsit-Ibom", "Nsit-Ubium", "Obot Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung-Uko", "Uruan", "Urue-Offong/Oruko", "Uyo"],
            "Anambra": ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Nnjikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"],
            "Bauchi": ["Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Gamawa", "Ganjuwa", "Giade", "Itas/Gadau", "Jama'are", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", "Toro", "Warji", "Zaki"],
            "Bayelsa": ["Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"],
            "Benue": ["Agatu", "Apa", "Ado", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina-Ala", "Konshisha", "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", "Ohimini", "Oju", "Okpokwu", "Oturkpo", "Tarka", "Ukum", "Ushongo", "Vandeikya"],
            "Borno": ["Abadam", "Askira/Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", "Dikwa", "Gubio", "Guzamala", "Gwoza", "Hawul", "Jere", "Kaga", "Kala/Balge", "Konduga", "Kukawa", "Kwaya Kusar", "Mafa", "Magumeri", "Maiduguri", "Marte", "Mobbar", "Monguno", "Nganzai", "Shani"],
            "Cross River": ["Abi", "Akamkpa", "Akpabuyo", "Bakassi", "Bekwarra", "Biase", "Boki", "Calabar Municipal", "Calabar South", "Etung", "Ikom", "Obanliku", "Obubra", "Obudu", "Odukpani", "Ogoja", "Yakuur", "Yala"],
            "Delta": ["Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Ethiope East", "Ethiope West", "Ika North East", "Ika South", "Isoko North", "Isoko South", "Ndokwa East", "Ndokwa West", "Okpe", "Oshimili North", "Oshimili South", "Patani", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Ukwuani", "Uvwie", "Warri North", "Warri South", "Warri South West"],
            "Ebonyi": ["Abakaliki", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaozara", "Ohaukwu", "Onicha"],
            "Edo": ["Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East", "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", "Ikpoba Okha", "Orhionmwon", "Oredo", "Ovia North-East", "Ovia South-West", "Owan East", "Owan West", "Uhunmwonde"],
            "Ekiti": ["Ado Ekiti", "Efon", "Ekiti East", "Ekiti South-West", "Ekiti West", "Emure", "Gbonyin", "Ido Osi", "Ijero", "Ikere", "Ikole", "Ilejemeje", "Irepodun/Ifelodun", "Ise/Orun", "Moba", "Oye"],
            "Enugu": ["Aninri", "Awgu", "Enugu East", "Enugu North", "Enugu South", "Ezeagu", "Igbo Etiti", "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East", "Nkanu West", "Nsukka", "Oji River", "Udenu", "Udi", "Uzo Uwani"],
            "FCT - Abuja": ["Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council"],
            "Gombe": ["Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", "Kwami", "Nafada", "Shongom", "Yamaltu/Deba"],
            "Imo": ["Aboh Mbaise", "Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte", "Ideato North", "Ideato South", "Ihitte/Uboma", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Ngor Okpala", "Njaba", "Nkwerre", "Nwangele", "Obowo", "Oguta", "Ohaji/Egbema", "Okigwe", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri Municipal", "Owerri North", "Owerri South"],
            "Jigawa": ["Auyo", "Babura", "Biriniwa", "Birnin Kudu", "Buji", "Dutse", "Gagarawa", "Garki", "Gumel", "Guri", "Gwaram", "Gwiwa", "Hadejia", "Jahun", "Kafin Hausa", "Kaugama", "Kazaure", "Kiri Kasama", "Kiyawa", "Maigatari", "Malam Madori", "Miga", "Ringim", "Roni", "Sule Tankarkar", "Taura", "Yankwashi"],
            "Kaduna": ["Birnin Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jema'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kaura", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon Gari", "Sanga", "Soba", "Zangon Kataf", "Zaria"],
            "Kano": ["Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu", "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", "Garun Mallam", "Gaya", "Gezawa", "Gwale", "Gwarzo", "Kabo", "Kano Municipal", "Karaye", "Kibiya", "Kiru", "Kumbotso", "Kunchi", "Kura", "Madobi", "Makoda", "Minjibir", "Nasarawa", "Rano", "Rimin Gado", "Rogo", "Shanono", "Sumaila", "Takai", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil"],
            "Katsina": ["Bakori", "Batagarawa", "Batsari", "Baure", "Bindawa", "Charanchi", "Dandume", "Danja", "Dan Musa", "Daura", "Dutsi", "Dutsin Ma", "Faskari", "Funtua", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", "Kankia", "Katsina", "Kurfi", "Kusada", "Mai'Adua", "Malumfashi", "Mani", "Mashi", "Matazu", "Musawa", "Rimi", "Sabuwa", "Safana", "Sandamu", "Zango"],
            "Kebbi": ["Aleiro", "Arewa Dandi", "Argungu", "Augie", "Bagudo", "Birnin Kebbi", "Bungudu", "Dandi", "Fakai", "Gwandu", "Jega", "Kalgo", "Koko/Besse", "Maiyama", "Ngaski", "Sakaba", "Shanga", "Suru", "Danko/Wasagu", "Yauri", "Zuru"],
            "Kogi": ["Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela Odolu", "Ijumu", "Kabba/Bunu", "Kogi", "Lokoja", "Mopa Muro", "Ofu", "Ogori/Magongo", "Okehi", "Okene", "Olamaboro", "Omala", "Yagba East", "Yagba West"],
            "Kwara": ["Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin South", "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke Ero", "Oyun", "Pategi"],
            "Lagos": ["Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Badagry", "Epe", "Eti Osa", "Ibeju-Lekki", "Ifako-Ijaiye", "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere"],
            "Nasarawa": ["Akwanga", "Awe", "Doma", "Karu", "Keana", "Keffi", "Kokona", "Lafia", "Nasarawa", "Nasarawa Egon", "Obi", "Toto", "Wamba"],
            "Niger": ["Agaie", "Agwara", "Bida", "Borgu", "Bosso", "Chanchaga", "Edati", "Gbako", "Gurara", "Katcha", "Kontagora", "Lapai", "Lavun", "Magama", "Mariga", "Mokwa", "Moya", "Paikoro", "Rafi", "Rijau", "Shiroro", "Suleja", "Tafa", "Wushishi"],
            "Ogun": ["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Egbado North", "Egbado South", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu North East", "Ijebu Ode", "Ikenne", "Imeko Afon", "Ipokia", "Obafemi Owode", "Odeda", "Odogbolu", "Ogun Waterside", "Remo North", "Shagamu"],
            "Ondo": ["Akoko North-East", "Akoko North-West", "Akoko South-West", "Akoko South-East", "Akure North", "Akure South", "Ese Odo", "Idanre", "Ifedore", "Ilaje", "Ile Oluji/Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"],
            "Osun": ["Atakunmosa East", "Atakunmosa West", "Aiyedaade", "Aiyedire", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Ife Central", "Ife East", "Ife North", "Ife South", "Egbedore", "Ejigbo", "Ifelodun", "Ilesa East", "Ilesa West", "Irepodun", "Irewole", "Isokan", "Iwo", "Obokun", "Odo Otin", "Ola Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"],
            "Oyo": ["Afijio", "Akinyele", "Atiba", "Atisbo", "Egbeda", "Ibadan North", "Ibadan North-East", "Ibadan North-West", "Ibadan South-East", "Ibadan South-West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Iddo", "Irepo", "Iseyin", "Itesiwaju", "Iwajowa", "Kajola", "Lagelu", "Ogbomosho North", "Ogbomosho South", "Ogo Oluwa", "Olorunsogo", "Oluyole", "Ona Ara", "Oorelope", "Oriekire", "Surulere"],
            "Plateau": ["Barkin Ladi", "Bassa", "Bokkos", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang South", "Langtang North", "Mangu", "Mikang", "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase"],
            "Rivers": ["Abua/Odual", "Ahoada East", "Ahoada West", "Akuku-Toru", "Andoni", "Asari-Toru", "Bonny", "Degema", "Eleme", "Emuoha", "Etche", "Gokana", "Ikwerre", "Khana", "Obio/Akpor", "Ogba/Egbema/Ndoni", "Ogu/Bolo", "Okrika", "Omuma", "Opobo/Nkoro", "Oyigbo", "Port Harcourt", "Tai"],
            "Sokoto": ["Binji", "Bodinga", "Dange Shuni", "Gada", "Goronyo", "Gudu", "Gwadabawa", "Illela", "Isa", "Kebbe", "Kware", "Rabah", "Sabon Birni", "Shagari", "Silame", "Sokoto North", "Sokoto South", "Tambuwal", "Tangaza", "Tureta", "Wamako", "Wurno", "Yabo"],
            "Taraba": ["Ardo Kola", "Bali", "Donga", "Gashaka", "Gassol", "Ibi", "Jalingo", "Karim Lamido", "Kurmi", "Lau", "Sardauna", "Takum", "Ussa", "Wukari", "Yorro", "Zing"],
            "Yobe": ["Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", "Jakusko", "Karasuwa", "Machina", "Nangere", "Nguru", "Potiskum", "Tarmuwa", "Yunusari", "Yusufari"],
            "Zamfara": ["Anka", "Bakura", "Birnin Magaji/Kiyaw", "Bukkuyum", "Bungudu", "Gummi", "Gusau", "Kaura Namoda", "Maradun", "Maru", "Shinkafi", "Talata Mafara", "Chafe", "Zurmi"]
        };

        // Explicit Configured Location Metrics (No Math.random())
        const STATIC_METRICS = {
            "Lagos": {
                "Ikeja": { wardsActivated: 10, mobilizedYouths: 3450, isConfigured: true },
                "Alimosho": { wardsActivated: 11, mobilizedYouths: 5820, isConfigured: true },
                "Lagos Island": { wardsActivated: 10, mobilizedYouths: 2980, isConfigured: true },
                "Ikorodu": { wardsActivated: 12, mobilizedYouths: 4120, isConfigured: true },
                "Surulere": { wardsActivated: 12, mobilizedYouths: 3890, isConfigured: true },
                "Eti Osa": { wardsActivated: 10, mobilizedYouths: 3100, isConfigured: true },
                "Agege": { wardsActivated: 11, mobilizedYouths: 3250, isConfigured: true },
                "Ajeromi-Ifelodun": { wardsActivated: 11, mobilizedYouths: 4100, isConfigured: true }
            },
            "Kano": {
                "Kano Municipal": { wardsActivated: 13, mobilizedYouths: 6100, isConfigured: true },
                "Dala": { wardsActivated: 12, mobilizedYouths: 4950, isConfigured: true },
                "Fagge": { wardsActivated: 10, mobilizedYouths: 3780, isConfigured: true },
                "Gwale": { wardsActivated: 10, mobilizedYouths: 3420, isConfigured: true },
                "Nasarawa": { wardsActivated: 11, mobilizedYouths: 4210, isConfigured: true },
                "Bichi": { wardsActivated: 11, mobilizedYouths: 2890, isConfigured: true }
            },
            "FCT - Abuja": {
                "Municipal Area Council": { wardsActivated: 12, mobilizedYouths: 5200, isConfigured: true },
                "Bwari": { wardsActivated: 10, mobilizedYouths: 3150, isConfigured: true },
                "Gwagwalada": { wardsActivated: 10, mobilizedYouths: 2840, isConfigured: true },
                "Kuje": { wardsActivated: 10, mobilizedYouths: 2110, isConfigured: true },
                "Abaji": { wardsActivated: 10, mobilizedYouths: 1850, isConfigured: true }
            },
            "Rivers": {
                "Port Harcourt": { wardsActivated: 20, mobilizedYouths: 5400, isConfigured: true },
                "Obio/Akpor": { wardsActivated: 17, mobilizedYouths: 4890, isConfigured: true },
                "Eleme": { wardsActivated: 10, mobilizedYouths: 2650, isConfigured: true },
                "Oyigbo": { wardsActivated: 10, mobilizedYouths: 2180, isConfigured: true }
            },
            "Oyo": {
                "Ibadan North": { wardsActivated: 12, mobilizedYouths: 4300, isConfigured: true },
                "Ibadan South-West": { wardsActivated: 12, mobilizedYouths: 3750, isConfigured: true },
                "Ogbomosho North": { wardsActivated: 10, mobilizedYouths: 2910, isConfigured: true },
                "Oyo East": { wardsActivated: 10, mobilizedYouths: 2450, isConfigured: true }
            },
            "Kaduna": {
                "Kaduna North": { wardsActivated: 12, mobilizedYouths: 4150, isConfigured: true },
                "Kaduna South": { wardsActivated: 13, mobilizedYouths: 4320, isConfigured: true },
                "Zaria": { wardsActivated: 13, mobilizedYouths: 4680, isConfigured: true },
                "Sabon Gari": { wardsActivated: 11, mobilizedYouths: 3100, isConfigured: true }
            },
            "Katsina": {
                "Katsina": { wardsActivated: 12, mobilizedYouths: 3950, isConfigured: true },
                "Daura": { wardsActivated: 11, mobilizedYouths: 3620, isConfigured: true },
                "Funtua": { wardsActivated: 11, mobilizedYouths: 3180, isConfigured: true }
            },
            "Anambra": {
                "Awka South": { wardsActivated: 12, mobilizedYouths: 3820, isConfigured: true },
                "Onitsha North": { wardsActivated: 15, mobilizedYouths: 4210, isConfigured: true },
                "Nnewi North": { wardsActivated: 10, mobilizedYouths: 2980, isConfigured: true }
            },
            "Enugu": {
                "Enugu North": { wardsActivated: 13, mobilizedYouths: 3410, isConfigured: true },
                "Enugu South": { wardsActivated: 13, mobilizedYouths: 3120, isConfigured: true },
                "Nsukka": { wardsActivated: 20, mobilizedYouths: 4150, isConfigured: true }
            },
            "Edo": {
                "Oredo": { wardsActivated: 12, mobilizedYouths: 3980, isConfigured: true },
                "Ikpoba Okha": { wardsActivated: 10, mobilizedYouths: 3150, isConfigured: true }
            },
            "Borno": {
                "Maiduguri": { wardsActivated: 15, mobilizedYouths: 4800, isConfigured: true },
                "Jere": { wardsActivated: 12, mobilizedYouths: 3210, isConfigured: true }
            },
            "Ogun": {
                "Abeokuta South": { wardsActivated: 15, mobilizedYouths: 3650, isConfigured: true },
                "Ado-Odo/Ota": { wardsActivated: 16, mobilizedYouths: 4120, isConfigured: true },
                "Ijebu Ode": { wardsActivated: 11, mobilizedYouths: 2890, isConfigured: true }
            }
        };

        // Strict lookup function
        function getMetrics(state, lga) {
            if (!state || !lga) return null;
            if (STATIC_METRICS[state] && STATIC_METRICS[state][lga]) {
                return STATIC_METRICS[state][lga];
            }
            return { wardsActivated: 0, mobilizedYouths: 0, isConfigured: false };
        }

        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const barsIcon = document.getElementById('menu-icon-bars');
            const xIcon = document.getElementById('menu-icon-x');

            if (mobileBtn && mobileMenu) {
                mobileBtn.addEventListener('click', function() {
                    const isHidden = mobileMenu.classList.contains('hidden');
                    if (isHidden) {
                        mobileMenu.classList.remove('hidden');
                        barsIcon.classList.add('hidden');
                        xIcon.classList.remove('hidden');
                    } else {
                        mobileMenu.classList.add('hidden');
                        barsIcon.classList.remove('hidden');
                        xIcon.classList.add('hidden');
                    }
                });

                document.querySelectorAll('.mobile-nav-link').forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('hidden');
                        barsIcon.classList.remove('hidden');
                        xIcon.classList.add('hidden');
                    });
                });
            }

            // Populate States Dropdowns
            const stateSelect = document.getElementById('state-select');
            const formStateSelect = document.getElementById('form-state');
            const lgaSelect = document.getElementById('lga-select');
            const formLgaSelect = document.getElementById('form-lga');
            const searchBtn = document.getElementById('search-ward-btn');

            Object.keys(NIGERIA_DATA).sort().forEach(state => {
                const opt1 = document.createElement('option');
                opt1.value = state;
                opt1.textContent = state;
                stateSelect.appendChild(opt1);

                const opt2 = document.createElement('option');
                opt2.value = state;
                opt2.textContent = state;
                formStateSelect.appendChild(opt2);
            });

            // Grassroots Explorer State Change
            stateSelect.addEventListener('change', function() {
                const state = this.value;
                lgaSelect.innerHTML = '<option value="">-- Choose LGA --</option>';
                if (state && NIGERIA_DATA[state]) {
                    lgaSelect.disabled = false;
                    NIGERIA_DATA[state].forEach(lga => {
                        const opt = document.createElement('option');
                        opt.value = lga;
                        opt.textContent = lga;
                        lgaSelect.appendChild(opt);
                    });
                } else {
                    lgaSelect.disabled = true;
                    searchBtn.disabled = true;
                }
            });

            lgaSelect.addEventListener('change', function() {
                searchBtn.disabled = !this.value;
            });

            // Registration Form State Change
            formStateSelect.addEventListener('change', function() {
                const state = this.value;
                formLgaSelect.innerHTML = '<option value="">Select LGA</option>';
                if (state && NIGERIA_DATA[state]) {
                    formLgaSelect.disabled = false;
                    NIGERIA_DATA[state].forEach(lga => {
                        const opt = document.createElement('option');
                        opt.value = lga;
                        opt.textContent = lga;
                        formLgaSelect.appendChild(opt);
                    });
                } else {
                    formLgaSelect.disabled = true;
                }
            });

            // Verify Structure Click
            searchBtn.addEventListener('click', function() {
                const state = stateSelect.value;
                const lga = lgaSelect.value;
                const resultDiv = document.getElementById('structure-result');

                if (!state || !lga) return;

                const metrics = getMetrics(state, lga);
                const wardsText = (metrics && metrics.isConfigured) ? metrics.wardsActivated + ' Wards' : 'Data not yet available';
                const youthsText = (metrics && metrics.isConfigured) ? metrics.mobilizedYouths.toLocaleString() + ' Voters' : 'Data not yet available';

                resultDiv.innerHTML = \`
                    <div class="space-y-4 text-left">
                        <div class="flex justify-between items-center border-b border-slate-800 pb-3">
                            <span class="text-[10px] sm:text-xs text-slate-400 font-mono font-bold uppercase tracking-wider">
                                STRUCTURE VERIFIED
                            </span>
                            <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] rounded font-mono font-bold uppercase border border-emerald-500/30">
                                ACTIVE WARD COMMAND
                            </span>
                        </div>
                        <h4 class="text-lg sm:text-xl font-bold text-white">\${lga} LGA, \${state} State</h4>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                            <div class="bg-slate-900 p-4 rounded-lg border border-slate-800">
                                <div class="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Wards Activated</div>
                                <div class="text-base font-bold text-amber-300 mt-1 font-mono">\${wardsText}</div>
                            </div>
                            <div class="bg-slate-900 p-4 rounded-lg border border-slate-800">
                                <div class="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Mobilized Youths</div>
                                <div class="text-base font-bold text-emerald-400 mt-1 font-mono">\${youthsText}</div>
                            </div>
                            <div class="bg-slate-900 p-4 rounded-lg border border-slate-800">
                                <div class="text-[10px] text-slate-400 font-medium uppercase tracking-wider">APC Status</div>
                                <div class="text-base font-bold text-apc-blue mt-1 font-mono">100% Prepared</div>
                            </div>
                        </div>
                        <div class="pt-2 border-t border-slate-900 text-xs text-slate-400 leading-relaxed">
                            Grassroots figures are based on the currently configured location data. Live coordinator records will be available when the database is connected.
                        </div>
                    </div>
                \`;
            });

            // Handle Member Registration Submit
            const regForm = document.getElementById('member-reg-form');
            const resultBox = document.getElementById('form-result-box');
            const errorBanner = document.getElementById('error-banner');
            const errorText = document.getElementById('error-text');

            regForm.addEventListener('submit', function(e) {
                e.preventDefault();
                errorBanner.classList.add('hidden');

                const name = document.getElementById('reg-name').value.trim();
                const phone = document.getElementById('reg-phone').value.trim();
                const state = document.getElementById('form-state').value;
                const lga = document.getElementById('form-lga').value;
                const ward = document.getElementById('form-ward').value.trim();
                const endorse = document.getElementById('endorse-check').checked;
                const privacy = document.getElementById('privacy-check').checked;

                // Validate phone
                const phoneRegex = /^(\\+?234|0)[789][01]\\d{8}$/;
                const cleanedPhone = phone.replace(/\\s+/g, '').replace(/-/g, '');

                if (!phoneRegex.test(cleanedPhone)) {
                    errorText.textContent = 'Please enter a valid Nigerian phone number (e.g. 08012345678 or +2348012345678).';
                    errorBanner.classList.remove('hidden');
                    return;
                }

                if (!privacy) {
                    errorText.textContent = 'You must accept the Privacy Notice & Consent to proceed.';
                    errorBanner.classList.remove('hidden');
                    return;
                }

                const regId = 'TMS-2027-' + Math.floor(100000 + Math.random() * 900000);
                const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

                document.getElementById('pass-name').textContent = name;
                document.getElementById('pass-phone').textContent = phone;
                document.getElementById('pass-location').textContent = ward + ', ' + lga + ' LGA';
                document.getElementById('pass-state').textContent = state + ' State';
                document.getElementById('pass-date').textContent = today;
                document.getElementById('pass-reg-id').textContent = regId;

                regForm.classList.add('hidden');
                resultBox.classList.remove('hidden');
            });

            document.getElementById('print-pass-btn').addEventListener('click', function() {
                window.print();
            });

            document.getElementById('reset-form-btn').addEventListener('click', function() {
                regForm.reset();
                resultBox.classList.add('hidden');
                regForm.classList.remove('hidden');
            });
        });
    </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf8');
console.log('Successfully generated updated index.html with digital pass and zero disclaimers');
