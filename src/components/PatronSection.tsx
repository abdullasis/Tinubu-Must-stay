import React, { useState } from 'react';
import { Megaphone, Handshake, Quote, Star } from 'lucide-react';

const MASARI_IMAGE_URL = 'https://i.ibb.co/RkvRr8TW/Ibrahim-Masari.jpg';

export const PatronSection: React.FC = () => {
  const [masariImgError, setMasariImgError] = useState(false);

  return (
    <section id="patron" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-apc-blue/10 text-apc-blue text-xs font-bold uppercase tracking-widest">
            Patronage & Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
            Under the Guidance of Strategic Leadership
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Anchored by seasoned statesman Alhaji Ibrahim Kabir Masari, championing youth inclusion and political continuity.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-5 bg-slate-900 text-white relative min-h-[350px]">
            {!masariImgError ? (
              <img
                src={MASARI_IMAGE_URL}
                alt="Alhaji Ibrahim Kabir Masari"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top opacity-90"
                onError={() => setMasariImgError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-b from-cyan-900 to-slate-950 flex flex-col items-center justify-center p-8 text-center">
                <Star className="w-16 h-16 text-amber-400 mb-4 fill-amber-400" />
                <h3 className="text-2xl font-black text-white">Alhaji Ibrahim Kabir Masari</h3>
                <p className="text-xs text-cyan-200 mt-1">Special Adviser to the President</p>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                Grand Patron
              </span>
              <h3 className="text-2xl font-black text-white">Alhaji Ibrahim Kabir Masari</h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Special Adviser to the President on Political & Other Matters
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-slate-900">
                The Strategic Engine for APC Youth Mobilization
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                As Grand Patron of the <strong className="text-slate-900">Tinubu Must Stay</strong> movement, Alhaji Ibrahim Kabir Masari provides vital strategic direction, ensuring Nigerian youths across all 36 States, the FCT, 774 LGAs, and 8,820 Wards are organized, empowered, and mobilized to safeguard democratic stability and political continuity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div className="p-2.5 bg-emerald-100 text-apc-green rounded-lg shrink-0">
                  <Megaphone className="w-5 h-5 text-apc-green" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Grassroots Outreach</h4>
                  <p className="text-xs text-slate-500">Structured ward-by-ward youth alignment.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div className="p-2.5 bg-blue-100 text-apc-blue rounded-lg shrink-0">
                  <Handshake className="w-5 h-5 text-apc-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Political Mentorship</h4>
                  <p className="text-xs text-slate-500">Bridging federal governance with youth action.</p>
                </div>
              </div>
            </div>

            <blockquote className="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-400 text-xs italic text-slate-700 flex gap-3">
              <Quote className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <span>
                "The future of Nigeria rests upon the active participation and unwavering resolve of our youth. President Asiwaju Bola Ahmed Tinubu's vision requires sustained commitment to deliver full transformation."
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
