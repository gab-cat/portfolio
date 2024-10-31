'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ExternalLink } from 'lucide-react'
import Navbar from "@/components/projects/navbar";
import ProjFooter from "@/components/projects/footer";
import {useAutoAnimate} from "@formkit/auto-animate/react";



// Sample project data
const projects = [
    {
        id: 1,
        title: "E-commerce Platform Redesign",
        description: "A complete overhaul of an outdated e-commerce website, focusing on user experience and performance optimization.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
        link: "/project/e-commerce-redesign"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A responsive web application for managing tasks and projects with real-time updates and team collaboration features.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Vue.js", "Firebase", "Vuex", "PWA"],
        link: "/project/task-management-app"
    },
    {
        id: 3,
        title: "Financial Dashboard",
        description: "An interactive dashboard for visualizing complex financial data with customizable charts and real-time market data integration.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
        link: "/project/financial-dashboard"
    },
    {
        id: 4,
        title: "Social Media Analytics Tool",
        description: "A comprehensive analytics platform for tracking and analyzing social media performance across multiple platforms.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Python", "Django", "React", "PostgreSQL", "Docker"],
        link: "/project/social-media-analytics"
    }
]

export default function ProjectsPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [parent] = useAutoAnimate();

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    return (
        <>
            <Navbar />
            <main className="max-w-7xl mt-32 mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
                </motion.div>

                <div className="mb-8">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <ul ref={parent} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.length === 0 ? (
                        <div className="flex justify-center items-center h-64">
                            <p className="text-lg font-semibold text-muted-foreground">No projects found with that keyword.</p>
                        </div>
                    ) : (
                        <>
                            {filteredProjects.map((project, index) => (
                                <motion.li
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="h-full flex flex-col">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={600}
                                            height={400}
                                            className="object-cover h-48 w-full rounded-t-lg"
                                        />
                                        <CardContent className="flex-grow">
                                            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                                            <p className="text-muted-foreground mb-4">{project.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                    <Badge key={tag} variant="secondary">{tag}</Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button asChild className="w-full">
                                                <Link href={project.link}>
                                                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.li>
                            ))}
                        </>
                    )}

                </ul>
            </main>
            <ProjFooter />
        </>
    )
}