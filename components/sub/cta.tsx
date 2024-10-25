'use client'

import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";
import React from "react";
import {useInView} from "react-intersection-observer";
import {slideInFromLeft, slideInFromTop} from "@/utils/motion";
import Link from "next/link";

const CTA = () => {
    const {ref, inView} = useInView({
        triggerOnce: false,
    })

    return (
        <motion.div

            variants={slideInFromLeft(0.25)}
            animate={inView ? 'visible' : 'hidden'}
            className="z-20 flex justify-center w-full h-[50vh]  content-center items-center mt-36"
        >
            <section className="bg-transparent/25 self-center backdrop-blur-sm rounded-3xl h-max ">
                <div ref={ref} className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                    <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-200 xl:text-3xl dark:text-white">
                        Bring your IDEA to the <span className="gradient-text">next level.</span>
                    </h2>

                    <p className="max-w-4xl mt-6 text-center text-gray-400 dark:text-gray-300">
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Cum quidem officiis reprehenderit, aperiam veritatis non, quod veniam
                        fuga
                        possimus hic
                        explicabo laboriosam nam. A tempore totam ipsa nemo adipisci iusto!
                    </p>

                    <div className="inline-flex  justify-center w-full mt-6 sm:w-auto">
                        <Link href={"/contact"}>
                            <Button
                                className="z-20 text-lg py-6 px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-500"
                                size="lg">
                                Let&apos;s Work Together
                                <ChevronRight className="ml-2 h-4 w-4"/>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default CTA;