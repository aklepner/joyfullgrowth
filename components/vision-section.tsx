"use client"

import type React from "react"

export default function VisionSection() {
  return (
    <section className="py-32 px-10 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-sm font-semibold tracking-[0.2em] uppercase text-[#14b8a6] mb-4">Our Vision</div>
          <h2 className="text-5xl font-extrabold mb-6">A New Dental Paradigm</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            For too long, dentistry has faced a false choice. We're proving there's a third way.
          </p>
        </div>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-3xl font-extrabold mb-6">Beyond the Binary</h3>
            <p className="text-[17px] leading-relaxed text-white/80 mb-5">
              Burn out as a solo practitioner or sell out to private equity? That's not a real choice. It's a surrender
              to a system that treats practices like assets to be extracted, not legacies to be built.
            </p>
            <p className="text-[17px] leading-relaxed text-white/80">
              Through systematic excellence, community support, and strategic guidance, dental practices can grow
              sustainably while maintaining their values, their culture, and their independence.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-extrabold mb-6">The Third Way</h3>
            <p className="text-[17px] leading-relaxed text-white/80 mb-5">
              This isn't about rejecting growth—it's about redefining what successful growth looks like. It's about
              building practices that thrive for 100 years, not just 5.
            </p>
            <p className="text-[17px] leading-relaxed text-white/80 mb-5">
              It's about people before profits (though profits absolutely matter). It's about creating workplaces where
              teams flourish, patients receive exceptional care, and owners build wealth without sacrificing their
              souls.
            </p>
            <p className="text-[17px] leading-relaxed text-white/80">
              <strong>This is the future of dentistry.</strong> And we're building it together.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 mt-16">
          {/* Core Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Principle 1: Legacy */}
            <PrincipleCard
              title="Legacy, Not Exit"
              description="Build practices that can be perpetuated, passed down, and sustained across generations—not just optimized for sale."
              icon={<LegacyIcon />}
            />

            {/* Principle 2: Love */}
            <PrincipleCard
              title="Love at the Center"
              description="High love + high accountability. Not soft, not permissive—but deeply human and systematically excellent."
              icon={<LoveIcon />}
            />

            {/* Principle 3: Systems */}
            <PrincipleCard
              title="Systems Over Personalities"
              description="Create frameworks that work when you're not in the room. Problems are systems issues, not people issues."
              icon={<SystemsIcon />}
            />

            {/* Principle 4: Together */}
            <PrincipleCard
              title="Better Together"
              description="Community beats competition. Shared learning accelerates transformation. Nobody succeeds alone."
              icon={<TogetherIcon />}
            />

            {/* Principle 5: 100-Year */}
            <PrincipleCard
              title="100-Year Thinking"
              description="Optimize for decades, not quarters. Build foundations that compound. Reject short-term extraction."
              icon={<TimelineIcon />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function PrincipleCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white hover:border-[#14b8a6] hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#14b8a6] to-[#8b5cf6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="w-full h-36 flex items-center justify-center mb-5">{icon}</div>

      <h3 className="text-lg font-bold text-[#14b8a6] mb-3">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  )
}

function LegacyIcon() {
  return (
    <svg className="w-20 h-24" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
      <style>
        {`
          @keyframes stackBlock {
            0% { transform: translateY(32px); opacity: 0; }
            20% { opacity: 1; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .legacy-block {
            animation: stackBlock 3s ease-in-out infinite;
          }
          .legacy-block:nth-child(1) { animation-delay: 0s; }
          .legacy-block:nth-child(2) { animation-delay: 0.3s; }
          .legacy-block:nth-child(3) { animation-delay: 0.6s; }
          .legacy-block:nth-child(4) { animation-delay: 0.9s; }
          .legacy-block:nth-child(5) { animation-delay: 1.2s; }
          .legacy-block:nth-child(6) { animation-delay: 1.5s; }
        `}
      </style>
      <path d="M 30 95 L 50 95 L 55 92 L 35 92 Z" fill="#1a1a1a" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

      <g className="legacy-block">
        <path d="M 35 92 L 35 88 L 40 85 L 45 88 L 45 92 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
        <path d="M 35 88 L 40 85 L 40 81 L 35 84 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.5" />
        <path d="M 40 85 L 45 88 L 45 84 L 40 81 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.7" />
      </g>

      <g className="legacy-block">
        <path d="M 35 88 L 35 84 L 40 81 L 45 84 L 45 88 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
        <path d="M 35 84 L 40 81 L 40 77 L 35 80 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.5" />
        <path d="M 40 81 L 45 84 L 45 80 L 40 77 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.7" />
      </g>

      <g className="legacy-block">
        <path d="M 35 84 L 35 80 L 40 77 L 45 80 L 45 84 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
        <path d="M 35 80 L 40 77 L 40 73 L 35 76 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.5" />
        <path d="M 40 77 L 45 80 L 45 76 L 40 73 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.7" />
      </g>

      <g className="legacy-block">
        <path d="M 35 80 L 35 76 L 40 73 L 45 76 L 45 80 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
        <path d="M 35 76 L 40 73 L 40 69 L 35 72 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.5" />
        <path d="M 40 73 L 45 76 L 45 72 L 40 69 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.7" />
      </g>

      <g className="legacy-block">
        <path d="M 35 76 L 35 72 L 40 69 L 45 72 L 45 76 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
        <path d="M 35 72 L 40 69 L 40 65 L 35 68 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.5" />
        <path d="M 40 69 L 45 72 L 45 68 L 40 65 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.7" />
      </g>

      <g className="legacy-block">
        <path d="M 35 72 L 35 68 L 40 65 L 45 68 L 45 72 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" />
        <path d="M 35 68 L 40 65 L 40 61 L 35 64 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.5" />
        <path d="M 40 65 L 45 68 L 45 64 L 40 61 Z" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.7" />
      </g>
    </svg>
  )
}

function LoveIcon() {
  return (
    <svg className="w-22 h-22" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
      <style>
        {`
          @keyframes pulseLove {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.15); opacity: 0.9; }
          }
          @keyframes expandRing {
            0% { transform: scale(0.6); opacity: 0; }
            50% { opacity: 0.4; }
            100% { transform: scale(1.4); opacity: 0; }
          }
          .love-pulse {
            animation: pulseLove 2s ease-in-out infinite;
            transform-origin: 45px 40px;
          }
          .love-ring {
            animation: expandRing 3s ease-out infinite;
            transform-origin: center;
          }
          .love-ring:nth-child(2) { animation-delay: 0s; }
          .love-ring:nth-child(3) { animation-delay: 1s; }
          .love-ring:nth-child(4) { animation-delay: 2s; }
        `}
      </style>
      <circle className="love-ring" cx="45" cy="45" r="20" fill="none" stroke="#14b8a6" strokeWidth="1" opacity="0.2" />
      <circle className="love-ring" cx="45" cy="45" r="20" fill="none" stroke="#14b8a6" strokeWidth="1" opacity="0.2" />
      <circle className="love-ring" cx="45" cy="45" r="20" fill="none" stroke="#14b8a6" strokeWidth="1" opacity="0.2" />

      <g className="love-pulse">
        <path
          d="M 45 48 L 35 38 C 32 35, 32 30, 35 27 C 38 24, 43 27, 45 29 C 47 27, 52 24, 55 27 C 58 30, 58 35, 55 38 L 45 48 Z"
          fill="#14b8a6"
          stroke="none"
        />
      </g>
    </svg>
  )
}

function SystemsIcon() {
  return (
    <svg className="w-24 h-24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <style>
        {`
          @keyframes formGrid {
            0%, 100% { transform: translate(0, 0); opacity: 1; }
            50% { transform: translate(var(--random-x), var(--random-y)); opacity: 0.3; }
          }
          @keyframes drawLine {
            0%, 100% { stroke-dashoffset: 0; opacity: 0.3; }
            50% { stroke-dashoffset: 100; opacity: 0; }
          }
          .systems-dot {
            animation: formGrid 4s ease-in-out infinite;
          }
          .systems-line {
            animation: drawLine 4s ease-in-out infinite;
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }
        `}
      </style>
      <circle
        className="systems-dot"
        cx="30"
        cy="30"
        r="3"
        fill="#14b8a6"
        style={{ "--random-x": "-8px", "--random-y": "-8px" } as React.CSSProperties}
      />
      <circle
        className="systems-dot"
        cx="50"
        cy="30"
        r="3"
        fill="#14b8a6"
        style={{ "--random-x": "6px", "--random-y": "-10px" } as React.CSSProperties}
      />
      <circle
        className="systems-dot"
        cx="70"
        cy="30"
        r="3"
        fill="#14b8a6"
        style={{ "--random-x": "8px", "--random-y": "6px" } as React.CSSProperties}
      />

      <circle
        className="systems-dot"
        cx="30"
        cy="50"
        r="3"
        fill="#14b8a6"
        style={{ "--random-x": "-10px", "--random-y": "4px" } as React.CSSProperties}
      />
      <circle
        className="systems-dot"
        cx="50"
        cy="50"
        r="3"
        fill="#14b8a6"
        style={{ "--random-x": "0px", "--random-y": "0px" } as React.CSSProperties}
      />
      <circle
        className="systems-dot"
        cx="70"
        cy="50"
        r="3"
        fill="#14b8a6"
        style={{ "--random-x": "7px", "--random-y": "-6px" } as React.CSSProperties}
      />

      <circle
        className="systems-dot"
        cx="30"
        cy="70"
        r="3"
        fill="#14b8a6"
        style={{ "--random-x": "6px", "--random-y": "8px" } as React.CSSProperties}
      />
      <circle
        className="systems-dot"
        cx="50"
        cy="70"
        r="3"
        fill="#14b8a6"
        style={{ "--random-x": "-4px", "--random-y": "10px" } as React.CSSProperties}
      />
      <circle
        className="systems-dot"
        cx="70"
        cy="70"
        r="3"
        fill="#14b8a6"
        style={{ "--random-x": "-8px", "--random-y": "-7px" } as React.CSSProperties}
      />

      <line className="systems-line" x1="30" y1="30" x2="50" y2="30" stroke="#14b8a6" strokeWidth="1" />
      <line className="systems-line" x1="50" y1="30" x2="70" y2="30" stroke="#14b8a6" strokeWidth="1" />
      <line className="systems-line" x1="30" y1="50" x2="50" y2="50" stroke="#14b8a6" strokeWidth="1" />
      <line className="systems-line" x1="50" y1="50" x2="70" y2="50" stroke="#14b8a6" strokeWidth="1" />
      <line className="systems-line" x1="30" y1="70" x2="50" y2="70" stroke="#14b8a6" strokeWidth="1" />
      <line className="systems-line" x1="50" y1="70" x2="70" y2="70" stroke="#14b8a6" strokeWidth="1" />

      <line className="systems-line" x1="30" y1="30" x2="30" y2="50" stroke="#14b8a6" strokeWidth="1" />
      <line className="systems-line" x1="30" y1="50" x2="30" y2="70" stroke="#14b8a6" strokeWidth="1" />
      <line className="systems-line" x1="50" y1="30" x2="50" y2="50" stroke="#14b8a6" strokeWidth="1" />
      <line className="systems-line" x1="50" y1="50" x2="50" y2="70" stroke="#14b8a6" strokeWidth="1" />
      <line className="systems-line" x1="70" y1="30" x2="70" y2="50" stroke="#14b8a6" strokeWidth="1" />
      <line className="systems-line" x1="70" y1="50" x2="70" y2="70" stroke="#14b8a6" strokeWidth="1" />
    </svg>
  )
}

function TogetherIcon() {
  return (
    <svg className="w-24 h-22" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
      <style>
        {`
          @keyframes formCircle {
            0%, 100% { transform: translate(0, 0); }
            45%, 55% { transform: translate(var(--target-x), var(--target-y)); }
          }
          .circle-dot {
            animation: formCircle 5s ease-in-out infinite;
          }
          .circle-dot:nth-child(1) { --target-x: 35px; --target-y: 15px; }
          .circle-dot:nth-child(2) { --target-x: 23px; --target-y: 19px; animation-delay: 0.1s; }
          .circle-dot:nth-child(3) { --target-x: 10px; --target-y: 23px; animation-delay: 0.2s; }
          .circle-dot:nth-child(4) { --target-x: -5px; --target-y: 26px; animation-delay: 0.3s; }
          .circle-dot:nth-child(5) { --target-x: -19px; --target-y: 28px; animation-delay: 0.4s; }
          .circle-dot:nth-child(6) { --target-x: 20px; --target-y: 17px; animation-delay: 0.5s; }
          .circle-dot:nth-child(7) { --target-x: 5px; --target-y: 17px; animation-delay: 0.6s; }
          .circle-dot:nth-child(8) { --target-x: -10px; --target-y: 15px; animation-delay: 0.7s; }
          .circle-dot:nth-child(9) { --target-x: -24px; --target-y: 12px; animation-delay: 0.8s; }
          .circle-dot:nth-child(10) { --target-x: -36px; --target-y: 8px; animation-delay: 0.9s; }
          .circle-dot:nth-child(11) { --target-x: 8px; --target-y: -7px; animation-delay: 1s; }
          .circle-dot:nth-child(12) { --target-x: -3px; --target-y: -12px; animation-delay: 1.1s; }
          .circle-dot:nth-child(13) { --target-x: -13px; --target-y: -16px; animation-delay: 1.2s; }
          .circle-dot:nth-child(14) { --target-x: -20px; --target-y: -19px; animation-delay: 1.3s; }
          .circle-dot:nth-child(15) { --target-x: -27px; --target-y: -21px; animation-delay: 1.4s; }
          .circle-dot:nth-child(16) { --target-x: 20px; --target-y: -33px; animation-delay: 1.5s; }
          .circle-dot:nth-child(17) { --target-x: 14px; --target-y: -32px; animation-delay: 1.6s; }
          .circle-dot:nth-child(18) { --target-x: 7px; --target-y: -30px; animation-delay: 1.7s; }
          .circle-dot:nth-child(19) { --target-x: 0px; --target-y: -27px; animation-delay: 1.8s; }
          .circle-dot:nth-child(20) { --target-x: -9px; --target-y: -23px; animation-delay: 1.9s; }
        `}
      </style>
      <circle className="circle-dot" cx="25" cy="25" r="2.5" fill="#14b8a6" />
      <circle className="circle-dot" cx="38" cy="25" r="2.5" fill="#14b8a6" />
      <circle className="circle-dot" cx="50" cy="25" r="2.5" fill="#14b8a6" />
      <circle className="circle-dot" cx="62" cy="25" r="2.5" fill="#14b8a6" />
      <circle className="circle-dot" cx="75" cy="25" r="2.5" fill="#14b8a6" />

      <circle className="circle-dot" cx="25" cy="38" r="2.5" fill="#14b8a6" />
      <circle className="circle-dot" cx="38" cy="38" r="2.5" fill="#14b8a6" />
      <circle className="circle-dot" cx="50" cy="38" r="2.5" fill="#14b8a6" />
      <circle className="circle-dot" cx="62" cy="38" r="2.5" fill="#14b8a6" />
      <circle className="circle-dot" cx="75" cy="38" r="2.5" fill="#14b8a6" />

      <circle className="circle-dot" cx="25" cy="50" r="2.5" fill="#14b8a6" />
      <circle className="circle-dot" cx="38" cy="50" r="2.5" fill="#14b8a6" />
      <circle className="circle-dot" cx="50" cy="50" r="2.5" fill="#14b8a6" />
      <circle className="circle-dot" cx="62" cy="50" r="2.5" fill="#14b8a6" />
      <circle className="circle-dot" cx="75" cy="50" r="2.5" fill="#14b8a6" />

      <circle className="circle-dot" cx="25" cy="62" r="2.5" fill="#14b8a6" />
      <circle className="circle-dot" cx="38" cy="62" r="2.5" fill="#14b8a6" />
      <circle className="circle-dot" cx="50" cy="62" r="2.5" fill="#14b8a6" />
      <circle className="circle-dot" cx="62" cy="62" r="2.5" fill="#14b8a6" />
      <circle className="circle-dot" cx="75" cy="62" r="2.5" fill="#14b8a6" />
    </svg>
  )
}

function TimelineIcon() {
  return (
    <svg className="w-full h-20" viewBox="0 0 140 80" xmlns="http://www.w3.org/2000/svg">
      <style>
        {`
          @keyframes drawTimeline {
            0% { stroke-dashoffset: 100; }
            60%, 100% { stroke-dashoffset: 0; }
          }
          @keyframes fadeInMarker {
            0%, 20% { opacity: 0; transform: translateY(5px); }
            30%, 100% { opacity: 1; transform: translateY(0); }
          }
          .timeline-line {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: drawTimeline 4s ease-out infinite;
          }
          .timeline-marker {
            animation: fadeInMarker 4s ease-out infinite;
            opacity: 0;
          }
          .timeline-marker:nth-child(2) { animation-delay: 0.5s; }
          .timeline-marker:nth-child(3) { animation-delay: 1s; }
          .timeline-marker:nth-child(4) { animation-delay: 1.5s; }
          .timeline-marker:nth-child(5) { animation-delay: 2s; }
        `}
      </style>
      <line className="timeline-line" x1="15" y1="40" x2="125" y2="40" stroke="#14b8a6" strokeWidth="2" />

      <g className="timeline-marker">
        <line x1="25" y1="37" x2="25" y2="43" stroke="#14b8a6" strokeWidth="1.5" />
        <text x="25" y="52" fill="#14b8a6" fontSize="8" textAnchor="middle">
          2025
        </text>
      </g>

      <g className="timeline-marker">
        <line x1="45" y1="37" x2="45" y2="43" stroke="#14b8a6" strokeWidth="1.5" />
        <text x="45" y="52" fill="#14b8a6" fontSize="8" textAnchor="middle">
          2050
        </text>
      </g>

      <g className="timeline-marker">
        <line x1="70" y1="37" x2="70" y2="43" stroke="#14b8a6" strokeWidth="1.5" />
        <text x="70" y="52" fill="#14b8a6" fontSize="8" textAnchor="middle">
          2075
        </text>
      </g>

      <g className="timeline-marker">
        <line x1="95" y1="37" x2="95" y2="43" stroke="#14b8a6" strokeWidth="1.5" />
        <text x="95" y="52" fill="#14b8a6" fontSize="8" textAnchor="middle">
          2100
        </text>
      </g>

      <g className="timeline-marker">
        <line x1="115" y1="37" x2="115" y2="43" stroke="#14b8a6" strokeWidth="1.5" />
        <text x="115" y="52" fill="#14b8a6" fontSize="8" textAnchor="middle">
          2125
        </text>
      </g>

      <polygon points="125,40 120,37 120,43" fill="#14b8a6" />
      <circle cx="25" cy="40" r="3" fill="#14b8a6" />
    </svg>
  )
}
