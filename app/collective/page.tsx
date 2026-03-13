"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function CollectiveJoyFULL() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isUnlocking, setIsUnlocking] = useState(false)
  const [showPathwayChoice, setShowPathwayChoice] = useState(false)
  const [showInviteForm, setShowInviteForm] = useState(false)
  const [showPasswordEntry, setShowPasswordEntry] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [currentSection, setCurrentSection] = useState(0)
  const [email, setEmail] = useState("")
  const [notes, setNotes] = useState<{ [key: number]: string }>({})
  const [inviteForm, setInviteForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    boldBelief: "",
  })
  const [inviteSubmitted, setInviteSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleUnlock = () => {
    setShowPathwayChoice(true)
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Check against environment variable or hardcoded password
    const correctPassword = process.env.NEXT_PUBLIC_COLLECTIVE_PASSWORD || "collective2024"
    if (password === correctPassword) {
      setPasswordError("")
      setIsUnlocking(true)
      setTimeout(() => {
        setIsUnlocked(true)
      }, 1000)
    } else {
      setPasswordError("Incorrect password. Please try again or request an invite.")
    }
  }

  const handleInviteSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const res = await fetch("/api/collective-invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inviteForm),
      })

      if (!res.ok) throw new Error("Failed to submit")

      setInviteSubmitted(true)
    } catch {
      setSubmitError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Application submitted:", email)
    alert("Thank you. We'll be in touch about your application.")
    setEmail("")
  }

  const sections = [
    { id: "opening" },
    { id: "moment" },
    { id: "questions" },
    { id: "program" },
    { id: "who" },
    { id: "outcomes" },
    { id: "apply" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <style jsx>{`
        @keyframes turnKey {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(90deg) scale(1);
          }
          100% {
            transform: rotate(90deg) scale(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-turn-key {
          animation: turnKey 1s ease-out forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        .animate-fade-in-out {
          animation: fadeInOut 3s ease-in-out 1s infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Lock Screen */}
      {!isUnlocked && (
        <div
          className={`fixed inset-0 bg-white flex items-center justify-center z-50 transition-all duration-1000 ${
            isUnlocking ? "opacity-0" : "opacity-100"
          }`}
        >
          {!showPathwayChoice && !showInviteForm && !showPasswordEntry ? (
            <div className="text-center cursor-pointer" onClick={handleUnlock}>
              <div className="animate-float">
                <div className="w-[280px] h-[280px] mx-auto animate-pulse-slow">
                  <Image
                    src="/images/collective-keyhole-icon.png"
                    alt="Unlock The Collective"
                    width={280}
                    height={280}
                    className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
              <p className="mt-8 text-sm text-gray-400 tracking-[0.3em] uppercase animate-fade-in-out font-medium">
                Click to enter
              </p>
            </div>
          ) : showPathwayChoice && !showInviteForm && !showPasswordEntry ? (
            <div className="w-full max-w-md px-6 animate-[fadeIn_0.5s_ease-out]">
              <div className="text-center mb-10">
                <div className="w-24 h-24 mx-auto mb-6">
                  <Image
                    src="/images/collective-keyhole-icon.png"
                    alt="The Collective"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">The Collective</h2>
                <p className="text-gray-500">Choose how you'd like to enter</p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => {
                    setShowPathwayChoice(false)
                    setShowPasswordEntry(true)
                  }}
                  className="w-full py-4 px-6 bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  Enter with Password
                </button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-400">or</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setShowPathwayChoice(false)
                    setShowInviteForm(true)
                  }}
                  className="w-full py-4 px-6 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-purple-400 hover:text-purple-600 transition-all text-lg flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Request an Invite
                </button>
              </div>

              <button
                onClick={() => setShowPathwayChoice(false)}
                className="mt-8 w-full text-center text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                ← Go back
              </button>
            </div>
          ) : showPasswordEntry && !inviteSubmitted ? (
            <div className="w-full max-w-md px-6 animate-[fadeIn_0.5s_ease-out]">
              <div className="text-center mb-10">
                <div className="w-20 h-20 mx-auto mb-6">
                  <Image
                    src="/images/collective-keyhole-icon.png"
                    alt="The Collective"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Enter Password</h2>
                <p className="text-gray-500">Access The Collective members area</p>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-5">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setPasswordError("")
                    }}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="Enter your password"
                  />
                </div>

                {passwordError && (
                  <p className="text-red-500 text-sm text-center">{passwordError}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg"
                >
                  Unlock
                </button>
              </form>

              <button
                onClick={() => {
                  setShowPasswordEntry(false)
                  setShowPathwayChoice(true)
                  setPassword("")
                  setPasswordError("")
                }}
                className="mt-8 w-full text-center text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                ← Go back
              </button>
            </div>
          ) : !inviteSubmitted ? (
            <div className="w-full max-w-lg px-6 animate-[fadeIn_0.5s_ease-out]">
              <div className="text-center mb-10">
                <div className="w-20 h-20 mx-auto mb-6">
                  <Image
                    src="/images/collective-keyhole-icon.png"
                    alt="The Collective"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Request an Invite</h2>
                <p className="text-gray-500">The Collective is invitation-only.</p>
              </div>

              <form onSubmit={handleInviteSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      value={inviteForm.firstName}
                      onChange={(e) => setInviteForm({ ...inviteForm, firstName: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-purple-400 focus:outline-none transition-colors"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      value={inviteForm.lastName}
                      onChange={(e) => setInviteForm({ ...inviteForm, lastName: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-purple-400 focus:outline-none transition-colors"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inviteEmail" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    id="inviteEmail"
                    type="email"
                    required
                    value={inviteForm.email}
                    onChange={(e) => setInviteForm({ ...inviteForm, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="boldBelief" className="block text-sm font-medium text-gray-700 mb-1.5">
                    {"What's one thing you believe about dentistry that most of the industry isn't ready to hear?"}
                  </label>
                  <textarea
                    id="boldBelief"
                    required
                    value={inviteForm.boldBelief}
                    onChange={(e) => setInviteForm({ ...inviteForm, boldBelief: e.target.value })}
                    className="w-full h-32 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-900 focus:border-purple-400 focus:outline-none resize-none transition-colors"
                    placeholder="Share your bold belief..."
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
                  {isSubmitting ? "Submitting..." : "Request Invite"}
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center animate-[fadeIn_0.5s_ease-out] max-w-md px-6">
              <div className="w-24 h-24 mx-auto mb-8">
                <Image
                  src="/images/collective-keyhole-icon.png"
                  alt="The Collective"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Thank you, {inviteForm.firstName}.
              </h2>
              <p className="text-gray-500 text-lg mb-2">
                Your request has been received.
              </p>
              <p className="text-gray-400 text-base">
                The Collective is invitation-only. We will be in touch soon.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Main Content */}
      {isUnlocked && (
        <div className="max-w-7xl mx-auto">
          {/* Progress Indicator */}
          <div className="fixed top-8 left-8 right-8 z-10">
            <div className="flex gap-2">
              {sections.map((_, idx) => (
                <div
                  key={idx}
                  className={`flex-1 h-1 rounded-full transition-all duration-500 ${
                    idx <= currentSection ? "bg-gradient-to-r from-teal-400 to-purple-600" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Section 0: Opening */}
          {currentSection === 0 && (
            <section className="min-h-screen flex items-center justify-center px-8 py-20 relative">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/cosmic-door-galaxy.png"
                  alt="Door opening to a galaxy of possibilities"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
              </div>

              <div className="max-w-4xl text-center space-y-8 relative z-10">
                <div className="text-8xl font-bold text-white">"</div>
                <p className="text-3xl md:text-4xl leading-relaxed font-light text-white drop-shadow-lg">
                  We can judge our progress by the courage of our questions and the depths of our answers, our
                  willingness to embrace what is true, rather than what feels good.
                </p>
                <p className="text-sm tracking-[0.3em] text-white/90 font-semibold uppercase drop-shadow">
                  — Carl Sagan
                </p>
              </div>
            </section>
          )}

          {/* Section 1: The Moment */}
          {currentSection === 1 && (
            <section className="min-h-screen flex items-center justify-center px-8 py-20">
              <div className="max-w-5xl space-y-16">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center gap-4 mb-8">
                    <div className="w-16 h-16">
                      <Image
                        src="/images/collective-keyhole-icon.png"
                        alt="Collective Icon"
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <h1 className="text-5xl md:text-7xl font-bold text-gray-900">The Collective</h1>
                      <p className="text-lg text-gray-500 font-medium italic">Mastermind for Emergent Leaders</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16" />

                <div className="space-y-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Dentistry is going through the
                    <br />
                    <span className="bg-gradient-to-r from-teal-400 to-purple-600 bg-clip-text text-transparent">
                      biggest change in history.
                    </span>
                  </h2>

                  <div className="space-y-6 text-xl leading-relaxed text-gray-700 font-light">
                    <p>
                      <strong className="font-semibold text-gray-900">AI is rewriting clinical diagnosis.</strong>{" "}
                      Technology is transforming patient experience. Meanwhile, leaders are burning out trying to do it
                      all.
                    </p>
                    <p>
                      The question isn't just "How do we adopt AI?" It's deeper: How do we lead through transformation
                      while maintaining our own wellbeing? How do we build cultures of joy when the pressure is
                      relentless? How do we scale without losing what makes us human?
                    </p>
                    <p>
                      Private equity promises growth through extraction. Wall Street offers scale through
                      standardization. But what if there's a different path—one where{" "}
                      <strong className="font-semibold text-gray-900">
                        technology amplifies humanity, leadership begins with self-care, and joy isn't a luxury but a
                        strategy
                      </strong>
                      ?
                    </p>
                    <p className="text-2xl font-medium text-gray-900 pt-4">
                      This is the moment for leaders who refuse to choose
                      <br />
                      between excellence and wellbeing.
                    </p>
                  </div>
                </div>

                <div className="pt-12">
                  <textarea
                    placeholder="What matters most to you right now—in your work and in your life?"
                    value={notes[1] || ""}
                    onChange={(e) => setNotes({ ...notes, 1: e.target.value })}
                    className="w-full h-32 bg-white border-2 border-gray-200 rounded-2xl p-6 text-gray-700 focus:border-purple-400 focus:outline-none resize-none transition-colors"
                  />
                </div>
              </div>
            </section>
          )}

          {/* Section 2: Four Questions */}
          {currentSection === 2 && (
            <section className="min-h-screen flex items-center justify-center px-8 py-20">
              <div className="max-w-6xl w-full space-y-16">
                <div className="text-center space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Leading with
                    <br />
                    <span className="bg-gradient-to-r from-teal-400 to-purple-600 bg-clip-text text-transparent">
                      courage, technology & joy
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                    The most important questions aren't just about AI and growth—they're about living this one life we
                    have with intention, building cultures people love, and leading from wholeness.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      color: "from-cyan-400 to-blue-500",
                      title: "Self",
                      question:
                        "How do you lead with courage and maintain your own wellbeing when everything is changing?",
                    },
                    {
                      color: "from-teal-400 to-green-500",
                      title: "Joy",
                      question:
                        "How do you create cultures where people thrive, not just survive—where joy is the foundation?",
                    },
                    {
                      color: "from-purple-400 to-pink-500",
                      title: "Technology",
                      question:
                        "How do you harness AI to amplify humanity, not replace it—using tech as a tool for more joy?",
                    },
                    {
                      color: "from-amber-400 to-orange-500",
                      title: "Culture",
                      question:
                        "How do you build organizations where performance and humanity aren't at odds—where both flourish?",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-3xl p-8 space-y-6 border-2 border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all"
                    >
                      <div
                        className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                      >
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full border-4 border-gray-200" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-center text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-center leading-relaxed">{item.question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Section 3: The Mastermind */}
          {currentSection === 3 && (
            <section className="min-h-screen flex items-center justify-center px-8 py-20">
              <div className="max-w-5xl space-y-16">
                <h2 className="text-5xl md:text-6xl font-bold text-center">
                  <span className="bg-gradient-to-r from-teal-400 to-purple-600 bg-clip-text text-transparent">
                    The Mastermind
                  </span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center space-y-4 p-8 bg-white rounded-3xl border-2 border-gray-100 shadow-lg">
                    <div className="text-6xl font-bold bg-gradient-to-br from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                      4
                    </div>
                    <p className="text-xl font-semibold text-gray-900">Quarterly Gatherings</p>
                    <p className="text-sm text-gray-600">In-person experiences</p>
                  </div>
                  <div className="text-center space-y-4 p-8 bg-white rounded-3xl border-2 border-gray-100 shadow-lg">
                    <div className="text-6xl font-bold bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      24
                    </div>
                    <p className="text-xl font-semibold text-gray-900">Biweekly Zooms</p>
                    <p className="text-sm text-gray-600">Ongoing connection</p>
                  </div>
                  <div className="text-center space-y-4 p-8 bg-white rounded-3xl border-2 border-gray-100 shadow-lg">
                    <div className="text-6xl font-bold bg-gradient-to-br from-teal-400 to-purple-600 bg-clip-text text-transparent">
                      12
                    </div>
                    <p className="text-xl font-semibold text-gray-900">Leaders</p>
                    <p className="text-sm text-gray-600">Curated cohort</p>
                  </div>
                </div>

                <div className="space-y-8 text-xl leading-relaxed text-gray-700">
                  <p className="text-2xl font-semibold text-gray-900">
                    The Collective is not a course with a finish line. It's an ongoing mastermind for leaders who are
                    navigating transformation while protecting what matters most—their wellbeing, their joy, and their
                    humanity.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 pt-8">
                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 border-2 border-teal-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Quarterly In-Person</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Four intimate gatherings per year in places that restore and inspire. Deep-dive workshops on AI
                        + wellbeing, conversations with leaders who've found balance, and strategic planning that honors
                        both ambition and joy.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Biweekly Virtual</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Stay connected between gatherings. Hot-seat coaching on real challenges, peer support when you
                        need it most, emerging AI/tech discussions, and honest conversations about sustainability,
                        burnout, and building cultures of joy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Section 4: Who Is This For */}
          {currentSection === 4 && (
            <section className="min-h-screen flex items-center justify-center px-8 py-20">
              <div className="max-w-4xl space-y-16">
                <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-900">Who is this for?</h2>

                <div className="space-y-12 text-xl leading-relaxed text-gray-700">
                  <p className="text-2xl font-semibold text-gray-900">
                    The Collective Mastermind is for rising leaders in dentistry who are building the industry's
                    future—and need peers who understand the journey.
                  </p>

                  <div className="bg-white rounded-3xl p-12 border-2 border-gray-100 shadow-xl space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900">You might be:</h3>
                    <ul className="space-y-6 text-gray-700">
                      {[
                        "A clinical director scaling systematic excellence while integrating AI into diagnosis and treatment planning",
                        "An emerging DSO executive reimagining what technology-enabled, human-centered growth looks like",
                        "A practice owner navigating automation and AI while keeping your culture intact",
                        "A vendor leader building the future of dental technology who wants practitioner perspectives",
                        "An operator proving that technology and humanity aren't at odds",
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-4">
                          <span className="text-2xl text-teal-400 font-bold">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-teal-50 to-purple-50 rounded-3xl p-12 border-2 border-purple-100">
                    <p className="text-2xl font-bold text-center text-gray-900">
                      This is your cohort. Your sounding board.
                      <br />
                      <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">
                        Your competitive advantage.
                      </span>
                    </p>
                  </div>
                </div>

                <div className="pt-12">
                  <textarea
                    placeholder="What's the biggest leadership challenge you're navigating right now?"
                    value={notes[4] || ""}
                    onChange={(e) => setNotes({ ...notes, 4: e.target.value })}
                    className="w-full h-32 bg-white border-2 border-gray-200 rounded-2xl p-6 text-gray-700 focus:border-purple-400 focus:outline-none resize-none transition-colors"
                  />
                </div>
              </div>
            </section>
          )}

          {/* Section 5: Skills */}
          {currentSection === 5 && (
            <section className="min-h-screen flex items-center justify-center px-8 py-20">
              <div className="max-w-6xl space-y-16">
                <div className="text-center space-y-6">
                  <h2 className="text-5xl md:text-6xl font-bold">
                    <span className="bg-gradient-to-r from-teal-400 to-purple-600 bg-clip-text text-transparent">
                      What you'll gain
                    </span>
                  </h2>
                  <p className="text-2xl text-gray-600 font-light max-w-3xl mx-auto">
                    Skills for leading through transformation—with your wellbeing and joy intact
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Lead from wholeness, not burnout",
                      description:
                        "Build sustainable leadership practices that protect your energy, maintain your joy, and model the wellbeing you want for your team",
                    },
                    {
                      title: "Create cultures where people thrive",
                      description:
                        "Design systems and rhythms where joy isn't an accident—it's built in. Where people love coming to work and performance follows naturally",
                    },
                    {
                      title: "Harness AI with humanity",
                      description:
                        "Use technology to give your team more time for what matters—connection, creativity, and the human moments that create joy in dentistry",
                    },
                    {
                      title: "Build the alternative to extraction",
                      description:
                        "Join leaders proving you don't have to sell out or burn out. That legacy, love, and sustainability can be your growth strategy",
                    },
                    {
                      title: "Navigate change with courage",
                      description:
                        "Make bold decisions while honoring what you need to stay grounded. Lead transformation without sacrificing what makes life worth living",
                    },
                    {
                      title: "Find your people",
                      description:
                        "Connect with peers who get it—who refuse to choose between excellence and wellbeing, between growth and joy, between success and soul",
                    },
                  ].map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all space-y-4"
                    >
                      <h3 className="text-2xl font-bold text-gray-900">{skill.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{skill.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 rounded-3xl p-12 border-2 border-purple-100 shadow-xl">
                  <p className="text-3xl font-semibold text-center text-gray-900 leading-relaxed">
                    "This isn't just about navigating AI.
                    <br />
                    It's about{" "}
                    <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">
                      living this one life with intention
                    </span>
                    —<br />
                    building organizations where joy and excellence go hand in hand."
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Section 6: Application */}
          {currentSection === 6 && (
            <section className="min-h-screen flex items-center justify-center px-8 py-20">
              <div className="max-w-4xl space-y-16 text-center">
                <div className="w-32 h-32 mx-auto">
                  <Image
                    src="/images/the-collective-logo.png"
                    alt="The Collective"
                    width={320}
                    height={120}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="space-y-6">
                  <h2 className="text-5xl md:text-6xl font-bold text-gray-900">Join The Collective</h2>
                  <p className="text-2xl bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent font-semibold italic">
                    Mastermind for Emergent Leaders
                  </p>
                </div>

                <div className="space-y-8 text-xl text-gray-700 text-left max-w-3xl mx-auto font-light">
                  <p>
                    This mastermind operates by invitation and application—not to be exclusive, but to be intentional
                    about who's in the room.
                  </p>
                  <p>
                    We're seeking <strong className="font-semibold text-gray-900">12 leaders</strong> who are ready to
                    step onto untested ground, navigate AI transformation with peers who get it, and help write the next
                    chapter of dentistry together.
                  </p>
                  <p className="text-2xl font-semibold text-gray-900 pt-8 text-center">
                    The question is: Are you ready?
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="pt-12 space-y-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full max-w-md mx-auto block px-8 py-5 text-lg bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="w-full max-w-md mx-auto block px-8 py-5 text-lg bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Role & Organization"
                    required
                    className="w-full max-w-md mx-auto block px-8 py-5 text-lg bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                  <textarea
                    placeholder="Why are you ready for this mastermind? (Optional)"
                    rows={4}
                    className="w-full max-w-md mx-auto block px-8 py-5 text-lg bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="px-16 py-5 text-lg font-semibold bg-gradient-to-r from-teal-400 to-purple-600 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    Apply for Membership
                  </button>
                  <p className="text-sm text-gray-500 tracking-wide pt-4 font-medium">
                    QUARTERLY IN-PERSON · BIWEEKLY VIRTUAL · LIMITED TO 12 LEADERS
                  </p>
                </form>
              </div>
            </section>
          )}

          {/* Navigation */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-10">
            {currentSection > 0 && (
              <button
                onClick={() => setCurrentSection(currentSection - 1)}
                className="px-8 py-3 bg-white text-gray-900 rounded-full border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all font-medium"
              >
                ← Previous
              </button>
            )}
            {currentSection < sections.length - 1 && (
              <button
                onClick={() => setCurrentSection(currentSection + 1)}
                className="px-8 py-3 bg-gradient-to-r from-teal-400 to-purple-600 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all font-semibold"
              >
                Continue →
              </button>
            )}
          </div>

          {/* Header */}
          <div className="fixed top-8 right-8 z-10">
            <Link
              href="/"
              className="text-xs tracking-[0.3em] text-gray-400 hover:text-gray-900 transition-colors font-semibold uppercase"
            >
              joyFULL Growth
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
