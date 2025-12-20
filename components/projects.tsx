"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Learning Platform",
    description: "A full-featured online store with product management, cart functionality, and payment processing.",
    image: "/elearning-platform-interface.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://marcellas28.github.io/DumaniTech_Solutions/",
    github: "https://github.com/Marcellas28/DumaniTech_Solutions.git",
  },
  {
    title: "Health Website",
    description: "Custom-designed portfolio website with responsive layout and smooth animations.",
    image: "/kuu.png",
    tags: ["HTML/CSS", "JavaScript", "OpenAPI"],
    link: "https://marcellas28.github.io/Nena-Na-Binti-1/",
    github: "https://github.com/Marcellas28/Nena-Na-Binti-1.git",
  },
  {
    title: "School Management System",
    description: "Comprehensive system for managing school operations and student records.",
    image: "/school-management-system.jpg",
    tags: ["React", "Tailwind CSS", "SQL"],
    link: "https://github.com/Marcellas28/ID-verification-system.git",
    github: "https://github.com/Marcellas28/ID-verification-system.git",
  },
  {
    title: "CRM Dashboard",
    description: "Comprehensive system for managing customer transcations and user store inventory",
    image: "/crm.png",
    tags: ["React", "Tailwind CSS", "SQL"],
    link: "https://github.com/Marcellas28/TRIBE.git",
    github: "https://github.com/Marcellas28/TRIBE.git",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 bg-gray-50/50 dark:bg-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-rose-200/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Recent <span className="text-rose-600 dark:text-rose-400 animate-shimmer">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Here are some of my recent works</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-125"
                />
                {/* Enhanced overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto">
                      →
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded-full group-hover:scale-110 transition-transform"
                      style={{ transitionDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all duration-300 text-sm font-semibold relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <ExternalLink size={16} /> View
                    </span>
                    <div className="absolute inset-0 bg-rose-700 transform scale-y-0 group-hover/btn:scale-y-100 transition-transform origin-bottom" />
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-slate-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-slate-700 transition-all duration-300 text-sm font-semibold"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
