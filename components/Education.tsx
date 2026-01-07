// app/education/page.tsx or components/Education.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, BookOpen, Award, Calendar, MapPin, ExternalLink, ChevronRight, Star } from "lucide-react"

const educationData = [
  {
    institution: "The Co-operative University of Kenya",
    location: "Nairobi-Karen",
    degree: "Diploma in Computer Science",
    period: "2023 – Present",
    expected: "Expected Graduation: December 2026",
    //gpa: "Current GPA: 3.8/4.0",
    
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems & SQL",
      "Web Development & Programming",
      "Computer Networks & Security",
      "Software Engineering",
      "Object-Oriented Programming",
      "Operating Systems",
      "Discrete Mathematics"
    ],
    description: "Focus on practical software development with hands-on projects in full-stack development, database management, and system design. Active participant in tech community.",
    link: "https://www.cuk.ac.ke/"
  },
  {
    institution: "St. Mary's Kibabii Boys High School",
    location: "Bungoma, Kenya",
    degree: "Kenya Certificate of Secondary Education (KCSE)",
    period: "2020 – 2023",
    grade: "Grade: B- (70 points)",
    achievements: [
      
      "Won in inter-class Science Fair",
      "Head of ICT Department Student Committee"
    ],
    coursework: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Studies",
      "Music",
      "Biology",
      "English",
      "Kiswahili"
    ],
    description: "Developed strong foundation in music, sciences and technology. Led computer club initiatives and participated in regional tech competitions.",
    //link: "https://kibabiiboys.sc.ke/"
  },
  {
    institution: "Chegulo Primary School",
    location: "Kakamega, Kenya",
    degree: "Kenya Certificate of Primary Education (KCPE)",
    period: "2017 – 2019",
    grade: "Score: 373/500 Marks",
    achievements: [
      "School Captain & Head Prefect",
      "Best in Mathematics & Science Awards",
      "Represented School in Science Congress"
    ],
    description: "Early demonstration of leadership and academic excellence. Developed interest in music and technology through school computer lab initiatives and music festivals.",
  }
]

const certifications = [
  {
    title: "DATACOM HCIA",
    issuer: "Huawei Technologies",
    date: "2025",
    credentialId: "Huawei Certified ICT Associate (HCIA)",
    skills: [ "TCP/IP Networking",
      "Routing & Switching",
      "Network Security",
      "IPv4/IPv6 Addressing",
      "VLAN Configuration",
      "OSPF Protocols",
      "Network Troubleshooting",
      "Huawei CLI Configuration"]
  },
  
]

export default function Education() {
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
    <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-200/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-blue-50/5 to-transparent dark:via-blue-900/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-rose-50 dark:from-blue-900/20 dark:to-rose-900/20 rounded-full border border-blue-200/50 dark:border-blue-500/20">
            <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Academic Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-600">Qualifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey combines formal education with continuous learning and professional certifications
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Education Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-rose-500 to-blue-500 dark:from-blue-400 dark:via-rose-400 dark:to-blue-400" />
              
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`relative mb-12 ml-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-11 top-6 w-6 h-6 rounded-full border-4 border-white dark:border-slate-900 bg-gradient-to-r from-blue-500 to-rose-500 shadow-lg" />
                  
                  {/* Education Card */}
                  <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-slate-700/50 group">
                    {/* Institution Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {edu.institution}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0 px-3 py-1 bg-gradient-to-r from-blue-50 to-rose-50 dark:from-blue-900/20 dark:to-rose-900/20 rounded-full">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{edu.period}</span>
                      </div>
                    </div>

                    {/* Degree & Details */}
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{edu.degree}</h4>
                      {edu.grade && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-slate-700 rounded-full mb-3">
                          <Award className="w-4 h-4 text-amber-500" />
                          <span className="text-sm font-medium">{edu.grade}</span>
                        </div>
                      )}
                      {edu.expected && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{edu.expected}</p>
                      )}
                      {edu.gpa && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 dark:bg-green-900/20 rounded-full mb-3">
                          <Star className="w-4 h-4 text-green-500" />
                          <span className="text-sm font-medium text-green-600 dark:text-green-400">{edu.gpa}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.description}</p>

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Coursework */}
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Relevant Coursework
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework?.map((course, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Institution Link */}
                    {edu.link && (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                      >
                        Visit Institution Website
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Certifications & Skills */}
          <div className="lg:col-span-1">
            {/* Certifications */}
            <div className={`sticky top-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
              <div className="bg-gradient-to-br from-blue-50/50 to-rose-50/50 dark:from-blue-900/20 dark:to-rose-900/20 rounded-2xl p-6 border border-blue-200/30 dark:border-blue-500/10 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-rose-500" />
                  Certifications
                </h3>
                
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-white/70 dark:bg-slate-800/70 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{cert.title}</h4>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</span>
                        <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded-full">
                          {cert.date}
                        </span>
                      </div>
                      {cert.credentialId && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{cert.credentialId}</p>
                      )}
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-rose-100 dark:from-blue-900/30 dark:to-rose-900/30 text-blue-700 dark:text-blue-300 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Philosophy */}
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Learning Philosophy</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Theory + Practice</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Balancing academic knowledge with hands-on projects and real-world applications.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-rose-100 dark:bg-rose-900/30 rounded-lg">
                      <BookOpen className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Continuous Growth</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Committed to lifelong learning through courses, certifications, and self-study.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                      <Star className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Academic Excellence</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Maintaining high standards while contributing to academic community through leadership.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/*<div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          {[
            { label: "Current GPA", value: "3.8", suffix: "/4.0", color: "text-green-600" },
            { label: "Academic Awards", value: "5+", suffix: "", color: "text-amber-500" },
            { label: "Years in Tech", value: "3+", suffix: "", color: "text-blue-600" },
            { label: "Certifications", value: "3", suffix: "+", color: "text-rose-500" },
          ].map((stat, index) => (
            <div key={index} className="bg-white dark:bg-slate-800/50 rounded-xl p-6 text-center border border-gray-200/50 dark:border-slate-700/50">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}<span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>*/}
      </div>
    </section>
  )
}