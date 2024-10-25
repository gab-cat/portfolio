'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Briefcase, Zap, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useInView } from "react-intersection-observer";
import { slideInFromLeft } from "@/utils/motion";

export default function AboutMe() {
    const { ref, inView } = useInView({
        triggerOnce: false,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    }

    const hoverVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    }

    const iconHoverVariants = {
        hover: {
            rotate: 360,
            scale: 1.2,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        }
    }

    return (
        <section ref={ref} className="z-20 py-32 mt-72 bg-transparent">
            <div className="container mx-auto p-8 bg-transparent rounded-md">
                <motion.h2
                    className="text-7xl mx-auto text-center font-bold mb-16 w-max gradient-text"
                    initial={{opacity: 0, y: -50}}
                    animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: -50}}
                    transition={{duration: 0.5}}
                >
                    About Me
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid lg:grid-cols-12 items-start content-center"
                >
                    <motion.div
                        variants={slideInFromLeft(0.25)}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="lg:col-span-5 items-start w-fit ml-auto"
                    >
                        <motion.div
                            className="relative"
                            whileHover={{
                                scale: 1.05,
                                transition: {duration: 0.3}
                            }}
                        >
                            <Image
                                src="/Gab.png"
                                alt="Profile"
                                width={400}
                                height={500}
                                className="border brightness-75 contrast-0 bg-transparent/35 backdrop-blur-lg hover:contrast-100 hover:brightness-100 transition-all border-white h-full mx-auto sm:ml-auto sm:mr-6 mb-4 rounded-md shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6 ">
                        <motion.div
                            variants={hoverVariants}
                            whileHover="hover"
                        >
                            <Card
                                className="z-10 overflow-hidden border-[0.0 1em] text-gray-200 backdrop-blur-md bg-primarybg/65 rounded-md">
                                <CardContent className="p-6">
                                    <motion.p
                                        className="text-lg mb-4 leading-relaxed"
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{delay: 0.2, duration: 0.8}}
                                    >
                                        I&apos;m a passionate full-stack developer specializing in developing websites
                                        and
                                        apps with intuitive user interfaces and building robust backend services. In
                                        addition to my technical foundation, I bring real-world experience as a Customer
                                        Service Representative with Quantrics Enterprises, where I&apos;ve developed a
                                        keen
                                        understanding of client needs and effective communication.
                                    </motion.p>
                                    <motion.p
                                        className="text-lg leading-relaxed"
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{delay: 0.4, duration: 0.8}}
                                    >
                                        Whether you&apos;re looking to transform your idea into a dynamic app or enhance
                                        an
                                        existing project, I&apos;m here to help. With a strong skill set in both
                                        front-end
                                        and back-end development, I can partner with you to design, develop, and deploy
                                        solutions that are both functional and engaging. Let&apos;s work together to
                                        turn
                                        your vision into reality.
                                    </motion.p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                {
                                    icon: Code,
                                    title: "Full-Stack Development",
                                    description: "Expertise in front-end and back-end technologies"
                                },
                                {
                                    icon: Briefcase,
                                    title: "Customer Service",
                                    description: "Real-world experience in client communication"
                                },
                                {
                                    icon: Zap,
                                    title: "Innovative Solutions",
                                    description: "Delivering cutting-edge web applications"
                                }
                            ].map((item, index) => (
                                <motion.div key={index} variants={hoverVariants} whileHover="hover">
                                    <Card className="bg-primarybg/65 border-[0.25px] backdrop-blur-lg rounded-md h-full">
                                        <CardContent
                                            className="p-4 flex flex-col items-center text-center h-full justify-between">
                                            <motion.div variants={iconHoverVariants} whileHover="hover">
                                                <item.icon className="w-10 h-10 text-gray-400 mb-2"/>
                                            </motion.div>
                                            <h3 className="text-lg text-gray-200 font-semibold mb-1">{item.title}</h3>
                                            <p className="text-sm text-gray-400">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}