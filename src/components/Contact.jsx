export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      {/* Section header */}
      <div className="mb-12">
        <p className="text-[#00f3ff] text-xs tracking-widest mb-2">// ESTABLISH_CONNECTION :: MODULE_04</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#00ff41] neon-green tracking-widest">
          &gt; OPEN_CHANNEL
        </h2>
        <div className="h-px bg-gradient-to-r from-[#00ff41] to-transparent mt-4" />
      </div>

      {/* Terminal card */}
      <div className="card-glow-cyan bg-[#050505] p-8">
        <div className="text-sm space-y-3 mb-8">
          <p className="text-[#00f3ff]">&gt; SIGNAL_DETECTED. ESTABLISHING_HANDSHAKE...</p>
          <p className="text-[#00ff4199]">&gt; TARGET: ARON IGNACIO SUY MALDONADO</p>
          <p className="text-[#00ff4199]">&gt; STATUS: AVAILABLE_FOR_OPPORTUNITIES</p>
          <p className="text-[#00ff4199]">&gt; RESPONSE_TIME: &lt; 24H</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://github.com/GOSUGING"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border border-[#00ff4133] text-[#00ff41] hover:border-[#00ff41] hover:bg-[#00ff4111] hover:neon-green transition-all duration-300 group"
          >
            <span className="text-lg">⌨</span>
            <div>
              <p className="text-xs text-[#00ff4166] tracking-widest">REPOSITORY</p>
              <p className="text-sm tracking-wide">github.com/GOSUGING</p>
            </div>
          </a>

          <a
            href="mailto:aroon.suy@gmail.com"
            className="flex items-center gap-3 p-4 border border-[#00f3ff33] text-[#00f3ff] hover:border-[#00f3ff] hover:bg-[#00f3ff11] hover:neon-cyan transition-all duration-300 group"
          >
            <span className="text-lg">✉</span>
            <div>
              <p className="text-xs text-[#00f3ff66] tracking-widest">DIRECT_LINK</p>
              <p className="text-sm tracking-wide">aroon.suy@gmail.com</p>
            </div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-6 border-t border-[#00ff4111] text-center">
        <p className="text-xs text-[#00ff4133] tracking-widest">
          ARON_IGNACIO :: NEURAL_LINK v1.0 :: {new Date().getFullYear()} :: ALL_RIGHTS_RESERVED
        </p>
        <p className="text-xs text-[#00ff4122] tracking-widest mt-1">
          BUILT_WITH: React + Vite + TailwindCSS
        </p>
      </div>
    </section>
  )
}
