import React from 'react'
import Aboutimg from '../Components/Round3.jpg'
import { delay, motion } from "framer-motion"


const About = () => {
  return (
    <div className='mt-16  pb-4 mx-10'>
        <div className='flex text-center justify-center'>
          <div className='text-2xl text-center font-bold'>About Me</div>
          <div className="text-2xl text-center font-thin ml-2"></div>
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
                <p>As a Full Stack Developer and UI/UX Designer, I specialize in creating end-to-end web solutions that combine functionality with intuitive design. I have a deep understanding of both front-end and back-end technologies, which enables me to build applications that not only look good but also perform exceptionally well. My approach centers around user experience, ensuring that every project I work on is visually engaging and easy to navigate.

I am passionate about coding, problem-solving, and bringing creative ideas to life through technology. With a strong eye for design and a commitment to writing clean, maintainable code, I thrive in roles that challenge me to blend technical proficiency with creativity. I am always looking to stay ahead of industry trends and expand my skill set to deliver innovative and high-quality digital experiences.</p>
          </motion.div>
          

        </div>

    </div>
    )
}

export default About