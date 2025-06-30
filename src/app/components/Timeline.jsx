"use client"

import Image from "next/image"
import { useState } from "react"
import { Timeline } from "../components/ui/timeline"
import { LinkPreview } from "./ui/link-preview"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function TimelineDemo() {
  const [selectedProject, setSelectedProject] = useState(null)

  const skillCategories = {
    "Frontend & Frameworks": [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
    ],
    "Backend & Database": [
      { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
      {
        name: "Express",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    ],
    "Blockchain & Tools": [
      {
        name: "Solidity",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
      },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      {
        name: "HardHat",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hardhat/hardhat-original.svg",
      },
    ],
  }

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI",
      longDescription:
        "A comprehensive e-commerce platform built with Next.js and TypeScript. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard. The platform uses MongoDB for data storage and implements real-time inventory management.",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQEtHmqfBnU50A/feedshare-shrink_2048_1536/B4DZdpdweWGsAs-/0/1749821099265?e=1753920000&v=beta&t=Z7qtMza00_C5aRh8ChkPiZAhZ_tEy6hqRSEjPffhlL0",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://your-ecommerce.vercel.app",
      category: "Web Development",
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat app with AI integration",
      longDescription:
        "An intelligent chat application that integrates OpenAI's GPT models for enhanced conversations. Built with React and Socket.io for real-time messaging, featuring user authentication, chat rooms, message history, and AI-powered responses. The backend is powered by Node.js and Express.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "Socket.io", "OpenAI API", "MongoDB"],
      githubUrl: "https://github.com/yourusername/ai-chat",
      liveUrl: "https://your-chat-app.vercel.app",
      category: "AI/ML",
    },
    {
      id: 3,
      title: "DeFi Trading Platform",
      description: "Decentralized finance trading interface",
      longDescription:
        "A decentralized finance (DeFi) trading platform built on Ethereum blockchain. Features include token swapping, liquidity provision, yield farming, and portfolio tracking. Smart contracts are developed using Solidity and deployed using Hardhat. The frontend provides an intuitive interface for interacting with DeFi protocols.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Solidity", "React", "Web3.js", "Hardhat", "Ethereum"],
      githubUrl: "https://github.com/yourusername/defi-platform",
      liveUrl: "https://your-defi-platform.vercel.app",
      category: "Blockchain",
    },
    {
      id: 4,
      title: "IoT Dashboard",
      description: "Real-time IoT device monitoring system",
      longDescription:
        "A comprehensive IoT dashboard for monitoring and controlling connected devices. Built with Django backend and React frontend, featuring real-time data visualization, device management, alert systems, and historical data analysis. Supports multiple IoT protocols and provides RESTful APIs for device integration.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Django", "React", "PostgreSQL", "Redis", "MQTT"],
      githubUrl: "https://github.com/yourusername/iot-dashboard",
      liveUrl: "https://your-iot-dashboard.herokuapp.com",
      category: "IoT",
    },
  ]

  const data = [
    {
      title: "2022-2026",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-semibold mb-4">
              🎓 Academic Journey & Growth
            </h3>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6 leading-relaxed">
              Currently pursuing B.Tech in Computer Engineering at{" "}
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                Vivekanand Education Society's Institute of Technology (VESIT)
              </span>
              . This transformative journey has been marked by continuous learning, innovation, and a relentless pursuit
              of excellence in technology.
            </p>
          </div>

          <div>
            <h4 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-4">
              🚀 Key Achievements & Milestones
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
                  <span className="font-medium">Project Innovation:</span> Developed and launched multiple full-stack
                  applications, focusing on solving real-world problems through cutting-edge technology solutions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
                  <span className="font-medium">Knowledge Sharing:</span> Delivered comprehensive lectures on Django
                  framework to fellow students during Semester 4, fostering collaborative learning and technical
                  excellence.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
                  <span className="font-medium">Technical Versatility:</span> Mastered diverse technology domains
                  including AI/ML, Blockchain Development, Full-Stack Web Development, Mobile App Development, and IoT
                  solutions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
                  <span className="font-medium">Competitive Excellence:</span> Active participant in hackathons, coding
                  competitions, and tech challenges, consistently delivering innovative solutions under pressure.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
            <h4 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-3">
              📝 Technical Insights & Learning
            </h4>
            <LinkPreview url="https://rohitdebugbugs-portfolio.vercel.app/blogs">
              <span className="text-neutral-900 dark:text-neutral-100 font-medium hover:underline">
                Read My Technical Blogs →
              </span>
            </LinkPreview>
          </div>
        </div>
      ),
    },
    {
      title: "Skills",
      content: (
        <div>
          <div className="flex flex-wrap gap-3">
            {Object.entries(skillCategories).flatMap(([category, skills]) =>
              skills.map((skill, index) => (
                <div
                  key={`${category}-${index}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-neutral-700"
                >
                  <Image
                    src={skill.logo || "/placeholder.svg"}
                    alt={skill.name}
                    width={16}
                    height={16}
                    className="flex-shrink-0"
                  />
                  <span className="text-black text-sm font-medium">{skill.name}</span>
                </div>
              )),
            )}
          </div>
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
            Click on any project below to learn more about the technologies used and implementation details.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {projects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <div className="cursor-pointer group relative overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                      <p className="text-white font-medium text-sm md:text-base text-center px-2">{project.title}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900 border-neutral-800 [&::-webkit-scrollbar]:hidden scrollbar-hide">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-neutral-100 mb-2">{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={400}
                        className="rounded-lg object-cover w-full h-64 shadow-lg"
                      />
                      <Badge className="absolute top-4 right-4 bg-neutral-800 text-neutral-200 border-neutral-700">
                        {project.category}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-neutral-200 mb-3">Description</h3>
                      <p className="text-neutral-300 leading-relaxed">{project.longDescription}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-neutral-200 mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-neutral-800 text-neutral-200 border-neutral-700 hover:bg-neutral-700"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      {project.githubUrl && (
                        <Button
                          asChild
                          variant="outline"
                          className="bg-neutral-800 border-neutral-700 text-neutral-200 hover:bg-neutral-700"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button asChild className="bg-neutral-200 text-neutral-900 hover:bg-neutral-300">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  )
}
