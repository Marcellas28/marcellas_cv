"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Kyle Bradley",
    role: "CEO, HealthTech Solutions",
    content:
      "Marcellas is an exceptional developer who delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are impressive.",
    rating: 5,
  },
  {
    name: "Becky Ikoma",
    role: "Product Manager, Tech Innovations",
    content:
      "Working with Marcellas was a pleasure. He understood our requirements perfectly and implemented features that we hadn't even thought of. Highly recommended!",
    rating: 5,
  },
  {
    name: "Godwin Indeje",
    role: "Marketing Director, Global Retail",
    content:
      "Marcellas transformed our outdated website into a modern, responsive platform that has significantly increased our user engagement and conversion rates.",
    rating: 5,
  },
]

export default function Testimonials() {
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
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Client <span className="text-rose-600 dark:text-rose-400">Testimonials</span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
