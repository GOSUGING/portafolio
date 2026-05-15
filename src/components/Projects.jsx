const PROJECTS = [
  {
    tag: '[CORE_SYSTEM]',
    name: 'Level-Up! Gamer',
    techs: ['Spring Boot', 'React', 'Docker', 'Kubernetes'],
    description:
      'Arquitectura basada en microservicios enfocado en la comunicación de servicios de autenticación y pasarelas de pago.',
    status: 'ACTIVE',
    color: 'green',
    github: 'https://github.com/GOSUGING/levelup-v3-s3-aws',
  },
  {
    tag: '[GOV_DATABASE]',
    name: 'CORE Valparaíso',
    techs: ['Gestión Documental', 'Scrum', 'Integración de Sistemas'],
    description:
      'Modernización e integración del sistema de gestión documental y plataforma web para entidad gubernamental regional.',
    status: 'DEPLOYED',
    color: 'cyan',
    github: 'https://github.com/GOSUGING',
  },
  {
    tag: '[NEURAL_HEALTH]',
    name: 'Integrative Medicine Web',
    techs: ['Frontend Web', 'UI/UX Design', 'React'],
    description:
      'Desarrollo de presencia digital e interfaz profesional orientada a la visibilidad de medicina integrativa.',
    status: 'LIVE',
    color: 'magenta',
    github: 'https://github.com/GOSUGING/vet-paws',
    live: 'https://gosuging.github.io/vet-paws/',
  },
  {
    tag: '[GEOSPATIAL_INT]',
    name: 'Ascarpa Web',
    techs: ['SEO Optimization', 'Google Maps API', 'Web Dev'],
    description:
      'Configuración de plataforma de desarrollo de negocio con integraciones geográficas y optimización en motores de búsqueda.',
    status: 'OPERATIONAL',
    color: 'green',
    github: 'https://github.com/GOSUGING/ascarpa-web',
  },
  {
    tag: '[DATA_ARCHIVE]',
    name: 'Pokédex',
    techs: ['React', 'REST API', 'Frontend Web'],
    description:
      'Aplicación web interactiva que consume la PokéAPI para explorar y visualizar datos de Pokémon en tiempo real.',
    status: 'LIVE',
    color: 'cyan',
    github: 'https://github.com/GOSUGING/pokedex',
    live: 'https://gosuging.github.io/pokedex/',
  },
  {
    tag: '[GEO_EXPLORER]',
    name: 'Viajes Chile',
    techs: ['HTML', 'CSS', 'JavaScript', 'Frontend Web'],
    description:
      'Plataforma web orientada al turismo nacional, con exploración de destinos y atractivos turísticos de Chile.',
    status: 'LIVE',
    color: 'magenta',
    github: 'https://github.com/GOSUGING/Viajes-chile',
    live: 'https://gosuging.github.io/Viajes-chile/',
  },
]

const COLOR_MAP = {
  green: {
    card: 'card-glow-green',
    tag: 'text-[#00ff41] border-[#00ff41]',
    status: 'text-[#00ff41]',
    tech: 'bg-[#00ff4111] text-[#00ff41] border border-[#00ff4144]',
    title: 'text-[#00ff41] neon-green',
  },
  cyan: {
    card: 'card-glow-cyan',
    tag: 'text-[#00f3ff] border-[#00f3ff]',
    status: 'text-[#00f3ff]',
    tech: 'bg-[#00f3ff11] text-[#00f3ff] border border-[#00f3ff44]',
    title: 'text-[#00f3ff] neon-cyan',
  },
  magenta: {
    card: 'card-glow-magenta',
    tag: 'text-[#ff00ff] border-[#ff00ff]',
    status: 'text-[#ff00ff]',
    tech: 'bg-[#ff00ff11] text-[#ff00ff] border border-[#ff00ff44]',
    title: 'text-[#ff00ff] neon-magenta',
  },
}

function ProjectCard({ project }) {
  const c = COLOR_MAP[project.color]

  return (
    <div className={`${c.card} bg-[#050505] p-5 flex flex-col gap-4 glitch-hover transition-all duration-300 group`}>
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <span className={`text-xs border px-2 py-0.5 tracking-widest ${c.tag}`}>{project.tag}</span>
        <span className={`text-xs tracking-widest ${c.status} flex items-center gap-1`}>
          <span className="inline-block w-2 h-2 rounded-full bg-current animate-pulse" />
          {project.status}
        </span>
      </div>

      {/* Project name */}
      <h3 className={`text-lg font-bold tracking-wider ${c.title}`}>{project.name}</h3>

      {/* Description */}
      <p className="text-sm text-[#00ff4199] leading-relaxed">{project.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.techs.map(t => (
          <span key={t} className={`text-xs px-2 py-0.5 tracking-wide ${c.tech}`}>
            {t}
          </span>
        ))}
      </div>

      {/* Footer links */}
      <div className="mt-auto pt-3 border-t border-[#ffffff0d] flex flex-col gap-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xs tracking-widest ${c.status} hover:underline flex items-center gap-2`}
        >
          &gt; ACCESS_REPOSITORY ↗
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest text-[#00ff41] hover:underline flex items-center gap-2"
          >
            &gt; VIEW_LIVE_SITE ↗
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="mb-12">
        <p className="text-[#00f3ff] text-xs tracking-widest mb-2">// DATA_RETRIEVAL :: MODULE_02</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#00ff41] neon-green tracking-widest">
          &gt; PROJECT_DATABASE
        </h2>
        <div className="h-px bg-gradient-to-r from-[#00ff41] to-transparent mt-4" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map(p => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  )
}
