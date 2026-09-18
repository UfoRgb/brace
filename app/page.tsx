"use client";

import { useState, useEffect } from "react";
import { BraceHero } from "@/components/brace-hero";

/* ---------------- 1. KOMPONEN PRELOADER ---------------- */
const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const words = ["Beads.", "Art.", "Life.", "Impress."];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState("opacity-0 scale-95 translate-y-2");
  const [isSwipingUp, setIsSwipingUp] = useState(false);

  useEffect(() => {
    let wordTimer: NodeJS.Timeout;
    let fadeOutTimer: NodeJS.Timeout;

    const animateWords = (index: number) => {
      if (index < words.length) {
        setFade("opacity-100 scale-100 translate-y-0");

        fadeOutTimer = setTimeout(() => {
          setFade("opacity-0 scale-105 -translate-y-2");
        }, 800);

        wordTimer = setTimeout(() => {
          setCurrentIndex(index + 1);
          animateWords(index + 1);
        }, 1100);
      } else {
        setIsSwipingUp(true);
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    };

    animateWords(0);

    return () => {
      clearTimeout(wordTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 bg-white flex flex-col items-center justify-center transition-transform duration-800 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isSwipingUp ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative h-24 flex items-center justify-center px-4">
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-sans font-semibold tracking-tight text-stone-900 transition-all duration-500 ease-out ${fade}`}>
          {words[currentIndex] || "Impress."}
        </h1>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-stone-200 overflow-hidden rounded-full">
        <div
          className="h-full bg-stone-900 transition-all duration-300 ease-out"
          style={{ width: `${Math.min(((currentIndex + 1) / words.length) * 100, 100)}%` }}
        />
      </div>
    </div>
  );
};


export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <main className="bg-white min-h-screen text-stone-900 font-sans antialiased overflow-x-hidden">
      {/* Preloader */}
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}

      {/* Hero Section */}
      <BraceHero />
    </main>
  );
}