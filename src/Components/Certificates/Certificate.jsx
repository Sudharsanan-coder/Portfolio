import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion" 
import { useState,useEffect } from 'react';

import AIInfosys from "../Certificates/AI-Infosys.png" 
import AILinkedin from "../Certificates/AI-LinkedIn.png"
import AINovitech from "../Certificates/AI-Novitach.png" 
import DBnptel from "../Certificates/DB-nptel.png"
import Interpy from "../Certificates/Internation-Python.png"
import MongoModel from "../Certificates/MongoDB Doc model.png"
import MongoAtlas from "../Certificates/MongoDB-Atlas.png"
import Javanptel from "../Certificates/Programming in java.png"
import SpC from "../Certificates/Spoken tutorial-C.png"
import SpPy from "../Certificates/Spoken Tutorial-python.png"
import Udemyweb from "../Certificates/Udemy-web.png"
import Bharatinte from "../Certificates/WebDevelopment-Bharat.png"
import DM from "./DM.jpg"





const data=[
  {
    img: AILinkedin,
    Coursename:"Generative AI",
    Description:"Completed the LinkedIn Learning course What Is Generative AI? on September 30th, 2023. Gained insights into Generative AI, its applications in business, and foundational AI concepts",
    
  },

  {
    img: Udemyweb,
    Coursename:"Web Development Bootcamp",
    Description:"Comprehensive web development certification covering latest technologies and best practices. Completed 62-hour intensive bootcamp, gaining hands-on experience in front-end and back-end development for modern web applications.",
    
  },
  
    {
      img: AIInfosys,
      Coursename:"Intoduction to Artificial Intelligence",
      Description:"Successfully completed the Infosys course Introduction to Artificial Intelligence on April 12th, 2023. This course provided a foundational understanding of AI concepts, enhancing my skills in this rapidly growing field.",
      
    },
    
    
    {
      img: DBnptel,
      Coursename:"DataBase Systems",
      Description:"Successfully completed the NPTEL course Introduction to Database Systems (Jan-Apr 2024), achieving a consolidated score of 50%. The 12-week course covered essential concepts, enhancing my understanding of database systems.",
      
    }, 
    {
      img: Interpy,
      Coursename:"Data Science using Python",
      Description:"Participated in the International Level Student Workshop on Data Science using Python from February 19th to 23rd, 2024, at Sri Sairam Engineering College, enhancing my proficiency in data science techniques.",
      
    }, 
    {
      img: MongoModel,
      Coursename:"MongoDB and DOC model",
      Description:"Successfully completed the MongoDB and Document Model course on October 7th, 2023, gaining expertise in MongoDB's document-oriented database design and management principles to enhance my database development skills.",
      
    }, 
    {
      img: MongoAtlas,
      Coursename:"MongoDB Atlas",
      Description:"Demonstrates proficiency in MongoDB Atlas, a cloud database service. Completed course on setup, data management, and advanced features, enhancing skills in modern database technologies for cloud-based applications.",
      
    }, 
    {
      img: AINovitech,
      Coursename:"Artificial Intelligence",
      Description:"Successfully completed a 3-hour Boot Camp in Artificial Intelligence on April 14th, 2024, conducted by NoviTech R&D Private Limited. This certification enhances my AI knowledge and practical skills."  ,
      
    }, 
    {
      img: Javanptel,
      Coursename:"Programming in Java",
      Description:"Elite certification in Java programming from NPTEL, showcasing strong coding skills. Achieved 69% in a rigorous 12-week course, covering core concepts and practical application of Java in software development.",
      
    }, 
    {
      img: SpC,
      Coursename:"C Programming",
      Description:" A Certification in C programming from IIT Bombay's Spoken Tutorial Project. Scored 72.5% in the exam, demonstrating solid understanding of C language fundamentals and problem-solving skills.",
      
    }, 
    {
      img: SpPy,
      Coursename:"Python",
      Description:"Advanced Python programming certification with an impressive 83% score. Showcases expertise in Python 3.4.3, including object-oriented programming, data structures, and application development techniques.",
      
    }, 
     
    {
      img: Bharatinte,
      Coursename:"Web Development in BharatIntern",
      Description:"Completed a one-month virtual internship in Web Development with Bharat Intern, gaining practical experience and enhancing skills in modern web technologies. Demonstrated active participation and successfully fulfilled program requirements from January to February 2024.",
      
    },
    
    {
      img: DM,
      Coursename:"Fundamentals of Digital Marketing",
      Description:"Completed 'Fundamentals of Digital Marketing' course, gaining comprehensive knowledge of modern marketing strategies, tools, and best practices. This certification demonstrates proficiency in essential digital marketing concepts, enhancing skills for effective online promotion and customer engagement.",
      
    }, 
]

const Certificate = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1536) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const handleView = (certificate) => {
    setSelectedCertificate(certificate);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCertificate(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1920px] mx-auto">
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}}className="text-2xl text-center font-bold my-20">Certifications</motion.h2>
      <div className="my-8 sm:my-12 lg:my-16">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div className="bg-white h-full rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="h-48 sm:h-56 lg:h-56 xl:h-56 flex justify-center items-center">
                  <img src={d.img} alt={d.Coursename} className='w-full h-full object-cover'/>
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="text-center text-black mb-2 font-semibold text-lg lg:text-xl mb-2 line-clamp-1">{d.Coursename}</h3>
                  
                  <button 
                    onClick={() => handleView(d)}
                    className="w-full bg-blue-500 text-white py-2 lg:py-3 rounded-md hover:bg-blue-600 transition duration-300">View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {modalOpen && selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full mx-auto overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 lg:p-8 flex flex-col lg:flex-row">
              <div className="lg:w-1/2 lg:pr-6">
                <img 
                  src={selectedCertificate.img} 
                  alt={selectedCertificate.Coursename} 
                  className="w-full h-auto rounded-lg mb-4 lg:mb-0"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-black text-2xl lg:text-3xl font-bold mb-4">{selectedCertificate.Coursename}</h2>
                <p className="text-gray-700 mb-4 text-base lg:text-lg">{selectedCertificate.Description}</p>
              </div>
            </div>
            <div className="bg-gray-100 px-6 py-4 flex justify-end">
              <button 
                onClick={closeModal}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Certificate