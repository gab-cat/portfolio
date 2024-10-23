'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const texts = [
    'project experience',
    'web design',
    'solutions',
    'innovation',
    'solutions'
]

export default function TypewriterAnimation() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentText.length < texts[currentTextIndex].length) {
                    setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1))
                } else {
                    // Pause at the end of typing
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(texts[currentTextIndex].slice(0, currentText.length - 1))
                } else {
                    setIsDeleting(false)
                    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
                    // Pause before starting the next word
                    return
                }
            }
        }, isDeleting ? 100 : 200) // Slower typing and deletion

        return () => clearTimeout(timeout)
    }, [currentText, currentTextIndex, isDeleting])

    return (
        <AnimatePresence mode="wait">
            <motion.li
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-6xl font-bold text-white h-16 flex items-center justify-start"
            >
                <span>{currentText}</span>
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block ml-1 w-[2px] sm:h-16 h-8 bg-white"
                />
            </motion.li>
        </AnimatePresence>

    )
}