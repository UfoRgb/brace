"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Heart, ShoppingBag, X, Check } from "lucide-react";

const FLOWER_CATALOG = [
  {
    id: 1,
    title: "Sunset Amour Bouquet",
    type: "Signature Bouquet",
    price: "Rp 450.000",
    details: "Warm tones with premium Dutch Tulips, Peach Roses & Dried Pampas",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
    rating: "4.9",
    availability: "In Stock"
  },
  {
    id: 2,
    title: "Ghibli Horizon Meadow",
    type: "Arrangement",
    price: "Rp 680.000",
    details: "Handpicked Wildflowers, Lavender, White Hydrangeas & Chamomile",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
    rating: "5.0",
    availability: "Limited Edition"
  },
  {
    id: 3,
    title: "Celeste Blue Bloom",
    type: "Single Specialty",
    price: "Rp 320.000",
    details: "Rare Cobalt Delphinium & Soft Blue Hydrangea with Eucalyptus",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80",
    rating: "4.8",
    availability: "In Stock"
  },
  {
    id: 4,
    title: "Ethereal Pastel Bliss",
    type: "Luxury Bouquet",
    price: "Rp 550.000",
    details: "Soft Pink Peonies, Cream Garden Roses & Baby Breath Cloud",
    image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=800&q=80",
    rating: "4.9",
    availability: "In Stock"
  },
  {
    id: 5,
    title: "Golden Hour Glow",
    type: "Rustic Basket",
    price: "Rp 750.000",
    details: "Sunflowers, Marigolds, Golden Rod & Vintage Dried Botanicals",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80",
    rating: "5.0",
    availability: "Pre-order"
  }
];

export default function CatalogPage() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});
  const [orderModal, setOrderModal] = useState<typeof FLOWER_CATALOG[0] | null>(null);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % FLOWER_CATALOG.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + FLOWER_CATALOG.length) % FLOWER_CATALOG.length);

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const activeFlower = FLOWER_CATALOG[activeIndex];

  return (
    <div className="fixed inset-0 z-40 bg-stone-950 text-white flex flex-col justify-between overflow-y-auto min-h-screen select-none">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-20 p-6 md:px-12 flex justify-between items-center border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="font-serif text-2xl font-bold tracking-tight text-stone-100">BRACE</span>
          <span className="text-xs uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 text-stone-300">
            Vault Catalog
          </span>
        </div>

        <Link href="/">
          <button className="flex items-center gap-2 text-xs uppercase tracking-widest px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-stone-200 transition-all duration-300 hover:scale-105 active:scale-95">
            <X className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </Link>
      </div>

      {/* Main 3D Stage */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center py-8 my-auto overflow-hidden">
        <div className="relative w-full max-w-5xl h-[380px] sm:h-[450px] flex items-center justify-center">
          {FLOWER_CATALOG.map((item, index) => {
            let offset = index - activeIndex;
            const total = FLOWER_CATALOG.length;
            if (offset > Math.floor(total / 2)) offset -= total;
            if (offset < -Math.floor(total / 2)) offset += total;

            const isActive = offset === 0;
            const absOffset = Math.abs(offset);

            if (absOffset > 2) return null;

            const translateX = offset * 220;
            const rotateY = offset * -25;
            const scale = 1 - absOffset * 0.18;
            const zIndex = 10 - absOffset;
            const opacity = 1 - absOffset * 0.45;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex,
                  opacity,
                }}
                className={`absolute w-[260px] sm:w-[320px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl border border-white/15 bg-zinc-900 group ${
                  isActive ? "ring-2 ring-amber-300/50 shadow-amber-500/10" : "hover:border-white/30"
                }`}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 inset-x-4 flex justify-between items-center z-10">
                  <span className="text-[10px] uppercase font-mono tracking-widest bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-amber-200/90 border border-white/10">
                    {item.availability}
                  </span>
                  <button onClick={(e) => toggleLike(item.id, e)} className="p-2 rounded-full bg-black/50 backdrop-blur-md text-white hover:text-rose-400 transition-colors">
                    <Heart className={`w-4 h-4 ${likedItems[item.id] ? "fill-rose-500 text-rose-500" : ""}`} />
                  </button>
                </div>

                <div className="absolute bottom-5 inset-x-5 z-10 text-left">
                  <span className="text-xs text-amber-200/80 font-medium block mb-1">{item.type}</span>
                  <h3 className="text-lg font-serif font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-sm font-semibold text-stone-200 mt-1">{item.price}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrow Controls */}
        <div className="flex items-center gap-6 mt-6 z-20">
          <button onClick={handlePrev} className="p-3.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all hover:scale-110 active:scale-95">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {FLOWER_CATALOG.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? "w-8 bg-amber-200" : "w-2 bg-white/20"}`}
              />
            ))}
          </div>
          <button onClick={handleNext} className="p-3.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all hover:scale-110 active:scale-95">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom Specs & Order Bar */}
      <div className="relative z-20 border-t border-white/10 bg-black/60 backdrop-blur-xl p-6 md:px-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-serif font-bold text-stone-100">{activeFlower.title}</h2>
              <span className="text-xs px-2 py-0.5 rounded bg-amber-400/20 text-amber-200 font-mono">★ {activeFlower.rating}</span>
            </div>
            <p className="text-sm text-stone-400 max-w-lg leading-relaxed">{activeFlower.details}</p>
          </div>

          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
            <div className="text-left">
              <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block">Price</span>
              <span className="text-2xl font-bold font-serif text-amber-200">{activeFlower.price}</span>
            </div>
            <button
              onClick={() => setOrderModal(activeFlower)}
              className="flex items-center gap-2 bg-stone-100 hover:bg-white text-stone-950 px-6 py-3 rounded-full font-medium text-sm transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Selection</span>
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      {orderModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-white/20 rounded-3xl p-6 sm:p-8 max-w-md w-full relative">
            <button onClick={() => setOrderModal(null)} className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center mb-4">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white">Order Reserved</h3>
            <p className="text-xs text-stone-400 mt-1">You selected <span className="text-amber-200 font-semibold">{orderModal.title}</span>.</p>
            <a
              href={`https://wa.me/?text=Halo%20BRACE!%20Saya%20tertarik%20untuk%20pesan%20${encodeURIComponent(orderModal.title)}%20(${encodeURIComponent(orderModal.price)})`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-medium py-3 rounded-xl transition-colors"
            >
              <span>Lanjut ke WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
