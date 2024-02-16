'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div
            variants={slideInFromRight(0.5)}
            className='Welcome-box text-[28px] py-[8px] px-[7px] border border-[#7042f88b] opacity-[1] text-white'
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                <h1 className="Welcome-text text-[13px]">
                    Think better with Next js 13
                </h1>
            </motion.div>

            <motion.div
            variants={slideInFromLeft(0.5)}
            className='text-[42px] font-semibold text-white mt-[10px] text-center mb-[15px]'
            >
                Making apps with modern technologies
            </motion.div>
            
    </div>
  )
}

export default SkillText