import './App.css'
import { Navbar } from '#components/navbar'
import { Hero } from '#components/hero'
import { About } from '#components/about'
import { Skills } from '#components/skills'
import { Projects } from '#components/projects'
import { Experience } from '#components/experience'
import { Education } from '#components/education'
import { Contact } from '#components/contacts'

function App() {
  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background px-4 py-4">
        <Navbar />
      </header>

      {/* Hero */}
      <section
        id="home"
        className="flex flex-col-reverse items-center justify-center gap-8 px-6 py-16 md:flex-row md:gap-12 md:px-12 md:py-20 lg:px-20"
      >
        <Hero />
      </section>

      {/* About */}
      <section
        id="about"
        className="px-6 py-12 md:px-12 md:py-16 lg:px-20"
      >
        <About />
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="px-6 py-12 md:px-12 md:py-16 lg:px-20"
      >
        <Skills />
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 py-12 md:px-12 md:py-16 lg:px-20"
      >
        <Projects />
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="px-6 py-12 md:px-12 md:py-16 lg:px-20"
      >
        <Experience />
      </section>

      {/* Education */}
      <section
        id="education"
        className="px-6 py-12 md:px-12 md:py-16 lg:px-20"
      >
        <Education />
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-12 md:px-12 md:py-16 lg:px-20"
      >
        <Contact />
      </section>
    </>
  )
}

export default App
