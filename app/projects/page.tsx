import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const technicalProjects = [
    {
        title: "Court Vision (April 28th, 2025)",
        description:
            "A real-time sports analytics tool that identifies profitable bets and market inefficiencies using custom statistical models on live odds data. Built with Python and Streamlit, featuring algorithms for win probability and parlay outcome simulation.",
        tags: ["Python", "Streamlit", "The Odds API", "Pandas"],
        image: "/projects/court-vision.jpeg",
        github: "https://github.com/JohnyEskandar/court-vision",
    },
    {
        title: "Blendify (April 23rd, 2025)",
        description:
            "A full-stack Spotify playlist generator that recommends tracks based on a seed song's genre and audio profile. Features OAuth login, real-time search, personalized recommendations, and direct playlist creation in users’ Spotify accounts.",
        tags: ["Next.js", "TypeScript", "Spotify API", "TailwindCSS"],
        image: "/projects/blendify.jpeg",
        github: "https://github.com/JohnyEskandar/Blendify",
    },
    {
        title: "Unveil AI (April 13th, 2025)",
        description:
            "Built at Google DevFest WashU 2025, UnveilAI is a full-stack platform that helps developers understand unfamiliar codebases using Google Gemini and Bland AI. Finalist among 42 teams, the app lets users upload GitHub repos, receive line-by-line explanations, ask questions about specific files, and even get a phone call from an AI 'senior engineer' that walks them through their code.",
        tags: ["Next.js", "FastAPI", "Google Gemini", "Bland AI", "TypeScript"],
        image: "/projects/unveil-ai.jpeg",
        github: "https://github.com/UnveilAI",
    },
    // {
    //     title: "multi-room chat server using Node.JS and Socket.IO (March 31st, 2025)",
    //     description:
    //         "Cross-platform mobile app for expense tracking with OCR receipt scanning, budget analytics, and cloud synchronization. Built with React Native and Firebase.",
    //     tags: ["React Native", "Firebase", "OCR", "Chart.js"],
    //     image: "/placeholder.svg?height=300&width=400",
    //     github: "https://github.com",
    //     live: "https://apps.apple.com",
    // },
    // {
    //     title: "JavaScript Calendar (March 19th, 2025)",
    //     description:
    //         "Cross-platform mobile app for expense tracking with OCR receipt scanning, budget analytics, and cloud synchronization. Built with React Native and Firebase.",
    //     tags: ["React Native", "Firebase", "OCR", "Chart.js"],
    //     image: "/placeholder.svg?height=300&width=400",
    //     github: "https://github.com",
    //     live: "https://apps.apple.com",
    // },
    // {
    //     title: "JavaScript Calculator (March 5th, 2025)",
    //     description:
    //         "Cross-platform mobile app for expense tracking with OCR receipt scanning, budget analytics, and cloud synchronization. Built with React Native and Firebase.",
    //     tags: ["React Native", "Firebase", "OCR", "Chart.js"],
    //     image: "/placeholder.svg?height=300&width=400",
    //     github: "https://github.com",
    //     live: "https://apps.apple.com",
    // },
    // {
    //     title: "Javascript Weather Widget (March 5th, 2025)",
    //     description:
    //         "Cross-platform mobile app for expense tracking with OCR receipt scanning, budget analytics, and cloud synchronization. Built with React Native and Firebase.",
    //     tags: ["React Native", "Firebase", "OCR", "Chart.js"],
    //     image: "/placeholder.svg?height=300&width=400",
    //     github: "https://github.com",
    //     live: "https://apps.apple.com",
    // },
    // {
    //     title: "Python Baseball Stats Counter (February 24th, 2025)",
    //     description:
    //         "Cross-platform mobile app for expense tracking with OCR receipt scanning, budget analytics, and cloud synchronization. Built with React Native and Firebase.",
    //     tags: ["React Native", "Firebase", "OCR", "Chart.js"],
    //     image: "/placeholder.svg?height=300&width=400",
    //     github: "https://github.com",
    //     live: "https://apps.apple.com",
    // },
    // {
    //     title: "News Website (February 17th, 2025)",
    //     description:
    //         "Cross-platform mobile app for expense tracking with OCR receipt scanning, budget analytics, and cloud synchronization. Built with React Native and Firebase.",
    //     tags: ["React Native", "Firebase", "OCR", "Chart.js"],
    //     image: "/placeholder.svg?height=300&width=400",
    //     github: "https://github.com",
    //     live: "https://apps.apple.com",
    // },
    // {
    //     title: "File Sharing Site (February 3th, 2025)",
    //     description:
    //         "Cross-platform mobile app for expense tracking with OCR receipt scanning, budget analytics, and cloud synchronization. Built with React Native and Firebase.",
    //     tags: ["React Native", "Firebase", "OCR", "Chart.js"],
    //     image: "/placeholder.svg?height=300&width=400",
    //     github: "https://github.com",
    //     live: "https://apps.apple.com",
    // },
    // {
    //     title: "Php Calculator (January 27th, 2025)",
    //     description:
    //         "Cross-platform mobile app for expense tracking with OCR receipt scanning, budget analytics, and cloud synchronization. Built with React Native and Firebase.",
    //     tags: ["React Native", "Firebase", "OCR", "Chart.js"],
    //     image: "/placeholder.svg?height=300&width=400",
    //     github: "https://github.com",
    //     live: "https://apps.apple.com",
    // },
    // {
    //     title: "C++ File System Simulation (Fall 2024)",
    //     description:
    //         "Cross-platform mobile app for expense tracking with OCR receipt scanning, budget analytics, and cloud synchronization. Built with React Native and Firebase.",
    //     tags: ["React Native", "Firebase", "OCR", "Chart.js"],
    //     image: "/placeholder.svg?height=300&width=400",
    //     github: "https://github.com",
    //     live: "https://apps.apple.com",
    // },
    // {
    //     title: "Ginemenasaurus (Summer 2024)",
    //     description:
    //         "Cross-platform mobile app for expense tracking with OCR receipt scanning, budget analytics, and cloud synchronization. Built with React Native and Firebase.",
    //     tags: ["React Native", "Firebase", "OCR", "Chart.js"],
    //     image: "/placeholder.svg?height=300&width=400",
    //     github: "https://github.com",
    //     live: "https://apps.apple.com",
    // },
    // {
    //     title: "Todo List (Summer 2024)",
    //     description:
    //         "Cross-platform mobile app for expense tracking with OCR receipt scanning, budget analytics, and cloud synchronization. Built with React Native and Firebase.",
    //     tags: ["React Native", "Firebase", "OCR", "Chart.js"],
    //     image: "/placeholder.svg?height=300&width=400",
    //     github: "https://github.com",
    //     live: "https://apps.apple.com",
    // },
    // {
    //     title: "Housing Price Predictor (Spring 2024)",
    //     description:
    //         "Cross-platform mobile app for expense tracking with OCR receipt scanning, budget analytics, and cloud synchronization. Built with React Native and Firebase.",
    //     tags: ["React Native", "Firebase", "OCR", "Chart.js"],
    //     image: "/placeholder.svg?height=300&width=400",
    //     github: "https://github.com",
    //     live: "https://apps.apple.com",
    // },
    // {
    //     title: "Snake Game (Fall 2023)",
    //     description:
    //         "Cross-platform mobile app for expense tracking with OCR receipt scanning, budget analytics, and cloud synchronization. Built with React Native and Firebase.",
    //     tags: ["React Native", "Firebase", "OCR", "Chart.js"],
    //     image: "/placeholder.svg?height=300&width=400",
    //     github: "https://github.com",
    //     live: "https://apps.apple.com",
    // },
]

// const consultingProjects = [
    // {
    //     title: "Startup Technical Advisory",
    //     description:
    //         "Provided technical guidance for a fintech startup, helping establish development practices, technology stack decisions, and scalability planning for their MVP launch.",
    //     tags: ["Strategy", "Fintech"],
    //     image: "/placeholder.svg?height=300&width=400",
    //     slide: "/slides/startup-advisory.pdf",
    // },
    // {
    //     title: "Developer Experience Optimization",
    //     description:
    //         "Consulted with a mid-size company to improve their development workflow, implementing CI/CD pipelines, code quality tools, and developer onboarding processes.",
    //     tags: ["DevOps", "Process"],
    //     image: "/placeholder.svg?height=300&width=400",
    //     slide: "/slides/dev-exp.pdf",
    // },
// ]

type Project = {
    title: string
    description: string
    tags: string[]
    image: string
    github?: string
    live?: string
    slide?: string
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:border-indigo-400/50 transition-all duration-300 animate-fade-in">
            <div className="relative overflow-hidden">
                <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3 text-slate-50 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-3">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors">
                            <Github className="h-4 w-4 mr-1" /> Code
                        </a>
                    )}
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors">
                            <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                        </a>
                    )}
                    {project.slide && (
                        <a href={project.slide} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-400 hover:text-indigo-300 transition-colors">
                            <ExternalLink className="h-4 w-4 mr-1" /> Slide Deck
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-slide-up">
                    <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-slate-50 mb-6">Projects</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        A curated collection of technical and consulting work that reflects how I solve problems and ship value
                    </p>
                </div>

                {/* Technical Projects */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {technicalProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>

                {/* Consulting Projects */}
                {/* <div className="animate-fade-in">
                    <h2 className="text-3xl font-poppins font-semibold text-slate-50 mb-8">Consulting Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {consultingProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    )
}