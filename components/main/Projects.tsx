import React from "react";
import ProjectCard from "../sub/ProjectCard";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

interface IProject {
  title: string
  description: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  imageUrl: string
}

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    imageUrl: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Weather App",
    description: "A responsive weather application providing real-time forecasts and interactive maps.",
    technologies: ["Vue.js", "OpenWeatherMap API", "Mapbox"],
    liveUrl: "https://example-weather-app.com",
    githubUrl: "https://github.com/yourusername/weather-app",
    imageUrl: "/placeholder.svg?height=200&width=400"
  },
  {
    title: "Task Management Tool",
    description: "A collaborative task management application with real-time updates and team analytics.",
    technologies: ["Angular", "Firebase", "Chart.js"],
    liveUrl: "https://example-task-manager.com",
    githubUrl: "https://github.com/yourusername/task-manager",
    imageUrl: "/placeholder.svg?height=200&width=400"
  }
]

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="flex flex-col w-full h-full gap-10 px-10 md:flex-row">
        {projects.map((project: IProject, index) => (
            <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                imageUrl={project.imageUrl}
        />))}
      </div>
      <Button variant="outline" className="z-20 my-10 text-lg px-10 py-6" >
        See All Projects <ArrowRight className="h-20"/>
      </Button>
    </div>
  );
};

export default Projects;