"use client"


import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaCuttlefish,
  FaCSharp,
  FaDatabase,
  FaJava
} from "react-icons/fa"

import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

const about = {
  title: "About me",
  description: "I am Ananthakumar Vithurshanan, a passionate Software Engineering student at Sabaragamuwa University of Sri Lanka, with a strong interest in web development and programming. I have experience working with various technologies like JavaScript, React, Node.js, and MongoDB, and I have built several full-stack projects. Throughout my studies and online courses, I have developed a solid understanding of software development, both front-end and back-end, and I’m always eager to learn new skills. I enjoy working on projects that solve real-world problems and am committed to growing as a developer.",
  info: [
    {
      fieldName: "Name",
      FieldValue: "Vithurshanan"
    },
    {
      fieldName: "Phone",
      FieldValue: "(+94) 768989412"
    },
    {
      fieldName: "Experience",
      FieldValue: "4+ Years"
    },
    {
      fieldName: "Age",
      FieldValue: "24 Years"
    },
    {
      fieldName: "Nationality",
      FieldValue: "Sri Lankan"
    },
    {
      fieldName: "E-mail",
      FieldValue: "lithuvithu1109@gmail.com"
    },
    {
      fieldName: "Languages",
      FieldValue: "English , Tamil"
    },
  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "I am Ananthakumar Vithurshanan, a third-year Software Engineering student at Sabaragamuwa University. I have a strong foundation in web development, with experience in technologies such as Next.js, React.js, JavaScript, MongoDB, MySQL, Tailwind CSS, CSS, and HTML. I am also skilled in desktop application development, proficient in C, C#, and MySQL. My academic journey and hands-on projects have enhanced my problem-solving abilities and strengthened my understanding of full-stack development. I am passionate about building efficient, user-friendly applications and continuously improving my skills to meet the dynamic needs of the tech industry.",
  items: [
    {
      Learn: "Self learn",
      position: "FullStack Developer",
      duration: "2024 - Present",
    },
    {
      Learn: "Self learn",
      position: "Front-End Developer",
      duration: "2022 - 2023",
    },
    {
      Learn: "Self learn",
      position: "Basic Programing",
      duration: "2020 - 2022",
    },
    {
      Learn: "Beginner Lecel",
      position: "Enter the Computing field",
      duration: "Summer-2019",
    },

  ]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "I am currently pursuing a Bachelor of Science (Hons) in Software Engineering at Sabaragamuwa University of Sri Lanka, with an expected graduation date in February 2026. Throughout my studies, I have gained a strong foundation in programming, data structures, algorithms, and software development methodologies, maintaining a GPA of 3.22. Prior to this, I completed my Advanced Level studies in the Science Stream at V/Tamil Maha Vidhyalayam in Vavuniya, where I developed a keen interest in technology and engineering. My academic journey has equipped me with the skills necessary to excel in the software engineering field, and I continue to expand my knowledge through both practical projects and theoretical learning.",
  items: [
    {
      experienceTitle: "Full-Stack Web Development Bootcamp",
      institution: "Codeacademy",
      describe: "Completed an intensive bootcamp focused on full-stack web development, gaining hands-on experience with technologies like React, Node.js, Express, and MongoDB.",
      duration: "2023",
    },
    {
      experienceTitle: "Front-End Track",
      institution: "Codeacademy",
      describe: "Enhanced my front-end development skills, including HTML, CSS, JavaScript, and frameworks such as React, to build dynamic and responsive user interfaces.",
      duration: "2023",
    },
    {
      experienceTitle: "Programming Course",
      institution: "Online Course",
      describe: "Undertook various programming courses covering languages such as C, Java, and JavaScript, helping me build a solid foundation in coding principles.",
      duration: "2019 - 2022",
    },
    {
      experienceTitle: "Certified Web Developer",
      institution: "Tech Institute",
      describe: "Completed a certification program in web development, learning the fundamentals of building web applications, server-side development, and front-end technologies.",
      duration: "2019 - 2021",
    }
  ]
}

const skills = {
  title: "My Skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque error mollitia doloremque at.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaReact />,
      name: "React.Js"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.Js"
    },
    {
      icon: <FaJava />,
      name: "Java"
    },
    
    
    {
      icon: <FaDatabase />,
      name: "MongoDB"
    },
    {
      icon: <FaDatabase />,
      name: "MySQL"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS"
    },
    {
      icon: <FaNodeJs />,
      name: "Node Js"
    },
    {
      icon: <FaFigma />,
      name: "Figma"
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/**Content */}
          <div className="min-h-[70vh] w-full">
            {/**experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-justify xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title} </h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">{experience.description} </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1 ">
                          <span className="text-accent" >{item.duration} </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position} </h3>
                          <div className="flex items-center gap-3" >
                            {/**dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent" ></span>
                            <p className="text-white/60">{item.Learn} </p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/**education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-justify xl:text-justify">
                <h3 className="text-4xl font-bold">{education.title} </h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">{education.description} </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[400px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1 ">

                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.experienceTitle} </h3>
                          <span className="text-accent" >{item.describe} </span>
                          <div className="flex items-center gap-3" >
                            {/**dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent" ></span>
                            <p className="text-white/60">{item.institution} </p>

                            <p className="text-white/60">{item.duration} </p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/**skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] items-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title} </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index} >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300" >{skill.icon} </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name} </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>


            {/**about */}
            <TabsContent value="about" className="w-full text-justify xl:text-justify">
              <div className="flex flex-col gap-[30px] mb-10">
                <h3 className="text-4xl font-bold">{about.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description} </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[820px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName} </span>
                        <span className="text-xl">{item.FieldValue} </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>


          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
