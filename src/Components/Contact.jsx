import React from 'react'
import { motion } from "framer-motion"  

const Contact = () => {
  return (
    <div className=' pb-20'>
        <div className="justify-center text-center mt-16">
            <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='text-center text-2xl font-bold'>Get In Touch</motion.div>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="mt-6">No:122/144,NTR Street,Rangarajapuram,Kodambakkam</motion.div>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.5}}className="mt-2">Chennai-24</motion.div>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="mt-2">PH: +91 6374430133</motion.div>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.5}}className="mt-2 border-b inline-flex">sudharsanantv2005@gmail.com</motion.div>
        </div>
    </div>
  )
}

export default Contact