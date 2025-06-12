"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, MapPin, Calendar, Code, Zap, Star, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Add smooth scroll behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }

  const skills = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  ]

  const projects = [
    {
      title: "ATAKS E-Commerce",
      description:
        "Full-stack e-commerce application using Native PHP, featuring user login session, product management, and basic shopping functionalities.",
      tech: ["PHP (Native)", "MySQL", "Bootstrap", "JavaScript"],
      github: "https://github.com/timotiuskw/ATAKS-E-Commerce",
      image: "/images/ATAKS_website.png",
      featured: true,
    },
    {
      title: "E-Commerce with CodeIgniter 4",
      description:
        "Built a simple e-commerce platform with admin and buyer roles. Buyers can shop, checkout, and calculate shipping via RajaOngkir API.",
      tech: ["PHP", "CodeIgniter 4", "MySQL", "Bootstrap", "JavaScript"],
      github: "https://github.com/timotiuskw/E-Commerce-CodeIgniter",
      image: "/images/CI4_website.png",
      featured: false,
    },
    {
      title: "VSA Face Recognition",
      description:
        "Implemented real-time face recognition using YuNet (face detection) and SFace (embedding & recognition achieving >90% identification accuracy in controlled environments.",
      tech: ["Python", "OpenCV", "PyTorch", "YuNet", "SFace", "FER", "NumPy", "Matplotlib"],
      github: "#",
      image: "/images/FaceRecog.jpg",
      featured: false,
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-20 text-center">
        <div className="relative z-10">
          <div className="mb-8 relative">
            <Avatar className="w-40 h-40 mx-auto mb-6 ring-4 ring-purple-500/50 ring-offset-4 ring-offset-slate-900">
              <AvatarImage src="/images/Tius.jpg" alt="Profile" />
              <AvatarFallback className="text-3xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white">
                T
              </AvatarFallback>
            </Avatar>
            {/* Removed the green dot */}
          </div>

          <div className="space-y-4 mb-8">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-fade-in">
              Timotius Kelvin Winarto
            </h1>
            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-purple-300">
              <Code className="w-6 h-6" />
              <span>Full Stack Developer</span>
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
          </div>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate developer who loves creating{" "}
            <span className="text-purple-300 font-semibold">modern web applications</span>. I love turning ideas into
            reality through clean, efficient code and{" "}
            <span className="text-cyan-300 font-semibold">innovative solutions</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-300 hover:bg-purple-500/10 hover:text-purple-200 transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              <Star className="mr-2 h-4 w-4" />
              View Projects
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-slate-800/50 hover:bg-purple-600/20 hover:scale-110 transition-all duration-300"
              asChild
            >
              <Link href="https://github.com/timotiuskw" target="_blank">
                <Github className="h-6 w-6 text-slate-300" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-slate-800/50 hover:bg-cyan-600/20 hover:scale-110 transition-all duration-300"
              asChild
            >
              <Link href="https://www.linkedin.com/in/timotiuskw/" target="_blank">
                <Linkedin className="h-6 w-6 text-slate-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative container mx-auto px-4 py-20">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center px-16">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I&apos;m a passionate full-stack developer with a strong foundation in modern web technologies. I enjoy
                solving complex problems and creating{" "}
                <span className="text-purple-300 font-semibold">user-friendly applications</span> that make a
                difference.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Outside of coding, I enjoy diving into tech blogs, experimenting with side projects, and of course playing games.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span>Semarang, Indonesia</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Calendar className="h-5 w-5 text-cyan-400" />
                  <span>Available for freelance work</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Code className="h-5 w-5 text-purple-400" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-4 h-4 bg-purple-500 rounded-full ring-4 ring-purple-500/20 flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-semibold text-white">Frontend Developer</h4>
                        <p className="text-sm text-slate-400">Bengkel Koding • Oct 2024 - Present</p>
                        <p className="text-sm text-slate-300 mt-2">
                          Developed and re-designed Kerja Praktek module for STI (Sarjana Teknik Informatika) website using Next.js.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-cyan-500/20 flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-semibold text-white">Full Stack Developer</h4>
                        <p className="text-sm text-slate-400">Bengkel Koding • Aug 2024 - Oct 2024</p>
                        <p className="text-sm text-slate-300 mt-2">Assisted senior students in developing new features and fixing bugs for the Kerja Praktek module using Laravel Blade.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative container mx-auto px-4 py-20">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {skills.map((skill) => (
              <Card
                key={skill.name}
                className="group bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 relative">
                    <Image
                      src={skill.logo || "/placeholder.svg"}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                      unoptimized={skill.logo.startsWith("http")}
                    />
                  </div>
                  <h3 className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative container mx-auto px-4 py-20">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 p-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-16">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="w-full h-full object-contain transition-transform duration-500"
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={project.featured}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-purple-600/20" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-slate-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-slate-600 text-slate-300 hover:border-purple-500 hover:text-purple-300 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative container mx-auto px-4 py-20">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold p-2 text-center mb-16 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              I&apos;m always interested in new opportunities and exciting projects. Let&apos;s create something{" "}
              <span className="text-purple-300 font-semibold">amazing</span> together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="mailto:tius@example.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="https://wa.me/6285848947471" target="_blank">
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 transition-all duration-300"
                asChild
              >
                <Link href="https://www.linkedin.com/in/timotiuskw/" target="_blank">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative container mx-auto px-4 py-12 text-center border-t border-slate-800">
        <div className="relative z-10">
          <p className="text-slate-400">
            &copy; 2025 Timotius Kelvin Winarto. All rights reserved. Built with <span className="text-purple-400">Next.js</span> and{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
