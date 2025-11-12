"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, Linkedin, Github, GithubIcon } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-slate-900 dark:to-slate-800 text-white relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Get In <span className="text-rose-400">Touch</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Have a project in mind? Let's collaborate and create something amazing together.
            </p>

            <div className="space-y-6">
              <a href="mailto:danwits28@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center group-hover:bg-rose-500 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold text-white group-hover:text-rose-400 transition-colors">
                    danwits28@gmail.com
                  </p>
                </div>
              </a>

              <a href="tel:+254712656502" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center group-hover:bg-rose-500 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="font-semibold text-white group-hover:text-rose-400 transition-colors">
                    +254 712 656 502
                  </p>
                </div>
              </a>

              <div className="flex gap-6 pt-8">
                <a
                  href="https://www.linkedin.com/in/marcellas-dan-27627831a"
                  className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors hover:scale-110 transform"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Marcellas28"
                  className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors hover:scale-110 transform"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2025 Marcellas Indeje. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
