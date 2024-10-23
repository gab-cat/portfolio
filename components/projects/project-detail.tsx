'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink, Calendar, Users, Database, CreditCard, Workflow, GitBranch, ChevronDown } from 'lucide-react'
import Navbar from './navbar'
import Footer from './footer'

export default function ProjectDetail() {
    const [isExpanded, setIsExpanded] = useState(false)

    const project = {
        title: "E-commerce Platform Redesign",
        slug: "",
        shortDescription: "A complete overhaul of an outdated e-commerce website, focusing on user experience and performance optimization.",
        fullDescription: "This project involved a comprehensive redesign of an existing e-commerce platform. The main goals were to enhance user experience, improve performance, and increase conversion rates. We implemented a modern, responsive design using React and Next.js, integrated advanced search and filtering capabilities, and optimized the checkout process with Stripe integration. The result was a significant improvement in site speed, mobile responsiveness, and overall user satisfaction.",
        image: "/placeholder.svg?height=400&width=800",
        tags: ["React", "Next.js", "Tailwind CSS", "Stripe", "Vercel"],
        liveUrl: "https://example-ecommerce.com",
        githubUrl: "https://github.com/yourusername/ecommerce-redesign",
        startDate: "2023-01-15",
        endDate: "2023-04-30",
        client: "Fashion Retailer Inc.",
        role: "Lead Frontend Developer",
        teamSize: 5,
    }

    const technologies = [
        { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS"], icon: Workflow },
        { name: "Backend", items: ["Node.js", "Express"], icon: Workflow },
        { name: "Database", items: ["MongoDB"], icon: Database },
        { name: "Payment Processing", items: ["Stripe"], icon: CreditCard },
        { name: "Deployment", items: ["Vercel"], icon: ExternalLink },
        { name: "Version Control", items: ["Git", "GitHub"], icon: GitBranch },
    ]

    return (
        <>
            <main className="max-w-4xl pt-32 mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-extrabold text-center mb-4">{project.title}</h1>
                    <p className="text-xl text-center text-muted-foreground mb-8">{project.shortDescription}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-12"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap gap-2 mb-8 justify-center"
                >
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                >
                    <Card>
                        <CardContent className="pt-6">
                            <h2 className="text-xl font-semibold mb-4">Project Details</h2>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                                    <span>
                    {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                  </span>
                                </li>
                                <li className="flex items-center">
                                    <Users className="mr-2 h-5 w-5 text-primary" />
                                    <span>Team Size: {project.teamSize}</span>
                                </li>
                                <li><strong>Client:</strong> {project.client}</li>
                                <li><strong>Role:</strong> {project.role}</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <h2 className="text-xl font-semibold mb-4">Project Links</h2>
                            <div className="space-y-4">
                                <Button className="w-full" asChild>
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        View Live Project
                                    </a>
                                </Button>
                                <Button className="w-full" variant="outline" asChild>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4" />
                                        View on GitHub
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mb-12"
                >
                    <Card>
                        <CardContent className="pt-6">
                            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                            <p className="text-muted-foreground">
                                {isExpanded ? project.fullDescription : `${project.fullDescription.slice(0, 200)}...`}
                            </p>
                            <Button
                                variant="ghost"
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="mt-4"
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                                <motion.div
                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </motion.div>
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <Tabs defaultValue="overview" className="mb-12">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="challenges">Challenges</TabsTrigger>
                            <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
                        </TabsList>
                        <AnimatePresence mode="wait">
                            <TabsContent value="overview" className="mt-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-xl font-semibold mb-4">Project Goals</h3>
                                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                        <li>Modernize the user interface for better user experience</li>
                                        <li>Improve website performance and loading times</li>
                                        <li>Implement responsive design for mobile users</li>
                                        <li>Integrate advanced search and filtering capabilities</li>
                                        <li>Streamline the checkout process with Stripe</li>
                                    </ul>
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="challenges" className="mt-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-xl font-semibold mb-4">Key Challenges</h3>
                                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                        <li>Migrating large amounts of legacy data</li>
                                        <li>Optimizing performance for a catalog of over 100,000 products</li>
                                        <li>Implementing a secure payment system across multiple regions</li>
                                        <li>Designing an intuitive UI for a diverse customer base</li>
                                        <li>Integrating with multiple third-party services and APIs</li>
                                    </ul>
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="outcomes" className="mt-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-xl font-semibold mb-4">Project Outcomes</h3>
                                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                        <li>50% increase in mobile conversion rates</li>
                                        <li>30% reduction in page load times</li>
                                        <li>25% increase in average order value</li>
                                        <li>40% decrease in cart abandonment rate</li>
                                        <li>Significant improvement in user satisfaction scores</li>
                                    </ul>
                                </motion.div>
                            </TabsContent>
                        </AnimatePresence>
                    </Tabs>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Technologies Used</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                            >
                                <Card>
                                    <CardContent className="flex flex-col items-center p-6">
                                        <tech.icon className="w-12 h-12 text-primary mb-4" />
                                        <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                                        <ul className="text-sm text-muted-foreground text-center">
                                            {tech.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </main>
        </>
    )
}