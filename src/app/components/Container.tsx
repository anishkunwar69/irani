"use client"
import React from 'react'
import { motion } from "framer-motion"

function Container({children, className, isGallery}:
  {
    children: React.ReactNode,
    className?: string,
    isGallery?: boolean
  }
) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.3 }}
      className={`w-full px-4 sm:w-[92%] sm:px-0 mx-auto
                max-w-[1300px]
                2xl:max-w-[1500px]
                3xl:max-w-[1700px]
                4xl:max-w-[1900px]
                ${className || ''} ${isGallery ? 'overflow-hidden' : ''}`}>
      {children}
    </motion.div>
  )
}

export default Container