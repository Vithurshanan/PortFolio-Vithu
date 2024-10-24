"use client"

import { motion } from "framer-motion"
import React, { useState} from "react"

import { Swiper , SwiperSlide} from "swiper/react"
import "swiper/css"
import {BsArrowUpRight , BsGithub} from "react-icons/bs"

import {
  Tooltip , 
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns";
const projects = [
  {
    num : "01",
    category : "frontend",
    title : "Dress-Showroom",
    description : "  Role: Front-End Developer",
    stack : [{name: "Html 5"}, {name : "CSS 3"}, {name: "JavaScript"}],
    image : "/assets/E-commerce_Image.png", 
    live: "",
    github: "https://github.com/Vithurshanan/E-commerce-webSite",
  },
  {
    num : "02",
    category : "frontend",
    title : "Car-Show-Case",
    description : " Role: Front-End Developer",
    stack : [{name: "Next.js"}, {name : "Tailwind CSS"}, {name: "JavaScript"}],
    image : "/assets/CarShowCaseHome.png", 
    live: "",
    github: "https://github.com/Vithurshanan/Car-Show-Case",
  },
  {
    num : "03",
    category : "frontend",
    title : "Sample College Website",
    description : " This is a sample website of SUSL ",
    stack : [{name: "Html 5"}, {name : "CSS 3"}, {name: "JavaScript"}],
    image : "/assets/University_Image.png", 
    live: "",
    github: "https://github.com/Vithurshanan/College-Website-sample",
  },
  {
    num : "04",
    category : "frontend",
    title : " Slider-Crazy-Effects",
    description : " Lorem ipsum dolor sit amet consectetur adipi",
    stack : [{name: "Html 5"}, {name : "CSS 3"}, {name: "JavaScript"}],
    image : "/assets/Slider-Crazy-Effects.png", 
    live: "",
    github: "https://github.com/Vithurshanan/Slider-Crazy-Effects-frontend",
  },
  {
    num : "05",
    category : " Full-Stack",
    title : " Foodi E-Commerce Website ",
    description : "  Foodi is a web application designed to simplify food discovery and ordering. Users can explore cuisines, place orders, and enjoy a smooth user experience",
    stack : [{name: "React"}, {name : "Node.js"}, {name: "Express"},{name: "MongoDB"}],
    image : "", 
    live: "",
    github: "https://github.com/Vithurshanan/foodi",
  },
  {
    num : "06",
    category : " Full-Stack",
    title : " Typing speed testing website",
    description : " Typing Speed Testing is a React.js application designed to test and improve users' typing speed and accuracy. It features an intuitive interface where users can practice typing predefined text passages within a time limit to track their words per minute (WPM) and error rate",
    stack : [{name: "React"}, {name : "Node.js"}, {name: "Express"},{name: "MongoDB"},{name : "CSS 3"},],
    image : "", 
    live: "",
    github: "https://github.com/Vithurshanan/typing-speed-testing",
  },
  {
    num : "07",
    category : " Full-Stack",
    title : "  Demo-Blog",
    description : "Demo Blog is a full-stack blogging platform where users can create, read, update, and delete blog posts. The project focuses on providing a simple and efficient way to share content, featuring a clean and responsive design, user authentication, and real-time updates.",
    stack : [{name: "React"}, {name : "Node.js"}, {name: "Express"},{name: "MongoDB"},{name : "CSS 3"},],
    image : "", 
    live: "",
    github: "https://github.com/Vithurshanan/Demo-Blog",
  },
  {
    num : "08",
    category : " Full-Stack",
    title : "Social Media Web",
    description : "Social Media Web is a full-stack social media platform built with Next.js, allowing users to create profiles, share posts, interact through likes and comments, and connect with others. It emphasizes user authentication, real-time updates, and a responsive UI to offer an engaging social experience.",
    stack : [{name: " Next.js"}, {name : "Node.js"}, {name: "Express"},{name: "MongoDB"},{name : "JWT Auth"},,{name: "MySql"},],
    image : "", 
    live: "",
    github: "https://github.com/Vithurshanan/Socail-Media-web",
  },
]


const Work = () => {

  const [ project , setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{opacity : 0}}
      animate={{opacity : 1 , 
        transition: { delay:2.4 , duration: 0.4 , ease: "easeIn"}
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              { /** outline num */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} </h2>
              {/** proj desc */}
              <p className="text-white/60">{project.description} </p>
              {/** stack */}
              <ul className="flex gap-4">
                {project.stack.map((item , index ) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/**remove late combo */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/**border */}
              <div className="border border-white/20"></div>
              {/**button */}
              <div className="flex items-center gap-4">
                {/**Github proj button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[460px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project ,index ) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[400px] relative group flex justify-center items-center bg-pink-50/20 ">
                    {/**overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/**Image */}
                    <div className="relative w-full h-full">
                      <Image 
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              })}
              {/**swiper button */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
