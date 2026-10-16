/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Code, Check } from 'lucide-react';

interface InteractiveVideoReelProps {
  videoUrl?: string;
  fallbackImage: string;
  title: string;
  subtitle: string;
  tag?: string;
  embedCode: string;
  isHero?: boolean;
}

export const InteractiveVideoReel: React.FC<InteractiveVideoReelProps> = ({
  videoUrl,
  fallbackImage,
  title,
  subtitle,
  embedCode,
  isHero = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [showCode, setShowCode] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    if (videoRef.current && videoUrl) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [videoUrl]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const copyEmbed = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="relative w-full aspect-[9/16] max-h-[720px] rounded-2xl overflow-hidden bg-neutral-950 shadow-2xl border border-white/10 group">
      {/* Video element or fallback image */}
      {videoUrl && !hasError ? (
        <video
          ref={videoRef}
          src={videoUrl}
          poster={fallbackImage}
          autoPlay
          loop
          muted
          playsInline
          onError={() => setHasError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={fallbackImage}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      )}

      {/* Luxury Cinematic Scrim / Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />

      {/* Top Header Over Video */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-end z-10 pointer-events-auto">
        <div className="flex items-center gap-2">
          {videoUrl && !hasError && (
            <button
              onClick={toggleMute}
              title={isMuted ? "Activar audio" : "Silenciar"}
              className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 hover:text-white hover:bg-black/70 transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          )}
          <button
            onClick={() => setShowCode(!showCode)}
            title="Ver código embed para Google Sites"
            className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300 hover:text-amber-200 hover:bg-black/70 transition-colors"
          >
            <Code className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Center Play/Pause Overlay Indicator on Touch */}
      {videoUrl && !hasError && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/25 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity z-10"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
        </button>
      )}

      {/* Bottom Text Details Over Video */}
      <div className="absolute bottom-5 left-5 right-5 z-10 pointer-events-auto">
        <h3 className="font-serif text-2xl font-light text-white leading-tight mb-1">
          {title}
        </h3>
        <p className="text-xs text-neutral-300 line-clamp-2 font-light">
          {subtitle}
        </p>

        {isHero && (
          <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-amber-200/80">
            <span>Alto Paraná · Itatí, Corrientes</span>
            <span className="font-mono">Ruta 12 KM 1098</span>
          </div>
        )}
      </div>

      {/* Embed Code Modal / Flyout */}
      {showCode && (
        <div className="absolute inset-0 z-30 bg-black/90 backdrop-blur-md p-5 flex flex-col justify-between text-left animate-in fade-in duration-150">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
              <span className="text-xs font-semibold text-amber-400 font-mono">
                CÓDIGO EMBED PARA GOOGLE SITES
              </span>
              <button
                onClick={() => setShowCode(false)}
                className="text-xs text-neutral-400 hover:text-white px-2 py-1"
              >
                Cerrar
              </button>
            </div>
            <p className="text-[11px] text-neutral-300 mb-2">
              Pega este fragmento en tu Google Sites desde: <br />
              <strong className="text-white font-mono">Insertar &gt; Incorporar &gt; Código HTML</strong>
            </p>
            <pre className="p-3 bg-neutral-900 border border-white/10 rounded-lg text-[10px] text-amber-200/90 font-mono overflow-x-auto whitespace-pre-wrap max-h-[220px]">
              {embedCode}
            </pre>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center gap-2">
            <button
              onClick={copyEmbed}
              className="flex-1 py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Copiado al portapapeles
                </>
              ) : (
                <>
                  <Code className="w-3.5 h-3.5" />
                  Copiar Código Embed
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
