/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopNav } from './components/TopNav';
import { PhoneMockup } from './components/PhoneMockup';
import { GoogleSitesExporter } from './components/GoogleSitesExporter';
import { StayCalculatorModal } from './components/StayCalculatorModal';
import { Smartphone, Monitor, BookOpen, Calculator } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'mockup' | 'full' | 'docs'>('mockup');
  const [calculatorOpen, setCalculatorOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#070e0e] text-[#f1eee8] flex flex-col font-sans selection:bg-[#d6a858]/30">
      {/* 3-Zone Top Bar Contract */}
      <TopNav
        activeView={activeView}
        onViewChange={setActiveView}
        onOpenCalculator={() => setCalculatorOpen(true)}
      />

      {/* Mode Switcher Bar (Mobile & Desktop quick segmented toggle) */}
      <div className="bg-[#0b1615] border-b border-white/5 py-2 px-4">
        <div className="max-w-xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 p-1 bg-black/40 rounded-xl border border-white/5 text-xs w-full sm:w-auto">
            <button
              onClick={() => setActiveView('mockup')}
              className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap text-[11px] font-medium ${
                activeView === 'mockup'
                  ? 'bg-[#183933] text-amber-300 shadow-sm border border-amber-400/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Simulador iPhone</span>
            </button>

            <button
              onClick={() => setActiveView('full')}
              className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap text-[11px] font-medium ${
                activeView === 'full'
                  ? 'bg-[#183933] text-amber-300 shadow-sm border border-amber-400/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Pantalla Completa</span>
            </button>

            <button
              onClick={() => setActiveView('docs')}
              className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap text-[11px] font-medium ${
                activeView === 'docs'
                  ? 'bg-[#183933] text-amber-300 shadow-sm border border-amber-400/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Kit Google Sites</span>
            </button>
          </div>

          <button
            onClick={() => setCalculatorOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-400/25 text-[11px] font-mono transition-colors"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Cotizador</span>
          </button>
        </div>
      </div>

      {/* Main View Area */}
      <main className="flex-1 w-full">
        {activeView === 'docs' ? (
          <GoogleSitesExporter />
        ) : (
          <PhoneMockup
            viewMode={activeView}
            onViewChange={setActiveView}
          />
        )}
      </main>

      {/* Global Calculator Modal */}
      <StayCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
      />
    </div>
  );
}
