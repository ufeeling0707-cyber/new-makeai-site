import React from 'react';
import { PHILOSOPHY } from '../constants';
import { AlertTriangle, Lightbulb, ShieldCheck } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-ai-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            {PHILOSOPHY.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {PHILOSOPHY.solution}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-ai-gray p-8 rounded-2xl border border-gray-800 hover:border-neon-pink/50 transition-all duration-300">
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
              <AlertTriangle className="text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{PHILOSOPHY.problems[0].title}</h3>
            <p className="text-gray-400 leading-relaxed">{PHILOSOPHY.problems[0].desc}</p>
          </div>
          
          <div className="bg-ai-gray p-8 rounded-2xl border border-gray-800 hover:border-neon-blue/50 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{PHILOSOPHY.problems[1].title}</h3>
            <p className="text-gray-400 leading-relaxed">{PHILOSOPHY.problems[1].desc}</p>
          </div>

          <div className="bg-ai-gray p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300">
             <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6">
              <ShieldCheck className="text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{PHILOSOPHY.problems[2].title}</h3>
            <p className="text-gray-400 leading-relaxed">{PHILOSOPHY.problems[2].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;