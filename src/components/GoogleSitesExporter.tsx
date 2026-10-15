/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Code2, 
  FileText, 
  Download, 
  Sparkles, 
  Layers, 
  Palette, 
  ExternalLink,
  HelpCircle,
  Video,
  MapPin,
  MessageSquare
} from 'lucide-react';
import { SITE_DATA } from '../data/siteContent';

export const GoogleSitesExporter: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const currentModule = SITE_DATA.modulesGoogleSites.find(m => m.step === activeStep) || SITE_DATA.modulesGoogleSites[0];

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const generateFullMarkdown = () => {
    let md = `# PUERTO YACAREY - FISHING LODGE
## Dossier de Arquitectura UX/UI Mobile-First, Redacción Luxury y Snippets HTML para Google Sites
Ubicación: Ruta Nacional N°12, KM 1098. Itatí, Corrientes, Argentina
Contacto: +54 379 463-4101 | cabanaspuertoyacarey@gmail.com

---

### PALETA CROMÁTICA & TIPOGRAFÍA (ESTILO BEHANCE):
- Fondo Lienzo Principal: Verde Selva Profundo (#0A1414 / #080D0D)
- Superficies y Tarjetas: Grafito Fluvial (#121E1C / #172624)
- Acento Dorado Paraná: Ambar Dorado (#D6A858 / #C99A4E)
- Texto Principal: Arena Río (#F1EEE8 / #ECE8E1)
- Tipografía Titulares (Google Sites): Cormorant Garamond o Playfair Display
- Tipografía Texto (Google Sites): Plus Jakarta Sans o DM Sans

---

`;

    SITE_DATA.modulesGoogleSites.forEach(m => {
      md += `\n====================================================================\n`;
      md += `### ${m.title}\n`;
      md += `**Rol UX/UI:** ${m.role}\n\n`;
      md += `#### 1. REDACCIÓN COMPLETA (COPYWRITING PARA GOOGLE SITES):\n`;
      md += `\`\`\`text\n`;
      md += JSON.stringify(m.copywriting, null, 2);
      md += `\n\`\`\`\n\n`;
      md += `#### 2. CÓDIGO HTML EMBED LISTO PARA INSERTAR:\n`;
      md += `\`\`\`html\n`;
      md += m.videoEmbedCode;
      md += `\n\`\`\`\n\n`;
      md += `#### 3. NOTAS DE MAQUETADO VISUAL:\n`;
      md += `${m.designNotes}\n\n`;
    });

    return md;
  };

  const handleDownloadDossier = () => {
    const text = generateFullMarkdown();
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `puerto-yacarey-google-sites-dossier.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getCopywritingPlainText = (mod: typeof currentModule) => {
    const c = mod.copywriting as any;
    let out = '';
    if (c.kicker) out += `${c.kicker}\n`;
    if (c.headline) out += `${c.headline}\n\n`;
    if (c.subheadline) out += `${c.subheadline}\n\n`;
    if (c.bodyParagraph1) out += `${c.bodyParagraph1}\n\n${c.bodyParagraph2}\n\n${c.bodyParagraph3}\n\n`;
    if (c.unidades) {
      c.unidades.forEach((u: any) => {
        out += `• ${u.nombre}\n${u.detalle}\nTarifas: ${u.tarifas}\n\n`;
      });
    }
    if (c.politicaMenores) out += `${c.politicaMenores}\n\n`;
    if (c.modalidades) out += `Modalidades: ${c.modalidades}\n\n`;
    if (c.paquetes) {
      out += `${c.paquetesTitle}\n`;
      c.paquetes.forEach((p: any) => {
        out += `• ${p.nombre}: ${p.precios}\n`;
      });
      out += `\n`;
    }
    if (c.inclusiones) out += `${c.inclusiones}\n\n`;
    if (c.horarios) out += `${c.horarios}\n\n`;
    if (c.puntos) {
      c.puntos.forEach((p: string) => {
        out += `• ${p}\n`;
      });
      out += `\n`;
    }
    if (c.direccion) out += `Dirección: ${c.direccion}\n\n`;
    if (c.comoLlegar) {
      out += `Cómo llegar:\n`;
      c.comoLlegar.forEach((item: string) => {
        out += `• ${item}\n`;
      });
      out += `\n`;
    }
    if (c.distancias) out += `Distancias: ${c.distancias}\n\n`;
    if (c.ctaPrincipal) out += `Botón Principal: "${c.ctaPrincipal}"\n`;
    if (c.microCerteza) out += `Garantía: ${c.microCerteza}\n`;
    if (c.datosContacto) out += `Contacto: ${c.datosContacto}\n`;

    return out.trim();
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 text-neutral-200">
      
      {/* Top Banner & Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0d1e1c] via-[#102925] to-[#0a1715] border border-amber-500/30 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-amber-300 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kit de Implementación para Google Sites · Mobile-First</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-light">
            Arquitectura UX/UI, Redacción &amp; Embeds HTML
          </h2>
          <p className="text-xs text-neutral-300 font-light mt-1 max-w-xl">
            Estructurado en 8 bloques de pantalla vertical optimizados para smartphones con reproductores de video Imgur, acordeón FAQ nativo y embudo de conversión sin bots.
          </p>
        </div>

        <button
          onClick={handleDownloadDossier}
          className="py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-xs flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-[0.98] shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Descargar Dossier Completo (.md)</span>
        </button>
      </div>

      {/* Design System & Specifications Quick Reference */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/10">
          <div className="flex items-center gap-2 text-amber-300 font-medium text-xs mb-2">
            <Palette className="w-4 h-4" />
            <span>Paleta Cromática Luxury</span>
          </div>
          <div className="space-y-1.5 text-[11px] font-mono text-neutral-300">
            <div className="flex items-center justify-between">
              <span>Lienzo Selva:</span>
              <span className="text-amber-200">#0A1414</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Dorado Paraná:</span>
              <span className="text-amber-400">#D6A858</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Superficie Card:</span>
              <span className="text-neutral-400">#121E1C</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Texto Arena:</span>
              <span className="text-neutral-200">#F1EEE8</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/10">
          <div className="flex items-center gap-2 text-amber-300 font-medium text-xs mb-2">
            <Layers className="w-4 h-4" />
            <span>Tipografía en Google Sites</span>
          </div>
          <div className="text-[11px] text-neutral-300 space-y-1.5 leading-relaxed">
            <div>
              <strong className="text-white block font-sans">Títulos &amp; Encabezados:</strong>
              Selecciona en Google Sites: <em>Cormorant Garamond</em> o <em>Playfair Display</em> (SemiBold 600).
            </div>
            <div>
              <strong className="text-white block font-sans">Cuerpo &amp; Párrafos:</strong>
              Selecciona: <em>Plus Jakarta Sans</em> o <em>DM Sans</em> (Regular 400).
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/10">
          <div className="flex items-center gap-2 text-amber-300 font-medium text-xs mb-2">
            <MessageSquare className="w-4 h-4" />
            <span>Estrategia de Conversión</span>
          </div>
          <div className="text-[11px] text-neutral-300 leading-relaxed">
            Cero botones automáticos de WhatsApp en el Hero. La web educa, transparenta tarifas y filtra previamente. El contacto final es con un <strong>Asesor Especialista Humano</strong> para clientes realmente calificados.
          </div>
        </div>
      </div>

      {/* Module Selector Buttons (1 to 8) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
        {SITE_DATA.modulesGoogleSites.map((mod) => (
          <button
            key={mod.step}
            onClick={() => setActiveStep(mod.step)}
            className={`py-2 px-3.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 border ${
              activeStep === mod.step
                ? 'bg-[#183a33] text-amber-300 border-amber-400/50 shadow-md font-medium'
                : 'bg-neutral-900/70 text-neutral-400 border-white/5 hover:border-white/20 hover:text-white'
            }`}
          >
            <span>Módulo 0{mod.step}</span>
          </button>
        ))}
      </div>

      {/* Active Module Workbench */}
      <div className="p-6 rounded-2xl bg-[#0d1615] border border-white/10 shadow-xl space-y-6">
        
        {/* Module Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
          <div>
            <div className="text-[11px] font-mono text-amber-300 uppercase tracking-wider">
              {currentModule.role}
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-white font-light">
              {currentModule.title}
            </h3>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded bg-neutral-900 border border-white/10 text-neutral-400 self-start sm:self-auto">
            Paso {currentModule.step} de 8
          </span>
        </div>

        {/* Two-Column split: Left = Redacción Luxury, Right = Código HTML Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Column A: Redacción Copywriting */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Redacción Completa (Copiar y Pegar en Google Sites)</span>
              </div>
              <button
                onClick={() => handleCopy(getCopywritingPlainText(currentModule), `copy-${currentModule.step}`)}
                className="py-1 px-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-amber-300 flex items-center gap-1 transition-colors"
              >
                {copiedType === `copy-${currentModule.step}` ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Redacción</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950/80 border border-white/10 text-xs font-sans text-neutral-200 leading-relaxed max-h-[380px] overflow-y-auto whitespace-pre-line space-y-3">
              {getCopywritingPlainText(currentModule)}
            </div>
          </div>

          {/* Column B: Código Embed HTML */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>Fragmento HTML Embed (Insertar &gt; Incorporar)</span>
              </div>
              <button
                onClick={() => handleCopy(currentModule.videoEmbedCode, `embed-${currentModule.step}`)}
                className="py-1 px-2.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-xs text-amber-300 border border-amber-400/30 flex items-center gap-1 transition-colors"
              >
                {copiedType === `embed-${currentModule.step}` ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>¡Embed Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Código HTML</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-white/10 max-h-[380px] overflow-y-auto">
              <pre className="text-[11px] font-mono text-amber-200/90 whitespace-pre-wrap">
                {currentModule.videoEmbedCode}
              </pre>
            </div>
          </div>
        </div>

        {/* Design and Layout Guidance for Google Sites */}
        <div className="p-4 rounded-xl bg-[#09100f] border border-amber-500/20 text-xs text-neutral-300">
          <div className="flex items-center gap-2 text-amber-300 font-semibold mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Instrucciones de Maquetado en Google Sites:</span>
          </div>
          <p className="leading-relaxed">
            {currentModule.designNotes}
          </p>
        </div>
      </div>

      {/* Step by Step Manual for Google Sites */}
      <div className="mt-10 p-6 rounded-2xl bg-neutral-900/60 border border-white/10 space-y-4">
        <h3 className="font-serif text-lg text-white font-light flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-400" />
          <span>Guía Rápida: Cómo ensamblar este diseño en Google Sites en 4 Pasos</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-neutral-300">
          <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-white/5 space-y-1">
            <strong className="text-amber-300 font-mono block">PASO 1: Configurar Tema y Fuentes</strong>
            <p>Ve a la pestaña <em>Temas</em> en el panel derecho de Google Sites. Crea un tema personalizado. En estilo de texto selecciona <em>Cormorant Garamond</em> para Títulos y <em>Plus Jakarta Sans</em> para Texto normal. Color primario: <code>#0A1414</code>, acento: <code>#D6A858</code>.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-white/5 space-y-1">
            <strong className="text-amber-300 font-mono block">PASO 2: Insertar Videos Verticales (Reels)</strong>
            <p>En cada módulo temático, pulsa <strong>Insertar &gt; Incorporar &gt; Incorporar código</strong> y pega el código HTML generado en la columna derecha. Ajusta el contenedor para que quede centrado verticalmente.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-white/5 space-y-1">
            <strong className="text-amber-300 font-mono block">PASO 3: Copiar la Redacción Limpia</strong>
            <p>Utiliza el botón <em>Copiar Redacción</em> para insertar los textos en cuadros de texto de Google Sites. Evita usar viñetas genéricas o colores no alineados con la identidad del lodge.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-white/5 space-y-1">
            <strong className="text-amber-300 font-mono block">PASO 4: Botón de Conversión y Filtro</strong>
            <p>Para el Módulo 8, inserta el botón embed con estilo de lujo provisto o utiliza el botón nativo de Google Sites con el enlace <code>https://wa.me/5493794634101</code> y el texto <em>"Hablar con un Especialista de Reservas"</em>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
