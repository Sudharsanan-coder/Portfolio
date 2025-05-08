import React from 'react'
import Swal from 'sweetalert2'
import { delay, motion } from "framer-motion"

const Email = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "907698b9-bdf4-4fbb-a5cd-c2b19b9ca268");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!!",
                text: "Message sent successfully!",
                icon: "success"
              });
              event.target.reset();
        }
      };

  return (
    <section>
        <form className='text-center justify-center ' onSubmit={onSubmit}>
            <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}}className="text-center text-2xl font-bold my-20">Contact Form</motion.div>

            <div className="flex">
            
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className=" w-1/2">
                    <div className="me-3 lg:ms-56">Full name</div><br></br>
                    <div className="me-3 lg:ms-56 mt-4 ">Email Address</div><br></br>
                    <div className="me-3 lg:ms-56 mt-4 " >Message</div>
                </motion.div>
            
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className="w-1/2  mx-auto ">
                    <input className="flex me-3 rounded-sm text-black p-2 w-36 lg:w-80" type="text" placeholder='Enter your name' name='name' required/><br></br>
                    <input className="flex me-3 rounded-sm text-black p-2 w-36 lg:w-80" type="text" placeholder='Enter your Email' name='email' required/><br></br>
                    <textarea className="flex me-3 rounded-sm text-black w-36 p-2 lg:w-80" placeholder='Enter the message'  name='message' id="" required></textarea>
                </motion.div>
           

            </div>
            <div className="text-center"><button className='p-2 h-12 w-24 bg-blue-800 mt-6 rounded-2xl cursor-pointer hover:bg-blue-800 hover:duration-300 hover:scale-105'>Submit</button></div>
        </form>
    </section>
  )
}

export default Email