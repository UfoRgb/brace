"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

export const BraceHero = ({ onJoinClick }: { onJoinClick?: () => void }) => {
  return (
    <section className="h-screen w-full bg-stone-50">
      <div className="relative h-full w-full overflow-hidden">
        <img
          src="/hero-bg.jpg"
          alt="BRACE Botanical Atelier"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-6 md:px-10 md:pb-12">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 lg:col-span-7">
              <h1 className="font-sans font-bold leading-[0.85] tracking-[-0.07em] text-white text-[24vw] sm:text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw]">
                <WordsPullUp text="Brace" showAsterisk={false} />
              </h1>
            </div>
            <div className="col-span-12 flex flex-col gap-5 pb-6 lg:col-span-5 lg:pb-10">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base text-white/90 font-sans font-medium leading-relaxed max-w-md"
              >
                A botanical lab and atelier crafting handmade living art, bespoke floral arrangements, and timeless aesthetic pieces bound by passion.
              </motion.p>
              <Link href="/pricing">
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group inline-flex items-center gap-3 self-start rounded-full bg-white hover:bg-white/90 px-6 py-3 text-sm font-medium text-black transition-all hover:gap-4 hover:shadow-lg sm:text-base cursor-pointer active:scale-95"
                >
                  View Pricing
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};