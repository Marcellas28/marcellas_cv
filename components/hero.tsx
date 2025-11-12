"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const roles = ["Front-End Engineer", "Student @ Co-op Uni Kenya", "SRHR Advocate @ RHNK", "Mobile App Developer", "Tech Enthusiast"]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [profileTilt, setProfileTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientY - rect.top) / rect.height - 0.5
    const y = (e.clientX - rect.left) / rect.width - 0.5

    setProfileTilt({
      x: x * 15,
      y: y * -15,
    })
  }

  const handleMouseLeave = () => {
    setProfileTilt({ x: 0, y: 0 })
  }

  useEffect(() => {
    const role = roles[currentRole]
    let timeout: NodeJS.Timeout

    if (isTyping && displayText.length < role.length) {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length + 1))
      }, 80)
    } else if (isTyping && displayText.length === role.length) {
      timeout = setTimeout(() => {
        setIsTyping(false)
      }, 2000)
    } else if (!isTyping && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(role.substring(0, displayText.length - 1))
      }, 50)
    } else if (!isTyping && displayText.length === 0) {
      setCurrentRole((prev) => (prev + 1) % roles.length)
      setIsTyping(true)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, currentRole])

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center pt-20 pb-10 bg-gradient-to-br from-white via-rose-50/30 to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-rose-200/10 to-blue-200/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Rotating border glow */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-rose-600 via-pink-500 to-rose-600 p-1 animate-spin"
                style={{ animationDuration: "3s" }}
              >
                <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-900" />
              </div>

              {/* Pulsing glow effect */}
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-rose-600 to-pink-500 blur-2xl opacity-30 animate-pulse" />

              {/* 3D Profile Picture Container */}
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden transition-transform duration-200 ease-out"
                style={{
                  transform: `perspective(1000px) rotateX(${profileTilt.x}deg) rotateY(${profileTilt.y}deg) scale(1.05)`,
                }}
              >
                <img
                  src="marc.png"
                  alt="Marcellas Profile"
                  className="w-full h-full object-cover"
                />
                {/* Floating shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating particles */}
              <div className="absolute -inset-12 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-rose-400 rounded-full animate-float"
                    style={{
                      left: `${25 + i * 25}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in order-1 lg:order-2">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent animate-shimmer">
                  Marcellas
                </span>
              </h1>

              <div className="h-12 flex items-center justify-center lg:justify-start">
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 min-w-max">
                  I'm a <span className="font-semibold text-rose-600 dark:text-rose-400">{displayText}</span>
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              I craft exceptional digital experiences with a focus on performance, aesthetics, and user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-rose-600 to-rose-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-rose-500/50 transition-all hover:-translate-y-1 relative overflow-hidden group"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-700 to-rose-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/marcellas-dan-27627831a"
                className="px-8 py-3 border-2 border-rose-600 text-rose-600 dark:border-rose-400 dark:text-rose-400 rounded-full font-semibold hover:bg-rose-50 dark:hover:bg-slate-800/50 transition-colors relative group"
              >
                <span className="relative z-10">Download CV</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center lg:text-left group cursor-pointer">
                <div className="text-4xl font-bold text-rose-600 dark:text-rose-400 group-hover:scale-125 transition-transform">
                  14+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  Projects
                </div>
              </div>
              <div className="text-center lg:text-left group cursor-pointer">
                <div className="text-4xl font-bold text-rose-600 dark:text-rose-400 group-hover:scale-125 transition-transform">
                  8+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  Clients
                </div>
              </div>
              <div className="text-center lg:text-left group cursor-pointer">
                <div className="text-4xl font-bold text-rose-600 dark:text-rose-400 group-hover:scale-125 transition-transform">
                  1+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  Years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-rose-600 dark:text-rose-400" size={32} />
      </div>
    </section>
  )
}
