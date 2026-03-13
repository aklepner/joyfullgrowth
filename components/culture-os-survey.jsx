import { useState } from "react";

const C = {
  bg: "#FAFBFD", white: "#FFFFFF", navy: "#0f172a", navyLight: "#1e293b",
  teal: "#14b8a6", tealDark: "#0d9488", purple: "#8b5cf6", purpleDark: "#6d28d9",
  coral: "#f97316", gold: "#fbbf24", body: "#334155", muted: "#94a3b8",
  light: "#e2e8f0", lighter: "#f1f5f9",
};

const STAGES = [
  { num: "01", name: "Consciousness", sub: "Know Thyself", color: C.navy, bg: "#0f172a", text: "#e2e8f0" },
  { num: "02", name: "Clarity", sub: "Know Thy Role", color: C.tealDark, bg: "#0d9488", text: "#fff" },
  { num: "03", name: "Communication", sub: "Declare How You Work", color: C.purple, bg: "#8b5cf6", text: "#fff" },
  { num: "04", name: "Coherence", sub: "Fit the Pieces Together", color: C.coral, bg: "#f97316", text: "#fff" },
  { num: "05", name: "Coordination", sub: "Coherence in Motion", color: "#d97706", bg: "#d97706", text: "#fff" },
];

const SUPERPOWERS = [
  { name: "Empathy", icon: "💛", short: "Perceives others' needs and emotions — even unspoken ones." },
  { name: "Energy", icon: "⚡", short: "Sets the right mood, lifts people up, knows when lightness is needed." },
  { name: "Evangelizing", icon: "📣", short: "Infectious belief that draws people in through storytelling." },
  { name: "Experimentation", icon: "🧪", short: "Prototyping mindset — generates ideas rapidly, refines through action." },
  { name: "Gap Detection", icon: "🔍", short: "Finds what's missing before the team falls into holes." },
  { name: "Grit", icon: "🪨", short: "Extraordinary endurance — the quiet engine that keeps pushing." },
  { name: "Harmonizing", icon: "🎵", short: "Channels team energy, plays to each person's strengths." },
  { name: "Ingenuity", icon: "🔧", short: "Makes the impossible possible with whatever's on hand." },
  { name: "Motivation", icon: "🔥", short: "Gets the best out of people — connected to larger purpose." },
  { name: "Negotiation", icon: "🤝", short: "Refined balance — tough but finds the win-win." },
  { name: "Pattern Mapping", icon: "🗺️", short: "Sees connections and finds underlying logic." },
  { name: "Peacemaking", icon: "🕊️", short: "Forges trust, hammers compromises without taking sides." },
  { name: "Problem Solving", icon: "💡", short: "Cuts to the heart of a problem and reveals a path forward." },
  { name: "Provocation", icon: "⚔️", short: "Pushes outside comfort zones, strives for greatness." },
  { name: "Recalibration", icon: "🧘", short: "Eye of the storm — calm, focused, brings temperature down." },
  { name: "Vision", icon: "🔭", short: "Sees future destinations in vivid color." },
  { name: "Complexity Busting", icon: "✂️", short: "Cuts through layers to find what matters without dumbing down." },
  { name: "Creative Thinking", icon: "🎨", short: "Sees what's not yet real and makes it real." },
  { name: "Cultural Compass", icon: "🧭", short: "Senses when things go against the organization's DNA." },
  { name: "Decisiveness", icon: "⚖️", short: "Makes trade-offs with confidence and speed." },
  { name: "Systems Thinking", icon: "🌐", short: "Sees the forest, trees, and the underground root system." },
];

const specDefaults = () => ({
  headsDown_collab: 4, structure_flow: 4, context_bullets: 4,
  talk_think: 4, zoom_size: 4, prod_time: 4,
  meet_time: 4, quick_chat: 4, energy_boost: 4,
});

// ============== STAR FIELD COMPONENT ==============
const StarField = ({ children, height = "100vh" }) => (
  <div style={{
    minHeight: height, background: `radial-gradient(ellipse at 30% 50%, #1a1040 0%, #0a0a1a 50%, #05050d 100%)`,
    position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
  }}>
    {/* Stars via CSS */}
    <div style={{ position: "absolute", inset: 0, background: `radial-gradient(1px 1px at 20px 30px, #fff, transparent), radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.7), transparent), radial-gradient(1px 1px at 90px 40px, #fff, transparent), radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 160px 30px, #fff, transparent), radial-gradient(1.5px 1.5px at 200px 90px, rgba(200,180,255,0.8), transparent), radial-gradient(1px 1px at 250px 50px, #fff, transparent), radial-gradient(1px 1px at 300px 20px, rgba(255,255,255,0.6), transparent)`, backgroundSize: "320px 100px", opacity: 0.6 }} />
    {/* Nebula glow */}
    <div style={{ position: "absolute", width: "60%", height: "60%", top: "20%", left: "10%", background: `radial-gradient(ellipse, rgba(100,60,180,0.15) 0%, transparent 70%)`, filter: "blur(40px)" }} />
    <div style={{ position: "absolute", width: "40%", height: "40%", top: "30%", right: "5%", background: `radial-gradient(ellipse, rgba(60,80,180,0.1) 0%, transparent 70%)`, filter: "blur(30px)" }} />
    <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
  </div>
);

// ============== MAIN COMPONENT ==============
export default function CultureOSSurvey() {
  const [phase, setPhase] = useState("onboard"); // onboard | survey | done
  const [obStep, setObStep] = useState(0);
  const [stage, setStage] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [ans, setAns] = useState({});
  const [spec, setSpec] = useState(specDefaults());
  const [multi, setMulti] = useState({});
  const [anim, setAnim] = useState(false);
  const [otherText, setOtherText] = useState({});
  const [showOther, setShowOther] = useState({});

  const set = (k, v) => setAns(p => ({ ...p, [k]: v }));
  const setM = (k, v, max) => setMulti(p => {
    const c = p[k] || [];
    if (c.includes(v)) return { ...p, [k]: c.filter(x => x !== v) };
    if (max && c.length >= max) {
      // If at max and picking one, replace. If picking two, can't add more.
      if (max === 1) return { ...p, [k]: [v] };
      return p; // at limit, can't add
    }
    return { ...p, [k]: [...c, v] };
  });
  const setS = (k, v) => setSpec(p => ({ ...p, [k]: v }));

  // ============== ONBOARDING SCREENS ==============
  const onboardScreens = [
    {
      // SCREEN 1: A DECLARATION — the big vision
      content: (
        <div style={{ maxWidth: 640, textAlign: "center", padding: "0 24px" }}>
          <div style={{ fontSize: 13, letterSpacing: 4, color: C.teal, fontFamily: "monospace", marginBottom: 32, textTransform: "uppercase" }}>
            joyFULL Growth {"\u00B7"} Culture OS
          </div>
          <h1 style={{ fontSize: 38, fontWeight: 300, color: "#e2e8f0", lineHeight: 1.3, marginBottom: 24, fontFamily: "'Inter', system-ui, sans-serif" }}>
            We are building the<br/>
            <span style={{ fontWeight: 600, color: C.teal }}>future of dentistry.</span>
          </h1>
          <div style={{ width: 40, height: 1, background: C.teal, margin: "28px auto" }} />
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
            Not a company. Not a product. Not a service.<br/>
            An ecosystem that will change how thousands of practices operate,<br/>
            how millions of people experience care, and how dentists<br/>
            <strong style={{ color: "#e2e8f0" }}>finally fall in love with their profession again.</strong>
          </p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginTop: 24 }}>
            This is not a 5-year play. This is a <strong style={{ color: "rgba(255,255,255,0.7)" }}>100-year mindset.</strong>
          </p>
        </div>
      )
    },
    {
      // SCREEN 2: WHAT WE BELIEVE — actual brand convictions
      content: (
        <div style={{ maxWidth: 600, textAlign: "center", padding: "0 24px" }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: "rgba(255,255,255,0.4)", fontFamily: "monospace", marginBottom: 20, textTransform: "uppercase" }}>
            What We Believe
          </div>
          <h2 style={{ fontSize: 34, fontWeight: 300, color: "#e2e8f0", lineHeight: 1.3, marginBottom: 28, fontFamily: "'Inter', system-ui, sans-serif" }}>
            Our Convictions
          </h2>
          <div style={{ textAlign: "left", padding: "24px 28px", background: "rgba(255,255,255,0.04)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", marginBottom: 24 }}>
            {[
              "Dentist problems are systems issues, not people issues.",
              "Excellence is systematic, not accidental.",
              "Scale and soul are not opposites.",
              "A small elite team can outperform a large mediocre one.",
              "The way we build this company IS the product we\u2019re selling.",
            ].map((belief, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, margin: "14px 0" }}>
                <span style={{ color: C.teal, fontSize: 14, marginTop: 2, flexShrink: 0 }}>{"\u25C8"}</span>
                <p style={{ fontSize: 15, color: i === 4 ? "#e2e8f0" : "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.6, fontWeight: i === 4 ? 600 : 400 }}>
                  {belief}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      // SCREEN 3: WHAT WE'RE CREATING — the ecosystem vision
      content: (
        <div style={{ maxWidth: 580, textAlign: "center", padding: "0 24px" }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: "rgba(255,255,255,0.4)", fontFamily: "monospace", marginBottom: 20, textTransform: "uppercase" }}>
            What We{"\u2019"}re Creating
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 300, color: "#e2e8f0", lineHeight: 1.3, marginBottom: 28, fontFamily: "'Inter', system-ui, sans-serif" }}>
            Purpose <span style={{ color: C.teal }}>{"\u00D7"}</span> People <span style={{ color: C.teal }}>{"\u00D7"}</span> Playbooks<br/>
            <span style={{ color: C.teal, fontWeight: 600 }}>= Performance</span>
          </h2>
          <div style={{ textAlign: "left", padding: "24px 28px", background: "rgba(255,255,255,0.04)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", marginBottom: 24 }}>
            {[
              "A movement that redefines what\u2019s possible in dentistry.",
              "A coaching company that proves the methodology works.",
              "A dental group that proves the model scales.",
              "A founding team archetype for the agentic era.",
              "A legacy that perpetuates \u2014 never sells out.",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, margin: "14px 0" }}>
                <span style={{ color: C.teal, fontSize: 14, marginTop: 2, flexShrink: 0 }}>{"\u2192"}</span>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.6 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontStyle: "italic" }}>
            Legacy. Love. Sustainability.<br/>
            <strong style={{ color: "rgba(255,255,255,0.7)", fontStyle: "normal" }}>Everybody wins.</strong>
          </p>
        </div>
      )
    },
    {
      // SCREEN 4: YOUR PLACE IN THIS — agentic org, now earned
      content: (
        <div style={{ maxWidth: 560, textAlign: "center", padding: "0 24px" }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: "rgba(255,255,255,0.4)", fontFamily: "monospace", marginBottom: 20, textTransform: "uppercase" }}>
            Your Place in This
          </div>
          <h2 style={{ fontSize: 34, fontWeight: 300, color: "#e2e8f0", lineHeight: 1.3, marginBottom: 24, fontFamily: "'Inter', system-ui, sans-serif" }}>
            A small elite team with<br/>
            <span style={{ color: C.teal, fontWeight: 600 }}>extraordinary capability.</span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 20 }}>
            Every team member has AI agents trained on how you think, work, and create. Your agents handle the distribution so you can focus on what only humans can do: <strong style={{ color: "#e2e8f0" }}>relationships, creativity, and judgment.</strong>
          </p>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 8 }}>
            But your agent can only be as good as the information it has about you.
          </p>
          <div style={{ marginTop: 28, padding: "16px 24px", background: "rgba(20,184,166,0.1)", borderRadius: 12, border: "1px solid rgba(20,184,166,0.2)" }}>
            <p style={{ fontSize: 14, color: C.teal, margin: 0, fontWeight: 500 }}>
              The next 12 minutes build your operating manual — for your teammates <em>and</em> your agent. Not just what we do — <strong>how we do it</strong> matters and can{"'"}t be duplicated.
            </p>
          </div>
        </div>
      )
    },
    {
      // SCREEN 5: THE 5 C's ROADMAP
      content: (
        <div style={{ maxWidth: 560, textAlign: "center", padding: "0 24px" }}>
          <h2 style={{ fontSize: 34, fontWeight: 300, color: "#e2e8f0", lineHeight: 1.3, marginBottom: 28, fontFamily: "'Inter', system-ui, sans-serif" }}>
            The 5 C's of Culture
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", marginBottom: 28, lineHeight: 1.6 }}>
            Five layers. Each one unlocks the next.<br/>No wrong answers.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
            {STAGES.map((s, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 14, padding: "12px 18px",
                borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%", background: `${s.bg}cc`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 700, color: s.text, fontFamily: "monospace", flexShrink: 0,
                }}>{s.num}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#e2e8f0" }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
  ];

  // ============== SURVEY QUESTIONS ==============
  const intros = [
    "Let's start with who you are — not your title, but how you're wired. This becomes the foundation your agent and your teammates use to understand you.",
    "Now let's get clear on your role — not a job description, but the actual job to be done. This tells your agent what to help you with and tells your team when to bring you in.",
    "Time to declare how you work. Think of this as writing the user manual for yourself — so your teammates and your agent don't have to guess.",
    "Now let's look outward. How does your work connect to the team? This is how we design collaboration instead of leaving it to chance.",
    "Final layer: the rhythm. This is where culture becomes coordination — and where your agent learns how to keep you on track.",
  ];

  const QS = {
    0: [ // CONSCIOUSNESS
      { type: "intro" },
      { type: "text", key: "name", label: "What's your name?", ph: "First and last" },
      { type: "text", key: "email", label: "What's your email?", ph: "you@example.com" },
      { type: "text", key: "phone", label: "What's your phone number?", ph: "e.g. (555) 123-4567" },
      { type: "text", key: "location", label: "Where are you based?", ph: "e.g. Phoenix, AZ — MST" },
      { type: "sel", key: "role", label: "What's your primary role?", opts: [
        "Visionary / CEO", "Integrator / COO", "Clinical Director", "Marketing / Brand",
        "Operations / Systems", "Content Creator", "Sales / Growth", "Customer Success",
        "Design / Creative", "Finance / Admin", "Other"
      ]},
      { type: "sel", key: "enneagram", label: "What's your Enneagram type?", noOther: true, link: { text: "Don't know? Take the free test →", url: "https://www.truity.com/test/enneagram-personality-test" }, opts: [
        "1 — Reformer","2 — Helper","3 — Achiever","4 — Individualist","5 — Investigator",
        "6 — Loyalist","7 — Enthusiast","8 — Challenger","9 — Peacemaker","I don't know yet"
      ]},
      { type: "sel", key: "mbti", label: "What's your Myers-Briggs?", noOther: true, link: { text: "Don't know? Take the free test →", url: "https://www.16personalities.com/free-personality-test" }, opts: [
        "INTJ","INTP","ENTJ","ENTP","INFJ","INFP","ENFJ","ENFP",
        "ISTJ","ISFJ","ESTJ","ESFJ","ISTP","ISFP","ESTP","ESFP","I don't know yet"
      ]},
      { type: "sel", key: "hd", label: "What's your Human Design type?", noOther: true, link: { text: "Don't know? Get your free chart →", url: "https://www.mybodygraph.com/" }, opts: [
        "Generator","Manifesting Generator","Projector","Manifestor","Reflector","I don't know yet"
      ]},
      { type: "superpower", key: "superpower" },
      { type: "dollar", key: "in_trust", label: "You've started your own country. On your dollar bill it says:" },
      { type: "text", key: "one_trait", label: "One trait you'd transfer to your children or someone you love:", ph: "e.g. Courage, Curiosity, Kindness..." },
      { type: "text", key: "admire_who", label: "A person you most admire:", ph: "e.g. My grandmother, Steve Jobs, my first boss..." },
      { type: "text", key: "admire_why", label: "In one word — why?", ph: "e.g. Resilience, Vision, Honesty..." },
      { type: "multi", key: "inspired", label: "What inspires you most?", sub: "Pick the one that's most alive for you right now.", max: 1, opts: [
        "Building something from nothing", "Solving hard problems", "Helping people grow",
        "Creative expression", "Systems & order", "Freedom & independence",
        "Community & belonging", "Learning new things", "Leaving a legacy",
        "Nature & wellness", "Competition & winning", "Innovation & technology"
      ]},
      { type: "multi", key: "outraged", label: "What outrages you most?", sub: "The one thing you can't look away from.", max: 1, opts: [
        "Mediocrity accepted as normal", "Dishonesty & inauthenticity", "Wasted human potential",
        "Bureaucracy & red tape", "People treated as numbers", "Short-term thinking",
        "Lack of accountability", "Inequality & unfairness", "Status quo worship",
        "Poor leadership", "Broken systems nobody fixes", "Greed over purpose"
      ]},
    ],
    1: [ // CLARITY
      { type: "intro" },
      { type: "multi", key: "initiatives", label: "Which initiatives do you actively work across?", sub: "Select all that apply. This tells your agent which brand contexts to load.", opts: [
        "Dental Associate Growth (DAG)", "joyFULL Growth", "The Collective",
        "Roman DSO", "Future of Dentistry Studio", "All of them — I touch everything"
      ]},
      { type: "multi", key: "involve", label: "Involve me when:", sub: "When should people pull you in?", opts: [
        "A strategic decision needs to be made", "Something is being built from scratch",
        "A process is broken or stuck", "There's a brand or messaging question",
        "A client/customer needs attention", "Numbers need to be analyzed",
        "Content needs to be created", "Someone needs coaching or support",
        "Systems or tools need configuring", "A presentation or pitch is being prepared",
        "Conflict needs to be resolved", "A new initiative is being planned"
      ]},
      { type: "multi", key: "successful", label: "I am successful when:", sub: "What does winning look like?", opts: [
        "Systems run without me", "Team executes with clarity", "Revenue / metrics hit targets",
        "People I develop go on to lead", "The brand is world-class", "Clients are thrilled",
        "Processes are documented & repeatable", "I have time for deep creative work",
        "Problems get solved before they escalate", "The vision is clearly communicated",
        "New capabilities are built", "Culture feels alive and healthy"
      ]},
      { type: "ta", key: "jtbd", label: "My core job to be done is...", sub: "One sentence. What are you actually here to accomplish?", ph: "e.g. Build the infrastructure that allows a small team to deliver at scale." },
      { type: "multi", key: "genius", label: "My single zone of genius:", sub: "If you could only be known for one — what is it?", max: 1, opts: [
        "Systems architecture", "Customer experience design", "Content creation",
        "Strategic narrative", "Operations & process", "Relationship building",
        "Data & analytics", "Visual design", "Sales & persuasion",
        "Team development", "Technology & tools", "Clinical expertise",
        "Community building", "Financial modeling", "Project management",
        "Brand strategy", "Research & synthesis", "Culture design"
      ]},
      { type: "multi", key: "dontdo", label: "The thing that drains me most:", sub: "Pick the one that makes you want to quit for the day.", max: 1, opts: [
        "Routine admin & data entry", "Day-to-day task management", "Cold outreach & prospecting",
        "Detailed financial reporting", "Repetitive content production", "Schedule coordination",
        "Technical troubleshooting", "Conflict mediation", "Long-form documentation",
        "Social media posting", "Meeting note-taking", "Compliance & legal review"
      ]},
      { type: "ta", key: "rocks", label: "My top priorities this quarter:", sub: "The 3–5 things that must get done.", ph: "1.\n2.\n3." },
    ],
    2: [ // COMMUNICATION
      { type: "intro" },
      { type: "sp", key: "headsDown_collab", l: "More heads-down time", r: "More collaboration", label: "I'd rather have..." },
      { type: "sp", key: "structure_flow", l: "Structure & plans", r: "Going with the flow", label: "I prefer..." },
      { type: "sp", key: "context_bullets", l: "All the context", r: "Just the bullets", label: "Communication with..." },
      { type: "sp", key: "talk_think", l: "Talk to think", r: "Think then talk", label: "I process by..." },
      { type: "sp", key: "zoom_size", l: "1:1", r: "Large group", label: "I prefer meetings..." },
      { type: "sp", key: "prod_time", l: "Morning", r: "Evening", label: "Productivity peaks..." },
      { type: "sp", key: "meet_time", l: "Morning", r: "Evening", label: "Prefer to meet..." },
      { type: "sp", key: "quick_chat", l: "Slack / DM", r: "Zoom / Call", label: "Quick chats by..." },
      { type: "sp", key: "energy_boost", l: "Getting things done", r: "Team fun & connection", label: "Energy boosted by..." },
      { type: "sel", key: "decision_style", label: "How do you make decisions?", sub: "Your agent uses this to know how to present information to you.", opts: [
        "Give me all the data — I need the full picture first",
        "Give me a recommendation — I'll adjust from there",
        "Let me talk it through — I think out loud",
        "Give me time alone — I process internally then decide",
        "Show me what others have done — I learn from precedent",
        "I go with gut and course-correct fast"
      ]},
      { type: "sel", key: "learning_style", label: "How do you learn best?", sub: "This shapes how your agent delivers new information to you.", opts: [
        "Show me — video, demo, screen share",
        "Let me read it — docs, guides, written context",
        "Let me do it — hands-on, trial and error",
        "Talk me through it — conversation, walk-through",
        "Give me examples — templates, precedent, before/after"
      ]},
      { type: "multi", key: "tools", label: "My favorite tool:", sub: "The one you'd keep if you could only have one.", max: 1, opts: [
        "Google Suite","Notion","Slack","Zoom","Asana","Canva","Claude / AI","Loom","GoHighLevel","Beehiiv","Phone calls","In person"
      ]},
      { type: "sel", key: "slack_response", label: "If you Slack me, expect a response within:", opts: [
        "Minutes — I'm usually live",
        "A few hours — I batch my messages",
        "Same day — I check a few times a day",
        "24 hours — I'm deep-work focused",
        "It depends — async is fine for most things"
      ]},
      { type: "sel", key: "email_response", label: "If you email me, expect a response within:", opts: [
        "Same day",
        "24 hours",
        "48 hours",
        "I rarely check email — Slack me instead"
      ]},
      { type: "multi", key: "frustrated", label: "I get frustrated when:", sub: "Pick your top two.", max: 2, opts: [
        "Meetings with no agenda", "Decisions get revisited endlessly", "No one owns the follow-up",
        "Too many Slack messages", "Lack of context on asks", "Micromanagement",
        "Moving too slow", "Moving too fast without thinking", "Unclear expectations",
        "People avoid hard conversations", "Last-minute changes", "No feedback on my work"
      ]},
      { type: "multi", key: "best", label: "I'm at my best when:", sub: "Pick your top two.", max: 2, opts: [
        "I have uninterrupted focus time", "I'm collaborating with one other person",
        "There's a clear deadline", "I feel trusted and autonomous",
        "The vision is clear", "I can see the big picture",
        "There's energy and momentum", "I have time to think before acting",
        "Someone is challenging me", "I'm learning something new",
        "I can be creative", "The stakes are high"
      ]},
    ],
    3: [ // COHERENCE
      { type: "intro" },
      { type: "multi", key: "icontribute", label: "The #1 thing I bring to this team:", sub: "If you had to pick just one.", max: 1, opts: [
        "Big picture vision", "Detail execution", "Creative ideas", "Process discipline",
        "People skills", "Technical skills", "Strategic thinking", "Energy & enthusiasm",
        "Calm under pressure", "Challenge the status quo", "Build consensus", "Follow through",
        "Domain expertise", "External perspective", "Speed & urgency", "Patience & steadiness"
      ]},
      { type: "multi", key: "need", label: "The #1 thing I need from my teammates:", sub: "The one thing that makes or breaks your experience.", max: 1, opts: [
        "Clear direction on priorities", "Honest, direct feedback", "Invitations into conversations early",
        "Autonomy to own my lane", "Context on the 'why' behind decisions", "Patience when I'm processing",
        "Someone to bounce ideas off", "Recognition when I do good work", "Help with follow-through",
        "Space to go deep", "Trust that I'll deliver", "Pushback when I'm off track"
      ]},
      { type: "ta", key: "handoffs", label: "My key handoff points:", sub: "Where does your work end and someone else's begin?", ph: "e.g. I design the system → Josey operationalizes it." },
      { type: "sel", key: "friction_type", label: "Where collaboration typically breaks down for me:", opts: [
        "Unclear ownership — nobody knows who's doing what",
        "Communication gaps — I'm out of the loop on decisions",
        "Different working speeds — I move faster/slower than others",
        "Style mismatch — I need more/less structure than my teammates",
        "Priority conflicts — what I think matters isn't what others prioritize",
        "I rarely experience friction",
      ]},
    ],
    4: [ // COORDINATION
      { type: "intro" },
      { type: "multi", key: "cadence", label: "My ideal meeting rhythm:", sub: "Pick one.", max: 1, opts: [
        "Daily standup (15m)","Weekly sync (30m)","Weekly deep dive (60m)","Bi-weekly check-in",
        "Monthly strategy session","Quarterly planning","As-needed only","Async updates preferred"
      ]},
      { type: "ta", key: "weekly_rhythm", label: "What does your typical week look like?", sub: "The recurring rhythms your agent should know — what happens when, what repeats.", ph: "e.g. Monday: planning & priorities. Tue–Thu: deep work blocks. Friday: content batch & weekly review. First Monday of month: strategy session." },
      { type: "sel", key: "accountability", label: "The accountability style that works for me:", opts: [
        "Check in with me regularly — I need external structure",
        "Set the target and trust me — I'll raise my hand if stuck",
        "Pair me with someone — I collaborate better than I solo",
        "Show me the scoreboard — I'm motivated by visible metrics",
        "Give me autonomy but be available when I need to think out loud"
      ]},
      { type: "sel", key: "feedback", label: "How I prefer to receive feedback:", opts: [
        "Direct and in the moment — don't wait",
        "Scheduled 1:1 — give me time to prepare",
        "Written first, then discuss — I process better in writing",
        "Casual conversation — keep it light, not formal",
        "With specific examples — I need to see what you mean"
      ]},
      { type: "multi", key: "own_decisions", label: "Decisions I should own without checking in:", sub: "Pick up to two.", max: 2, opts: [
        "Brand & design choices", "Content creation & publishing", "Client communication & support",
        "Tool & system configuration", "Team scheduling & coordination", "Budget under $500",
        "Process improvements", "Internal documentation", "Vendor & partner outreach",
        "Training & development", "Data & reporting methods", "Creative direction"
      ]},
      { type: "ta", key: "anything", label: "Anything else your teammates (or your agent) should know?", sub: "The stuff that doesn't fit in a box but matters.", ph: "Quirks, preferences, what makes you uniquely you..." },
    ],
  };

  const qs = QS[stage] || [];
  const q = qs[qIdx];
  const st = STAGES[stage] || STAGES[0];

  const canGo = () => {
    if (!q) return true;
    if (q.type === "intro" || q.type === "sp") return true;
    if (q.type === "dollar") return !!(ans[q.key] || "").trim();
    if (q.type === "multi" || q.type === "superpower") return (multi[q.key] || []).length > 0;
    if (q.type === "sel") {
      if (showOther[q.key]) return !!(ans[q.key] || "").trim();
      return !!ans[q.key];
    }
    return !!(ans[q.key] || "").trim();
  };

  const next = () => {
    setAnim(true);
    setTimeout(() => {
      if (qIdx < qs.length - 1) setQIdx(qIdx + 1);
      else if (stage < 4) { setStage(stage + 1); setQIdx(0); }
      else {
        // Submit to Notion
        console.log("[v0] Submitting to Notion. ans:", JSON.stringify(ans));
        console.log("[v0] multi:", JSON.stringify(multi));
        console.log("[v0] spec:", JSON.stringify(spec));
        fetch("/api/culture-os", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ans, multi, spec }),
        })
          .then(res => res.json())
          .then(data => console.log("[v0] Notion API response:", JSON.stringify(data)))
          .catch(err => console.error("[v0] Failed to save to Notion:", err));
        setPhase("done");
      }
      setAnim(false);
    }, 180);
  };

  const back = () => {
    setAnim(true);
    setTimeout(() => {
      if (qIdx > 0) setQIdx(qIdx - 1);
      else if (stage > 0) { setStage(stage - 1); setQIdx(QS[stage - 1].length - 1); }
      else setPhase("onboard");
      setAnim(false);
    }, 180);
  };

  const totalQ = Object.values(QS).reduce((s, q) => s + q.length, 0);
  const doneQ = Object.values(QS).slice(0, stage).reduce((s, q) => s + q.length, 0) + qIdx;
  const pct = Math.round((doneQ / totalQ) * 100);
  const bar = (k) => "◀" + "█".repeat(spec[k]) + "░".repeat(7 - spec[k]) + "▶";

  const inputSt = {
    width: "100%", padding: "14px 18px", fontSize: 16, fontFamily: "'Inter', system-ui, sans-serif",
    border: `2px solid ${C.light}`, borderRadius: 10, background: C.white, color: C.navy,
    outline: "none", transition: "border-color 0.2s",
  };

  // ============== ONBOARDING ==============
  if (phase === "onboard") {
    return (
      <StarField>
        <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          {onboardScreens[obStep].content}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginTop: 40 }}>
            {obStep > 0 && (
              <button onClick={() => setObStep(obStep - 1)} style={{
                padding: "10px 24px", background: "none", border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 8, color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: 14,
              }}>← Back</button>
            )}
            <button onClick={() => {
              if (obStep < onboardScreens.length - 1) setObStep(obStep + 1);
              else { setPhase("survey"); setStage(0); setQIdx(0); }
            }} style={{
              padding: "12px 40px", background: `linear-gradient(135deg, ${C.teal}, ${C.purple})`,
              color: "#fff", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 600,
              cursor: "pointer", boxShadow: "0 4px 20px rgba(20,184,166,0.3)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={e => e.target.style.transform = "translateY(-1px)"}
            onMouseLeave={e => e.target.style.transform = "translateY(0)"}
            >
              {obStep === onboardScreens.length - 1 ? "Let's begin →" : "Continue →"}
            </button>
          </div>
          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 28 }}>
            {onboardScreens.map((_, i) => (
              <div key={i} style={{
                width: i === obStep ? 24 : 8, height: 8, borderRadius: 4,
                background: i === obStep ? C.teal : "rgba(255,255,255,0.2)",
                transition: "all 0.3s", cursor: "pointer",
              }} onClick={() => setObStep(i)} />
            ))}
          </div>
        </div>
      </StarField>
    );
  }

  // ============== COMPLETION ==============
  if (phase === "done") {
    const Section = ({ num, name, color, children }) => (
      <div style={{ background: C.white, borderRadius: 12, border: `1px solid ${C.light}`, overflow: "hidden", marginBottom: 16 }}>
        <div style={{ padding: "12px 24px", background: color, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontFamily: "monospace", fontSize: 11, opacity: 0.7, color: "#fff" }}>{num}</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#fff", letterSpacing: 0.5 }}>{name}</span>
        </div>
        <div style={{ padding: "20px 24px" }}>{children}</div>
      </div>
    );
    const F = ({ l, v }) => v ? (
      <div style={{ marginBottom: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: C.navy }}>{l}: </span>
        <span style={{ fontSize: 13, color: C.body, whiteSpace: "pre-line" }}>{v}</span>
      </div>
    ) : null;
    const Tags = ({ l, items }) => items?.length > 0 ? (
      <div style={{ marginBottom: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: C.navy }}>{l}: </span>
        <span style={{ fontSize: 13, color: C.body }}>{items.join(" · ")}</span>
      </div>
    ) : null;

    return (
      <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: C.bg, minHeight: "100vh", padding: "40px 20px" }}>
        <div id="culture-os-onepager" style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: C.teal, marginBottom: 20, fontFamily: "monospace", textTransform: "uppercase" }}>
            joyFULL Growth · Culture OS · One Pager
          </div>
          <h1 style={{ fontSize: 32, color: C.navy, fontWeight: 700, marginBottom: 4 }}>
            {ans.name || "Team Member"}'s Operating Manual
          </h1>
          <p style={{ fontSize: 16, color: C.teal, fontStyle: "italic", marginBottom: 28 }}>
            For teammates and agents alike
          </p>

          <Section num="01" name="CONSCIOUSNESS — KNOW THYSELF" color={C.navy}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginBottom: 14 }}>
              {[["Enneagram", ans.enneagram], ["Myers-Briggs", ans.mbti], ["Human Design", ans.hd], ["Location", ans.location]].map(([l,v]) => (
                <div key={l}>
                  <div style={{ fontSize: 10, color: C.muted, fontFamily: "monospace", letterSpacing: 1, marginBottom: 4 }}>{l}</div>
                  <div style={{ fontSize: 14, color: C.navy, fontWeight: 600 }}>{v || "—"}</div>
                </div>
              ))}
            </div>
            {(multi.superpower || []).length > 0 && (
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 10, color: C.muted, fontFamily: "monospace", letterSpacing: 1, marginBottom: 4 }}>SUPERPOWER</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {multi.superpower.map(sp => {
                    const s = SUPERPOWERS.find(x => x.name === sp);
                    return <span key={sp} style={{ background: `${C.teal}15`, border: `1px solid ${C.teal}30`, borderRadius: 6, padding: "4px 10px", fontSize: 13, color: C.tealDark }}>{s?.icon} {sp}</span>;
                  })}
                </div>
              </div>
            )}
            {ans.in_trust && (
              <div style={{ margin: "12px 0", padding: "14px 20px", background: C.lighter, borderRadius: 8, textAlign: "center" }}>
                <span style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: 2, color: C.muted }}>IN </span>
                <span style={{ fontSize: 18, fontWeight: 700, color: C.navy, textTransform: "uppercase", letterSpacing: 2 }}>{ans.in_trust}</span>
                <span style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: 2, color: C.muted }}> WE TRUST</span>
              </div>
            )}
            <F l="One Trait I'd Pass On" v={ans.one_trait} />
            <F l="Most Admired" v={ans.admire_who ? `${ans.admire_who}${ans.admire_why ? ` — ${ans.admire_why}` : ""}` : null} />
            <Tags l="Inspired By" items={multi.inspired} />
            <Tags l="Outraged By" items={multi.outraged} />
          </Section>

          <Section num="02" name="CLARITY — KNOW THY ROLE" color={C.tealDark}>
            <F l="Role" v={ans.role} />
            <Tags l="Initiatives" items={multi.initiatives} />
            <F l="JTBD" v={ans.jtbd} />
            <Tags l="Zone of Genius" items={multi.genius} />
            <Tags l="Involve Me When" items={multi.involve} />
            <Tags l="I Am Successful When" items={multi.successful} />
            <Tags l="#1 Drain" items={multi.dontdo} />
            <F l="This Quarter's Rocks" v={ans.rocks} />
          </Section>

          <Section num="03" name="COMMUNICATION — HOW I WORK" color={C.purple}>
            <div style={{ fontFamily: "monospace", fontSize: 12, lineHeight: 2.1, color: C.tealDark, fontWeight: 600, marginBottom: 12 }}>
              {[
                ["Work style", "Heads-down", "Collaboration", "headsDown_collab"],
                ["Preference", "Structure", "Flow", "structure_flow"],
                ["Communication", "All context", "Bullets", "context_bullets"],
                ["Processing", "Talk to think", "Think then talk", "talk_think"],
                ["Meetings", "1:1", "Large group", "zoom_size"],
                ["Productivity", "Morning", "Evening", "prod_time"],
                ["Meet time", "Morning", "Evening", "meet_time"],
                ["Quick chats", "Slack/DM", "Zoom", "quick_chat"],
                ["Energy from", "Getting done", "Team fun", "energy_boost"],
              ].map(([label, l, r, k]) => (
                <div key={k}><span style={{ color: C.navy, fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12 }}>{label}: </span>{l} <span style={{ color: C.teal }}>{bar(k)}</span> {r}</div>
              ))}
            </div>
            <Tags l="Favorite Tool" items={multi.tools} />
            <F l="Decision Style" v={ans.decision_style} />
            <F l="Learning Style" v={ans.learning_style} />
            <F l="Slack Response" v={ans.slack_response} />
            <F l="Email Response" v={ans.email_response} />
            <Tags l="Frustrated When" items={multi.frustrated} />
            <Tags l="At My Best When" items={multi.best} />
          </Section>

          <Section num="04" name="COHERENCE — TEAM FIT" color={C.coral}>
            <Tags l="#1 I Bring" items={multi.icontribute} />
            <Tags l="#1 I Need" items={multi.need} />
            <F l="Key Handoffs" v={ans.handoffs} />
            <F l="Friction Pattern" v={ans.friction_type} />
          </Section>

          <Section num="05" name="COORDINATION — THE RHYTHM" color="#d97706">
            <Tags l="Ideal Cadence" items={multi.cadence} />
            <F l="Weekly Rhythm" v={ans.weekly_rhythm} />
            <F l="Accountability Style" v={ans.accountability} />
            <F l="Feedback Preference" v={ans.feedback} />
            <Tags l="Decisions I Own" items={multi.own_decisions} />
            <F l="Anything Else" v={ans.anything} />
          </Section>

          <div style={{ textAlign: "center", padding: "28px 0", borderTop: `1px solid ${C.light}`, marginTop: 24 }}>
            <p style={{ fontSize: 15, fontStyle: "italic", color: C.navy, marginBottom: 6 }}>
              "The way we build this company IS the product we're selling."
            </p>
            <div style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: 3, color: C.teal }}>
              PURPOSE × PEOPLE × PLAYBOOKS = PERFORMANCE
            </div>
  <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
    <button onClick={() => {
      const el = document.getElementById("culture-os-onepager");
      if (!el) return;
      const w = window.open("", "_blank");
      if (!w) return;
      w.document.write(`<!DOCTYPE html><html><head><title>${ans.name || "Team Member"} - Operating Manual</title><style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');body{margin:0;padding:40px 20px;background:${C.bg};font-family:'Inter',system-ui,sans-serif}@media print{body{padding:20px}}</style></head><body>${el.innerHTML}</body></html>`);
      w.document.close();
      setTimeout(() => w.print(), 500);
    }}
    style={{ padding: "10px 28px", background: `linear-gradient(135deg, ${C.teal}, ${C.purple})`, border: "none", borderRadius: 8, color: "#fff", cursor: "pointer", fontSize: 14, fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
      Save as PDF
    </button>
    <button onClick={() => { setPhase("onboard"); setObStep(0); setStage(0); setQIdx(0); setAns({}); setSpec(specDefaults()); setMulti({}); setOtherText({}); setShowOther({}); }}
    style={{ padding: "10px 24px", background: "none", border: `1px solid ${C.light}`, borderRadius: 8, color: C.muted, cursor: "pointer", fontSize: 14, fontFamily: "'Inter', sans-serif" }}>
      Start Over
    </button>
  </div>
          </div>
        </div>
      </div>
    );
  }

  // ============== SURVEY ==============
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: C.bg, minHeight: "100vh" }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, background: C.light, zIndex: 100 }}>
        <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, ${C.teal}, ${C.purple})`, transition: "width 0.4s" }} />
      </div>

      <div style={{ padding: "18px 28px 0", display: "flex", alignItems: "center", gap: 6 }}>
        {STAGES.map((s, i) => (
          <div key={i} style={{
            width: i === stage ? 28 : 8, height: 8, borderRadius: 4,
            background: i < stage ? s.bg : i === stage ? s.bg : C.light, transition: "all 0.3s",
          }} />
        ))}
        <span style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: 11, color: C.muted, letterSpacing: 2 }}>
          {st.num} · {st.name.toUpperCase()}
        </span>
      </div>

      <div style={{
        maxWidth: 620, margin: "0 auto", padding: "52px 28px 120px",
        opacity: anim ? 0 : 1, transform: anim ? "translateY(6px)" : "translateY(0)", transition: "all 0.18s ease",
      }}>
        {/* INTRO */}
        {q?.type === "intro" && (
          <>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: st.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: st.text, fontFamily: "monospace", marginBottom: 16 }}>{st.num}</div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: st.color, marginBottom: 4 }}>{st.name}</h2>
            <p style={{ fontSize: 15, color: C.muted, fontStyle: "italic", marginBottom: 20 }}>{st.sub}</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: C.body }}>{intros[stage]}</p>
          </>
        )}

        {/* TEXT */}
        {q?.type === "text" && (
          <>
            <label style={{ display: "block", fontSize: 20, fontWeight: 600, color: C.navy, marginBottom: 14 }}>{q.label}</label>
            <input type="text" value={ans[q.key] || ""} onChange={e => set(q.key, e.target.value)} placeholder={q.ph} autoFocus
              style={inputSt}
              onFocus={e => e.target.style.borderColor = st.color}
              onBlur={e => e.target.style.borderColor = C.light}
              onKeyDown={e => e.key === "Enter" && canGo() && next()} />
          </>
        )}

        {/* TEXTAREA */}
        {q?.type === "ta" && (
          <>
            <label style={{ display: "block", fontSize: 20, fontWeight: 600, color: C.navy, marginBottom: 4 }}>{q.label}</label>
            {q.sub && <p style={{ fontSize: 13, color: C.muted, marginBottom: 14 }}>{q.sub}</p>}
            <textarea value={ans[q.key] || ""} onChange={e => set(q.key, e.target.value)} placeholder={q.ph} rows={4}
              style={{ ...inputSt, resize: "vertical", lineHeight: 1.6 }}
              onFocus={e => e.target.style.borderColor = st.color}
              onBlur={e => e.target.style.borderColor = C.light} />
          </>
        )}

        {/* DOLLAR BILL */}
        {q?.type === "dollar" && (
          <>
            <label style={{ display: "block", fontSize: 20, fontWeight: 600, color: C.navy, marginBottom: 20 }}>{q.label}</label>
            <div style={{
              background: `linear-gradient(135deg, ${C.lighter}, ${C.white})`,
              border: `2px solid ${C.light}`, borderRadius: 12, padding: "32px 28px",
              textAlign: "center",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                <span style={{ fontSize: 20, fontFamily: "monospace", letterSpacing: 3, color: C.muted, fontWeight: 600 }}>IN</span>
                <input type="text" value={ans[q.key] || ""} onChange={e => set(q.key, e.target.value.toUpperCase())}
                  placeholder="________"
                  style={{
                    width: 200, padding: "8px 4px", fontSize: 28, fontWeight: 700, textAlign: "center",
                    fontFamily: "monospace", letterSpacing: 3, color: C.navy,
                    background: "transparent", border: "none", borderBottom: `3px solid ${C.teal}`,
                    outline: "none", textTransform: "uppercase",
                  }} />
                <span style={{ fontSize: 20, fontFamily: "monospace", letterSpacing: 3, color: C.muted, fontWeight: 600 }}>WE TRUST</span>
              </div>
            </div>
          </>
        )}

        {/* SELECT */}
        {q?.type === "sel" && (
          <>
            <label style={{ display: "block", fontSize: 20, fontWeight: 600, color: C.navy, marginBottom: q.link ? 6 : 14 }}>{q.label}</label>
            {q.link && (
              <a href={q.link.url} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-block", fontSize: 13, color: C.teal, textDecoration: "none", marginBottom: 14, fontWeight: 500,
              }}
              onMouseEnter={e => e.target.style.textDecoration = "underline"}
              onMouseLeave={e => e.target.style.textDecoration = "none"}
              >{q.link.text}</a>
            )}
            {q.sub && <p style={{ fontSize: 13, color: C.muted, marginBottom: 14 }}>{q.sub}</p>}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {q.opts.map(o => (
                <button key={o} onClick={() => { set(q.key, o); setShowOther(p => ({ ...p, [q.key]: false })); }} style={{
                  padding: "11px 16px", textAlign: "left", fontSize: 14, cursor: "pointer",
                  background: ans[q.key] === o && !showOther[q.key] ? `${st.color}12` : C.white,
                  border: `2px solid ${ans[q.key] === o && !showOther[q.key] ? st.color : C.light}`,
                  borderRadius: 8, color: C.body, transition: "all 0.15s", fontFamily: "'Inter', sans-serif",
                }}>{o}</button>
              ))}
              {/* Other option */}
              {q.noOther ? null : (
                <>
                  <button onClick={() => { setShowOther(p => ({ ...p, [q.key]: true })); set(q.key, otherText[q.key] || ""); }} style={{
                    padding: "11px 16px", textAlign: "left", fontSize: 14, cursor: "pointer",
                    background: showOther[q.key] ? `${st.color}12` : C.white,
                    border: `2px solid ${showOther[q.key] ? st.color : C.light}`,
                    borderRadius: 8, color: C.body, transition: "all 0.15s", fontFamily: "'Inter', sans-serif",
                    fontStyle: "italic",
                  }}>Other — I'll type my own</button>
                  {showOther[q.key] && (
                    <input type="text" value={otherText[q.key] || ""} onChange={e => { setOtherText(p => ({ ...p, [q.key]: e.target.value })); set(q.key, e.target.value); }}
                      placeholder="Type your answer..." autoFocus
                      style={{ ...inputSt, marginTop: 4 }}
                      onFocus={e => e.target.style.borderColor = st.color}
                      onBlur={e => e.target.style.borderColor = C.light}
                      onKeyDown={e => e.key === "Enter" && canGo() && next()} />
                  )}
                </>
              )}
            </div>
          </>
        )}

        {/* MULTI SELECT */}
        {q?.type === "multi" && (
          <>
            <label style={{ display: "block", fontSize: 20, fontWeight: 600, color: C.navy, marginBottom: q.sub ? 4 : 14 }}>{q.label}</label>
            {q.sub && <p style={{ fontSize: 13, color: C.muted, marginBottom: 8 }}>{q.sub}</p>}
            {q.max && (
              <p style={{ fontSize: 12, fontFamily: "monospace", color: (multi[q.key] || []).length >= q.max ? C.teal : C.muted, marginBottom: 14, transition: "color 0.2s" }}>
                {(multi[q.key] || []).length} / {q.max} selected
              </p>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {q.opts.map(o => {
                const sel = (multi[q.key] || []).includes(o);
                const atMax = q.max && (multi[q.key] || []).length >= q.max && !sel;
                return (
                  <button key={o} onClick={() => setM(q.key, o, q.max)} style={{
                    padding: "8px 16px", fontSize: 13, cursor: atMax && q.max > 1 ? "not-allowed" : "pointer", fontFamily: "monospace",
                    background: sel ? st.color : C.white, color: sel ? "#fff" : atMax && q.max > 1 ? C.light : C.body,
                    border: `2px solid ${sel ? st.color : C.light}`, borderRadius: 8, transition: "all 0.15s",
                    opacity: atMax && q.max > 1 ? 0.4 : 1,
                  }}>{o}</button>
                );
              })}
              {/* Other toggle */}
              {q.noOther ? null : (
                <button onClick={() => setShowOther(p => ({ ...p, [q.key]: !p[q.key] }))} style={{
                  padding: "8px 16px", fontSize: 13, cursor: "pointer", fontFamily: "monospace",
                  background: showOther[q.key] ? `${st.color}20` : C.white, color: showOther[q.key] ? st.color : C.muted,
                  border: `2px dashed ${showOther[q.key] ? st.color : C.light}`, borderRadius: 8, transition: "all 0.15s",
                  fontStyle: "italic",
                }}>+ Other</button>
              )}
            </div>
            {/* Other write-in */}
            {showOther[q.key] && !q.noOther && (
              <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
                <input type="text" value={otherText[q.key] || ""} onChange={e => setOtherText(p => ({ ...p, [q.key]: e.target.value }))}
                  placeholder="Type your own..." autoFocus
                  style={{ ...inputSt, flex: 1, fontSize: 13, padding: "10px 14px" }}
                  onFocus={e => e.target.style.borderColor = st.color}
                  onBlur={e => e.target.style.borderColor = C.light}
                  onKeyDown={e => {
                    if (e.key === "Enter" && (otherText[q.key] || "").trim()) {
                      const val = otherText[q.key].trim();
                      if (!(multi[q.key] || []).includes(val)) setM(q.key, val, q.max);
                      setOtherText(p => ({ ...p, [q.key]: "" }));
                    }
                  }} />
                <button onClick={() => {
                  const val = (otherText[q.key] || "").trim();
                  if (val && !(multi[q.key] || []).includes(val)) setM(q.key, val, q.max);
                  setOtherText(p => ({ ...p, [q.key]: "" }));
                }} style={{
                  padding: "10px 18px", fontSize: 13, background: st.color, color: "#fff",
                  border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 600,
                }}>Add</button>
              </div>
            )}
          </>
        )}

        {/* SPECTRUM */}
        {q?.type === "sp" && (
          <>
            <label style={{ display: "block", fontSize: 20, fontWeight: 600, color: C.navy, marginBottom: 20 }}>{q.label}</label>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontSize: 13, color: C.body }}>{q.l}</span>
              <span style={{ fontSize: 13, color: C.body }}>{q.r}</span>
            </div>
            <input type="range" min={1} max={7} value={spec[q.key]}
              onChange={e => setS(q.key, parseInt(e.target.value))}
              style={{ width: "100%", accentColor: st.color }} />
            <div style={{ textAlign: "center", marginTop: 10, fontFamily: "monospace", fontSize: 18, letterSpacing: 3, color: C.teal, fontWeight: 700 }}>
              {"◀" + "█".repeat(spec[q.key]) + "░".repeat(7 - spec[q.key]) + "▶"}
            </div>
          </>
        )}

        {/* SUPERPOWER */}
        {q?.type === "superpower" && (
          <>
            <label style={{ display: "block", fontSize: 20, fontWeight: 600, color: C.navy, marginBottom: 4 }}>What's your superpower?</label>
            <p style={{ fontSize: 13, color: C.muted, marginBottom: 4 }}>Based on IDEO's Creative Difference framework. Pick the <strong>one</strong> that's most you.</p>
            <p style={{ fontSize: 12, color: C.muted, marginBottom: 18, fontStyle: "italic" }}>Not what you're trained in — what people naturally come to you for.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {SUPERPOWERS.map(sp => {
                const sel = (multi.superpower || []).includes(sp.name);
                return (
                  <button key={sp.name} onClick={() => setMulti(p => ({ ...p, superpower: sel ? [] : [sp.name] }))}
                    style={{
                      padding: "12px 14px", textAlign: "left", cursor: "pointer",
                      background: sel ? C.navy : C.white,
                      border: `2px solid ${sel ? C.teal : C.light}`,
                      borderRadius: 10, transition: "all 0.2s",
                      boxShadow: sel ? `0 2px 12px ${C.teal}30` : "none",
                    }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 18 }}>{sp.icon}</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: sel ? C.teal : C.navy }}>{sp.name}</span>
                    </div>
                    <p style={{ fontSize: 11, lineHeight: 1.4, color: sel ? "#94a3b8" : C.muted, margin: 0 }}>{sp.short}</p>
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Nav */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0, padding: "14px 28px",
        background: C.bg, borderTop: `1px solid ${C.light}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <button onClick={back} style={{
          padding: "9px 22px", background: "none", border: `1px solid ${C.light}`,
          borderRadius: 8, color: C.muted, cursor: "pointer", fontSize: 13,
        }}>← Back</button>
        <span style={{ fontFamily: "monospace", fontSize: 11, color: C.muted }}>{pct}%</span>
        <button onClick={next} disabled={!canGo()} style={{
          padding: "9px 28px",
          background: canGo() ? `linear-gradient(135deg, ${C.teal}, ${C.purple})` : C.light,
          border: "none", borderRadius: 8, color: canGo() ? "#fff" : C.muted,
          cursor: canGo() ? "pointer" : "default", fontSize: 13, fontWeight: 600, transition: "all 0.2s",
        }}>
          {stage === 4 && qIdx === qs.length - 1 ? "Complete →" : q?.type === "intro" ? "Let's go →" : "Next →"}
        </button>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; }
        input[type="range"] { -webkit-appearance: none; height: 6px; border-radius: 3px; background: ${C.light}; outline: none; }
        input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 22px; height: 22px; border-radius: 50%; background: ${st.color}; cursor: pointer; border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.15); }
      `}</style>
    </div>
  );
}
