"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const BRAND = {
  navy: "#0f172a",
  navyLight: "#1e293b",
  slate: "#334155",
  slateLight: "#64748b",
  slateMuted: "#94a3b8",
  cyan: "#06b6d4",
  purple: "#8b5cf6",
  pink: "#ec4899",
  coral: "#f97316",
  amber: "#f59e0b",
  teal: "#14b8a6",
  white: "#ffffff",
  offWhite: "#f8fafc",
  borderLight: "#e2e8f0",
  textDark: "#0f172a",
  textBody: "#334155",
  textMuted: "#64748b",
}

const GRADIENT = `linear-gradient(135deg, ${BRAND.cyan}, ${BRAND.purple}, ${BRAND.pink})`
const GRADIENT_TEXT: React.CSSProperties = {
  background: GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}

function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

function HeroHeart() {
  return (
    <>
      <style>{`
        @keyframes heartPulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 12px rgba(236,72,153,0.3)); }
          15% { transform: scale(1.15); filter: drop-shadow(0 0 24px rgba(236,72,153,0.5)); }
          30% { transform: scale(1); filter: drop-shadow(0 0 12px rgba(236,72,153,0.3)); }
          45% { transform: scale(1.1); filter: drop-shadow(0 0 20px rgba(236,72,153,0.45)); }
          60% { transform: scale(1); filter: drop-shadow(0 0 12px rgba(236,72,153,0.3)); }
        }
      `}</style>
      <div style={{ animation: "heartPulse 2.4s ease-in-out infinite", display: "inline-block", marginBottom: 20 }}>
        <svg width="56" height="52" viewBox="0 0 24 22" fill="none">
          <defs>
            <linearGradient id="heartGrad" x1="0" y1="0" x2="24" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={BRAND.cyan} />
              <stop offset="50%" stopColor={BRAND.purple} />
              <stop offset="100%" stopColor={BRAND.pink} />
            </linearGradient>
          </defs>
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="url(#heartGrad)"
          />
        </svg>
      </div>
    </>
  )
}

function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{ background: BRAND.navy, padding: "80px 32px 64px", textAlign: "center", overflow: "hidden" }}>
      <div
        style={{
          fontSize: 11,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: BRAND.slateMuted,
          marginBottom: 24,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
        }}
      >
        February 14, 2026
      </div>
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "scale(1)" : "scale(0.5)",
          transition: "opacity 0.6s ease 0.3s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.3s",
        }}
      >
        <HeroHeart />
      </div>
      <h1
        style={{
          fontSize: "clamp(34px, 6vw, 54px)",
          fontWeight: 700,
          color: BRAND.white,
          lineHeight: 1.15,
          margin: "0 0 18px",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
        }}
      >
        {"Bringing "}
        <span style={GRADIENT_TEXT}>{"Love & Joy"}</span>
        {" Back to Dentistry"}
      </h1>
      <p
        style={{
          fontSize: 16,
          color: BRAND.slateLight,
          lineHeight: 1.6,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s",
        }}
      >
        A letter from Eric & Josey to our team and inner circle
      </p>
    </div>
  )
}

function LoveOrbit() {
  const items = [
    { label: "Legacy", angle: -60, color: BRAND.cyan },
    { label: "Sustainability", angle: 0, color: BRAND.purple },
    { label: "Everybody Wins", angle: 60, color: BRAND.pink },
    { label: "100-Year Mindset", angle: 120, color: BRAND.coral },
    { label: "Purpose \u00D7 People \u00D7 Playbooks", angle: 180, color: BRAND.amber },
    { label: "Perpetuate, Not Sell Out", angle: 240, color: BRAND.teal },
  ]

  return (
    <>
      <style>{`
        @keyframes loveSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes loveSpinReverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes lovePulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 32px rgba(139,92,246,0.2), 0 0 64px rgba(139,92,246,0.05); }
          50% { transform: translate(-50%, -50%) scale(1.07); box-shadow: 0 0 48px rgba(139,92,246,0.35), 0 0 96px rgba(139,92,246,0.12); }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.04); }
        }
        @keyframes orbitDot {
          from { transform: rotate(0deg) translateX(110px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(110px) rotate(-360deg); }
        }
        @keyframes orbitDot2 {
          from { transform: rotate(180deg) translateX(140px) rotate(-180deg); }
          to { transform: rotate(540deg) translateX(140px) rotate(-540deg); }
        }
      `}</style>
      <div style={{ position: "relative", width: 380, height: 380, margin: "0 auto" }}>
        <div style={{ position: "absolute", inset: 0, animation: "loveSpin 55s linear infinite" }}>
          {items.map((item, i) => {
            const rad = (item.angle * Math.PI) / 180
            const x = 190 + Math.cos(rad) * 168
            const y = 190 + Math.sin(rad) * 168
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  transform: "translate(-50%, -50%)",
                  animation: "loveSpinReverse 55s linear infinite",
                  fontSize: 11,
                  fontWeight: 600,
                  color: item.color,
                  whiteSpace: "nowrap",
                  letterSpacing: 0.5,
                }}
              >
                {item.label}
              </div>
            )
          })}
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 220,
            height: 220,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
            animation: "ringPulse 4s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 280,
            height: 280,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.04)",
            animation: "ringPulse 4s ease-in-out infinite 1.2s",
          }}
        />
        <div style={{ position: "absolute", top: "50%", left: "50%", width: 0, height: 0 }}>
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: GRADIENT,
              animation: "orbitDot 7s linear infinite",
              boxShadow: "0 0 12px rgba(139,92,246,0.4)",
            }}
          />
        </div>
        <div style={{ position: "absolute", top: "50%", left: "50%", width: 0, height: 0 }}>
          <div
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${BRAND.pink}, ${BRAND.amber})`,
              animation: "orbitDot2 11s linear infinite",
              boxShadow: "0 0 10px rgba(236,72,153,0.3)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 130,
            height: 130,
            borderRadius: "50%",
            background: GRADIENT,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "lovePulse 3s ease-in-out infinite",
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 700, color: BRAND.white }}>Love</div>
        </div>
      </div>
    </>
  )
}

function P({ children, style = {} }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontSize: 16, color: BRAND.textBody, lineHeight: 1.85, margin: "0 0 20px", ...style }}>
      {children}
    </p>
  )
}

function PLight({ children, style = {} }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, margin: "0 0 20px", ...style }}>
      {children}
    </p>
  )
}

function Em({ children }: { children: ReactNode }) {
  return <span style={{ color: BRAND.textDark, fontWeight: 600 }}>{children}</span>
}

function EmLight({ children }: { children: ReactNode }) {
  return <span style={{ color: BRAND.white, fontWeight: 600 }}>{children}</span>
}

export default function LoveInvitationPage() {
  const timeline = [
    {
      date: "February 14",
      title: "Valentine's Day \u2014 We Plant the Flag",
      desc: "Heartfelt posts from Eric, Josey, and our inner circle. joyFULL Growth and Dental Associate Growth websites go live.",
      active: true,
    },
    {
      date: "February",
      title: "Email 1 \u2014 Bringing Love Back",
      desc: "First message to our existing community. Introducing the belief, the brands, and what's coming.",
      active: false,
    },
    {
      date: "March",
      title: "Newsletters + Toolkit Launch",
      desc: "High Performance Dentist Journal and Clinical Leadership Journal go live. Plus the Dental Associate Growth Toolkit \u2014 real frameworks, free to the market.",
      active: false,
    },
    {
      date: "April",
      title: "The Collective \u2014 Private Invitations",
      desc: "Invitations go out for the next chapter of The Collective. Intimate. Curated. For the leaders ready to build differently.",
      active: false,
    },
  ]

  const links = [
    { label: "joyFULL Growth", url: "https://joyfullgrowth.com", display: "joyfullgrowth.com", color: BRAND.purple },
    { label: "Dental Associate Growth", url: "https://dentalassociategrowth.com", display: "dentalassociategrowth.com", color: BRAND.cyan },
  ]

  return (
    <div className={inter.className} style={{ background: BRAND.white, minHeight: "100vh" }}>
      {/* HERO */}
      <HeroSection />

      {/* THE LETTER - PART 1: ORIGIN */}
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "56px 28px 0" }}>
        <FadeIn delay={200}>
          <P>A few years ago, we launched something called joyFULL People.</P>
          <P>
            {"The name said everything. We believed \u2014 and still believe \u2014 that "}
            <Em>joy and love are the most powerful forces for positive change</Em>
            {". In business. In dentistry. In life."}
          </P>
          <P>
            {"People thought we were being idealistic. Maybe we were. But we also knew what we'd seen with our own eyes \u2014 that the leaders who build things that last aren't the loudest or the most aggressive. They're the ones who care the most deeply. Who appreciate their people. Who are generous with their time, their knowledge, and their honesty. Who love the people they lead enough to tell them the truth."}
          </P>
          <P>{"That's not soft. It's simply truth."}</P>
        </FadeIn>

        <FadeIn delay={300}>
          <div style={{ height: 2, width: 48, borderRadius: 1, background: GRADIENT, margin: "36px 0" }} />
        </FadeIn>

        <FadeIn delay={400}>
          <P>
            {"Over the past year, we've been quietly doing something we're incredibly proud of. We brought hundreds of heart-centered leaders into Eric's living room \u2014 literally \u2014 for the launch of "}
            <Em>The Collective</Em>
            {", an invite-only community of changemakers who believe this industry is ready for something different."}
          </P>
          <P>
            {"Those gatherings confirmed what we already felt: there is a deep, genuine hunger for a better way to lead, to build, and to grow. Not louder. Not faster. "}
            <Em>Better.</Em>
          </P>
        </FadeIn>
      </div>

      {/* LOVE AT THE CENTER - ANIMATED */}
      <div style={{ background: BRAND.navy, padding: "64px 32px", margin: "48px 0", textAlign: "center" }}>
        <FadeIn>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 3,
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: 12,
              ...GRADIENT_TEXT,
            }}
          >
            What We're Built On
          </div>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              color: BRAND.white,
              lineHeight: 1.25,
              marginBottom: 48,
              maxWidth: 480,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Everything we build starts from the same center.
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <LoveOrbit />
        </FadeIn>
        <FadeIn delay={400}>
          <p
            style={{
              fontSize: 14,
              color: BRAND.slateLight,
              marginTop: 48,
              lineHeight: 1.7,
              maxWidth: 440,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {"Legacy. Sustainability. Everybody wins. A 100-year mindset. Not just what we do \u2014 "}
            <span style={{ color: BRAND.white, fontWeight: 500 }}>how we do it</span>.
          </p>
        </FadeIn>
      </div>

      {/* THE LETTER - PART 2: THE LAUNCH */}
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "12px 28px 0" }}>
        <FadeIn>
          <P>{"Today, on Valentine's Day, we're launching the next chapter."}</P>
        </FadeIn>

        {/* Brand Cards */}
        <FadeIn delay={100}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, margin: "32px 0" }}>
            <div style={{ background: BRAND.offWhite, border: `1px solid ${BRAND.borderLight}`, borderRadius: 14, padding: "24px 24px" }}>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                <span style={GRADIENT_TEXT}>joyFULL Growth</span>
              </div>
              <P style={{ margin: 0, fontSize: 15, color: BRAND.textMuted }}>
                {"Our commitment to a different way of building \u2014 where purpose, people, and playbooks come together. Where leaders don't have to choose between performance and humanity."}
              </P>
              <a
                href="https://joyfullgrowth.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 12,
                  fontSize: 13,
                  fontWeight: 600,
                  color: BRAND.purple,
                  textDecoration: "none",
                  letterSpacing: 0.3,
                }}
              >
                {"joyfullgrowth.com \u2192"}
              </a>
            </div>
            <div style={{ background: BRAND.offWhite, border: `1px solid ${BRAND.borderLight}`, borderRadius: 14, padding: "24px 24px" }}>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                <span
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.cyan}, ${BRAND.purple})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Dental Associate Growth
                </span>
              </div>
              <P style={{ margin: 0, fontSize: 15, color: BRAND.textMuted }}>
                This is our first and most important product. Associates will drive the future of our industry. And right now, they are among the most underserved dentists in our profession when it comes to real support, development, and empowerment. We built this to change that.
              </P>
              <a
                href="https://dentalassociategrowth.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 12,
                  fontSize: 13,
                  fontWeight: 600,
                  color: BRAND.cyan,
                  textDecoration: "none",
                  letterSpacing: 0.3,
                }}
              >
                {"dentalassociategrowth.com \u2192"}
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <P>
            Built by a team of people who believe, with their whole hearts, that dentistry deserves better. That the dentists in this profession deserve more than burnout and good intentions. That there is a way to build with love at the center and still demand the highest standard of excellence.
          </P>
        </FadeIn>
      </div>

      {/* AUTHENTICITY SECTION */}
      <div
        style={{
          background: BRAND.offWhite,
          borderTop: `1px solid ${BRAND.borderLight}`,
          borderBottom: `1px solid ${BRAND.borderLight}`,
          padding: "48px 28px",
          margin: "36px 0",
        }}
      >
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <FadeIn>
            <P style={{ color: BRAND.textMuted, fontSize: 15 }}>
              {"We've tried being things other than who we were designed to be. We've tried living by other people's parameters, other people's goals, other people's EBITDAs, other people's definitions of success."}
            </P>
            <P style={{ color: BRAND.textMuted, fontSize: 15 }}>
              {"We've watched company after company and leader after leader reach the transaction, achieve the thing they were told was the Holy Grail. And on the other side of it, they weren't satisfied. Because the thing they were chasing was never the thing they actually wanted."}
            </P>
            <div
              style={{
                padding: "20px 24px",
                borderLeft: `3px solid ${BRAND.purple}`,
                background: BRAND.white,
                borderRadius: "0 10px 10px 0",
                margin: "24px 0",
              }}
            >
              <p style={{ fontSize: 15, fontStyle: "italic", color: BRAND.textBody, margin: 0, lineHeight: 1.7 }}>
                {"That's when we recognized there's something more important, something deeper, and something more lasting than what we've been sold."}
              </p>
            </div>
            <P style={{ color: BRAND.textBody, fontSize: 15 }}>
              {"Our strategy is authenticity. We're confident in who we are. "}
              <Em>{"Not because we figured it all out, but because we stopped pretending to be something we're not."}</Em>
              {" And we believe the people who need to hear this will feel it."}
            </P>
          </FadeIn>
        </div>
      </div>

      {/* THE INVITATION */}
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "0 28px" }}>
        <FadeIn>
          <div
            style={{
              background: BRAND.navy,
              borderRadius: 16,
              padding: "36px 28px",
              margin: "0 0 40px",
            }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: 20,
                ...GRADIENT_TEXT,
              }}
            >
              Your Invitation
            </div>
            <PLight>{"We'd love for you to be part of this moment."}</PLight>
            <PLight style={{ color: "rgba(255,255,255,0.6)" }}>
              {"If you feel it \u2014 share something in your own voice this Valentine's Day weekend. LinkedIn, Instagram, wherever feels right. In your own words, about what bringing joy and love back to this work means to you."}
            </PLight>
            <PLight style={{ color: "rgba(255,255,255,0.6)" }}>
              {"No script. No template. No hashtag. Just you. "}
              <EmLight>What does love mean in the context of the work you do?</EmLight>
              {" That's your post."}
            </PLight>
            <PLight style={{ color: "rgba(255,255,255,0.6)" }}>
              Feel free to share links to our sites, tag us, or simply share your heart. Whatever feels authentic.
            </PLight>
            <PLight style={{ color: "rgba(255,255,255,0.45)", margin: 0 }}>
              {"You're receiving this because you've been a source of inspiration for everything we're building. We'd be honored to have your voice alongside ours."}
            </PLight>
          </div>
        </FadeIn>

        {/* LINKS TO SHARE */}
        <FadeIn delay={100}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 3,
              textTransform: "uppercase",
              fontWeight: 600,
              color: BRAND.slateMuted,
              marginBottom: 16,
            }}
          >
            Links to Share
          </div>
          <div
            style={{
              background: BRAND.offWhite,
              border: `1px solid ${BRAND.borderLight}`,
              borderRadius: 12,
              padding: "18px 22px",
              marginBottom: 36,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {links.map((link, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: BRAND.textBody }}>{link.label}</span>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 13, color: link.color, fontWeight: 500, textDecoration: "none" }}
                >
                  {`${link.display} \u2192`}
                </a>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* WHAT'S NEXT */}
        <FadeIn delay={200}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 3,
              textTransform: "uppercase",
              fontWeight: 600,
              color: BRAND.slateMuted,
              marginBottom: 24,
            }}
          >
            {"What's Coming"}
          </div>
          <div style={{ position: "relative", paddingLeft: 28, marginBottom: 40 }}>
            <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 2, background: BRAND.borderLight }} />
            {timeline.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 18, marginBottom: 28, position: "relative" }}>
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: item.active ? GRADIENT : BRAND.white,
                    border: item.active ? "none" : `2px solid ${BRAND.borderLight}`,
                    flexShrink: 0,
                    position: "absolute",
                    left: -28,
                    top: 3,
                    boxShadow: item.active ? "0 2px 8px rgba(139,92,246,0.25)" : "none",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: 1,
                      marginBottom: 4,
                      ...(item.active ? GRADIENT_TEXT : { color: BRAND.slateMuted }),
                    }}
                  >
                    {item.date}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: item.active ? BRAND.textDark : BRAND.textBody, marginBottom: 4 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 14, color: BRAND.textMuted, lineHeight: 1.65 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* CLOSING */}
        <FadeIn delay={300}>
          <div style={{ height: 2, width: 48, borderRadius: 1, background: GRADIENT, margin: "0 0 36px" }} />
          <P>{"More is coming. So much more. But right now, we just wanted to plant the flag and say \u2014"}</P>
          <P style={{ color: BRAND.textDark, fontWeight: 600, fontSize: 17 }}>
            {"This is what we stand for. This is how we build. And we're just getting started."}
          </P>
          <P>{"Happy Valentine's Day."}</P>
          <P style={{ marginBottom: 8 }}>With love,</P>
          <P style={{ fontWeight: 600, color: BRAND.textDark, marginBottom: 0 }}>{"Eric & Josey"}</P>
        </FadeIn>
      </div>

      {/* FOOTER */}
      <div style={{ background: BRAND.navy, padding: "40px 32px", textAlign: "center", marginTop: 56 }}>
        <FadeIn>
          <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="https://joyfullgrowth.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 12, fontWeight: 600, textDecoration: "none", ...GRADIENT_TEXT }}
            >
              joyFULL Growth
            </a>
            <span style={{ color: "rgba(255,255,255,0.1)" }}>{"\u00B7"}</span>
            <a
              href="https://dentalassociategrowth.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                fontWeight: 600,
                textDecoration: "none",
                background: `linear-gradient(135deg, ${BRAND.cyan}, ${BRAND.purple})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Dental Associate Growth
            </a>
          </div>
          <p style={{ fontSize: 10, color: BRAND.slate, marginTop: 14, letterSpacing: 2, textTransform: "uppercase" }}>
            Future of Wellness Studio
          </p>
        </FadeIn>
      </div>
    </div>
  )
}
