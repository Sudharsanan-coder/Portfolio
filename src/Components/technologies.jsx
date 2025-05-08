import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { motion } from "framer-motion"; 
import { IoLogoBuffer } from "react-icons/io";

const iconVar= (duration) =>({
  initial:{y:-10},
  animate:{y:[10,-10],transition:{ duration:duration,ease:"linear",repeat:Infinity,repeatType:"reverse"}}
})

const Technologies = () => {
  return (
    
    <div className=' pb-24 mt-8'>
        <motion.div  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='text-2xl text-center font-bold mb-14'>Technologies</motion.div>

        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}}
        className='flex flex-wrap justify-center items-center gap-4'>
            <motion.div variants={iconVar(2.5)} initial="initial" animate="animate" 
            className='rounded-xl border-4 border-neutral-800 p-3'>
            <RiReactjsLine className='h-12 w-12 text-cyan-400'/>
            </motion.div>

            <motion.div variants={iconVar(1)} initial="initial" animate="animate"
            className='rounded-xl border-4 border-neutral-800 p-3'>
            <FaFigma className='h-12 w-12 text-white'/>
            </motion.div>
            
            <motion.div variants={iconVar(3)} initial="initial" animate="animate"
            className='rounded-xl border-4 border-neutral-800 p-3'>
            <RiJavascriptFill className='h-12 w-12 text-yellow-300'/>
            </motion.div>

            <motion.div variants={iconVar(1.5)} initial="initial" animate="animate"
            className='rounded-xl border-4 border-neutral-800 p-3'>
            <RiTailwindCssFill className='h-12 w-12 text-cyan-400'/>
            </motion.div>

            

            <motion.div variants={iconVar(2.5)} initial="initial" animate="animate"
            className='rounded-xl border-4 border-neutral-800 p-3'>
            <DiNodejs className='h-12 w-12 text-green-500'/>
            </motion.div>

            <motion.div variants={iconVar(1)} initial="initial" animate="animate"
            className='rounded-xl border-4 border-neutral-800 p-3'>
            <SiExpress className='h-12 w-12 text-white'/>
            </motion.div>

            <motion.div variants={iconVar(1)} initial="initial" animate="animate"
            className=' flex  text-center items-center justify-center rounded-xl border-4 border-neutral-800 h-20 w-20'>
            <SiMongodb className='h-12 w-12 text-white bg-green-600 rounded-xl '/>
            </motion.div>

            <motion.div variants={iconVar(3)} initial="initial" animate="animate"
            className='rounded-xl border-4 border-neutral-800 p-3'>
            <FaJava className='h-12 w-12 text-white'/>
            </motion.div>
            
            <motion.div variants={iconVar(1.5)} initial="initial" animate="animate"
            className='rounded-xl border-4 border-neutral-800 p-3'>
            <IoLogoBuffer className='h-12 w-12 text-blue-900'/>
            </motion.div>

        </motion.div>
    
    </div>
  )
}

export default Technologies