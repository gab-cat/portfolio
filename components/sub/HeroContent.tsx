'use client'

import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon, PaintBrushIcon } from '@heroicons/react/16/solid'
import Image from "next/image";


export const HeroContent = () => {

  return (
    <motion.div
    initial='hidden'
    animate='visible'
    className='z-50 flex flex-row items-center justify-center w-full px-20 mt-40'
    >
        <div className='flex flex-col justify-center w-full h-full gap-5 m-auto text-start'>
            
            <motion.div variants={slideInFromTop} className='flex flex-start'>
            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mr-[10px]'>
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                <h1 className="Welcome-text text-[13px]">Full-stack Developer</h1>
            </motion.div>

            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'>
                <PaintBrushIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                <h1 className="Welcome-text text-[13px]">UI/UX Designer</h1>
            </motion.div>
            
            </motion.div>

            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto my-2  overflow-hidden'
            >
                <span>
                Providing 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> the best </span>
                <div className="relative mt-3 overflow-visible h-15">
                    <ul className="dynamic-text ">
                        <li><span>project experience</span></li>
                        <li><span>web design</span></li>
                        <li><span>solutions</span></li>
                        <li><span>innovation</span></li>
                        <li><span>solutions</span></li>
                    </ul>
                </div>
                </span>
            </motion.div>

            <motion.h1
            variants={slideInFromLeft(0.8)}
            className='text-2xl font-semibold text-gray-100 my-2 max-w-[600px] mb-[0px]'>
                Hi! My name is Gabriel Angelo, you can call me Gab.
            </motion.h1>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-400 max-w-[600px] '>
                I&apos;m a  Full-stack Developer and UI/UX Designer with experience in Website,
                Mobile, and Software Development. Check out my projects and skills!
            </motion.p>

            <motion.a
            variants={slideInFromLeft(1)}
            className='py-2 button-primary z-50 text-center text-white cursor-pointer rounded-lg max-w-[300px]'
            >
                Let&apos;s Engage to Hyperdrive!
            </motion.a>


        </div>

        <motion.div
            variants={slideInFromRight(0.8)}
            className='items-center justify-center w-full h-full flec'>
                <Image 
                    src='mainIconsdark.svg'
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </motion.div>
    </motion.div>
  )
}
