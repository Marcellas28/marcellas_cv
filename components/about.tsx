"use client"

import { useEffect, useRef, useState } from "react"
import { 
  Code2, 
  Palette, 
  Network, 
  HeartHandshake,
  Music,
  Download,
  Sparkles
} from "lucide-react"

export default function About() {
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

  const expertisePoints = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Full-Stack Development",
      description: "React.js, TypeScript, Node.js, .NET Core, SQL"
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "UI/UX & Graphic Design",
      description: "Adobe Photoshop, Photoscape, Canva,"
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: "Networking & Systems",
      description: "Network Configuration, TCP/IP, Linux Administration"
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: "Youth Advocacy",
      description: "SRHR Advocacy, Community Mobilization, Data Analysis"
    },
    {
      icon: <Music className="w-5 h-5" />,
      title: "Sound Engineering",
      description: "Audio Equipment Control, Technical Production,Drummer"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-40 h-40 bg-rose-200/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-200/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div
            ref={ref}
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600/30 via-purple-600/30 to-blue-600/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <div className="absolute -inset-3 bg-gradient-to-r from-rose-600 via-pink-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-all duration-500" />
              <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <img
                  src="/ma2.png"
                  alt="Marcellas Daniel Indeje"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-rose-600 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
                <span className="flex items-center gap-2">
                  
                  <span className="font-semibold">Open to Opportunities</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`} style={{ transitionDelay: "300ms" }}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-rose-50 dark:bg-rose-900/20 rounded-full">
              <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-rose-600 dark:text-rose-400">About Me</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-blue-600">Digital Experiences</span> with Purpose
            </h2>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Passionate Software Engineer and Developer with <span className="font-semibold text-gray-900 dark:text-white">2+ years</span> of experience creating innovative solutions that blend <span className="text-rose-600 dark:text-rose-400 font-medium">technical excellence</span> with <span className="text-blue-600 dark:text-blue-400 font-medium">visual design</span>.
              </p>

              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                I specialize in developing scalable applications using modern technologies while maintaining a strong focus on user experience and clean, maintainable code. My unique combination of technical and creative skills allows me to bridge the gap between development and design.
              </p>

              {/* Expertise Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {expertisePoints.map((point, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-800/50 dark:to-slate-900/50 border border-gray-200/50 dark:border-slate-700/50 hover:border-rose-200/50 dark:hover:border-rose-500/20 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: `${400 + (index * 100)}ms` }}
                  >
                    <div className="p-2 bg-gradient-to-r from-rose-100 to-blue-100 dark:from-rose-900/30 dark:to-blue-900/30 rounded-lg">
                      <div className="text-rose-600 dark:text-rose-400">
                        {point.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{point.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                As a dedicated <span className="font-semibold">SRHR Youth Advocate</span> at the Reproductive Health Network Kenya, I combine technical skills with social impact work, using data-driven approaches to create meaningful change in communities.
              </p>

             

              {/* Availability Badge */}
              <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-rose-50 dark:from-blue-900/10 dark:to-rose-900/10 border border-blue-200/50 dark:border-blue-500/20">
                <p className="text-center text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Currently Seeking:</span>{" "}
                  Internships • Junior Developer Roles • Freelance Projects • Tech Collaborations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}