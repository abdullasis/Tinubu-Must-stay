import React from 'react';
import { GraduationCap, Laptop, TrendingUp } from 'lucide-react';

export const MandateSection: React.FC = () => {
  return (
    <section id="mandate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-apc-green/10 text-apc-green text-xs font-bold uppercase tracking-widest">
            Pillars of the Movement
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
            Why Nigerian Youths Stand With Asiwaju Bola Ahmed Tinubu
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            We stand firmly with APC because performance, courage, and vision deserve second-term continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/70 hover:shadow-xl transition duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl mb-6 shadow-md shadow-emerald-600/20">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Youth Empowerment & Student Loans
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Implementation of the Nigerian Student Loan Scheme (NELFUND) providing tuition-free higher education access for millions of young Nigerians across the federation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-apc-green">
              Direct Youth Educational Support
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/70 hover:shadow-xl transition duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-apc-blue text-white flex items-center justify-center text-2xl mb-6 shadow-md shadow-blue-600/20">
                <Laptop className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                3MTT & Digital Economy
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Training 3 million technical talents and creating tech-driven jobs, empowering the youth to lead Africa's digital economy revolution under APC.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-apc-blue">
              Technology & Skills Pipeline
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/70 hover:shadow-xl transition duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-apc-red text-white flex items-center justify-center text-2xl mb-6 shadow-md shadow-red-600/20">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Economic Reform & Infrastructure
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Bold fiscal reforms, infrastructure developments, and direct youth inclusion in cabinet decisions positioning Nigeria for long-term prosperity.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs font-semibold text-apc-red">
              Long-term Structural Transformation
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
