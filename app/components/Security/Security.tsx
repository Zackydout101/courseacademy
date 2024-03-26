'use client'
import React, {useState} from 'react'
import HoverCard from '../Productivity/HoverCard'
import Projects from './Projects'
import {motion} from "framer-motion"

type Props = {}

const Security = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)
    const [hovered2, setHovered2] = useState<boolean>(false)

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren:0.4,
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0, scale:0.8 },
        show: { opacity: 1, scale:1},
    };
  return (
    <div className='max-w-[1280px] mx-auto'>
        <motion.div className='flex md:pl-7 space-x-3 md:space-x-10'>
            <div className='flex flex-col items-center'>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5}} className='relative'>
                    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className="octicon octicon-lock text-white">
                        <path d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z"></path>
                    </svg>
                    <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-3 z-3"></span>
                </motion.div>
                <motion.div initial={{height:0}} whileInView={{height:'100%'}} transition={{delay:0.8}} className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent" ></motion.div>
            </div>
            <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{delay:0.6, type:'tween'}} className='md:w-10/12 mb-24'>
                <h2 className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '200ms'}}>About Us</h2>  
                <h3 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '300ms'}}>
                    <p className="text-[#939aff]">Who are we?</p>
                    Empowering all ages to embrace the joy of coding: Our mission as aspiring software engineers! What are you waiting for?
                </h3>
            </motion.div>
        </motion.div>
        <HoverCard backgroundColor = '#939aff' direction='' left='0'>
            <div className='flex w-10/12 flex-col mx-auto'>
                
            <div className="text-[#7d8590] p-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="text-[#939aff] font-medium">Interned at Google</div>

    <img src="https://i.postimg.cc/mgHQ5GnB/Untitled-Project-1.png" style={{ width:"50%"}}  alt="BlackBerry logo" className="my-3"/>

    <span className="text-[12px] f6">Jeremy Nieto - 3rd Year Soft Eng</span>
</div>
              
                
                </div>

                <div className='flex w-10/12 flex-col mx-auto'>
            <div className="text-[#7d8590] p-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className="font-medium">Our Instructors</div>
    <div className="text-[#939aff] font-medium">Interned at BlackBerry | Graduated from Lycée Claudel</div>
    <img src="https://i.postimg.cc/Ls1s2CVk/Untitled-Project.png"  alt="BlackBerry logo" className="my-3"/>

    <span className="text-[12px] f6">Zachary Levesque-Bartlett - 3rd year Soft Eng</span>
</div>
              
                
                </div>

                <div className='flex w-10/12 flex-col mx-auto'>
            <div className="text-[#7d8590] p-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="text-[#939aff] font-medium">Interned at Nokia</div>
    <img src="https://i.postimg.cc/mgHQ5GnB/Untitled-Project-1.png" style={{ width:"50%"}}  alt="BlackBerry logo" className="my-3"/>

    <span className="text-[12px] f6">David Une - 4th Year Soft Eng</span>
</div>
              
                
                </div>
        </HoverCard>
        <Projects/>
     
        <div className='flex flex-col md:flex-row gap-10 '>
                <HoverCard backgroundColor = '#939aff' direction='flex-col' left='0'>
                    <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-semibold'>
Partnered with Amazon Web Services</span>   we offer students access to their own cloud-based computers, enabling them to work on their projects from anywhere.




</p>
                        <div>
                            <a onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)} href="https://aws.amazon.com/getting-started/hands-on/launch-windows-vm/" className='py-1 inline-block text-xl text-white font-semibold'>
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" className={` mb-[2px] text-white transition inline-block ml-3 ease-in duration-300  ${hovered1 ? "translate-x-0 ": "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hovered1 ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                                <div className={` ${hovered1 ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
                            </a>
                        </div>
                    </div>
                    <div className='overflow-hidden rounded-s-lg'>
                        <img className="w-full h-auto js-build-in-item build-in-scale-fade build-in-animate" width="1009" height="790" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://i.postimg.cc/qM4ypML7/1641064057-htx5x8-30495-min.jpg" />
                    </div>
                </HoverCard>
                <HoverCard backgroundColor = '#939aff' direction='flex-col' left='-400px'>
                    <div className='md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-semibold'>C# fundamentals</span> will be comprehensively covered from A to Z, starting with various data structures and progressing to more advanced topics.</p>
                    
                    </div>
                    <div className='overflow-hidden rounded-s-lg'>
                    <img className="w-full h-auto " width="1208" height="764" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://github.githubassets.com/images/modules/site/home-campaign/illu-code-scanning.png" />
                    </div>
                </HoverCard>
        </div>
    </div>
  )
}

export default Security