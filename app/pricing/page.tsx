"use client";

import Link from "next/link";
import { BraceCatalog } from "@/components/brace-catalog";
import { ArrowLeft } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>

            <div className="text-2xl font-bold tracking-tight text-white">
              BRACE<span className="text-amber-500">*</span>
            </div>

            <div className="w-32" /> {/* Spacer for centered brand */}
          </div>
        </div>
      </nav>

      {/* Catalog Content */}
      <div className="pt-16">
        <BraceCatalog />
      </div>
    </div>
  );
}
