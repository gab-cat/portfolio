'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, DollarSign, Calendar, Zap, LayoutGrid } from 'lucide-react'
import Navbar from "@/components/projects/navbar";
import ProjFooter from "@/components/projects/footer";
import {formSchema} from "@/schema/quote";
import {toast} from "sonner";
import { Toaster } from "@/components/ui/sonner"
import {sendQuoteEmail} from "@/actions/send-email";


const projectTypes = [
    { id: 'ecommerce', label: 'E-commerce App' },
    { id: 'blog', label: 'Blog Site' },
    { id: 'crm', label: 'CRM System' },
    { id: 'webapp', label: 'Web Application' },
    { id: 'portfolio', label: 'Portfolio Site' },
    { id: 'game2d', label: '2D Game' },
    { id: 'game3d', label: '3D Game' },
    { id: 'graphicdesign', label: 'Graphic Design' },
    { id: 'custom', label: 'Custom Project' },
]

const featuresByType = {
    ecommerce: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'User Reviews', 'Inventory Management'],
    blog: ['Content Management', 'Comments System', 'Search Functionality', 'Categories/Tags', 'RSS Feed'],
    crm: ['Contact Management', 'Task Tracking', 'Reporting Dashboard', 'Email Integration', 'Calendar Sync'],
    webapp: ['User Authentication', 'Data Visualization', 'API Integration', 'Real-time Updates', 'File Upload/Download'],
    portfolio: ['Project Showcase', 'About Me Section', 'Contact Form', 'Skills Display', 'Testimonials'],
    game2d: ['Character Design', 'Level Design', 'Game Mechanics', 'Score System', 'Sound Effects'],
    game3d: ['3D Modeling', 'Texturing', 'Animation', 'Physics Engine', 'Multiplayer Support'],
    graphicdesign: ['Logo Design', 'Branding Package', 'Social Media Graphics', 'Print Materials', 'Illustration'],
    custom: [],
}

export default function QuotePage() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        budget: 5000,
        timeline: 4,
        features: {},
        customDescription: '',
    })

    useEffect(() => {
        if (formData.projectType && formData.projectType !== 'custom') {
            const features = featuresByType[formData.projectType as keyof typeof featuresByType].reduce((acc, feature) => {
                acc[feature] = false
                return acc
            }, {} as Record<string, boolean>)
            setFormData(prev => ({ ...prev, features }))
        }
    }, [formData.projectType])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSliderChange = (name: string, value: number[]) => {
        setFormData(prev => ({ ...prev, [name]: value[0] }))
    }

    const handleProjectTypeChange = (value: string) => {
        setFormData(prev => ({ ...prev, projectType: value }))
    }

    const handleFeatureChange = (feature: string, checked: boolean) => {
        setFormData(prev => ({
            ...prev,
            features: { ...prev.features, [feature]: checked },
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validate the form data using Zod
        const validation = formSchema.safeParse(formData)

        if (!validation.success) {
            validation.error.errors.forEach((err) => {
                toast.error(err.message) // Display each error message
            })
            return;
        }

        toast.success("Your quote request has been submitted successfully.");
        setStep(step + 1)

        try {
            await sendQuoteEmail(formData)
        } catch (e) {
            toast.error("Error sending quote");
        }
    }

    const steps = [
        { title: 'Basic Info', icon: DollarSign },
        { title: 'Project Type', icon: LayoutGrid },
        { title: 'Project Details', icon: Calendar },
        { title: 'Features', icon: Zap },
    ]

    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <Navbar />
            <main className="max-w-4xl mt-32 mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <h1 className="text-4xl font-bold text-center mb-8">Get a Free Quote</h1>
                    <h2 className="text-lg s text-center text-muted-foreground mb-8">
                        Fill out the form below to receive an accurate project estimate
                    </h2>
                </motion.div>

                <div className="mb-8">
                    <div className="flex justify-between items-center">
                        {steps.map((s, index) => (
                            <div key={s.title} className="flex flex-col items-center">
                                <div
                                    className={`rounded-full p-3 ${
                                        step > index ? 'bg-primary text-primary-foreground' : 'bg-muted'
                                    }`}
                                >
                                    <s.icon className="h-6 w-6" />
                                </div>
                                <span className="mt-2 text-sm font-medium">{s.title}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 h-2 bg-muted rounded-full">
                        <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: `${((step - 1) / 4) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>

                <Card className="overflow-hidden">
                    <CardContent className="p-6">
                        <form onSubmit={handleSubmit}>
                            <div className="min-h-[400px] relative">
                                <AnimatePresence mode="wait">
                                    {step === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0"
                                        >
                                            <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
                                            <div className="space-y-4">
                                                <div>
                                                    <Label htmlFor="name">Name</Label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <Label htmlFor="email">Email</Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0"
                                        >
                                            <h2 className="text-2xl font-semibold mb-4">Project Type</h2>
                                            <RadioGroup
                                                value={formData.projectType}
                                                onValueChange={handleProjectTypeChange}
                                            >
                                                {projectTypes.map((type) => (
                                                    <div key={type.id} className="flex items-center space-x-2">
                                                        <RadioGroupItem value={type.id} id={type.id} />
                                                        <Label htmlFor={type.id}>{type.label}</Label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        </motion.div>
                                    )}

                                    {step === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0"
                                        >
                                            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
                                            <div className="space-y-6">
                                                <div>
                                                    <Label htmlFor="budget">Budget (in PHP)</Label>
                                                    <Slider
                                                        id="budget"
                                                        min={1000}
                                                        max={50000}
                                                        step={1000}
                                                        value={[formData.budget]}
                                                        onValueChange={(value) => handleSliderChange('budget', value)}
                                                    />
                                                    <p className="mt-2 text-sm text-muted-foreground">
                                                        ₱{formData.budget.toLocaleString()}
                                                    </p>
                                                </div>
                                                <div>
                                                    <Label htmlFor="timeline">Project Timeline (in weeks)</Label>
                                                    <Slider
                                                        id="timeline"
                                                        min={1}
                                                        max={52}
                                                        step={1}
                                                        value={[formData.timeline]}
                                                        onValueChange={(value) => handleSliderChange('timeline', value)}
                                                    />
                                                    <p className="mt-2 text-sm text-muted-foreground">
                                                        {formData.timeline} {formData.timeline === 1 ? 'week' : 'weeks'}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 4 && (
                                        <motion.div
                                            key="step4"
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0"
                                        >
                                            <h2 className="text-2xl font-semibold mb-4">Features</h2>
                                            {formData.projectType === 'custom' ? (
                                                <div>
                                                    <Label htmlFor="customDescription">Project Description</Label>
                                                    <Textarea
                                                        id="customDescription"
                                                        name="customDescription"
                                                        value={formData.customDescription}
                                                        onChange={handleInputChange}
                                                        rows={6}
                                                        placeholder="Please describe your custom project in detail. Include specific features, functionalities, and any other relevant information that will help us understand your needs."
                                                    />
                                                </div>
                                            ) : (
                                                <div className="space-y-4">
                                                    {formData.projectType && featuresByType[formData.projectType as keyof typeof featuresByType].map((feature) => (
                                                        <div key={feature} className="flex items-center space-x-2">
                                                            <Checkbox
                                                                id={feature}
                                                                /*@ts-ignore*/
                                                                checked={formData.features[feature] || false}
                                                                onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                                                            />
                                                            <Label htmlFor={feature}>{feature}</Label>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </motion.div>
                                    )}

                                    {step === 5 && (
                                        <motion.div
                                            key="step5"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute inset-0 flex flex-col items-center justify-center text-center"
                                        >
                                            <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
                                            <p className="text-muted-foreground mb-6">
                                                We&apos;ve received your quote request and will get back to you shortly.
                                            </p>
                                            <Button asChild>
                                                <a href="/">Return to Home</a>
                                            </Button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {step < 5 && (
                                <div className="mt-6 flex justify-between">
                                    {step > 1 && (
                                        <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                                            Previous
                                        </Button>
                                    )}
                                    <Button
                                        type={step === 4 ? 'submit' : 'button'}
                                        onClick={() => step < 4 && setStep(step + 1)}
                                        className="ml-auto"
                                    >
                                        {step === 4 ? 'Submit' : 'Next'}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            )}
                        </form>
                    </CardContent>
                </Card>
            </main>
            <ProjFooter />
            <Toaster />
        </>
    )
}