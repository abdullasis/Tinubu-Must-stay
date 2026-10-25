import React from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MetricsSection } from './components/MetricsSection';
import { PatronSection } from './components/PatronSection';
import { MandateSection } from './components/MandateSection';
import { GrassrootsExplorer } from './components/GrassrootsExplorer';
import { RegistrationSection } from './components/RegistrationSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-apc-green selection:text-white flex flex-col">
      <AnnouncementBar onJoinClick={scrollToRegister} />
      <Header />
      <main className="grow">
        <HeroSection />
        <MetricsSection />
        <PatronSection />
        <MandateSection />
        <GrassrootsExplorer />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
}
