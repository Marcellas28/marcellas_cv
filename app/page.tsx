import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"

export const metadata = {
  title: "Marcellas Indeje | Web Developer Portfolio",
  description:
    "Professional portfolio of Marcellas Indeje - Web Developer specializing in React, JavaScript, and modern web technologies.",
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  )
}
