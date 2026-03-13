"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import LeadershipCTAFooter from "@/components/leadership-cta-footer"

// Color tokens
const C = {
  cyan: "#06b6d4",
  purple: "#8b5cf6",
  pink: "#ec4899",
  navy: "#0f172a",
  navy2: "#1e293b",
  slate: "#334155",
  slate2: "#475569",
  slate3: "#64748b",
  slate4: "#94a3b8",
  border: "#e2e8f0",
  offwhite: "#f8fafc",
  white: "#ffffff",
}

export default function MortensonPage() {
  const [tlIdx, setTlIdx] = useState(0)

  const tlWords = ["TRUST", "SAFETY", "CLARITY", "BELONGING", "COURAGE", "LOVE"]
  const tlSubs: Record<string, string> = {
    TRUST: "The currency of every clinical interaction.",
    SAFETY: "People do their best work when they feel safe to try.",
    CLARITY: "Clear expectations before accountability. Always.",
    BELONGING: "When people feel they belong, they stay and grow.",
    COURAGE: "High love + high standards. Not one or the other.",
    LOVE: "Joy and love are the greatest forces for positive change.",
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTlIdx((prev) => (prev + 1) % tlWords.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible")
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    )
    reveals.forEach((r) => observer.observe(r))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');
        
        .mortenson-page {
          font-family: 'DM Sans', sans-serif;
          color: ${C.slate};
        }
        
        .mortenson-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1000;
          opacity: 0.4;
        }

        .grad-text {
          background: linear-gradient(135deg, ${C.cyan}, ${C.purple}, ${C.pink});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .dm-serif { font-family: 'DM Serif Display', serif; }

        @keyframes glow-drift {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -20px); }
          66% { transform: translate(-15px, 25px); }
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scroll-pulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }

        @keyframes dot-travel {
          0% { left: 0%; }
          100% { left: 100%; }
        }

        @keyframes dot-travel-right {
          0% { right: 0%; left: auto; }
          100% { right: 100%; left: auto; }
        }

        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }

        .hero-anim-1 { opacity: 0; animation: fade-up 0.7s ease forwards 0.2s; }
        .hero-anim-2 { opacity: 0; animation: fade-up 0.7s ease forwards 0.35s; }
        .hero-anim-3 { opacity: 0; animation: fade-up 0.7s ease forwards 0.5s; }
        .hero-anim-4 { opacity: 0; animation: fade-up 0.7s ease forwards 0.65s; }
        .hero-anim-5 { opacity: 0; animation: fade-up 0.7s ease forwards 0.8s; }

        .glow-1 { animation: glow-drift 12s ease-in-out infinite; }
        .glow-2 { animation: glow-drift 15s ease-in-out infinite reverse; }
        .glow-3 { animation: glow-drift 9s ease-in-out infinite 3s; }

        .scroll-line { animation: scroll-pulse 2s ease-in-out infinite; }

        .tl-dot { animation: dot-travel 3s ease-in-out infinite; }
        .tl-dot-right { animation: dot-travel-right 3s ease-in-out infinite; }

        .tl-word, .tl-sub {
          position: absolute;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .tl-word-active, .tl-sub-active {
          opacity: 1;
          position: relative;
        }
      `}</style>

      <div className="mortenson-page bg-white overflow-x-hidden">
        {/* NAV */}
        <Navigation />

        {/* HERO */}
        <section className="min-h-screen bg-[#0f172a] relative flex flex-col justify-center overflow-hidden px-6 lg:px-15 pt-28 pb-20">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_65%)] -top-25 -left-25 glow-1" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.10)_0%,transparent_65%)] -bottom-20 -right-15 glow-2" />
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.08)_0%,transparent_65%)] top-1/2 right-1/4 -translate-y-1/2 glow-3" />

          <div className="relative z-2 max-w-[1100px] mx-auto w-full">
            <div className="hero-anim-1 text-[11px] font-semibold tracking-[4px] uppercase grad-text mb-7">
              joyFULL Growth × Mortenson Dental Partners
            </div>
            <h1 className="hero-anim-2 dm-serif text-white text-5xl md:text-7xl lg:text-[88px] leading-[1.05] tracking-tight mb-3">
              Day of <em className="italic grad-text">Learning</em>
              <br />
              2026
            </h1>
            <p className="hero-anim-3 text-lg text-white/55 font-light leading-relaxed max-w-[560px] mb-12">
              Content Architecture & Session Design. Three sessions. One through-line. Every decision grounded in the belief that trust is the true currency of clinical excellence.
            </p>

            <div className="hero-anim-4 flex flex-wrap items-center gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-[2px] uppercase text-white/35 font-semibold">Presented by</span>
                <span className="text-sm text-white/70">Dr. Eric J. Roman & Josey Sewell</span>
              </div>
              <div className="w-px h-9 bg-white/12 hidden md:block" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-[2px] uppercase text-white/35 font-semibold">Prepared for</span>
                <span className="text-sm text-white/70">Dr. Britt Bostick & Lauren Clodfelter</span>
              </div>
              <div className="w-px h-9 bg-white/12 hidden md:block" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-[2px] uppercase text-white/35 font-semibold">Date</span>
                <span className="text-sm text-white/70">March 2026</span>
              </div>
            </div>

            <div className="hero-anim-5 flex gap-4 items-center mt-14">
              <a
                href="https://blobs.vusercontent.net/blob/Mortenson_Day%20Of%20Learning%20x%20joyFULL%20-M3g10UJJ012xoTyDWJqBpovxGybPhn.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-purple-500/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/40 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>

          <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fade-up_1s_ease_forwards_1.5s] z-2">
            <span className="text-[10px] tracking-[3px] uppercase text-white/25 font-semibold">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/25 to-transparent scroll-line" />
          </div>
        </section>

        {/* WHAT WE HEARD */}
        <section id="heard" className="bg-white py-25">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-15">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                <div className="reveal text-[11px] font-semibold tracking-[4px] uppercase grad-text mb-4">Part One</div>
                <h2 className="reveal reveal-delay-1 dm-serif text-4xl md:text-5xl text-[#0f172a] leading-tight tracking-tight mb-5">What We Heard</h2>
                <div className="reveal reveal-delay-2 w-12 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded mb-7" />
                
                <p className="reveal reveal-delay-2 text-base text-slate-500 leading-relaxed mb-5">
                  Across our conversations with Dr. Bostick, Lauren, Andrea, and your team, a clear picture emerged. Mortenson has built something rare — a dentist-owned organization with real infrastructure, real values, and a genuine commitment to its people.
                </p>
                <p className="reveal reveal-delay-3 text-base text-slate-500 leading-relaxed mb-5">
                  You have invested in onboarding (Top Docs), career development (Hire to Retire), team skills (Operation: Team Bootcamp), and four years of Day of Learning programming. The question you are now asking is not "what else do we need to build?" It is something more nuanced:
                </p>

                <div className="reveal reveal-delay-3 bg-slate-50 border-l-3 border-purple-500 px-7 py-6 rounded-r-xl my-7">
                  <p className="text-lg italic text-[#1e293b] leading-relaxed">
                    "We have built strong tools and systems. How do we activate them consistently — across regions, across roles, across the inevitable friction of daily practice?"
                  </p>
                </div>

                <p className="reveal text-base text-slate-500 leading-relaxed mb-5">
                  Your Warm Handoff protocol is well-designed. Your LCQAC framework is sound. Yet adoption remains uneven. Teams skip the Cushion step. The doctor-manager same page meeting is underutilized. Hygienists are uncertain about what the doctor will say, so same-day conversion stalls.
                </p>
                <p className="reveal text-base text-slate-500 leading-relaxed">
                  This is not a failure of training. It is a signal that the human operating system underneath — the trust, the mutual accountability, the shared sense of professional purpose — has not been fully activated. That is what this Day of Learning is designed to address.
                </p>
              </div>

              <div className="reveal reveal-delay-2 sticky top-20">
                <div className="bg-[#0f172a] rounded-2xl p-9 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.75 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.12),transparent_60%)]" />
                  <div className="relative z-1 grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-[10px] tracking-[2px] uppercase text-white/35 font-semibold mb-1.5">Organization</div>
                      <div className="dm-serif text-base grad-text">Mortenson Dental Partners</div>
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[2px] uppercase text-white/35 font-semibold mb-1.5">Format</div>
                      <div className="dm-serif text-sm text-white/85">3 Sessions · Full Day</div>
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[2px] uppercase text-white/35 font-semibold mb-1.5">Existing Tools Referenced</div>
                      <div className="dm-serif text-sm text-white/85 leading-relaxed">Warm Handoff, LCQAC, MATTCH, Team Bootcamp, Overjet, Yes Philosophy</div>
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[2px] uppercase text-white/35 font-semibold mb-1.5">Core Insight</div>
                      <div className="dm-serif text-sm text-white/85">Not a training gap. A trust activation gap.</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-[10px] tracking-[2px] uppercase text-white/35 font-semibold mb-1.5">Our Role</div>
                      <div className="text-sm text-white/70 leading-relaxed">We are not bringing new tools. We are building the trust layer that makes the tools you have already invested in come alive.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THREE FORCES */}
        <section className="bg-slate-50 py-25">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-15">
            <div className="mb-14">
              <div className="reveal text-[11px] font-semibold tracking-[4px] uppercase grad-text mb-4">The Context</div>
              <h2 className="reveal reveal-delay-1 dm-serif text-4xl md:text-5xl text-[#0f172a] leading-tight tracking-tight mb-5">
                Three Forces Reshaping<br />Clinical Trust
              </h2>
              <div className="reveal reveal-delay-2 w-12 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded mb-7" />
              <p className="reveal reveal-delay-2 text-base text-slate-500 max-w-[560px] leading-relaxed">
                The Day of Learning exists at the intersection of three converging forces fundamentally changing how dental teams build trust — with each other and with patients.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-7">
              {[
                { num: "01", title: "The Trust Shift", tag: "Expert → Guide", color: C.cyan, body: "Patients no longer arrive with implicit trust in clinical authority. They have consulted Google, TikTok, and AI before sitting in your chair. The provider's role has shifted from unquestioned expert to trusted guide who earns trust by seeing the patient's perspective first." },
                { num: "02", title: "The AI Acceleration", tag: "Tools → Intelligence", color: C.purple, body: "AI-enabled diagnostics (Overjet) and patient-facing AI are transforming clinical workflows. Technology can build trust — or erode it — depending on how the human team integrates it. The human trust layer becomes more important, not less." },
                { num: "03", title: "The Adoption Gap", tag: "Built → Used", color: C.pink, body: "Organizations invest in tools, protocols, and training. Yet consistent adoption remains the primary challenge — not because the tools are wrong, but because the relational infrastructure to sustain them has not been deliberately built." },
              ].map((f, i) => (
                <div key={f.num} className={`reveal ${i > 0 ? `reveal-delay-${i}` : ""} bg-white rounded-2xl p-7 border border-slate-200 relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all`}>
                  <div className="absolute top-0 left-0 right-0 h-0.75" style={{ background: f.color }} />
                  <div className="dm-serif text-5xl opacity-7 leading-none mb-2 text-[#0f172a]">{f.num}</div>
                  <div className="dm-serif text-xl text-[#0f172a] mb-1">{f.title}</div>
                  <div className="text-[11px] font-semibold tracking-[2px] uppercase mb-4" style={{ color: f.color }}>{f.tag}</div>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>

            <div className="reveal bg-[#0f172a] rounded-2xl px-9 py-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.75 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
              <p className="text-base text-white/85 leading-relaxed">
                <strong className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Where joyFULL Growth sits:</strong> At the intersection of all three. We bring the trust methodology that activates existing tools, integrates emerging technology, and closes the adoption gap — through the one thing AI cannot replicate: human connection, earned trust, and the daily rhythm that makes it stick.
              </p>
            </div>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className="bg-white py-25">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-15">
            <div className="reveal text-[11px] font-semibold tracking-[4px] uppercase grad-text mb-4">Part Two</div>
            <h2 className="reveal reveal-delay-1 dm-serif text-4xl md:text-5xl text-[#0f172a] leading-tight tracking-tight mb-5">What We Are Designing For</h2>
            <div className="reveal reveal-delay-2 w-12 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded mb-7" />
            <p className="reveal reveal-delay-2 text-base text-slate-500 max-w-[680px] leading-relaxed mb-9">
              Your room contains dentists, hygienists, assistants, and managers — each with different daily realities, different frustrations, and different definitions of success. We designed every session to work for all of them simultaneously.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { role: "Dentists", color: C.cyan, text: "Respect for their autonomy. Practical tools that save time, not add to it. Permission to care about the business side." },
                { role: "Hygienists", color: C.purple, text: "Empowerment to lead case conversations. Clarity on their role in the triad. To be valued, not just utilized." },
                { role: "Managers", color: C.pink, text: "Recognition that full schedules and financial arrangements are clinical leadership. A seat at the table, not a support desk." },
                { role: "Assistants", color: C.slate4, text: "Belonging. Understanding how their role connects to patient outcomes. To feel like part of the team, not interchangeable." },
              ].map((a, i) => (
                <div key={a.role} className={`reveal ${i > 0 ? `reveal-delay-${i}` : ""} px-7 py-6 rounded-2xl border-l-4 bg-slate-50 hover:bg-slate-100 transition-colors`} style={{ borderColor: a.color }}>
                  <div className="dm-serif text-sm font-bold mb-2" style={{ color: a.color }}>{a.role}</div>
                  <p className="text-sm text-slate-500 leading-relaxed">{a.text}</p>
                </div>
              ))}
            </div>

            <h3 className="reveal dm-serif text-2xl text-[#0f172a] mb-5 mt-4">Shared Success Metrics</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                { title: "Energy & Excitement", desc: "Attendees leave energized, not drained. Positive buzz across regions." },
                { title: "External Validation", desc: "Existing tools (Warm Handoff, LCQAC, Overjet) feel validated and newly important." },
                { title: "Monday Morning Action", desc: "Every attendee has one specific commitment they made publicly." },
                { title: "Improved Trust", desc: "Communication, teamwork, and handoff quality measurably improve." },
                { title: "Production Impact", desc: "Increased case acceptance and same-day starts in the 30-60 days following." },
                { title: "Continuity", desc: "This feels like the natural next step — not another standalone initiative." },
              ].map((m, i) => (
                <div key={m.title} className={`reveal ${i > 0 ? `reveal-delay-${(i % 3) + 1}` : ""} bg-gradient-to-br from-cyan-400/5 to-purple-500/5 rounded-xl px-5 py-4.5 border border-purple-500/12`}>
                  <div className="text-sm font-semibold text-[#0f172a] mb-1">{m.title}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST FRAMEWORK */}
        <section className="bg-[#0f172a] py-25 relative overflow-hidden">
          <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_65%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glow-1" />
          <div className="max-w-[1100px] mx-auto px-6 lg:px-15 relative z-2">
            <div className="reveal text-[11px] font-semibold tracking-[4px] uppercase grad-text mb-4">The Framework</div>
            <h2 className="reveal reveal-delay-1 dm-serif text-4xl md:text-5xl text-white leading-tight tracking-tight mb-5">The Trust Activation Layer</h2>
            <div className="reveal reveal-delay-2 w-12 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded mb-7" />
            <p className="reveal reveal-delay-2 text-base text-white/50 max-w-[560px] leading-relaxed mb-0">
              Mortenson has built strong clinical tools and training infrastructure. The Day of Learning installs the trust layer that activates what already exists.
            </p>

            <div className="reveal reveal-delay-2 bg-white/4 border border-white/8 rounded-3xl p-10 mt-12 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl px-9 py-7 text-center mb-7">
                <div className="text-[11px] tracking-[3px] uppercase text-white/75 mb-1.5">What the Day of Learning Installs</div>
                <div className="dm-serif text-3xl text-white mb-1.5">The Trust Activation Layer</div>
                <div className="text-sm text-white/75">Professional Mindset · Mutual Accountability · Earned Patient Trust</div>
              </div>

              <div className="text-center text-sm text-cyan-400 mb-5 tracking-wider">↓ activates ↓</div>

              <div className="grid grid-cols-4 md:grid-cols-8 gap-2.5">
                {["Warm Handoff", "LCQAC", "MATTCH", "Overjet AI", "Yes Philosophy", "Overhear Psychology", "Team Bootcamp", "Dr-Mgr Same Page"].map((t) => (
                  <div key={t} className="bg-white/6 border border-white/10 rounded-xl px-3 py-3.5 text-center text-xs font-semibold text-white/70 leading-snug hover:bg-white/10 hover:text-white transition-colors">
                    {t.split(" ").map((w, i) => <span key={i}>{w}<br /></span>)}
                  </div>
                ))}
              </div>
              <div className="text-center mt-3.5 text-[11px] text-white/25 italic tracking-wider">Mortenson's Existing Infrastructure</div>
            </div>
          </div>
        </section>

        {/* SESSION ARC */}
        <section id="sessions" className="bg-white py-25 px-6 lg:px-15">
          <div className="max-w-[1100px] mx-auto">
            <div className="reveal text-[11px] font-semibold tracking-[4px] uppercase grad-text mb-4">Part Three</div>
            <h2 className="reveal reveal-delay-1 dm-serif text-4xl md:text-5xl text-[#0f172a] leading-tight tracking-tight mb-5">The Day: A Trust-Building Arc</h2>
            <div className="reveal reveal-delay-2 w-12 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded mb-7" />
            <p className="reveal reveal-delay-2 text-base text-slate-500 max-w-[600px] leading-relaxed">
              Three sessions. One through-line. Each builds on the last — from self, to team, to patient — with trust as the thread that connects everything.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mt-12 mb-7">
              {[
                { session: 1, time: "50 min keynote", title: "Approach Your Work Like a Pro", sub: "Self → Mindset", color: C.cyan, focus: "Choose to be a Pro", points: ["Dentistry is a leadership career", "Mutual accountability: high love + high standards", "Commitment over convenience"], outcome: "Every person in the room chooses to show up differently — starting today.", activates: "Sets the human foundation for everything that follows." },
                { session: 2, time: "50 min breakout", title: "The Trust Triangle", sub: "Team → Relationships", color: C.purple, focus: "Doctor · Hygienist · Manager", points: ["Story 1: The Broken Triangle", "Story 2: The Dialed-In Triangle", "Handoffs, same-day treatment, team checkout"], outcome: "Trust, understanding, and appreciation between the three roles that make or break the experience.", activates: "Warm Handoff, Yes Philosophy, Dr-Mgr Same Page" },
                { session: 3, time: "35-40 min keynote", title: "Trust as Currency", sub: "Patient → Case Acceptance", color: C.pink, focus: "Earning trust in a new era", points: ["The shift: expert → guide", "7 trust-building tools", "AI + Overjet as trust builders", "Active listening as the advanced maneuver"], outcome: "Specific, usable communication tools for Monday morning.", activates: "LCQAC, MATTCH, Overhear Psychology, Overjet" },
              ].map((s, i) => (
                <div key={s.session} className={`reveal ${i > 0 ? `reveal-delay-${i}` : ""} rounded-2xl overflow-hidden border border-slate-200 hover:-translate-y-1.5 hover:shadow-2xl transition-all`}>
                  <div className="px-6 py-5.5 text-white" style={{ background: s.color }}>
                    <div className="text-[10px] tracking-[2px] uppercase opacity-75 mb-1.5">Session {s.session} · {s.time}</div>
                    <div className="dm-serif text-lg leading-snug mb-1">{s.title}</div>
                    <div className="text-xs opacity-75">{s.sub}</div>
                  </div>
                  <div className="px-6 py-5">
                    <div className="text-xs font-bold tracking-wider uppercase mb-3" style={{ color: s.color }}>{s.focus}</div>
                    {s.points.map((p) => (
                      <div key={p} className="text-sm text-slate-500 leading-snug mb-1.5 pl-3.5 relative before:content-['·'] before:absolute before:left-0 before:font-bold">{p}</div>
                    ))}
                    <div className="h-px bg-slate-200 my-4" />
                    <div className="text-[10px] tracking-[2px] uppercase text-slate-400 font-semibold mb-1.5">Outcome</div>
                    <div className="text-sm text-[#1e293b] font-medium leading-relaxed mb-3">{s.outcome}</div>
                    <div className="text-[10px] tracking-[2px] uppercase text-slate-400 font-semibold mb-1.5">Activates</div>
                    <div className="text-xs font-semibold" style={{ color: s.color }}>{s.activates}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* ANIMATED THROUGHLINE */}
            <div className="reveal bg-[#0f172a] rounded-2xl px-5 md:px-9 py-6 md:py-8 border border-white/5 overflow-hidden">
              {/* Mobile layout - stacked */}
              <div className="flex flex-col items-center gap-4 md:hidden">
                <div className="text-[11px] tracking-[2px] uppercase text-white/25 font-semibold">Through-line</div>
                <div className="w-full relative h-0.75">
                  <div className="w-full h-0.75 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded opacity-35" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4] tl-dot" />
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899] tl-dot-right" />
                </div>
                <div className="relative w-full text-center h-9 flex items-center justify-center">
                  {tlWords.map((w, i) => (
                    <span key={w} className={`dm-serif text-xl tracking-wider grad-text tl-word ${i === tlIdx ? "tl-word-active" : ""}`}>{w}</span>
                  ))}
                </div>
                <div className="text-[11px] tracking-[2px] uppercase text-white/25 font-semibold">is built from</div>
              </div>
              {/* Desktop layout - horizontal */}
              <div className="hidden md:flex items-center gap-5 mb-4">
                <div className="text-[11px] tracking-[2px] uppercase text-white/25 font-semibold min-w-20">Through-line</div>
                <div className="flex-1 relative h-0.75 overflow-visible">
                  <div className="w-full h-0.75 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded opacity-35" />
                  <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4] tl-dot" />
                </div>
                <div className="relative min-w-44 text-center h-7 flex items-center justify-center">
                  {tlWords.map((w, i) => (
                    <span key={w} className={`dm-serif text-2xl tracking-wider grad-text tl-word ${i === tlIdx ? "tl-word-active" : ""}`}>{w}</span>
                  ))}
                </div>
                <div className="flex-1 relative h-0.75 overflow-visible">
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899] tl-dot-right" />
                  <div className="w-full h-0.75 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded opacity-35" />
                </div>
                <div className="text-[11px] tracking-[2px] uppercase text-white/25 font-semibold text-right min-w-20">is built from</div>
              </div>
              <div className="relative min-h-5.5 text-center mt-4 md:mt-0">
                {tlWords.map((w, i) => (
                  <span key={w} className={`text-sm text-white/35 italic tl-sub ${i === tlIdx ? "tl-sub-active" : ""}`}>{tlSubs[w]}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BEYOND */}
        <section id="beyond" className="bg-white py-25">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-15">
            <div className="reveal text-[11px] font-semibold tracking-[4px] uppercase grad-text mb-4">Looking Ahead</div>
            <h2 className="reveal reveal-delay-1 dm-serif text-4xl md:text-5xl text-[#0f172a] leading-tight tracking-tight mb-5">Beyond the Day of Learning</h2>
            <div className="reveal reveal-delay-2 w-12 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded mb-7" />
            <p className="reveal reveal-delay-2 text-base text-slate-500 max-w-[640px] leading-relaxed mb-0">
              The Day of Learning is designed to create energy, validate your tools, and give your teams specific commitments they carry into Monday morning. It is a catalytic event — and we intend to make it extraordinary.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="reveal reveal-delay-1 bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="dm-serif text-xl text-[#0f172a] mb-3.5">From Event to Rhythm</div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  The gap between tool creation and tool adoption is rarely solved by more training. It is solved by systematic rhythm — consistent check-ins, accountability frameworks, and feedback loops that keep the tools alive between events.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mt-3">
                  Whether built by your internal L&D team or supported externally, a structured rhythm connecting your existing Team Bootcamp skills to daily practice is the natural next step.
                </p>
              </div>
              <div className="reveal reveal-delay-2 bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="dm-serif text-xl text-[#0f172a] mb-3.5">AI-Enabled Clinical Workflows</div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Your Overjet integration signals something important: Mortenson is already navigating the intersection of AI and clinical trust. This intersection is accelerating. How teams use AI tools to build (rather than erode) patient trust will define the next era of dental practice.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mt-3">
                  We have been doing meaningful work in AI-enabled clinical workflows — designing systems where technology amplifies the human trust layer rather than replacing it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING / DOWNLOAD */}
        <section id="download" className="bg-[#0f172a] py-30 px-6 lg:px-15 relative overflow-hidden text-center">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.1),transparent_65%)] -top-25 -left-25 glow-1" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.1),transparent_65%)] -bottom-25 -right-25 glow-2" />
          
          <div className="relative z-2 max-w-[680px] mx-auto">
            <h2 className="reveal dm-serif text-4xl md:text-6xl text-white leading-tight tracking-tight mb-4">
              Download the <em className="italic grad-text">Full Document</em>
            </h2>
            <p className="reveal reveal-delay-1 text-base text-white/55 leading-relaxed mb-12">
              The complete content architecture is available as a formatted PDF — ready to share with Dr. Bostick, Lauren, Andrea, and your team. All sessions, frameworks, and design rationale in one document.
            </p>
            <div className="reveal reveal-delay-2 flex gap-4 justify-center flex-wrap">
              <a
                href="https://blobs.vusercontent.net/blob/Mortenson_Day%20Of%20Learning%20x%20joyFULL%20-M3g10UJJ012xoTyDWJqBpovxGybPhn.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#1e293b] text-white text-sm font-semibold rounded-full border border-white/10 hover:bg-[#334155] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/40 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>

            <div className="reveal reveal-delay-3 flex justify-center gap-15 mt-20 pt-15 border-t border-white/8">
              <div className="text-center">
                <div className="dm-serif text-base text-white mb-1">Dr. Eric J. Roman</div>
                <div className="text-xs text-white/40 mb-1.5">Founder, joyFULL Growth</div>
                <div className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">eric@joyfullgrowth.com</div>
              </div>
              <div className="text-center">
                <div className="dm-serif text-base text-white mb-1">Josey Sewell</div>
                <div className="text-xs text-white/40 mb-1.5">Integrator, joyFULL Growth</div>
                <div className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">josey@joyfullgrowth.com</div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <LeadershipCTAFooter />


      </div>
    </>
  )
}
