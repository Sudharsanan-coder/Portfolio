import React from 'react'
import { motion } from "framer-motion"  

const Experience = () => {

   
    const Exp=[{

        years:" (3rd June - 21th June)",
        Role:"Front-End Developer Intern",
        Company:"VEI Technology",
        Description:"In 2024,I completed my Front-End Development internship! This experience has deepened my knowledge of creating responsive and user-friendly web interfaces, working with modern frameworks, and collaborating with talented teams to deliver high-quality projects.",
        Technologies:["TailwindCSS","Javascript","React.js",],
    },
    {
        years:" (22th July - 21th September)",
        Role:"Digital Marketing Intern",
        Company:"Critter Graphix",
        Description:"In 2024, worked as a Digital Marketing Intern at Critter Graphix from July to September. Gained hands-on experience in managing social media campaigns, optimizing content distribution, and utilizing many tools to enhance marketing strategies.",
        Technologies:["Buffer","Merlin","Findymail"],

    },

    {
      years:" (1st July- 30th September)",
      Role:"Web Developer Intern",
      Company:"DNYX (Business Solution)",
      Description:"I have successfully completed my Web Development internship! This invaluable experience allowed me to enhance my skills in both front-end and back-end development while working on real-world projects. I gained hands-on experience in building responsive websites, optimizing performance, and collaborating with talented teams to deliver high-quality solutions.",
      Technologies:["React.js","TailwindCSS","Node js","Express.js"],

  },

    ]
  return (
    <div className=" pb-4 mx-10">
      <motion.h1   whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}}  className="text-2xl text-center font-bold my-20">Experience</motion.h1>
      <div>
        {Exp.map((item, index) => (
          <div key={index} className="mb-4">
            
            <div className='flex flex-wrap '>
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='w-full lg:w-1/3 '>
                    <h2 className="text-xl font-bold ">{item.Company}</h2>
                    <p className=''></p>
                </motion.div>
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.5}} className='w-full lg:w-2/3 mt-4 '>
                    <div className="flex">
                    <p className='text-xl font-thin mb-4'>{item.Role}{item.years}</p>
                    </div>
                    
                    
                    <p>{item.Description}</p>
                    <p className='mb-6 mt-1'><strong>Technologies:</strong> {item.Technologies.join(", ")}</p>
                </motion.div>
            </div>

          </div>

        ))}
      </div>
    </div>
  )
}

export default Experience