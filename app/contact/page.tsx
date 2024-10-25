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
import ContactCta from "@/components/sub/contact-cta";


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
            <main className="max-w-7xl mt-32 mx-auto py-12 px-4 sm:px-6 lg:px-8">


                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.25}}
                    className="my-12 text-center"
                >
                    <h2 className="text-5xl border-b pb-4 text-gray-800 font-semibold tracking-tight mb-4">Let&apos;s
                        Connect</h2>

                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <ContactCta/>
                </motion.div>


                <section id="contact-section" className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-12 mx-auto">
                        <div>
                            <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p>

                            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Chat
                                to our friendly team</h1>

                            <p className="mt-3 text-gray-500 dark:text-gray-400">We’d love to hear from you. Please fill
                                out this form or shoot us an email.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                                <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                        </svg>
                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is
                                        here to help.</p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">hello@merakiui.com</p>
                                </div>

                                <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                        </svg>
                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Live
                                        chat</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is
                                        here to help.</p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">Start new chat</p>
                                </div>

                                <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                        </svg>
                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our
                                        office HQ.</p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">100 Smith Street
                                        Collingwood VIC 3066 AU</p>
                                </div>

                                <div>
                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                        </svg>
                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to
                                        5pm.</p>
                                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+1 (555) 000-0000</p>
                                </div>
                            </div>

                            <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                                <form>
                                    <div className="-mx-2 md:items-center md:flex">
                                        <div className="flex-1 px-2">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First
                                                Name</label>
                                            <input type="text" placeholder="John "
                                                   className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>

                                        <div className="flex-1 px-2 mt-4 md:mt-0">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last
                                                Name</label>
                                            <input type="text" placeholder="Doe"
                                                   className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email
                                            address</label>
                                        <input type="email" placeholder="johndoe@example.com"
                                               className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                    </div>

                                    <div className="w-full mt-4">
                                        <label
                                            className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                        <textarea
                                            className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                            placeholder="Message"></textarea>
                                    </div>

                                    <button
                                        className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Send message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.6}}
                    className="mt-12"
                >
                    <Card className=" rounded-md">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4 text-primary">Find Us</h2>
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.450662570796!2d123.18257347602943!3d13.630328200092402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1f34cb926f62f%3A0xa3bdd60d7eacd48c!2sAteneo%20de%20Naga%20University!5e0!3m2!1sen!2sph!4v1729873718301!5m2!1sen!2sph"
                                width="100%"
                                height="200%"
                                style={{border: 0}}
                                allowFullScreen
                                loading="lazy"
                                >
                                </iframe>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
</main>
    <ProjFooter/>
</>
)
}