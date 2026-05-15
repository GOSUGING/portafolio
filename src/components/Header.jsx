import { useState, useEffect } from 'react'

const BOOT_LINES = [
  { text: '> INITIALIZING NEURAL_LINK...', delay: 0, color: 'text-[#00ff41]' },
  { text: '> KERNEL v2.1.4 LOADED', delay: 600, color: 'text-[#00ff41]' },
  { text: '> SCANNING BIOMETRIC DATA...', delay: 1200, color: 'text-[#00f3ff]' },
  { text: '> USER: ARON_IGNACIO', delay: 1800, color: 'text-[#00f3ff]' },
  { text: '> ROLE: ANALISTA_PROGRAMADOR / FULL_STACK_DEV', delay: 2400, color: 'text-[#00f3ff]' },
  { text: '> SPECIALTY: MICROSERVICES / CLOUD / CONTAINERS', delay: 3000, color: 'text-[#00ff41]' },
  { text: '> STATUS: ONLINE ██████████ 100%', delay: 3600, color: 'text-[#00ff41]' },
  { text: '> NEURAL_LINK ESTABLISHED. WELCOME.', delay: 4200, color: 'text-[#ff00ff]' },
]

const NAV_LINKS = [
  { label: '[PROJECTS]', href: '#projects' },
  { label: '[TECH_STACK]', href: '#techstack' },
  { label: '[CONTACT]', href: '#contact' },
]

export default function Header() {
  const [visibleLines, setVisibleLines] = useState([])
  const [bootDone, setBootDone] = useState(false)

  useEffect(() => {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, i])
        if (i === BOOT_LINES.length - 1) {
          setTimeout(() => setBootDone(true), 800)
        }
      }, line.delay)
    })
  }, [])

  return (
    <header className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Nav */}
      <nav className="relative z-10 flex justify-between items-center px-6 py-4 border-b border-[#00ff4133]">
        <span className="text-[#00ff41] neon-green text-lg font-bold tracking-widest">
          ARON_IGNACIO<span className="cursor" />
        </span>
        <div className="flex gap-6">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#00f3ff] neon-cyan text-sm hover:text-[#ff00ff] hover:neon-magenta transition-colors duration-200 tracking-wider"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/GOSUGING"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff00ff] text-sm hover:text-[#00ff41] transition-colors duration-200 tracking-wider"
          >
            [GITHUB]
          </a>
        </div>
      </nav>

      {/* Boot sequence terminal */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-3xl">
          {/* Terminal window */}
          <div className="card-glow-green bg-[#050505] rounded-none p-6 relative">
            {/* Terminal header bar */}
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[#00ff4133]">
              <div className="w-3 h-3 rounded-full bg-[#ff00ff] shadow-[0_0_6px_#ff00ff]" />
              <div className="w-3 h-3 rounded-full bg-[#00f3ff] shadow-[0_0_6px_#00f3ff]" />
              <div className="w-3 h-3 rounded-full bg-[#00ff41] shadow-[0_0_6px_#00ff41]" />
              <span className="ml-3 text-xs text-[#00ff4166] tracking-widest">NEURAL_LINK :: SYSTEM_BOOT</span>
            </div>

            {/* Boot lines */}
            <div className="space-y-2 text-sm md:text-base">
              {BOOT_LINES.map((line, i) => (
                <div
                  key={i}
                  className={`transition-opacity duration-300 ${line.color} ${
                    visibleLines.includes(i) ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ fontFamily: 'inherit' }}
                >
                  {line.text}
                </div>
              ))}
            </div>

            {/* Prompt after boot */}
            {bootDone && (
              <div className="mt-6 flex items-center gap-2 text-[#00ff41]">
                <span className="text-[#00f3ff]">aron@neural:~$</span>
                <span className="cursor" />
              </div>
            )}
          </div>

          {/* CTA buttons */}
          {bootDone && (
            <div className="mt-8 flex flex-wrap gap-4 justify-center animate-[fadeIn_0.5s_ease-in]">
              <a
                href="#projects"
                className="px-6 py-3 border border-[#00ff41] text-[#00ff41] neon-green text-sm tracking-widest hover:bg-[#00ff4111] transition-all duration-300 glitch-hover"
              >
                &gt; VIEW_PROJECTS
              </a>
              <a
                href="https://github.com/GOSUGING"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[#00f3ff] text-[#00f3ff] neon-cyan text-sm tracking-widest hover:bg-[#00f3ff11] transition-all duration-300 glitch-hover"
              >
                &gt; ACCESS_GITHUB
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-1 text-[#00ff4166] text-xs tracking-widest animate-bounce">
          <span>SCROLL_DOWN</span>
          <span>▼</span>
        </div>
      </div>
    </header>
  )
}
