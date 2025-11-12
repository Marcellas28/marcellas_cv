"use client"

import { useEffect, useRef, useState } from "react"

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

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-40 h-40 bg-rose-200/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-40 h-40 bg-blue-200/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600/30 to-blue-600/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 via-pink-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300 animate-pulse" />
              <img
                src="ma2.png"
                alt="Marcellas"
                className="relative rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300 w-full h-auto"
              />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About <span className="text-rose-600 dark:text-rose-400 animate-shimmer">Me</span>
            </h2>

            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
                I'm a passionate web developer with 1+ years of experience creating web applications that deliver
                exceptional user experiences. I specialize in JavaScript, CSS, HTML, and modern web technologies.
              </p>

              <p className="text-lg leading-relaxed hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
                I'm also a dedicated SRHR Youth Advocate at the Reproductive Health Network Kenya (RHNK) where I combine
                my technical skills with social impact work.
              </p>

              <p className="text-lg leading-relaxed hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">
                Beyond coding, I have extensive experience in sound engineering and equipment control. I enjoy solving
                complex problems and turning ideas into reality through elegant interfaces.
              </p>

              <div className="pt-6 flex gap-4">
                <a
                  href="#contact"
                  className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors font-semibold relative overflow-hidden group"
                >
                  <span className="relative z-10">Let's Connect</span>
                  <div className="absolute inset-0 bg-rose-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
