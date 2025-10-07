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
      {
        name: "C++",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      }
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
    title: "Versus",
    description: "Real-Time and Scalable Debate & Voting Platform",
    longDescription:
      "Versus is a scalable debate and voting platform with real-time synchronization, threaded comments, and instant updates using WebSockets. It leverages Redis and BullMQ to handle high-volume tasks and API rate limiting. The platform features responsive UI, real-time analytics, and a highly engaging user experience.",
    image: "/versus.png",
    technologies: ["Next.js", "Express.js", "Socket.io", "Redis", "BullMQ"],
    githubUrl: "https://github.com/yourusername/versus",
    liveUrl: "https://versus.vercel.app",
    category: "Web Development",
  },
  {
    id: 2,
    title: "MetaBazaar",
    description: "Decentralized NFT Marketplace with IPFS & Wallet Authentication",
    longDescription:
      "MetaBazaar is a feature-rich decentralized NFT marketplace supporting minting, trading, and royalties via Ethereum smart contracts. It integrates wallet authentication with MetaMask, decentralized storage on IPFS, and an AI-powered NFT generator. The platform also features advanced search, filtering, and an admin dashboard with analytics.",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEtHmqfBnU50A/feedshare-shrink_2048_1536/B4DZdpdweWGsAs-/0/1749821099265?e=1753920000&v=beta&t=Z7qtMza00_C5aRh8ChkPiZAhZ_tEy6hqRSEjPffhlL0",
    technologies: ["Next.js", "Solidity", "Hardhat", "IPFS", "ShadCN UI", "MetaMask"],
    githubUrl: "https://github.com/rohiit257/MetaBazaar",
    liveUrl: "https://metabazaar.vercel.app/",
    category: "Web3",
  },
  {
    id: 7,
    title: "LandLedger",
    description: "🏡 Blockchain & AI-powered Land Registry and Record Management System",
    longDescription:
      "LandLedger is a decentralized land record management system that leverages Blockchain, AI, and IPFS to securely store and verify property ownership records. It ensures transparency, immutability, and fraud detection in property transactions.\n\nUsers can:\n✅ Register land with location & document verification.\n✅ Transfer ownership of properties.\n✅ Detect fraudulent transactions using AI.\n✅ Perform KYC verification for secure operations.\n✅ View transaction history for each property.\n✅ Admin dashboard for property verification and fraud analysis.",
    image: "/landledger.png",
    technologies: ["Ethereum", "Next.js", "MongoDB", "IPFS (Pinata)", "Leaflet.js", "Gemini AI"],
    githubUrl: "https://github.com/yourusername/landledger",
    liveUrl: "https://landledger.vercel.app",
    category: "Web3 + AI",
  },
  {
    id: 8,
    title: "HTTP Server in C",
    description: "Lightweight HTTP Server implemented from scratch in C",
    longDescription:
      "This project is a custom-built HTTP server written in C, demonstrating low-level networking concepts using sockets and multithreading. It supports handling multiple client requests, serving static files, basic routing, and connection management. The server is optimized for performance and provides hands-on understanding of how web servers like Nginx and Apache work under the hood.",
    image: "/httpserver.png",
    technologies: ["C", "Sockets", "POSIX Threads", "Networking"],
    githubUrl: "https://github.com/yourusername/http-server-c",
    liveUrl: "",
    category: "Systems Programming",
  },
  {
    id: 3,
    title: "GetMeAJob",
    description: "Full-Stack Job Portal Web App",
    longDescription:
      "GetMeAJob is a full-stack job portal application built with the MERN stack. It provides role-based authentication with JWT and SHA256 password hashing, job posting, job applications, and recruiter-candidate chat. The app also includes scalable REST APIs and responsive UI design across devices.",
    image: "/getmeajob.png",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    githubUrl: "https://github.com/yourusername/getmeajob",
    liveUrl: "https://getmeajob.vercel.app",
    category: "Web Development",
  },
  {
    id: 4,
    title: "YOLO Project",
    description: "Scalable Forum Discussion Application",
    longDescription:
      "YOLO Project is a scalable discussion forum where users can create and join chat rooms for real-time conversations. Built with WebSockets for live messaging and notifications, the platform is deployed with Docker and AWS EC2 for scalability and fault tolerance. It focuses on performance, high availability, and seamless user connectivity.",
    image: "/yolo.png",
    technologies: ["Next.js", "MongoDB", "Docker", "WebSockets", "Express.js", "AWS EC2"],
    githubUrl: "https://github.com/yourusername/yolo-project",
    liveUrl: "https://yolo.vercel.app",
    category: "Web Development",
  },
  {
    id: 5,
    title: "AlgoVision",
    description: "Interactive Algorithm Visualizer with Animations",
    longDescription:
      "AlgoVision is a visual learning platform for mastering fundamental algorithms. It includes visualizations for sorting algorithms, binary search, and Kadane’s Algorithm. Built with Next.js, styled using Tailwind CSS, and animated with Framer Motion, it enhances learning with interactive controls and modern UI components.",
    image: "/algovision.png",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "shadcn/ui", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/algovision",
    liveUrl: "https://algovision.vercel.app",
    category: "Education",
  },
  {
    id: 6,
    title: "AirAGBot",
    description: "AI-powered Chatbot for Computer Science Subjects",
    longDescription:
      "AirAGBot is an AI-powered chatbot trained on Computer Science subjects like DBMS, CN, OS, Blockchain, and OOP. It uses ChromaDB for document retrieval, LangChain for contextual prompting, and Gemini AI for natural language responses. Available via CLI and a Streamlit-powered web interface.",
    image: "/airagbot.png",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <div className="cursor-pointer group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:border-indigo-700 flex flex-col h-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="rounded-t-2xl object-cover h-40 md:h-48 w-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="flex-1 flex flex-col justify-between p-4">
                      <div>
                        <h3 className="text-lg font-bold text-neutral-100 mb-2">{project.title}</h3>
                        <p className="text-neutral-400 text-sm mb-3 line-clamp-3">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <Badge
                            key={idx}
                            className="bg-neutral-800 text-neutral-200 border border-neutral-700 px-2 py-1 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 mt-auto">
                        <span className="text-xs text-indigo-400 group-hover:underline">Learn more</span>
                        <ExternalLink className="w-4 h-4 text-indigo-400" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-indigo-700 text-white border-none shadow-md">
                      {project.category}
                    </Badge>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-neutral-800 [&::-webkit-scrollbar]:hidden scrollbar-hide">
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
