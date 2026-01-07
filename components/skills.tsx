"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 96 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 85 },
      { name: "Java", level: 85 },
      { name: "MySQL", level: 88 },
      { name: "RESTful APIs", level: 90 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Next.js", level: 75 },
      
      { name: "Django/Flask", level: 70 },
      { name: "Express.js", level: 80 },
      { name: "React Native", level: 65 },
      { name: "Vue.js", level: 65 },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Git/GitHub/GitLab", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS/Azure/GCP", level: 70 },
      { name: "CI/CD (GitHub Actions)", level: 75 },
      { name: "Linux", level: 80 },
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      { name: "UI/UX Design (Figma)", level: 90 },
      { name: "Testing (Jest, Cypress)", level: 75 },
      { name: "Postman", level: 85 },
      { name: "Graphic Designing", level: 85 },
    ], // Added missing closing bracket here
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
      { threshold: 0.3 },
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
            Technologies and methodologies I leverage to build scalable, efficient solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white relative z-10 flex items-center">
                <span className="w-3 h-3 bg-rose-500 rounded-full mr-2"></span>
                {category.title}
              </h3>

              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between mb-1">
                      <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-rose-600 dark:text-rose-400 font-bold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-rose-600 to-rose-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add a note about continuous learning */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            Always expanding my toolkit with emerging technologies and best practices
          </p>
        </div>
      </div>
    </section>
  )
}