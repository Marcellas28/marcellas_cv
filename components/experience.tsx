"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    period: "2023 - Present",
    position: "Web Developer",
    company: "Tech Innovations",
    description: "Lead developer. Developed responsive web applications and implemented UI/UX designs.",
    skills: ["HTML", "CSS", "JS", "PHP", "MySQL"],
  },
  {
    period: "2025",
    position: "ICT Assistant",
    company: "KMTC Kilifi Campus",
    description: "Developed responsive school systems and improved network infrastructure.",
    skills: ["React", "Tailwind CSS", "JS", "SQL"],
  },
]

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Work <span className="text-rose-600 dark:text-rose-400">Experience</span>
          </h2>
        </div>

        <div ref={ref} className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 border-l-4 border-rose-600 dark:border-rose-400 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                  <p className="text-lg text-rose-600 dark:text-rose-400 font-semibold">{exp.company}</p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 font-semibold mt-2 md:mt-0">{exp.period}</span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
