"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Link from "next/link"
import { Heart, ArrowRight } from "lucide-react"

function ThankYouContent() {
  const searchParams = useSearchParams()
  const firstName = searchParams.get("name") || "there"
  const dentist = searchParams.get("dentist") === "true"
  const leadership = searchParams.get("leadership") === "true"

  const journalNames = []
  if (dentist) journalNames.push("High Performance Dentist Journal")
  if (leadership) journalNames.push("Clinical Leadership Journal")

  const journalDisplay = journalNames.length === 2
    ? "both the High Performance Dentist Journal & Clinical Leadership Journal"
    : journalNames[0] || "our newsletter"

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Heart icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-purple-500 mb-8 shadow-lg shadow-teal-500/25">
          <Heart className="w-12 h-12 text-white" strokeWidth={1.5} />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {"You're in, "}{firstName}.
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-lg md:text-xl mb-2">
          Thank you for joining the{" "}
          <span className="font-semibold italic text-white">{journalDisplay}</span>.
        </p>

        {/* Description */}
        <p className="text-slate-500 text-lg mb-10 max-w-lg mx-auto">
          {"We're launching in March, and what's coming is going to change how this industry thinks about associate development."}
        </p>

        {/* Divider */}
        <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full mx-auto mb-10" />

        {/* What's Coming card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 text-left mb-10">
          <h3 className="text-teal-400 text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            {"What's Coming"}
          </h3>

          <div className="space-y-0">
            <div className="flex items-start gap-4 py-4">
              <span className="text-xl flex-shrink-0">{"📋"}</span>
              <p className="text-slate-300">
                Weekly insights from Dr. Eric J. Roman on building systems that actually work
              </p>
            </div>
            <div className="border-t border-slate-800" />
            <div className="flex items-start gap-4 py-4">
              <span className="text-xl flex-shrink-0">{"📦"}</span>
              <p className="text-slate-300">
                {"Frameworks, tools, and the Recipe + Rhythm methodology"}
              </p>
            </div>
            <div className="border-t border-slate-800" />
            <div className="flex items-start gap-4 py-4">
              <span className="text-xl flex-shrink-0">{"🎯"}</span>
              <p className="text-slate-300">
                {"First access to everything we're building this year"}
              </p>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Back to Homepage
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/#vision"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-700 text-white font-semibold rounded-xl hover:border-slate-500 transition-colors"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function NewsletterThankYou() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  )
}
