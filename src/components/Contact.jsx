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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

          <a
            href="https://www.linkedin.com/in/aron-suy-835256284/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border border-[#ff00ff33] text-[#ff00ff] hover:border-[#ff00ff] hover:bg-[#ff00ff11] hover:neon-magenta transition-all duration-300 group"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <div>
              <p className="text-xs text-[#ff00ff66] tracking-widest">NETWORK_LINK</p>
              <p className="text-sm tracking-wide">linkedin/aron-suy</p>
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
