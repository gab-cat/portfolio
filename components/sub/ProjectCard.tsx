import Image from "next/image";
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Props {
  src: string;
  title: string;
  description: string;
}

interface project {
    title: string
    description: string
    technologies: string[]
    liveUrl: string
    githubUrl: string
    imageUrl: string
}

const ProjectCard = (project: project) => {
    return (
        <Card  className="flex bg-transparent z-10 flex-col  backdrop-blur-sm">
            <CardHeader>
                <Image width={400} height={400} src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
            </CardHeader>
            <CardContent className="flex-grow">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech: string, techIndex: any) => (
                        <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                    </a>
                </Button>
                <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                    </a>
                </Button>
            </CardFooter>
        </Card>

    )
};

export default ProjectCard;