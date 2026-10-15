/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Smartphone, Monitor, Code, Wifi, Battery, Signal } from 'lucide-react';
import { LodgeExperience } from './LodgeExperience';

interface PhoneMockupProps {
  viewMode: 'mockup' | 'full' | 'docs';
  onViewChange: (mode: 'mockup' | 'full' | 'docs') => void;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  viewMode,
  onViewChange,
}) => {
  if (viewMode === 'full') {
    return (
      <div className="w-full min-h-screen bg-[#0a1212]">
        <LodgeExperience />
      </div>
    );
  }

  return (
    <div className="py-6 sm:py-10 px-2 sm:px-4 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      
      {/* Smartphone Outer Chassis (Titanium Black Frame) */}
      <div className="relative w-full max-w-[420px] aspect-[9/19.5] max-h-[880px] bg-[#121214] rounded-[52px] p-[10px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.12),0_0_0_4px_#27272a] overflow-hidden flex flex-col">
        
        {/* Physical bezel rim highlight */}
        <div className="absolute inset-0 rounded-[52px] pointer-events-none ring-1 ring-white/10" />

        {/* Screen Bezel and Inner Display Area */}
        <div className="relative w-full h-full bg-[#0a1212] rounded-[42px] overflow-hidden flex flex-col">
          
          {/* iOS Dynamic Island & Status Bar */}
          <div className="sticky top-0 left-0 right-0 z-50 bg-[#0a1212]/90 backdrop-blur-md px-6 pt-3 pb-2 flex items-center justify-between text-white text-[12px] font-medium tracking-tight select-none">
            <span className="font-mono text-[11px] font-semibold text-neutral-200">09:41</span>
            
            {/* Dynamic Island Pill */}
            <div className="w-24 h-5 bg-black rounded-full mx-auto flex items-center justify-center border border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-800 ml-auto mr-1.5" />
            </div>

            <div className="flex items-center gap-1.5 text-neutral-200">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Scrollable Screen Content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-none scroll-smooth">
            <LodgeExperience />
          </div>

          {/* iOS Home Indicator Bar */}
          <div className="absolute bottom-1 left-0 right-0 flex justify-center pointer-events-none z-50">
            <div className="w-32 h-1 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Device frame footer notes */}
      <div className="mt-4 text-center">
        <p className="text-[11px] text-neutral-400 font-light">
          Simulador Mobile-First de Alta Fidelidad (390 × 844 px). Desplázate para probar la interacción.
        </p>
      </div>
    </div>
  );
};
