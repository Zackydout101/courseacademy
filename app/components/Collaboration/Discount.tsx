import React, {useState} from 'react'
import {motion} from "framer-motion"

type Props = {}

const Discount = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
  return (
    <div className='flex relative md:pl-10'>
    <div className='flex items-center flex-row relative'>
        <motion.div initial={{height:0}} whileInView={{height:'100%'}} className='w-[3px] h-full increase1'></motion.div>
        <img
            alt=""
            aria-hidden="true"
            width="81"
            height="485"
            style={{
                left: 'calc(50% - 2px)',
                height: 'auto',
                maxWidth: '9vw',
                transitionDelay: '100ms',
            }}
            className="hidden md:block absolute bottom-4 left-0"
            loading="lazy"
            decoding="async"
            src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-collaboration.svg"
        />
    </div>
    <div className='lg:pl-24 md:pl-16 pl-6'>
        <div className='flex max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-12 md:my-16 pb-6 md:pb-20 md:flex-row'>
            <div className='py-4 mb-2 w-full'>
                <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{type:'tween', duration:0.3}} className='md:pr-6'>
                    <h2 className="mb-4 text-2xl max-lg:text-[20px] max-md:w-10/12 lg:w-full w-full text-[#7d8590]"><span className='font-semibold text-white'>Our Learning Environment</span>  encourages participation and engagement. We prioritize understanding individual needs and tailoring our teaching methods</h2> 
                    <p className='text-[#ffa28b] py-1 inline-block text-xl text-white font-semibold'>
                        As students ourselves, we know what works and what dosen't !
                      
                    </p>
                </motion.div>
            </div>
            <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{type:'tween', duration:0.3}} className='py-4 px-6 w-full'>
                <div className='relative'>
                    <div className='relative'>
                        <div className='md:absolute z-[1] top-[-200px] lg:top-[-300px] right-0 shadow-2xl'>
                        <img src="https://i.postimg.cc/sDPN3Lp8/animations.png" alt="" loading="lazy" decoding="async" width="1790" height="1104" className="w-full h-auto d-block rounded-lg" />
                        </div>  
                    </div>
                </div>
            </motion.div>
        </div>
        <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{type:'tween', duration:0.3}} className='mb-10 md:mb-32 pb-4 '>
            <div className='py-4 text-left'>
                <div className='z-[1] inline-block rounded-full px-2 border-2 border-[#ffc2b2] relative font-medium bg-gradient-to-r from-[#ffa28b] to-[#ffc2b2] bg-clip-text text-transparent'>
                    <span className='font-semibold text-[12px]'>Did you know?</span>
                </div>
                <h3 className="text-[#ffa28b] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium">Our Courses is designed for ALL ages.</h3>
                <p className="mb-3 md:text-xl text-base font-medium text-white">Every student will emerge from this course with all the necessary tools to create their own games.</p>
            </div>
        </motion.div>
    </div>
  </div>
  )
}

export default Discount