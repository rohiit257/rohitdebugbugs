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
    title: "MetaBazaar",
    description: "NFT marketplace with wallet authentication and IPFS integration",
    longDescription:
      "MetaBazaar is a feature-rich NFT marketplace built with seamless user experience in mind. It includes NFT minting with metadata storage on IPFS, wallet authentication using MetaMask, user profiles, and advanced search/filter functionality for discovering NFTs. The platform empowers creators and collectors with robust blockchain-based interactions.",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEtHmqfBnU50A/feedshare-shrink_2048_1536/B4DZdpdweWGsAs-/0/1749821099265?e=1753920000&v=beta&t=Z7qtMza00_C5aRh8ChkPiZAhZ_tEy6hqRSEjPffhlL0",
    technologies: ["Next.js", "TypeScript", "IPFS", "MetaMask", "Tailwind CSS"],
    githubUrl: "https://github.com/rohiit257/MetaBazaar",
    liveUrl: "https://metabazaar.vercel.app/",
    category: "Web3",
  },
  {
    id: 2,
    title: "GetMeAJob",
    description: "Job portal web app built with the MERN stack",
    longDescription:
      "GetMeAJob is a full-stack job portal application designed to connect job seekers and employers. It includes secure user authentication, job posting, job applications, and real-time messaging. Built using MongoDB, Express, React, and Node.js, the app also features JWT-based authentication, REST APIs, and a seamless communication interface between users.",
    image: "/getmejob.png",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    githubUrl: "https://github.com/yourusername/getmeajob",
    liveUrl: "https://getmeajob.vercel.app",
    category: "Web Development",
  },
  {
    id: 3,
    title: "AlgoVision",
    description: "Interactive algorithm visualizer with animations",
    longDescription:
      "AlgoVision is a visual learning platform for mastering fundamental algorithms through animations and interactive controls. It supports sorting algorithms like Insertion Sort, Selection Sort, Merge Sort, and Quick Sort, as well as Binary Search and Kadane's Algorithm. Built with Next.js and styled using Tailwind CSS, the project leverages Framer Motion for animations and shadcn/ui for modern UI components.",
    image: "/alogvisual.png",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "shadcn/ui", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/algovision",
    liveUrl: "https://algovision.vercel.app",
    category: "Education",
  },
  {
    id: 4,
    title: "AirAGBot",
    description: "AI-powered chatbot for Computer Science subjects",
    longDescription:
      "AirAGBot is an intelligent chatbot trained on core Computer Science subjects like DBMS, CN, OS, Blockchain, and OOP. It uses pre-embedded PDFs and ChromaDB for document retrieval, LangChain for contextual prompting, and Gemini AI for natural language responses. The bot is accessible via both a command-line interface (CLI) and a web interface built with Streamlit.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "LangChain", "Gemini AI", "ChromaDB", "Streamlit"],
    githubUrl: "https://github.com/yourusername/airagbot",
    liveUrl: "https://airagbot.streamlit.app",
    category: "AI/ML",
  },
];



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
                Vivekanand Education Society&apos;s Institute of Technology (VESIT)
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

          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-700">
            <h4 className="text-neutral-800 dark:text-neutral-100 text-base md:text-lg font-bold mb-4 flex items-center gap-2">
              <span role="img" aria-label="notebook">📝</span>
              Technical Insights & Learning
            </h4>
            <div className="flex flex-col md:flex-row md:gap-6 gap-3">
              <LinkPreview url="https://rohitdebugbugs-portfolio.vercel.app/blogs">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-900/80 to-purple-900/80 border border-indigo-700 hover:scale-105 transition-transform shadow-md">
                  <ExternalLink className="w-4 h-4 text-indigo-300" />
                  <span className="text-indigo-100 font-medium hover:underline">
                    Read My Technical Blogs
                  </span>
                </div>
              </LinkPreview>
              <LinkPreview url="https://rohitdebugbugs-portfolio.vercel.app/research-papers">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-900/80 to-emerald-900/80 border border-green-700 hover:scale-105 transition-transform shadow-md">
                  <ExternalLink className="w-4 h-4 text-green-300" />
                  <span className="text-green-100 font-medium hover:underline">
                    Research Papers
                  </span>
                </div>
              </LinkPreview>
              <LinkPreview url="https://rohitdebugbugs-portfolio.vercel.app/certificates">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-900/80 to-orange-900/80 border border-yellow-700 hover:scale-105 transition-transform shadow-md">
                  <ExternalLink className="w-4 h-4 text-yellow-300" />
                  <span className="text-yellow-100 font-medium hover:underline">
                    Certificates
                  </span>
                </div>
              </LinkPreview>
            </div>
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
