'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react'
import Navbar from "@/components/projects/navbar";
import ProjFooter from "@/components/projects/footer";


export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        // Here you would typically handle the actual form submission
    }

    return (
        <>
            <Navbar />
            <main className="max-w-4xl mt-32 mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <h1 className="text-5xl font-extrabold text-center mb-8 text-primary">Get in Touch</h1>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.8}}
                    className="my-12 text-center"
                >
                    <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h2>
                    <p className="text-muted-foreground mb-6">Let&apos;s collaborate and bring your ideas to life!</p>
                    <Button size="lg" asChild>
                        <a href="/quote" className="flex items-center justify-center">
                            Get a Free Quote <ArrowRight className="ml-2 h-4 w-4"/>
                        </a>
                    </Button>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-bold mb-4 text-primary">Contact Information</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <Mail className="text-primary"/>
                                        <span>contact@example.com</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Phone className="text-primary"/>
                                        <span>+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <MapPin className="text-primary"/>
                                        <span>123 Web Dev Lane, Internet City, 12345</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, delay: 0.4}}
                    >
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-bold mb-4 text-primary">Send a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Name
                                        </label>
                                        <Input id="name" name="name" placeholder="John Doe" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <Input id="email" name="email" type="email" placeholder="johndoe@example.com"
                                               required/>
                                    </div>
                                    <div>
                                        <label htmlFor="message"
                                               className="block text-sm font-medium text-gray-700 mb-1">
                                            Message
                                        </label>
                                        <Textarea id="message" name="message" placeholder="Enter your message" rows={4}
                                                  required/>
                                    </div>
                                    <Button type="submit" className="w-full bg-primary" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <motion.div
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                exit={{opacity: 0}}
                                            >
                                                Sending...
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                exit={{opacity: 0}}
                                                className="flex items-center justify-center"
                                            >
                                                <Send className="mr-2 h-4 w-4"/> Send Message
                                            </motion.div>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.6}}
                    className="mt-12"
                >
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Find Us</h2>
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784368459447!3d40.74844797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635186714740!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{border: 0}}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </main>
            <ProjFooter/>
        </>
    )
}