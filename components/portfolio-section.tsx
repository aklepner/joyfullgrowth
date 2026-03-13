"use client"

import { useState } from "react"
import { ArrowRight, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function PortfolioSection() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactForm, setContactForm] = useState({ firstName: "", lastName: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      })

      if (!res.ok) throw new Error("Failed to submit")
      setContactSubmitted(true)
    } catch {
      setSubmitError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative bg-slate-50 py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Building the Future of Dentistry</h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Three interconnected initiatives designed to transform how dental practices grow, how leaders develop, and
            how communities thrive—without Wall Street.
          </p>
        </div>

        {/* Portfolio Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Card 1: Dental Associate Growth */}
          <div className="relative bg-white rounded-3xl p-[3px] shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-teal-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-slate-200 rounded-3xl opacity-100 group-hover:opacity-0 transition-opacity duration-300" />

            {/* Card content */}
            <div className="relative bg-white rounded-3xl p-8 md:p-12">
              <div className="mb-8 flex items-center gap-6">
                {/* Number */}
                <div className="text-5xl font-bold text-teal-500/20">01</div>

                {/* Logo */}
                <div className="w-48 h-20 flex items-center flex-shrink-0">
                  <Image
                    src="/images/dag-logo.png"
                    alt="Dental Associate Growth"
                    width={192}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Dental Associate Growth</h3>
                  <p className="text-lg text-slate-600 italic mb-6">
                    Stop tolerating mediocrity. Start building systematic excellence.
                  </p>
                </div>

                <p className="text-slate-700 leading-relaxed text-base">
                  The only system that addresses both sides of the associate performance problem: the clinical systems
                  dentists need AND the development frameworks leaders need. Recipe + Rhythm methodology that transforms
                  mediocre associates into systematic excellence.
                </p>

                {/* Features as clean list with arrows */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <ArrowRight className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span>6-Part Clinical Systems Framework</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <ArrowRight className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span>10-Step Dentist Development Playbook</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <ArrowRight className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span>90-Day Implementation Rhythm</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <ArrowRight className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span>Proven with $1B+ in coached revenue</span>
                  </div>
                </div>

                <div className="pt-6">
                  <a href="https://www.dentalassociategrowth.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg">
                    Explore DAG
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: The Collective */}
          <div className="relative bg-white rounded-3xl p-[3px] shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-slate-200 rounded-3xl opacity-100 group-hover:opacity-0 transition-opacity duration-300" />

            {/* Card content */}
            <div className="relative bg-white rounded-3xl p-8 md:p-12">
              <div className="mb-8 flex items-center gap-6">
                {/* Number */}
                <div className="text-5xl font-bold text-purple-500/20">02</div>

                {/* Logo */}
                <div className="w-64 h-28 flex items-center flex-shrink-0">
                  <Image
                    src="/images/collective-logo.png"
                    alt="The Collective"
                    width={265}
                    height={110}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">The Collective</h3>
                  <p className="text-lg text-slate-600 italic mb-6">A movement for industry changemakers.</p>
                </div>

                <p className="text-slate-700 leading-relaxed text-base">
                  We're bridging the world of vendors, dentists, owners, and operators—building a series of masterminds
                  that focus on living this one life we have through heart-centered leadership, authenticity, and
                  optimizing what matters. This isn't just another networking group. It's where the industry's change
                  agents come together to reimagine what's possible.
                </p>

                {/* Features as clean list with arrows */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <ArrowRight className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span>Cross-industry masterminds (vendors + practices)</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <ArrowRight className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span>Heart-centered leadership development</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <ArrowRight className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span>Quarterly gatherings & ongoing connection</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <ArrowRight className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span>Optimize what matters in life & business</span>
                  </div>
                </div>

                <div className="pt-6">
                  <Link href="/collective">
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg">
                      Join The Collective
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: joyFULL Growth Consulting */}
          <div className="relative bg-white rounded-3xl p-[3px] shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-slate-200 rounded-3xl opacity-100 group-hover:opacity-0 transition-opacity duration-300" />

            {/* Card content */}
            <div className="relative bg-white rounded-3xl p-8 md:p-12">
              <div className="mb-8 flex items-center gap-6">
                {/* Number */}
                <div className="text-5xl font-bold text-teal-500/20">03</div>

                {/* Logo */}
                <div className="w-48 h-20 flex items-center flex-shrink-0">
                  <Image
                    src="/images/joyfull-brand-logo.png"
                    alt="joyFULL Growth - A New Model for Growth"
                    width={192}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">joyFULL Growth</h3>
                  <p className="text-lg text-slate-600 italic mb-6">
                    Bespoke consulting for your practice and your people.
                  </p>
                </div>

                <p className="text-slate-700 leading-relaxed text-base">
                  Strategic advisory that goes beyond tactics. We help you build the practice you want and the life you
                  deserve—through people-first systems and comprehensive practice transformation.
                  Purpose x People x Playbooks = Performance.
                </p>

                {/* Features as clean list with arrows */}
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <ArrowRight className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span>Operational systems & implementation</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <ArrowRight className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span>Buy-side/sell-side advisory (non-PE alternatives)</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <ArrowRight className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span>Practice transformation & systems design</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <ArrowRight className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span>Leadership development for teams</span>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => { setShowContactForm(true); setContactSubmitted(false); setContactForm({ firstName: "", lastName: "", message: "" }); }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg"
                  >
                    Contact
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="max-w-3xl mx-auto text-center mt-20">
          <p className="text-lg text-slate-600">
            Each initiative serves a distinct need—together they create an ecosystem for sustainable growth and lasting
            transformation.
          </p>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowContactForm(false)}>
          <div className="bg-white rounded-2xl w-full max-w-lg p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {!contactSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
                <p className="text-gray-500 mb-6">{"Tell us about your practice and how we can help."}</p>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactFirstName" className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
                      <input
                        id="contactFirstName"
                        type="text"
                        required
                        value={contactForm.firstName}
                        onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-teal-400 focus:outline-none transition-colors"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactLastName" className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                      <input
                        id="contactLastName"
                        type="text"
                        required
                        value={contactForm.lastName}
                        onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-teal-400 focus:outline-none transition-colors"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      id="contactEmail"
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-teal-400 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                    <textarea
                      id="contactMessage"
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full h-32 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-teal-400 focus:outline-none resize-none transition-colors"
                      placeholder="Tell us about your practice and goals..."
                    />
                  </div>

                  {submitError && (
                    <p className="text-red-500 text-sm text-center">{submitError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank you, {contactForm.firstName}.</h3>
                <p className="text-gray-500 text-lg">{"We've received your message and will be in touch soon."}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
