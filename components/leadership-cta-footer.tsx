export default function LeadershipCTAFooter() {
  return (
    <>
      {/* Leadership Section */}
      <section className="py-32 px-10 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold tracking-[0.2em] uppercase text-[#14b8a6] mb-4">Leadership</div>
            <h2 className="text-5xl font-extrabold text-white mb-6">Meet Eric & Josey</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Two dental industry veterans who refused to accept the status quo—and built the alternative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            <LeaderCard
              initial="E"
              name="Dr. Eric J. Roman"
              title="Co-Founder & Principal"
              bio="Visionary entrepreneur who built and scaled two dental groups to nearly $40M in revenue, navigating a PE exit along the way. A nationally recognized speaker, coach, and thought leader, Eric has logged thousands of hours on stage and consulted for some of dentistry's most respected companies. After rebuilding from losing everything — twice — he created systems not just for business growth, but for personal and family transformation. Eric brings real love, radical energy, and hard-won wisdom to everything he does. His passion is helping dentists, clinical leaders, and teams build something that lasts."
              imageSrc="/images/eric-roman-new.png"
            />

            <LeaderCard
              initial="J"
              name="Josey Sewell, RDH"
              title="Co-Founder & Principal"
              bio="Clinical hygienist turned business strategist and organizational development leader. With over 10,000 hours coaching practices and groups, Josey has facilitated 350+ full-day sessions and worked with 50-75% of the Inc. fastest-growing companies in dental over the last 7 years. She doubled hygiene revenue in 12 months adding $4.2M to her organization, built operational infrastructure for high-growth groups, and managed a PE transaction from start to finish. A published author, nationally recognized speaker on culture and leadership, and expert case acceptance trainer, Josey has trained hundreds of practice managers, hygiene leaders, and executive teams. She champions the 'High Love + High Accountability' philosophy that defines joyFULL Growth."
              imageSrc="/images/josey-sewell-new.png"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-10 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0f172a] mb-8 leading-tight">
            Ready to Choose a Different Path?
          </h2>
          <p className="text-xl text-[#64748b] leading-relaxed">
            Whether you're an associate looking to grow, a practice owner seeking alternatives to PE, or a leader ready
            to transform your team—we're here to help.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-10 bg-[#0f172a] text-white/60 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#14b8a6] to-[#8b5cf6] bg-clip-text text-transparent">
            joyFULL Growth
          </div>
          <p className="mb-6">Transforming Dentistry Forever</p>
          <p className="text-sm">© 2025 joyFULL Growth. All rights reserved.</p>
          <a href="https://futureofwellness.ai" target="_blank" rel="noopener noreferrer" className="text-xs mt-4 text-white/40 hover:text-white/60 transition-colors inline-block">FutureOfWellness Design + Innovation Studio</a>
        </div>
      </footer>
    </>
  )
}

function LeaderCard({
  initial,
  name,
  title,
  bio,
  imageSrc,
}: { initial: string; name: string; title: string; bio: string; imageSrc?: string }) {
  return (
    <div className="text-center">
      <div className="w-52 h-52 rounded-full mx-auto mb-8 overflow-hidden">
        {imageSrc ? (
          <img src={imageSrc || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-[#14b8a6] to-[#8b5cf6] flex items-center justify-center">
            <span className="text-7xl font-extrabold text-white">{initial}</span>
          </div>
        )}
      </div>
      <h3 className="text-3xl font-extrabold mb-2">{name}</h3>
      <p className="text-lg text-[#14b8a6] mb-6">{title}</p>
      <p className="text-base leading-relaxed text-white/80 max-w-lg mx-auto">{bio}</p>
    </div>
  )
}
