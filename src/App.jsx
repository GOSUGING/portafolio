import Header from './components/Header'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen">
      <Header />
      <main>
        <Projects />
        <div className="h-px max-w-6xl mx-auto bg-gradient-to-r from-transparent via-[#00ff4133] to-transparent" />
        <TechStack />
        <div className="h-px max-w-6xl mx-auto bg-gradient-to-r from-transparent via-[#00f3ff33] to-transparent" />
        <Contact />
      </main>
    </div>
  )
}
