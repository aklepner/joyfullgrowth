"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function GrowthJournalsSignup() {
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [selectedJournals, setSelectedJournals] = useState({
    dentist: true,
    leadership: false
  })
  const [isHovered, setIsHovered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const toggleJournal = (journal: 'dentist' | 'leadership') => {
    setSelectedJournals(prev => ({
      ...prev,
      [journal]: !prev[journal]
    }))
  }

  const atLeastOneSelected = selectedJournals.dentist || selectedJournals.leadership

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!atLeastOneSelected) return
    
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          journals: selectedJournals,
        }),
      })

      if (!res.ok) throw new Error("Failed to submit")

      const params = new URLSearchParams({
        name: firstName,
        dentist: String(selectedJournals.dentist),
        leadership: String(selectedJournals.leadership),
      })
      router.push(`/newsletter/thank-you?${params.toString()}`)
    } catch {
      setSubmitError("Something went wrong. Please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full bg-slate-950 py-20 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="text-teal-400 text-sm font-medium tracking-wide uppercase">
              Free Weekly Newsletters
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            The Growth
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"> Journals</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Weekly insights from Eric Roman — someone who's built it, sold it, 
            and coached $1B+ in dental revenue. Choose your journal.
          </p>
        </div>

        {/* Journal Selection Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
          {/* Dentist Journal Card */}
          <button
            type="button"
            onClick={() => toggleJournal('dentist')}
            className={`group relative text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
              selectedJournals.dentist 
                ? 'bg-teal-500/10 border-teal-500 shadow-lg shadow-teal-500/10' 
                : 'bg-slate-900/80 border-slate-800 hover:border-teal-500/50'
            }`}
          >
            {/* Selection indicator */}
            <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
              selectedJournals.dentist 
                ? 'bg-teal-500 border-teal-500 scale-110' 
                : 'border-slate-500 group-hover:border-teal-500/50'
            }`}>
              {selectedJournals.dentist && (
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-4 shadow-lg shadow-teal-500/20">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <div className="mb-1">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">For Dentists</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              High Performance Dentist Journal
            </h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Personal excellence. What separates dentists who <span className="text-white font-medium">thrive</span> from those who just survive.
            </p>

            <div className="flex items-center gap-4 text-sm">
              <span className="text-teal-400 font-medium">📅 Mondays 6:30am</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-500">5-min read</span>
            </div>
          </button>

          {/* Leadership Journal Card */}
          <button
            type="button"
            onClick={() => toggleJournal('leadership')}
            className={`group relative text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
              selectedJournals.leadership 
                ? 'bg-purple-500/10 border-purple-500 shadow-lg shadow-purple-500/10' 
                : 'bg-slate-900/80 border-slate-800 hover:border-purple-500/50'
            }`}
          >
            {/* Selection indicator */}
            <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
              selectedJournals.leadership 
                ? 'bg-purple-500 border-purple-500 scale-110' 
                : 'border-slate-500 group-hover:border-purple-500/50'
            }`}>
              {selectedJournals.leadership && (
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>

            <div className="mb-1">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">For Leaders</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Clinical Leadership Journal
            </h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Systems at scale. How to build teams that <span className="text-white font-medium">develop</span> people, not deplete them.
            </p>

            <div className="flex items-center gap-4 text-sm">
              <span className="text-purple-400 font-medium">📅 Thursdays</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-500">5-min read</span>
            </div>
          </button>
        </div>

        {/* Email Form */}
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                required
                className="px-5 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                required
                className="px-5 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all text-center sm:text-left"
              />
              <button
                type="submit"
                disabled={isSubmitting || !atLeastOneSelected}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-500 hover:from-teal-400 hover:via-cyan-400 hover:to-purple-400 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Subscribe Free
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${isHovered && atLeastOneSelected ? 'translate-x-1' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                )}
              </button>
            </div>

            {!atLeastOneSelected && (
              <p className="text-amber-400 text-sm text-center">
                Select at least one journal to subscribe
              </p>
            )}

            {submitError && (
              <p className="text-red-400 text-sm text-center">{submitError}</p>
            )}

            <p className="text-center text-slate-500 text-sm">
              Join 2,000+ dental professionals. Free forever. Unsubscribe anytime.
            </p>
          </form>
        </div>

        {/* What you get */}
        <div className="mt-12 pt-10 border-t border-slate-800">
          <p className="text-center text-slate-500 text-sm mb-6">Every issue includes:</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎬</span>
              <div>
                <p className="text-white font-medium text-sm">Weekly video from Eric</p>
                <p className="text-slate-500 text-xs">One story, one insight</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">👁️</span>
              <div>
                <p className="text-white font-medium text-sm">3 things I'm seeing</p>
                <p className="text-slate-500 text-xs">Patterns from the field</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <div>
                <p className="text-white font-medium text-sm">One thing to try</p>
                <p className="text-slate-500 text-xs">Actionable challenge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
