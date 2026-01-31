'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const screenshots = [
  {
    src: '/screenshots/frivillige.png',
    alt: 'Frivilligoversikt',
    title: 'Oversikt over alle frivillige',
    description: 'Filtrer, søk og administrer alle påmeldte',
  },
  {
    src: '/screenshots/registrer.png',
    alt: 'Registreringsskjema',
    title: 'Brukervennlig registrering',
    description: 'Frivillige velger oppgaver og tilgjengelighet',
  },
  {
    src: '/screenshots/oversikt.png',
    alt: 'Dashboard oversikt',
    title: 'Kontrollpanel med statistikk',
    description: 'Se status på alle frivillige og oppgaver',
  },
  {
    src: '/screenshots/mail.png',
    alt: 'E-post til frivillige',
    title: 'Send meldinger enkelt',
    description: 'Kommuniser med grupper eller enkeltpersoner',
  },
];

export default function ScreenshotSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  return (
    <div className="relative">
      {/* Main slideshow container */}
      <div className="relative mx-auto max-w-5xl">
        <div className="rounded-2xl bg-[#123C66] p-4 shadow-2xl">
          {/* Image container with fixed aspect ratio */}
          <div className="relative aspect-video overflow-hidden rounded-xl bg-[#0d2844]">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.src}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Caption */}
          <div className="mt-4 text-center">
            <p className="text-white font-medium text-lg">
              {screenshots[currentIndex].title}
            </p>
            <p className="text-white/60 text-sm mt-1">
              {screenshots[currentIndex].description}
            </p>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => {
            goToPrev();
            setIsAutoPlaying(false);
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition"
          aria-label="Forrige bilde"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => {
            goToNext();
            setIsAutoPlaying(false);
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition"
          aria-label="Neste bilde"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-gradient-to-r from-[#6dd5a0] to-[#4ecdc4] w-8'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Gå til bilde ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
