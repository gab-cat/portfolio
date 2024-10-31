'use client'

import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Hero from "@/components/main/hero";
import Footer from "@/components/main/Footer";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/projects/navbar";
import AboutMe from "@/components/sub/about-me";
import CTA from "@/components/sub/cta";
import {AnimatePresence, motion} from "framer-motion";


export default function Home() {

    return <>
        <AnimatePresence mode={'wait'}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{duration: 0.8}}
            >
                <section className=" bg-[#030014] flex flex-col">
                    <StarsCanvas/>
                    <Navbar/>
                    <main className="w-full h-full">
                        <div className="flex flex-col gap-20">
                            <Hero/>
                            <AboutMe/>

                            <Skills/>
                            {/*<Encryption/>*/}
                            <Projects/>
                            <CTA/>
                        </div>
                    </main>
                    <Footer/>
                </section>
            </motion.div>
        </AnimatePresence>

    </>;
}
