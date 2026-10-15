/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ChevronDown, 
  MapPin, 
  Compass, 
  Fish, 
  BedDouble, 
  UtensilsCrossed, 
  HelpCircle, 
  MessageSquare, 
  Check, 
  Sparkles, 
  Clock, 
  Waves, 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  Car, 
  Plane, 
  Calculator,
  ExternalLink,
  Info
} from 'lucide-react';
import { SITE_DATA, FAQItem } from '../data/siteContent';
import { InteractiveVideoReel } from './InteractiveVideoReel';
import { StayCalculatorModal } from './StayCalculatorModal';

export const LodgeExperience: React.FC = () => {
  const [activeUnit, setActiveUnit] = useState<string>('rustica');
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [showCalculator, setShowCalculator] = useState<boolean>(false);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const selectedAccommodation = SITE_DATA.accommodations.find(a => a.id === activeUnit) || SITE_DATA.accommodations[0];

  const handleAdvisorWhatsApp = (customTopic?: string) => {
    const text = customTopic 
      ? `Hola, me comunico desde la web de Puerto Yacarey para solicitar asesoramiento personalizado sobre: ${customTopic}.`
      : `Hola, deseo hablar con un Especialista de Reservas de Puerto Yacarey para planificar mi estadía en el lodge.`;
    window.open(`https://wa.me/${SITE_DATA.brand.phoneClean}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="w-full bg-[#0a1212] text-[#f1eee8] font-sans antialiased pb-28 selection:bg-[#c99a4e]/30">
      
      {/* ============================================================== */}
      {/* 1. HERO / PANTALLA DE INICIO                                  */}
      {/* ============================================================== */}
      <section id="inicio" className="relative px-4 pt-6 pb-12 max-w-xl mx-auto">
        <div className="text-center mb-6">
          <div className="text-[11px] font-mono tracking-[0.25em] text-[#d6a858] uppercase mb-2">
            Alto Paraná · Itatí, Corrientes
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-white leading-[1.15] mb-3 text-balance">
            La inmensidad del río. La calma de un refugio exclusivo.
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-md mx-auto">
            Un lodge privado sobre las costas del Alto Paraná donde la pesca deportiva de clase mundial, la arquitectura en sintonía con la selva y el descanso sobrio conviven en perfecta armonía.
          </p>
        </div>

        {/* Video Reel Institucional 1 */}
        <div className="mb-4">
          <InteractiveVideoReel
            videoUrl="https://i.imgur.com/oRJnasx.mp4"
            fallbackImage="/src/assets/images/cabana_rustica_bosque_1792077454574.jpg"
            title="Puerto Yacarey"
            subtitle="El latido del Alto Paraná frente a tus ojos"
            tag="Video Reel 01 · Institucional"
            embedCode={SITE_DATA.modulesGoogleSites[0].videoEmbedCode}
            isHero={true}
          />
        </div>

        {/* Micro-proof unboxed indicators */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-neutral-400 font-light pt-2">
          <span>Costa sobre el Paraná</span>
          <span aria-hidden="true">·</span>
          <span>Playa de arena</span>
          <span aria-hidden="true">·</span>
          <span>Pesca de Dorado y Surubí</span>
          <span aria-hidden="true">·</span>
          <span>Piscina infinita</span>
        </div>

        {/* Scroll invitation */}
        <div className="mt-8 text-center">
          <a
            href="#origen"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-amber-300 transition-colors"
          >
            <span>Desliza para explorar la experiencia</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. NOSOTROS (EL ORIGEN)                                       */}
      {/* ============================================================== */}
      <section id="origen" className="py-14 px-4 border-t border-white/5 bg-[#080e0e]">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="text-[11px] font-mono tracking-widest text-[#d6a858] uppercase">
            02 · Nuestro Origen
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-white leading-tight">
            Nacidos del amor por el río y la naturaleza viva.
          </h2>
          
          <div className="space-y-4 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-l border-amber-500/20 pl-4 py-1">
            <p>
              Puerto Yacarey nació de la devoción de <strong>dos primos</strong> apasionados por el Alto Paraná, la pesca deportiva y los silencios milenarios del monte correntino.
            </p>
            <p>
              Lejos del turismo impersonal, concebimos este lodge como un santuario donde conviven pescadores deportivos, familias que buscan desconexión genuina y la fauna autóctona en su hábitat natural: 
              <span className="text-amber-200/90"> monos carayá</span> que cruzan las copas al amanecer, <span className="text-amber-200/90">carpinchos</span> en las orillas arenosas, <span className="text-amber-200/90">yacarés</span> al sol y aves ribereñas que custodian el horizonte.
            </p>
            <p>
              Cada estructura fue erigida respetando el terreno, resguardando la arboleda nativa y rindiendo homenaje a la majestuosidad del Paraná.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/10 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-neutral-300">
              <span className="font-semibold text-white block mb-0.5">Sustentabilidad y Conexión</span>
              Preservamos corredores biológicos nativos para que la vida silvestre conviva en libertad junto a los huéspedes.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. MÓDULO DE ALOJAMIENTO (CABAÑAS & SUITES)                    */}
      {/* ============================================================== */}
      <section id="alojamiento" className="py-14 px-4 border-t border-white/5 max-w-xl mx-auto">
        <div className="mb-6">
          <div className="text-[11px] font-mono tracking-widest text-[#d6a858] uppercase mb-1">
            03 · Alojamiento Exclusivo
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-white mb-2">
            Tres maneras de habitar el río.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
            Arquitectura en maderas nobles y suites contemporáneas. Todas las unidades cuentan con el mismo equipamiento de alto confort y acceso pleno e irrestricto a todas las amenidades del lodge.
          </p>
        </div>

        {/* Video Reel 2 / Tour de Alojamientos */}
        <div className="mb-6">
          <InteractiveVideoReel
            fallbackImage={selectedAccommodation.image}
            title={selectedAccommodation.name}
            subtitle={selectedAccommodation.subtitle}
            tag="Video Reel 02 · Tour de Alojamientos"
            embedCode={SITE_DATA.modulesGoogleSites[2].videoEmbedCode}
          />
        </div>

        {/* Accommodation Selector Buttons */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-neutral-900/90 rounded-xl border border-white/10 mb-6">
          {SITE_DATA.accommodations.map((unit) => (
            <button
              key={unit.id}
              onClick={() => setActiveUnit(unit.id)}
              className={`py-2 px-2 rounded-lg text-center transition-all ${
                activeUnit === unit.id
                  ? 'bg-[#152e2a] text-amber-300 font-medium shadow-sm border border-amber-400/30'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <span className="block text-[11px] truncate">{unit.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Unit Details Card */}
        <div className="p-5 rounded-2xl bg-neutral-900/70 border border-white/10 space-y-4">
          <div>
            <span className="text-[10px] font-mono tracking-wider text-amber-300 uppercase block">
              {selectedAccommodation.category}
            </span>
            <h3 className="font-serif text-xl font-light text-white mt-0.5">
              {selectedAccommodation.name}
            </h3>
            <p className="text-xs text-neutral-300 font-light mt-1.5 leading-relaxed">
              {selectedAccommodation.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 py-2 border-y border-white/10 text-xs">
            <div>
              <span className="text-[10px] text-neutral-400 block font-mono">CAPACIDAD</span>
              <span className="font-medium text-neutral-200">{selectedAccommodation.capacity}</span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 block font-mono">DISTRIBUCIÓN</span>
              <span className="font-medium text-neutral-200">{selectedAccommodation.beds}</span>
            </div>
          </div>

          {/* Features list */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase block mb-1">
              Equipamiento Incluido
            </span>
            {selectedAccommodation.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Transparent Daily Rates */}
          <div className="pt-3 border-t border-white/10">
            <span className="text-[10px] font-mono tracking-wider text-amber-300 uppercase block mb-2">
              Tarifas Oficiales por Persona / Día
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-neutral-950/70 border border-white/5">
                <span className="text-[11px] text-neutral-400 block">Solo Desayuno</span>
                <span className="text-base font-serif text-white font-mono font-semibold">
                  ${selectedAccommodation.rateBreakfast.toLocaleString('es-AR')}
                </span>
                <span className="text-[10px] text-neutral-500 block">por huésped</span>
              </div>
              <div className="p-3 rounded-xl bg-[#142823] border border-amber-400/20">
                <span className="text-[11px] text-amber-200 block">Servicio Completo</span>
                <span className="text-base font-serif text-amber-300 font-mono font-semibold">
                  ${selectedAccommodation.rateFullBoard.toLocaleString('es-AR')}
                </span>
                <span className="text-[10px] text-amber-200/60 block">Desayuno, Almuerzo, Cena + Bebidas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Policy for Minors Box */}
        <div className="mt-4 p-4 rounded-xl bg-[#111e1c] border border-amber-400/20 text-xs text-neutral-300">
          <div className="flex items-center gap-2 text-amber-300 font-medium mb-1">
            <Info className="w-4 h-4 shrink-0" />
            <span>Política Oficial de Menores</span>
          </div>
          <ul className="space-y-1 text-[11px] text-neutral-300 list-disc list-inside">
            <li><strong>0 a 4 años:</strong> Alojamiento SIN CARGO (Gratis).</li>
            <li><strong>5 a 12 años:</strong> 50% DE DESCUENTO (incluye desayuno / servicio de comidas se coordina a medida).</li>
          </ul>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. MÓDULO DE PESCA DEPORTIVA & EXPERIENCIAS NÁUTICAS           */}
      {/* ============================================================== */}
      <section id="pesca" className="py-14 px-4 border-t border-white/5 bg-[#080d0d]">
        <div className="max-w-xl mx-auto">
          <div className="mb-6">
            <div className="text-[11px] font-mono tracking-widest text-[#d6a858] uppercase mb-1">
              04 · Pesca Deportiva &amp; Alto Paraná
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-white mb-2">
              El reino del Dorado y el Surubí.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Pozos profundos, correderas de piedra y bancos de arena vírgenes. Embarcaciones trackers de última generación con guías profesionales baqueanos que conocen cada centímetro del cauce.
            </p>
          </div>

          {/* Video Reel 3 / Pesca en Acción */}
          <div className="mb-6">
            <InteractiveVideoReel
              fallbackImage="/src/assets/images/pesca_dorado_parana_1792077475097.jpg"
              title="El Tigre del Paraná"
              subtitle="Batallas épicas sobre aguas doradas"
              tag="Video Reel 03 · Expedición Náutica"
              embedCode={SITE_DATA.modulesGoogleSites[3].videoEmbedCode}
            />
          </div>

          {/* Modalities Chips */}
          <div className="p-3 rounded-xl bg-neutral-900/60 border border-white/10 mb-6">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 block mb-2">
              Modalidades Practicadas
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded bg-neutral-800 text-neutral-200">Fly Fishing (Mosca)</span>
              <span className="px-2.5 py-1 rounded bg-neutral-800 text-neutral-200">Baitcasting</span>
              <span className="px-2.5 py-1 rounded bg-neutral-800 text-neutral-200">Spinning</span>
              <span className="px-2.5 py-1 rounded bg-neutral-800 text-neutral-200">Carnada Viva</span>
            </div>
          </div>

          {/* All Inclusive Packages Cards */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                Paquetes Todo Incluido (Por Persona)
              </span>
              <button
                onClick={() => setShowCalculator(true)}
                className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1 font-mono"
              >
                <Calculator className="w-3.5 h-3.5" />
                Calcular Total
              </button>
            </div>

            {SITE_DATA.fishingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 hover:border-amber-400/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-serif text-lg text-white font-medium">
                      {pkg.duration}
                    </h3>
                    <div className="text-[11px] text-amber-300 font-mono">
                      {pkg.fishingDays}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-neutral-400 block font-mono">Base Doble</span>
                    <span className="text-sm font-semibold text-white font-mono">
                      ${pkg.rateDoble.toLocaleString('es-AR')}
                    </span>
                    <span className="text-[10px] text-amber-200/80 block font-mono">
                      Base Triple: ${pkg.rateTriple.toLocaleString('es-AR')}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-neutral-300 font-light mb-3">
                  {pkg.description}
                </p>

                <div className="space-y-1 border-t border-white/5 pt-2">
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-neutral-400">
                      <Check className="w-3 h-3 text-amber-400/80 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Transparency: What is included and what is not */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#0e1a17] border border-emerald-500/20">
              <span className="font-semibold text-emerald-400 block mb-1 text-[11px] font-mono uppercase tracking-wider">
                ✓ Todo Incluido en la Lancha
              </span>
              <p className="text-[11px] text-neutral-300 leading-relaxed">
                Alojamiento, pensión completa con bebidas en comidas, lancha con guía matriculado, conservadora con hielo, bebidas, gaseosas y <strong>18 cervezas frías por jornada</strong>, más cañas, reeles y multifilamento de primera línea.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-white/10">
              <span className="font-semibold text-neutral-300 block mb-1 text-[11px] font-mono uppercase tracking-wider">
                ✕ No Incluye
              </span>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Carnadas vivas y licencias provinciales de pesca (nuestro asesor de reservas puede orientarlo para tramitarla ágilmente previo a su llegada).
              </p>
            </div>
          </div>

          {/* Official Schedules */}
          <div className="mt-4 p-3 rounded-xl bg-neutral-900/40 border border-white/5 flex items-center gap-3 text-xs text-neutral-300">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <strong>Horarios Oficiales:</strong> Check-in a partir de las <strong>14:00 hs</strong> (sin excepción) · Check-out hasta las <strong>10:00 hs</strong>.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. MÓDULO DE GASTRONOMÍA & RELAX                               */}
      {/* ============================================================== */}
      <section id="gastronomia" className="py-14 px-4 border-t border-white/5 max-w-xl mx-auto">
        <div className="mb-6">
          <div className="text-[11px] font-mono tracking-widest text-[#d6a858] uppercase mb-1">
            05 · Gastronomía Autóctona &amp; Relax
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-white mb-2">
            Sabores regionales y el sosiego del río.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
            La experiencia no culmina al regresar a la costa. Se enriquece en torno al fuego, el vino argentino y la cocina del Litoral.
          </p>
        </div>

        {/* Video Reel 4 / Gastronomía y Atardecer */}
        <div className="mb-6">
          <InteractiveVideoReel
            fallbackImage="/src/assets/images/quincho_gastronomia_parana_1792077499915.jpg"
            title="Quincho Regional & Salón de Río"
            subtitle="Platos autóctonos, asado correntino y pescados de río"
            tag="Video Reel 04 · Experiencia Culinaria"
            embedCode={SITE_DATA.modulesGoogleSites[4].videoEmbedCode}
          />
        </div>

        {/* Highlights List */}
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-neutral-900/70 border border-white/10 flex items-start gap-3">
            <UtensilsCrossed className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <strong className="text-white block mb-0.5">Quincho Regional & Asador</strong>
              Especializado en gastronomía autóctona, cortes a la parrilla, pescados de río frescos y recetas tradicionales correntinas.
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-900/70 border border-white/10 flex items-start gap-3">
            <Waves className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <strong className="text-white block mb-0.5">Piscina Infinita sobre el Río Paraná</strong>
              Solárium de madera con reposeras y vista ininterrumpida al horizonte fluvial, ideal para contemplar la caída del sol.
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-900/70 border border-white/10 flex items-start gap-3">
            <Compass className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <strong className="text-white block mb-0.5">Paseos Náuticos & Safaris Fotográficos</strong>
              Navegaciones tranquilas por riachos e islas para avistar monos carayá, carpinchos y aves en su hábitat natural.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. PREGUNTAS FRECUENTES (FAQ ACORDEÓN)                         */}
      {/* ============================================================== */}
      <section id="faq" className="py-14 px-4 border-t border-white/5 bg-[#080d0d]">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-[11px] font-mono tracking-widest text-[#d6a858] uppercase mb-1">
              06 · Claridad Ante Todo
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-white mb-2">
              Preguntas Frecuentes
            </h2>
            <p className="text-xs text-neutral-400 font-light max-w-sm mx-auto">
              Respuestas directas para despejar todas sus dudas antes de coordinar su reserva con nuestro especialista.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-2.5">
            {SITE_DATA.faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-white/10 bg-neutral-900/70 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-medium text-white hover:text-amber-300 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-lg text-amber-400 font-mono shrink-0 ml-2">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-neutral-300 font-light leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. MÓDULO DE UBICACIÓN, MAPA Y CÓMO LLEGAR                    */}
      {/* ============================================================== */}
      <section id="ubicacion" className="py-14 px-4 border-t border-white/5 max-w-xl mx-auto">
        <div className="mb-6">
          <div className="text-[11px] font-mono tracking-widest text-[#d6a858] uppercase mb-1">
            07 · Ubicación &amp; Accesos
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-white mb-2">
            En el corazón del Alto Paraná.
          </h2>
          <div className="flex items-center gap-1.5 text-xs text-amber-300 font-mono">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>Ruta Nacional N°12, KM 1098. Itatí, Corrientes, Argentina</span>
          </div>
        </div>

        {/* Google Maps Embed Frame */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 mb-6 shadow-xl relative bg-neutral-950">
          <iframe
            title="Ubicación Puerto Yacarey"
            src="https://maps.google.com/maps?q=-27.2713,-58.2435&hl=es&z=12&output=embed"
            className="w-full h-full border-0 filter contrast-90 brightness-95"
            loading="lazy"
            allowFullScreen
          />
          <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-md p-2 rounded-lg text-[10px] text-neutral-300 flex items-center justify-between">
            <span>Alto Paraná · Costa directa</span>
            <a
              href="https://maps.google.com/?q=-27.2713,-58.2435"
              target="_blank"
              rel="noreferrer"
              className="text-amber-300 hover:underline flex items-center gap-1 font-mono"
            >
              Abrir en Google Maps <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>

        {/* How to get there */}
        <div className="space-y-3 text-xs">
          <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-white/10 flex items-start gap-3">
            <Car className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">En Automóvil Particular</strong>
              Acceso directo y totalmente asfaltado por la Ruta Nacional 12 hasta el KM 1098. Estacionamiento privado dentro del predio cerrado.
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-white/10 flex items-start gap-3">
            <Plane className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">Vía Aérea &amp; Traslado Privado</strong>
              Vuelos directos a los aeropuertos de Corrientes Capital (CNQ - 75 km) o Resistencia, Chaco (RES - 95 km). Coordinamos su chofer y transfer privado puerta a puerta.
            </div>
          </div>

          {/* Distances strip */}
          <div className="p-3 rounded-xl bg-neutral-950/60 border border-white/5 text-[11px] text-neutral-400 flex flex-wrap justify-between gap-2 font-mono">
            <span>Corrientes: 75 km</span>
            <span>Resistencia: 95 km</span>
            <span>Paso de la Patria: 45 km</span>
            <span>Basílica Itatí: 12 km</span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. ATENCIÓN PERSONALIZADA Y RESERVAS (FILTRO FINAL)           */}
      {/* ============================================================== */}
      <section id="reservas" className="py-16 px-4 border-t border-amber-500/20 bg-gradient-to-b from-[#0e1f1c] to-[#081211]">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-[11px] font-mono text-amber-300">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Atención Humana &amp; Exclusiva · Sin Bots</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-light text-white leading-tight">
            Hablemos de su próxima estadía en el río.
          </h2>

          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-md mx-auto">
            No utilizamos respuestas automáticas ni formularios impersonales. Cada reserva en Puerto Yacarey se coordina directamente con un <strong>Asesor Especialista en Reservas</strong> que conoce las mareas, el comportamiento del pique y cada rincón del lodge para diseñar su experiencia a medida.
          </p>

          {/* Primary High Conversion CTA Button */}
          <div className="pt-2 space-y-3">
            <button
              onClick={() => handleAdvisorWhatsApp()}
              className="w-full sm:w-auto min-w-[280px] py-4 px-8 rounded-full bg-[#1b3d35] hover:bg-[#234e44] border-2 border-[#d6a858] text-white font-medium text-sm sm:text-base shadow-xl shadow-black/40 transition-all transform active:scale-98 inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-amber-300" />
              <span>Contactar con un Asesor Personalizado</span>
            </button>

            <div>
              <button
                onClick={() => setShowCalculator(true)}
                className="text-xs text-amber-300/90 hover:text-amber-200 underline font-mono"
              >
                O utilice nuestro Estimador Interactivo de Estadía →
              </button>
            </div>
          </div>

          {/* Direct Phone & Email info */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-neutral-400">
            <a
              href={`tel:${SITE_DATA.brand.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>{SITE_DATA.brand.phone}</span>
            </a>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <a
              href={`mailto:${SITE_DATA.brand.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{SITE_DATA.brand.email}</span>
            </a>
          </div>

          <div className="text-[11px] text-neutral-500 pt-4">
            Cabañas Puerto Yacarey - Fishing Lodge © Alto Paraná, Corrientes, Argentina.
          </div>
        </div>
      </section>

      {/* Floating Bottom Action Bar (Ergonomic Thumb Zone) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#081211]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center justify-between gap-3 max-w-xl mx-auto">
        <button
          onClick={() => setShowCalculator(true)}
          className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900 border border-white/15 text-xs text-neutral-300 font-medium flex items-center justify-center gap-1.5 hover:border-amber-400/40 transition-colors"
        >
          <Calculator className="w-3.5 h-3.5 text-amber-400" />
          <span>Calcular Estadía</span>
        </button>

        <button
          onClick={() => handleAdvisorWhatsApp()}
          className="flex-[1.4] py-2.5 px-3 rounded-xl bg-[#1a3831] hover:bg-[#20453c] border border-amber-400/50 text-xs text-amber-100 font-semibold flex items-center justify-center gap-1.5 shadow-md transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
          <span>Asesor de Reservas</span>
        </button>
      </div>

      {/* Modal Calculator */}
      <StayCalculatorModal
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
      />
    </div>
  );
};
