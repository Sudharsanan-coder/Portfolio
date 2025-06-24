import React from 'react'
import Aboutimg from '../Components/Steve-2.jpg'
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
              <img className='rounded-2xl mt-6 h-[350px]' src={Aboutimg} alt="Profile"/>
            </div>
          </motion.div>
          <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}}
          className='w-full  lg:w-1/2 mt-8 text-lg'>
                <p>I am an aspiring Software Engineer with a strong passion for Machine Learning and Web Development. I thrive in dynamic, challenging environments that promote continuous learning and innovation. With a solid foundation in programming and a strong curiosity for how technology shapes the world, I actively pursue opportunities to apply theoretical knowledge to real-world problems.

My interest in machine learning stems from its ability to extract insights from data, make intelligent predictions, and build systems that can learn and adapt. I enjoy working with algorithms, data structures, and model training techniques, and I’m constantly exploring new frameworks and tools to expand my skill set. I also take a hands-on approach in web development, with experience building responsive, user-friendly applications using front-end technologies like HTML, CSS, JavaScript</p>
          </motion.div>
          

        </div>

    </div>
    )
}

export default About