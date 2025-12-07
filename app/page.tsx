import Hero from './components/home/Hero'
import Stats from './components/home/Stats'
import About from './components/home/About'
import Services from './components/home/Services'
import Projects from './components/home/Projects'
import Clients from './components/home/Clients'
import CTA from './components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Clients />
      <CTA />
    </>
  )
}