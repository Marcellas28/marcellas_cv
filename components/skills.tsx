"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "🖥️",
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Vue.js",
      "HTML & CSS",
    ],
  },
  {
    title: "Backend & APIs",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Python",
      "RESTful APIs",
      ".NET Core",
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "SQL",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      "Git & GitHub",
      "Docker",
      "CI/CD (GitHub Actions)",
      "AWS",
      "Azure",
      "Linux",
      "Postman",
    ],
  },
  {
    title: "Networking & Infrastructure",
    icon: "🌐",
    skills: [
      "TCP/IP & ARP",
      "Network Troubleshooting",
      "Network Administration",
      "Access Point Configuration",
      "WLAN/WAN Basics",
    ],
  },
  {
    title: "Design & Creative",
    icon: "🎨",
    skills: [
      "Figma (UI/UX)",
      "Adobe Photoshop",
      "Canva",
      "Graphic Design",
     
    ],
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 bg-gray-50/50 dark:bg-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-1/4 w-72 h-72 bg-rose-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical <span className="text-rose-600 dark:text-rose-400">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Technologies and tools I use to build real-world solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 relative group overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white relative z-10 flex items-center gap-2">
                <span className="text-xl">{category.icon}</span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`text-sm px-3 py-1.5 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 rounded-full font-medium hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-all duration-200 hover:scale-105 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${categoryIndex * 100 + skillIndex * 40}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            Always expanding my toolkit with emerging technologies and best practices
          </p>
        </div>
      </div>
    </section>
  )
}