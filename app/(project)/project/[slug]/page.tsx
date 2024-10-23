import ProjectDetail from "@/components/projects/project-detail"
import ProjFooter from "@/components/projects/footer";
import React from "react";
import Navbar from "@/components/projects/navbar";

export default function Page() {
    // const project = {
    //     title: "E-commerce Platform Redesign",
    //     shortDescription: "A complete overhaul of an outdated e-commerce website, focusing on user experience and performance optimization.",
    //     image: "/placeholder.svg?height=400&width=800",
    //     tags: ["React", "Next.js", "Tailwind CSS", "Stripe", "Vercel"],
    //     liveUrl: "",
    //     githubUrl: "https://github.com/yourusername/ecommerce-redesign",
    //     startDate: "2023-01-15",
    //     endDate: "2023-04-30",
    //     client: "Fashion Retailer Inc.",
    //     role: "Lead Frontend Developer",
    //     teamSize: 5,
    // }
    //
    // const technologies = [
    //     { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS"], icon: Workflow },
    //     { name: "Backend", items: ["Node.js", "Express"], icon: Workflow },
    //     { name: "Database", items: ["MongoDB"], icon: Database },
    //     { name: "Payment Processing", items: ["Stripe"], icon: CreditCard },
    //     { name: "Deployment", items: ["Vercel"], icon: ExternalLink },
    //     { name: "Version Control", items: ["Git", "GitHub"], icon: GitBranch },
    // ]

    return (
        <>
            <Navbar />
            <ProjectDetail />
            <ProjFooter />
        </>
    )
}