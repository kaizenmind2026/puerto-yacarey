/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Calculator, Users, Calendar, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { SITE_DATA } from '../data/siteContent';

interface StayCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StayCalculatorModal: React.FC<StayCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<'alojamiento' | 'pesca'>('alojamiento');

  // Alojamiento state
  const [selectedUnit, setSelectedUnit] = useState<string>('rustica');
  const [planType, setPlanType] = useState<'desayuno' | 'completo'>('completo');
  const [adults, setAdults] = useState<number>(2);
  const [kidsUnder4, setKidsUnder4] = useState<number>(0);
  const [kids5to12, setKids5to12] = useState<number>(0);
  const [nights, setNights] = useState<number>(3);

  // Pesca state
  const [selectedPackage, setSelectedPackage] = useState<string>('pack-3n');
  const [baseOption, setBaseOption] = useState<'doble' | 'triple'>('doble');
  const [anglers, setAnglers] = useState<number>(2);

  if (!isOpen) return null;

  // Calculation logic
  let totalEstimate = 0;
  let breakdownText = '';

  if (mode === 'alojamiento') {
    const isPunta = selectedUnit === 'punta-de-piedra';
    const rateAdult = planType === 'desayuno' 
      ? (isPunta ? 99000 : 85000) 
      : (isPunta ? 165000 : 150000);
    
    // Kids policy:
    // 0-4: $0
    // 5-12: 50% discount on base breakfast rate
    const baseBreakfastRate = isPunta ? 99000 : 85000;
    const rateKids5to12 = planType === 'desayuno' ? baseBreakfastRate * 0.5 : (baseBreakfastRate * 0.5) + 65000;

    const adultDailyTotal = adults * rateAdult;
    const kidsDailyTotal = (kidsUnder4 * 0) + (kids5to12 * rateKids5to12);
    totalEstimate = (adultDailyTotal + kidsDailyTotal) * nights;

    const unitObj = SITE_DATA.accommodations.find(a => a.id === selectedUnit);
    breakdownText = `Cotización Estimada para Puerto Yacarey:
- Modalidad: Alojamiento (${unitObj?.name})
- Régimen: ${planType === 'desayuno' ? 'Solo Desayuno' : 'Servicio Completo con Bebidas'}
- Huéspedes: ${adults} adulto(s)${kidsUnder4 > 0 ? `, ${kidsUnder4} menor(es) 0-4 años (sin cargo)` : ''}${kids5to12 > 0 ? `, ${kids5to12} menor(es) 5-12 años (50% desc.)` : ''}
- Noches estimadas: ${nights} noches
- Total estimado: $${totalEstimate.toLocaleString('es-AR')} ARS`;
  } else {
    const pkg = SITE_DATA.fishingPackagesFixed.find(p => p.id === selectedPackage);
    const unitPrice = baseOption === 'doble' ? (pkg?.rateDoble || 0) : (pkg?.rateTriple || 0);
    totalEstimate = unitPrice * anglers;

    breakdownText = `Consulta de Paquete de Pesca Puerto Yacarey:
- Paquete: ${pkg?.duration} + ${pkg?.fishingDays}
- Modalidad: Base ${baseOption.toUpperCase()}
- Pescadores: ${anglers} personas
- Todo incluido: Pensión completa, lancha con guía, conservadora equipada (18 cervezas), equipos completos.
- Total estimado: $${totalEstimate.toLocaleString('es-AR')} ARS`;
  }

  const handleWhatsAppRedirect = () => {
    const encoded = encodeURIComponent(`Hola, estuve utilizando el estimador de tarifas de Puerto Yacarey y deseo consultar disponibilidad con un Asesor Personalizado:\n\n${breakdownText}\n\n¿Tienen fechas disponibles en los próximos meses?`);
    window.open(`https://wa.me/${SITE_DATA.brand.phoneClean}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0e1717] border border-neutral-800 rounded-t-3xl sm:rounded-2xl p-6 text-neutral-200 max-h-[92vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif text-lg font-normal text-white">
              Cotizador &amp; Estimador de Estadía
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-800/80 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switch between Alojamiento and Pesca */}
        <div className="grid grid-cols-2 gap-1 p-1 bg-neutral-900 rounded-xl my-4 border border-neutral-800">
          <button
            onClick={() => setMode('alojamiento')}
            className={`py-2 text-xs font-medium rounded-lg transition-colors ${
              mode === 'alojamiento'
                ? 'bg-neutral-800 text-amber-300 shadow'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Alojamiento Diario
          </button>
          <button
            onClick={() => setMode('pesca')}
            className={`py-2 text-xs font-medium rounded-lg transition-colors ${
              mode === 'pesca'
                ? 'bg-neutral-800 text-amber-300 shadow'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Paquete Pesca Todo Incluido
          </button>
        </div>

        {mode === 'alojamiento' ? (
          <div className="space-y-4 text-xs">
            {/* Unit Selection */}
            <div>
              <label className="block text-neutral-400 font-medium mb-1.5 uppercase tracking-wider text-[11px]">
                Seleccione Unidad de Hospedaje
              </label>
              <div className="grid grid-cols-3 gap-2">
                {SITE_DATA.accommodations.map((unit) => (
                  <button
                    key={unit.id}
                    onClick={() => setSelectedUnit(unit.id)}
                    className={`p-2.5 rounded-xl border text-left flex flex-col justify-between transition-colors ${
                      selectedUnit === unit.id
                        ? 'border-amber-400/80 bg-amber-950/20 text-white'
                        : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <span className="font-semibold block truncate text-[11px]">{unit.name}</span>
                    <span className="text-[10px] text-amber-200/70 mt-1 block font-mono">
                      desde ${unit.rateBreakfast.toLocaleString('es-AR')}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Plan selection */}
            <div>
              <label className="block text-neutral-400 font-medium mb-1.5 uppercase tracking-wider text-[11px]">
                Régimen Gastronómico
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setPlanType('desayuno')}
                  className={`p-2.5 rounded-xl border text-left transition-colors ${
                    planType === 'desayuno'
                      ? 'border-amber-400/80 bg-amber-950/20 text-white'
                      : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <span className="font-semibold block text-[11px]">Solo Desayuno</span>
                  <span className="text-[10px] text-neutral-400">Desayuno artesanal incluido</span>
                </button>
                <button
                  onClick={() => setPlanType('completo')}
                  className={`p-2.5 rounded-xl border text-left transition-colors ${
                    planType === 'completo'
                      ? 'border-amber-400/80 bg-amber-950/20 text-white'
                      : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <span className="font-semibold block text-[11px]">Servicio Completo</span>
                  <span className="text-[10px] text-amber-300/80">Desayuno, Almuerzo, Cena + Bebidas</span>
                </button>
              </div>
            </div>

            {/* Counter guests and nights */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-neutral-900/80 p-3 rounded-xl border border-neutral-800">
                <div className="text-[11px] text-neutral-400 flex items-center gap-1.5 mb-2">
                  <Users className="w-3.5 h-3.5 text-neutral-400" />
                  Adultos
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-7 h-7 rounded-lg bg-neutral-800 text-white flex items-center justify-center font-bold"
                  >
                    -
                  </button>
                  <span className="font-mono text-base font-semibold">{adults}</span>
                  <button
                    onClick={() => setAdults(adults + 1)}
                    className="w-7 h-7 rounded-lg bg-neutral-800 text-white flex items-center justify-center font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-neutral-900/80 p-3 rounded-xl border border-neutral-800">
                <div className="text-[11px] text-neutral-400 flex items-center gap-1.5 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  Noches
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setNights(Math.max(1, nights - 1))}
                    className="w-7 h-7 rounded-lg bg-neutral-800 text-white flex items-center justify-center font-bold"
                  >
                    -
                  </button>
                  <span className="font-mono text-base font-semibold">{nights}</span>
                  <button
                    onClick={() => setNights(nights + 1)}
                    className="w-7 h-7 rounded-lg bg-neutral-800 text-white flex items-center justify-center font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Minor Policies Counter */}
            <div className="bg-neutral-900/50 p-3 rounded-xl border border-neutral-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-medium text-neutral-300">Menores de 0 a 4 años</div>
                  <div className="text-[10px] text-emerald-400 font-mono">Sin cargo (Gratis)</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setKidsUnder4(Math.max(0, kidsUnder4 - 1))}
                    className="w-6 h-6 rounded bg-neutral-800 text-white text-xs"
                  >
                    -
                  </button>
                  <span className="font-mono text-xs w-4 text-center">{kidsUnder4}</span>
                  <button
                    onClick={() => setKidsUnder4(kidsUnder4 + 1)}
                    className="w-6 h-6 rounded bg-neutral-800 text-white text-xs"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                <div>
                  <div className="text-[11px] font-medium text-neutral-300">Menores de 5 a 12 años</div>
                  <div className="text-[10px] text-amber-300 font-mono">50% de descuento (con desayuno)</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setKids5to12(Math.max(0, kids5to12 - 1))}
                    className="w-6 h-6 rounded bg-neutral-800 text-white text-xs"
                  >
                    -
                  </button>
                  <span className="font-mono text-xs w-4 text-center">{kids5to12}</span>
                  <button
                    onClick={() => setKids5to12(kids5to12 + 1)}
                    className="w-6 h-6 rounded bg-neutral-800 text-white text-xs"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-xs">
            {/* Packages */}
            <div>
              <label className="block text-neutral-400 font-medium mb-1.5 uppercase tracking-wider text-[11px]">
                Seleccione Duración de Paquete de Pesca
              </label>
              <div className="space-y-2">
                {SITE_DATA.fishingPackagesFixed.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-colors ${
                      selectedPackage === pkg.id
                        ? 'border-amber-400/80 bg-amber-950/20 text-white'
                        : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-xs text-white">{pkg.duration} + {pkg.fishingDays}</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">{pkg.description}</div>
                    </div>
                    <div className="text-right font-mono text-[11px] text-amber-300">
                      ${(baseOption === 'doble' ? pkg.rateDoble : pkg.rateTriple).toLocaleString('es-AR')}
                      <span className="text-[9px] text-neutral-400 block font-sans">por persona</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Base Doble vs Triple */}
            <div>
              <label className="block text-neutral-400 font-medium mb-1.5 uppercase tracking-wider text-[11px]">
                Base de Ocupación por Lancha
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setBaseOption('doble')}
                  className={`p-2.5 rounded-xl border text-left transition-colors ${
                    baseOption === 'doble'
                      ? 'border-amber-400/80 bg-amber-950/20 text-white'
                      : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <span className="font-semibold block text-[11px]">Base Doble</span>
                  <span className="text-[10px] text-neutral-400">2 pescadores por embarcación</span>
                </button>
                <button
                  onClick={() => setBaseOption('triple')}
                  className={`p-2.5 rounded-xl border text-left transition-colors ${
                    baseOption === 'triple'
                      ? 'border-amber-400/80 bg-amber-950/20 text-white'
                      : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <span className="font-semibold block text-[11px]">Base Triple</span>
                  <span className="text-[10px] text-amber-300/80">3 pescadores por embarcación (Tarifa reducida)</span>
                </button>
              </div>
            </div>

            {/* Anglers count */}
            <div className="bg-neutral-900/80 p-3 rounded-xl border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-medium text-neutral-300 block">Cantidad total de pescadores</span>
                <span className="text-[10px] text-neutral-500">Alojamiento + pensión + lancha + equipo</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setAnglers(Math.max(1, anglers - 1))}
                  className="w-7 h-7 rounded bg-neutral-800 text-white text-xs"
                >
                  -
                </button>
                <span className="font-mono text-sm font-semibold w-5 text-center">{anglers}</span>
                <button
                  onClick={() => setAnglers(anglers + 1)}
                  className="w-7 h-7 rounded bg-neutral-800 text-white text-xs"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Calculation Summary Footer */}
        <div className="mt-5 pt-4 border-t border-neutral-800 bg-neutral-950/60 -mx-6 -mb-6 p-6 rounded-b-2xl">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-[10px] tracking-wider uppercase text-neutral-400 block font-mono">
                Total Estimado
              </span>
              <span className="text-[11px] text-neutral-500">Tarifa oficial transparente en pesos argentinos</span>
            </div>
            <div className="text-right">
              <span className="text-xl sm:text-2xl font-serif text-amber-300 font-semibold font-mono">
                ${totalEstimate.toLocaleString('es-AR')}
              </span>
              <span className="text-[10px] text-neutral-400 block">ARS</span>
            </div>
          </div>

          <button
            onClick={handleWhatsAppRedirect}
            className="w-full py-3.5 px-4 rounded-xl bg-[#143029] hover:bg-[#1a3d34] border border-amber-400/40 text-amber-100 font-medium text-xs flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-[0.99]"
          >
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Hablar con un Especialista de Reservas</span>
            <ArrowRight className="w-3.5 h-3.5 ml-auto text-amber-300" />
          </button>
          
          <p className="text-[10px] text-center text-neutral-500 mt-2">
            Atención humana y personalizada por WhatsApp (+54 379 463-4101). Sin bots.
          </p>
        </div>
      </div>
    </div>
  );
};
