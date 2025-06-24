import React from 'react'
import Aboutimg from '../Components/Round3.jpg'
import { delay, motion } from "framer-motion"


const About = () => {
  return (
    <div className='mt-16  pb-4 mx-10'>
        <div className='flex text-center justify-center'>
          <div className='text-2xl text-center font-bold'>About Me</div>
          
        </div>

        <div className='flex flex-wrap mt-10'>

          <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}}
          className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
              <img className='rounded-2xl mt-6' src={Aboutimg} alt="Profile" />
            </div>
          </motion.div>
          <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}}
          className='w-full  lg:w-1/2 mt-8 text-lg'>
                <p>zz</p>
          </motion.div>
          

        </div>

    </div>
    )
}

export default About