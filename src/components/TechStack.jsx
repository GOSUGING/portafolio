const TECH_GROUPS = [
  {
    category: 'CORE_PROCESSING :: BACKEND',
    status: 'OPTIMIZED',
    statusColor: 'text-[#00ff41]',
    items: [
      { name: 'Java 21', level: 90 },
      { name: 'Spring Boot', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'Microservices', level: 85 },
    ],
    barColor: '#00ff41',
    glow: 'card-glow-green',
    labelColor: 'text-[#00ff41] neon-green',
  },
  {
    category: 'CONTAINERIZATION :: CLOUD_INFRA',
    status: 'OPERATIONAL',
    statusColor: 'text-[#00f3ff]',
    items: [
      { name: 'Docker', level: 88 },
      { name: 'Kubernetes', level: 80 },
      { name: 'AWS Ecosystem', level: 75 },
      { name: 'GCP', level: 70 },
    ],
    barColor: '#00f3ff',
    glow: 'card-glow-cyan',
    labelColor: 'text-[#00f3ff] neon-cyan',
  },
  {
    category: 'DATA_LAYERS :: SECURITY',
    status: 'SECURED',
    statusColor: 'text-[#ff00ff]',
    items: [
      { name: 'MySQL', level: 85 },
      { name: 'RSA Cryptography', level: 78 },
      { name: 'Auth Services', level: 82 },
      { name: 'Payment Gateways', level: 75 },
    ],
    barColor: '#ff00ff',
    glow: 'card-glow-magenta',
    labelColor: 'text-[#ff00ff] neon-magenta',
  },
]

function TechCard({ group }) {
  return (
    <div className={`${group.glow} bg-[#050505] p-6 flex flex-col gap-5`}>
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className={`text-xs tracking-widest font-bold ${group.labelColor}`}>{group.category}</span>
          <span className={`text-xs tracking-widest flex items-center gap-1 ${group.statusColor}`}>
            <span className="inline-block w-2 h-2 rounded-full bg-current animate-pulse" />
            {group.status}
          </span>
        </div>
        <div className="h-px" style={{ background: group.barColor + '44' }} />
      </div>

      {/* Skill bars */}
      <div className="flex flex-col gap-4">
        {group.items.map(item => (
          <div key={item.name}>
            <div className="flex justify-between text-xs mb-1">
              <span style={{ color: group.barColor }}>{item.name}</span>
              <span style={{ color: group.barColor + 'aa' }}>{item.level}%</span>
            </div>
            <div className="h-1.5 bg-[#ffffff0d] rounded-none overflow-hidden">
              <div
                className="h-full rounded-none transition-all duration-1000"
                style={{
                  width: `${item.level}%`,
                  background: group.barColor,
                  boxShadow: `0 0 6px ${group.barColor}`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const EXTRA_SKILLS = [
  'React', 'Frontend Web', 'UI/UX Design', 'SEO', 'Google Maps API',
  'Scrum', 'Git', 'Linux', 'CI/CD', 'PostgreSQL',
]

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="mb-12">
        <p className="text-[#00f3ff] text-xs tracking-widest mb-2">// HARDWARE_DIAGNOSTICS :: MODULE_03</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#00ff41] neon-green tracking-widest">
          &gt; TECH_STACK_SCAN
        </h2>
        <div className="h-px bg-gradient-to-r from-[#00ff41] to-transparent mt-4" />
      </div>

      {/* Tech group cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {TECH_GROUPS.map(g => (
          <TechCard key={g.category} group={g} />
        ))}
      </div>

      {/* Extra skills tags */}
      <div className="card-glow-green bg-[#050505] p-5">
        <p className="text-xs text-[#00ff4166] tracking-widest mb-4">&gt; ADDITIONAL_MODULES_DETECTED:</p>
        <div className="flex flex-wrap gap-2">
          {EXTRA_SKILLS.map(s => (
            <span
              key={s}
              className="text-xs px-3 py-1 border border-[#00ff4133] text-[#00ff4199] hover:border-[#00ff41] hover:text-[#00ff41] hover:neon-green transition-all duration-200 cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
