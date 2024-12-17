"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"

const services = [
  {
    "num": "01",
    "title": "Web Development",
    "description": "I specialize in building responsive and dynamic websites using modern web technologies like HTML, CSS, JavaScript, React, and Node.js. I focus on creating user-friendly and efficient web applications that solve real-world problems.",
    "href": ""
  },
  {
    "num": "02",
    "title": "Desktop Application Development",
    "description": "I have experience developing desktop applications using C# and .NET, building solutions that are both functional and user-friendly. My work includes creating efficient software for managing complex tasks.",
    "href": ""
  },
  {
    "num": "03",
    "title": "Mobile Development",
    "description": "I am expanding my knowledge in mobile app development and am currently exploring frameworks like React Native to build cross-platform applications that provide seamless user experiences on both iOS and Android.",
    "href": ""
  },
  {
    "num": "04",
    "title": "Blog Writing",
    "description": "I enjoy writing blog posts about technology, programming, and software development. I share my insights and experiences with others, aiming to help both beginners and advanced developers grow in their fields.",
    "href": ""
  }
  
]

import { motion } from "framer-motion"

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return <div key={index} className="flex flex-1 flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-semibold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{services.num}</div>
                <Link
                  href={services.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              {/**Title */}
              <h2 className="text-[40px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{services.title} </h2>
              {/**desc */}
              <p className="text-white/60">{services.description} </p>
              {/**border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
