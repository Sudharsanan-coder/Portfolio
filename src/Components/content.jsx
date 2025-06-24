import React from 'react'
import Round1 from "../Components/ROund1.jpg"
import { delay, motion } from "framer-motion"

const container =(delay) =>({
  hidden:{x:-100,opacity:0},
  visible:{x:0,opacity:1,transition:{duration:0.5, delay:delay},}
})

const content = () => {
  return (
    <div className='lg:mb-35 mt-7 mx-10'>
        <div className='flex flex-wrap'>
            
            <div className=' flex w-full lg:w-1/2'>
                <div className='flex flex-col item-center lg:items-start '>
                  <motion.div variants={container(0)} initial="hidden" animate="visible"
                   className='font-thin text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-8 lg:mt-16 tracking-tight'>T.V.Sudharsanan</motion.div><br></br>
                  
                  <motion.span variants={container(0.5)} initial="hidden" animate="visible"
                  className='bg-gradient-to-r from bg-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mb-2'>Full-stack developer</motion.span>
                  
                  <motion.p variants={container(1)} initial="hidden" animate="visible"
                  className='text-lg  font-light'>I am a Full Stack Developer and UI/UX Designer with a strong background in building dynamic web applications and creating visually appealing, user-centered designs.Passionate about problem-solving and continually learning new tools and frameworks, I bring an adaptable and innovative approach to every project.</motion.p>
                </div>
            </div>

            <div className='w-full lg:w-1/2'>
              <div className='flex justify-center'>
                <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,delay:1.2}}
                className='rounded-full lg:mt-32 m-10 ms-10' src={Round1}/>
              </div> 
            </div>

        </div>
    </div>
  )
}

export default content