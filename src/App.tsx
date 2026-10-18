import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Story from './components/Story'

/*
  The whole page, top to bottom.
  Each <Component /> lives in its own file in src/components.
  To reorder sections, move these lines. To hide one, delete its line.
*/
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
