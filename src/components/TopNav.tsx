/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { SITE_DATA } from '../data/siteContent';

interface TopNavProps {
  activeView: 'mockup' | 'full' | 'docs';
  onViewChange: (view: 'mockup' | 'full' | 'docs') => void;
  onOpenCalculator: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  activeView,
  onViewChange,
  onOpenCalculator,
}) => {
  const handleAdvisorClick = () => {
    window.open(
      `https://wa.me/${SITE_DATA.brand.phoneClean}?text=${encodeURIComponent(
        'Hola, solicito asesoramiento de reservas para planificar una estadía en Puerto Yacarey.'
      )}`,
      '_blank'
    );
  };

  return (
    <header className="sticky top-0 z-40 bg-[#081211]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-8 transition-colors">
      {/* Zone 1: Brand wordmark (single text element, display face, whitespace-nowrap) */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onViewChange('mockup');
        }}
        className="font-serif text-lg sm:text-xl font-light tracking-wide text-white hover:text-amber-200 transition-colors whitespace-nowrap shrink-0"
      >
        Puerto Yacarey
      </a>

      {/* Zone 2: 4 concise single-line text links with subtle hover underlines */}
      <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-neutral-300">
        <button
          onClick={() => onViewChange('mockup')}
          className={`hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 ${
            activeView === 'mockup' ? 'text-amber-300 font-semibold' : ''
          }`}
        >
          Vista Móvil
        </button>

        <button
          onClick={() => onViewChange('full')}
          className={`hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 ${
            activeView === 'full' ? 'text-amber-300 font-semibold' : ''
          }`}
        >
          Pantalla Completa
        </button>

        <button
          onClick={() => onViewChange('docs')}
          className={`hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 ${
            activeView === 'docs' ? 'text-amber-300 font-semibold' : ''
          }`}
        >
          Kit Google Sites
        </button>

        <button
          onClick={onOpenCalculator}
          className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 text-amber-200/90"
        >
          Cotizador de Estadía
        </button>
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={handleAdvisorClick}
          className="px-4 py-2 text-xs font-medium text-[#091513] bg-[#d6a858] hover:bg-[#e2b769] rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Asesor Personalizado</span>
        </button>
      </div>
    </header>
  );
};
