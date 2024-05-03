import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section 
        id='skills'
        style={{transform: 'scale(0.9)'}}
        className="relative flex flex-col items-center justify-center h-full gap-3 py-20 overflow-hidden pb-72"
        >
        <SkillText />

        <div className="flex flex-row flex-wrap items-center justify-around gap-5 mt-4">
            {Skill_data.map((image, index) => (
                <SkillDataProvider 
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                />
            ))}
        </div>

        <div className="flex flex-row flex-wrap items-center justify-around gap-5 mt-4">
            {Frontend_skill.map((image, index) => (
                <SkillDataProvider 
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                />
            ))}
        </div>

        <div className="flex flex-row flex-wrap items-center justify-around gap-5 mt-4">
            {Backend_skill.map((image, index) => (
                <SkillDataProvider 
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                />
            ))}
        </div>

        <div className="flex flex-row flex-wrap items-center justify-around gap-5 mt-4">
            {Full_stack.map((image, index) => (
                <SkillDataProvider 
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                />
            ))}
        </div>

        <div className="flex flex-row flex-wrap items-center justify-around gap-5 mt-4">
            {Other_skill.map((image, index) => (
                <SkillDataProvider 
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                />
            ))}
        </div>

        <div className="absolute w-full h-full">
            <div className="w-full h-full z-[10] opacity-30 absolute flex items-center justify-center bg-cover">
                <video 
                className='w-full h-auto'
                preload='false'
                playsInline
                loop
                muted
                autoPlay
                src='/cards-video.webm'
                />
            </div>

        </div>

    </section>
  )
}

export default Skills