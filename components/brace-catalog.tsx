"use client";

import { useState } from "react";
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";

const BRACE_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80",
    alt: "Bespoke Dried Bouquet",
    title: "Ghibli Sunset Bouquet",
    subtitle: "Rp 350.000",
    meta: [
      { label: "Type", value: "Hiaxx" },
      { label: "Lifespan", value: "Timeless / Forever" },
      { label: "Vibe", value: "Warm Sunset Warmth" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&auto=format&fit=crop&q=80",
    alt: "Wabi-Kusa Glass Sphere",
    title: "Wabi-Kusa Sphere",
    subtitle: "Rp 450.000",
    meta: [
      { label: "Type", value: "Living Ecosystem" },
      { label: "Care", value: "Low Mist Maintenance" },
      { label: "Vibe", value: "Minimalist Atelier" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&auto=format&fit=crop&q=80",
    alt: "Pressed Botanical Art Frame",
    title: "Pressed Flower Frame",
    subtitle: "Rp 280.000",
    meta: [
      { label: "Type", value: "Wall / Table Art Piece" },
      { label: "Material", value: "Solid Wood & Glass" },
      { label: "Vibe", value: "Vintage Botanical" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop&q=80",
    alt: "Custom Living Terrarium",
    title: "Living Moss Atelier",
    subtitle: "Rp 520.000",
    meta: [
      { label: "Type", value: "Terrarium Arrangement" },
      { label: "Origin", value: "Handmade in Bali" },
      { label: "Vibe", value: "Serene Greenery" },
    ],
  },
];

export function BraceCatalog() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleWA = () => {
    const message = encodeURIComponent("Halo Min Brace! Mau tanya-tanya seputar produknya dong.");
    window.open(`https://wa.me/6281353880416?text=${message}`, "_blank");
  };

  return (
    <section className="bg-white py-16 border-t border-stone-100 text-stone-900">
      <div className="text-center mb-6 px-4">
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-stone-900">
          Curated Catalog
        </h2>
        <p className="mt-2 text-stone-500 font-sans text-sm md:text-base">
          Handcrafted living art & bespoke botanical arrangements
        </p>
      </div>

      <CoverflowCarousel
        cardWidth="clamp(200px, 28vw, 320px)"
        showCaption={true}
        showNavigation={true}
        showPagination={true}
        slides={BRACE_SLIDES}
        onSlideChange={setActiveIndex}
      />

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleWA}
          className="px-8 py-3 rounded-full bg-stone-900 text-white font-sans text-xs tracking-widest uppercase font-semibold hover:bg-stone-800 transition shadow-lg active:scale-95"
        >
          Order via WhatsApp
        </button>
      </div>
    </section>
  );
}
