"use client"

import { useState } from "react"
import Image from "next/image"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/images/joyfull-brand-logo.png" alt="joyFULL" width={180} height={60} className="h-8 lg:h-12 w-auto" />
            <span className="hidden lg:inline text-xs font-medium text-slate-600 uppercase tracking-wider ml-3">A new model for Growth</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#portfolio" className="text-slate-700 hover:text-teal-500 transition-colors text-sm font-medium">
              Our Work
            </a>
            <a href="#vision" className="text-slate-700 hover:text-teal-500 transition-colors text-sm font-medium">
              Vision
            </a>
            <a href="#leadership" className="text-slate-700 hover:text-teal-500 transition-colors text-sm font-medium">
              Leadership
            </a>
            <a href="#contact" className="text-slate-700 hover:text-teal-500 transition-colors text-sm font-medium">
              Contact
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-2 flex flex-col gap-3 border-t border-slate-100 mt-3">
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-teal-500 transition-colors text-sm font-medium py-2">
              Our Work
            </a>
            <a href="#vision" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-teal-500 transition-colors text-sm font-medium py-2">
              Vision
            </a>
            <a href="#leadership" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-teal-500 transition-colors text-sm font-medium py-2">
              Leadership
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-teal-500 transition-colors text-sm font-medium py-2">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
