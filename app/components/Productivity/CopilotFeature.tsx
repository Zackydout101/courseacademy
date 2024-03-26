'use client'
import React, {useState} from 'react'
import HoverCard from './HoverCard'
import {motion} from "framer-motion"

type Props = {}

const CopilotFeature = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [showPy, setShowPy] = useState<boolean>(true)
    const [showJs, setShowJs] = useState<boolean>(false)
    const [showGo, setShowGo] = useState<boolean>(false)
    const [count, setCount] = useState(0);

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            delayChildren:.1,
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { type: 'tween' } },
    };

      
  return (
    <HoverCard backgroundColor = '#7ee787' direction='' left='0'>
    <div className='md:flex flex-col md:space-y-20 flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 justify-between '>
        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-medium'>Explore C#</span> and fundamental concepts like various data structures with our beginner-friendly courses, welcoming learners of all ages without any prior experience required.</p>
       
    </div>
    <div className='overflow-hidden rounded-s-lg z-[1] flex-1 shadow-3xl'>
        <div className='text-left border-[0.5px] bg-[#161b22] border-[#30363d] rounded-lg text-[#161b22] box-shadow-card-mktg md:mt-10 md:ml-0 sm:ml-10 sm:mr-10 mb-16 ml-3 mr-3 '>
            <div className=''>
                <div className='overflow-x-auto pt-2 px-2 mb-0 border-b-[0.5px] border-[#30363d] '>
                    <div className='flex items-center bg-[#161b22] text-[#7d8590] tab-nav'>
                        <button onClick={() => {setShowPy(true); setShowGo(false); setShowJs(false)}} type='button' className={`flex items-center  py-2 px-4 ${showPy ? "border-[0.5px] rounded-t-md border-b-[0] text-white border-[#30363d] bg-[#0d1117]" : ""}  `}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#68217A" d="M.1 22.07v-.2h6.5c3.55 0 5.3 1.76 5.3 5.27v.16c0-3.48 1.76-5.23 5.27-5.23h14.23c3.52 0 5.28 1.76 5.28 5.23v33.86c0 3.5-1.76 5.26-5.28 5.26H17.9c-3.52 0-5.27-1.76-5.27-5.26v-.17c0 3.5-1.75 5.27-5.3 5.27H.1c-3.52 0-5.27-1.75-5.27-5.27v-34.3c0-3.51 1.75-5.27 5.27-5.27zM35.66 89.54V39.85h-8.13c-3.5 0-5.27-1.75-5.27-5.26V24.34c0-3.51 1.76-5.27 5.27-5.27h27.43c6.97 0 10.46 3.55 10.46 10.65v4.26c0 7.63-3.81 11.45-11.44 11.45h-5.1c-5.17 0-7.76 2.65-7.76 7.94v11.82c0 5.35 2.59 8.03 7.76 8.03h5.1c7.63 0 11.44 3.82 11.44 11.45v4.26c0 7.59-3.49 11.4-10.46 11.4H35.66zM67.9 94.8c-1.23 0-2.16-.44-2.81-1.31-.66-.88-1-2.13-1-3.74 0-1.59.33-2.84 1-3.74.65-.88 1.58-1.31 2.81-1.31 1.22 0 2.15.44 2.8 1.31.66.9.99 2.15.99 3.74 0 1.61-.33 2.86-1 3.74-.66.87-1.58 1.31-2.8 1.31zm-10.49-5.82v4.2c0 7.59-3.48 11.4-10.45 11.4H41.6c-6.97 0-10.46-3.81-10.46-11.4v-4.2c0-7.6 3.49-11.4 10.46-11.4h5.27c6.97 0 10.45 3.81 10.45 11.4zm-17.55-1.46c0 1.56.35 2.8 1.06 3.7.7.9 1.63 1.35 2.79 1.35 1.15 0 2.08-.45 2.79-1.35.7-.9 1.06-2.14 1.06-3.7 0-1.58-.35-2.82-1.06-3.71-.7-.89-1.64-1.34-2.79-1.34-1.16 0-2.09.45-2.79 1.34-.71.89-1.06 2.13-1.06 3.71zm45.6-6.14V39.85h-8.14c-3.51 0-5.27-1.75-5.27-5.26V24.34c0-3.51 1.76-5.27 5.27-5.27h27.43c6.96 0 10.45 3.55 10.45 10.65v4.26c0 7.63-3.8 11.45-11.44 11.45h-5.11c-5.16 0-7.75 2.65-7.75 7.94v11.82c0 5.35 2.59 8.03 7.75 8.03h5.11c7.64 0 11.44 3.82 11.44 11.45v4.26c0 7.59-3.48 11.4-10.45 11.4h-8.09zM124.45 79.4c-1.23 0-2.15-.45-2.8-1.34-.66-.89-.99-2.13-.99-3.7 0-1.59.33-2.84.99-3.74.65-.88 1.57-1.33 2.8-1.33 1.22 0 2.15.45 2.81 1.34.66.9.99 2.15.99 3.74 0 1.57-.33 2.81-1 3.7-.65.89-1.58 1.34-2.8 1.34zM114.9 73.62v4.2c0 7.59-3.48 11.4-10.45 11.4h-5.27c-6.97 0-10.46-3.81-10.46-11.4v-4.2c0-7.6 3.49-11.4 10.46-11.4h5.27c6.97 0 10.45 3.81 10.45 11.4zm-17.55-1.46c0 1.56.35 2.8 1.06 3.7.7.9 1.63 1.35 2.79 1.35 1.16 0 2.08-.45 2.79-1.35.7-.9 1.06-2.14 1.06-3.7 0-1.58-.35-2.82-1.06-3.71-.71-.89-1.64-1.34-2.79-1.34-1.16 0-2.09.45-2.79 1.34-.71.89-1.06 2.13-1.06 3.71z"/></svg>

                            <span>beginner.cs</span>
                        </button>
                        <button></button>
                    </div>
                </div>
                <div className={`p-4 relative bg-[#0d1117] ${showPy ? "" : "hidden"}`}>
                    <div className='flex'>
                        <div className='text-[#6e7681] text-right'>
                            {Array.from({ length: 8 }, (_, index) => (
                            <div className="pr-2" key={index + 1}>{index + 1}</div>
                            ))}
                        </div>
                        <div key={count} className='flex-1 overflow-x-auto text-white rounded-b-md '>
                            <pre className=""><span className="code-editor-line-mktg"><span className="pl-k">using</span> <span className="pl-s1">System;</span></span></pre>
                            <pre className=""><span className="code-editor-line-mktg"></span></pre>
                            <pre className=""><motion.span variants={container} initial='hidden' whileInView='show' className="code-editor-line-mktg"><motion.span variants={item} className="pl-k js-type-letters">class</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-en js-type-letters">Program</motion.span></motion.span></pre>
                            <motion.div initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{delay:1, type:'just'}}>
                            <pre className=" bg-[#388bfd1a]"><span><span className="pl-s1">{"{"}</span><span className="pl-en"></span><span className="pl-s1"></span><span className="pl-s1"></span><span className="pl-s1"></span><span className="pl-c1"></span><span className="pl-c1"></span></span></pre>
                            <pre className=""><motion.span variants={container} initial='hidden' whileInView='show' className="code-editor-line-mktg"><motion.span variants={item} className="pl-k js-type-letters">   static void Main(string[] args){"{"}</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-en js-type-letters"></motion.span></motion.span></pre>
                            <pre className=" bg-[#388bfd1a]"><span><span className="pl-s1">{"   {"}</span><span className="pl-en"></span><span className="pl-s1"></span><span className="pl-s1"></span><span className="pl-s1"></span><span className="pl-c1"></span><span className="pl-c1"></span></span></pre>
                            <pre className=" bg-[#388bfd1a]"><span>    <span className="pl-s1"> Console.WriteLine("Coding is awesome");</span><span className="pl-en"></span><span className="pl-s"></span></span></pre>
                            <pre className=" bg-[#388bfd1a]"><span><span className="pl-s1">{"   }"}</span><span className="pl-en"></span><span className="pl-s1"></span><span className="pl-s1"></span><span className="pl-s1"></span><span className="pl-c1"></span><span className="pl-c1"></span></span></pre>

                            <div className="rounded-tl-none  bg-[#1f6feb] absolute color-fg-on-emphasis rounded-md font-bold flex items-center js-type-row p-2 f5 row-is-visible">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor" aria-hidden="true" className="mr-1"><path d="M5.5 8.75282C5.5 8.33863 5.83569 8.00282 6.25 8.00282C6.66415 8.00282 7 8.33861 7 8.75282V10.2489C7 10.6631 6.66431 10.9989 6.25 10.9989C5.83569 10.9989 5.5 10.6631 5.5 10.2489V8.75282Z"></path><path d="M10.5 8.75282C10.5 8.33863 10.1643 8.00282 9.75 8.00282C9.33551 8.00282 9 8.33881 9 8.75282V10.2489C9 10.6631 9.33569 10.9989 9.75 10.9989C10.1643 10.9989 10.5 10.6631 10.5 10.2489V8.75282Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M5.04443 0.0297942C6.05371 -0.0606599 7.3667 0.00708908 8 0.919809C8.6333 0.00708908 9.94629 -0.0606599 10.9556 0.0297942C12.1118 0.145761 13.0854 0.543222 13.6328 1.12708C14.5825 2.1648 14.6267 4.34144 14.1685 5.5398C14.2146 5.74464 14.2585 5.95216 14.29 6.17176C15.1366 6.39482 16 7.59408 16 8.45167V10.0717C16 10.5215 15.79 10.9314 15.4199 11.2114C13.3044 12.7835 10.6672 14.0012 8 14.0012C5.33276 14.0012 2.69556 12.7835 0.580078 11.2114C0.209961 10.9314 0 10.5215 0 10.0717V8.45167C0 7.59408 0.863428 6.39482 1.70996 6.17176C1.7416 5.95216 1.7855 5.74461 1.83154 5.5398C1.37329 4.34144 1.41748 2.1648 2.36719 1.12708C2.91455 0.543222 3.88818 0.145761 5.04443 0.0297942ZM8 12.5014C9.93994 12.5014 11.8501 11.6426 13 11.0028V6.65907C11.1445 7.37782 9.00928 7.00721 8.00146 5.34229H7.99854C6.99072 7.00721 4.85547 7.37782 3 6.65907V11.0028C4.1499 11.6426 6.06006 12.5014 8 12.5014ZM5 5.49879C6.64062 5.49879 7 4.20582 7 3.01832C7 1.91517 6.8125 1.50392 5.53125 1.50392C3.31396 1.50392 3.04688 2.25282 3.04688 4.00282C3.04688 5.10597 3.35938 5.49879 5 5.49879ZM11 5.49879C9.35938 5.49879 9 4.20582 9 3.01832C9 1.91517 9.1875 1.50392 10.4688 1.50392C12.686 1.50392 12.9531 2.25282 12.9531 4.00282C12.9531 5.10597 12.6406 5.49879 11 5.49879Z"></path></svg>
                                Coding is Awesome
                            </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className='absolute w-full z-[1]  bottom-[-60px] left-0 flex items-center justify-center mb-5'>
                        <button onClick={() => setCount(count + 1)}  type="button" className='flex items-center text-white justify-between'>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" fill='currentColor' width="16" data-view-component="true" className="octicon octicon-sync mr-2">
                                <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
                            </svg>
                            Replay
                        </button>
                    </div>
                </div>
                <div className={`p-4 relative bg-[#0d1117] ${showJs ? "": "hidden"}`}>
                    <div className='flex'>
                        <div className='text-[#6e7681] text-right'>
                            {Array.from({ length: 7 }, (_, index) => (
                            <div className="pr-2" key={index + 1}>{index + 1}</div>
                            ))}
                        </div>
                        <div key={count} className='flex-1 overflow-x-auto text-white rounded-b-md'>
                        <pre className=""><span className="code-editor-line-mktg d-inline-block"><span className="pl-k">const</span> <span className="pl-s1">seconds</span> <span className="pl-c1">=</span> <span className="pl-c1">3600</span></span></pre>
                        <pre className=""><motion.span variants={container} initial='hidden' whileInView='show' className="code-editor-line-mktg d-inline-block"><motion.span variants={item} className="pl-k js-type-letters">const</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-s1 js-type-letters">minutes</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-c1 js-type-letters">=</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-s1 js-type-letters">seconds</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-c1 js-type-letters">/</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-c1 js-type-letters">60</motion.span></motion.span></pre>
                        <motion.div initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{delay:1, type:'just'}}>
                        <pre className=" bg-[#388bfd1a]"><span><span className="pl-k">const</span> <span className="pl-s1">hours</span> <span className="pl-c1">=</span> <span className="pl-s1">minutes</span> <span className="pl-c1">/</span> <span className="pl-c1">60</span></span></pre>
                        <pre className=" bg-[#388bfd1a]"><span><span className="pl-k">const</span> <span className="pl-s1">days</span> <span className="pl-c1">=</span> <span className="pl-s1">hours</span> <span className="pl-c1">/</span> <span className="pl-c1">24</span></span></pre>
                        <pre className=" bg-[#388bfd1a]"><span><span className="pl-k">const</span> <span className="pl-s1">weeks</span> <span className="pl-c1">=</span> <span className="pl-s1">days</span> <span className="pl-c1">/</span> <span className="pl-c1">7</span></span></pre>
                        <pre className=" bg-[#388bfd1a]"><span><span className="pl-k">const</span> <span className="pl-s1">months</span> <span className="pl-c1">=</span> <span className="pl-s1">days</span> <span className="pl-c1">/</span> <span className="pl-c1">30</span></span></pre>
                        <pre className=" bg-[#388bfd1a]"><span><span className="pl-k">const</span> <span className="pl-s1">years</span> <span className="pl-c1">=</span> <span className="pl-s1">months</span> <span className="pl-c1">/</span> <span className="pl-c1">12</span></span></pre>
                        <div className="rounded-tl-none shadow-xl bg-[#1f6feb] absolute color-fg-on-emphasis rounded-md font-bold flex items-center js-type-row p-2 f5 row-is-visible">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor" aria-hidden="true" className="mr-1"><path d="M5.5 8.75282C5.5 8.33863 5.83569 8.00282 6.25 8.00282C6.66415 8.00282 7 8.33861 7 8.75282V10.2489C7 10.6631 6.66431 10.9989 6.25 10.9989C5.83569 10.9989 5.5 10.6631 5.5 10.2489V8.75282Z"></path><path d="M10.5 8.75282C10.5 8.33863 10.1643 8.00282 9.75 8.00282C9.33551 8.00282 9 8.33881 9 8.75282V10.2489C9 10.6631 9.33569 10.9989 9.75 10.9989C10.1643 10.9989 10.5 10.6631 10.5 10.2489V8.75282Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M5.04443 0.0297942C6.05371 -0.0606599 7.3667 0.00708908 8 0.919809C8.6333 0.00708908 9.94629 -0.0606599 10.9556 0.0297942C12.1118 0.145761 13.0854 0.543222 13.6328 1.12708C14.5825 2.1648 14.6267 4.34144 14.1685 5.5398C14.2146 5.74464 14.2585 5.95216 14.29 6.17176C15.1366 6.39482 16 7.59408 16 8.45167V10.0717C16 10.5215 15.79 10.9314 15.4199 11.2114C13.3044 12.7835 10.6672 14.0012 8 14.0012C5.33276 14.0012 2.69556 12.7835 0.580078 11.2114C0.209961 10.9314 0 10.5215 0 10.0717V8.45167C0 7.59408 0.863428 6.39482 1.70996 6.17176C1.7416 5.95216 1.7855 5.74461 1.83154 5.5398C1.37329 4.34144 1.41748 2.1648 2.36719 1.12708C2.91455 0.543222 3.88818 0.145761 5.04443 0.0297942ZM8 12.5014C9.93994 12.5014 11.8501 11.6426 13 11.0028V6.65907C11.1445 7.37782 9.00928 7.00721 8.00146 5.34229H7.99854C6.99072 7.00721 4.85547 7.37782 3 6.65907V11.0028C4.1499 11.6426 6.06006 12.5014 8 12.5014ZM5 5.49879C6.64062 5.49879 7 4.20582 7 3.01832C7 1.91517 6.8125 1.50392 5.53125 1.50392C3.31396 1.50392 3.04688 2.25282 3.04688 4.00282C3.04688 5.10597 3.35938 5.49879 5 5.49879ZM11 5.49879C9.35938 5.49879 9 4.20582 9 3.01832C9 1.91517 9.1875 1.50392 10.4688 1.50392C12.686 1.50392 12.9531 2.25282 12.9531 4.00282C12.9531 5.10597 12.6406 5.49879 11 5.49879Z"></path></svg>
                            Copilot
                        </div>
                        </motion.div>
                        </div>
                    </div>
                    <div className='absolute w-full z-[1]  bottom-[-60px] left-0 flex items-center justify-center mb-5'>
                        <button onClick={() => setCount(count + 1)}  type="button" className='flex items-center text-white justify-between'>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" fill='currentColor' width="16" data-view-component="true" className="octicon octicon-sync mr-2">
                                <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
                            </svg>
                            Replay
                        </button>
                    </div>
                </div>
                <div className={`p-4 relative bg-[#0d1117] ${showGo ? "" : "hidden"}`}>
                    <div className='flex'>
                        <div className='text-[#6e7681] text-right'>
                            {Array.from({ length: 11 }, (_, index) => (
                            <div className="pr-2" key={index + 1}>{index + 1}</div>
                            ))}
                        </div>
                        <div key={count} className='flex-1 overflow-x-auto text-white rounded-b-md'>
                        <pre className=""><span className="code-editor-line-mktg d-inline-block"><span className="pl-k">package</span> main</span></pre>
                        <pre className=""><motion.span variants={container} initial='hidden' whileInView='show' className="code-editor-line-mktg d-inline-block"><motion.span variants={item} className="js-type-letters">  </motion.span><motion.span variants={item} className="pl-k js-type-letters">func</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-en js-type-letters">Memoize</motion.span><motion.span variants={item} className="js-type-letters">(</motion.span><motion.span variants={item} className="pl-s1 js-type-letters">fn</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-k js-type-letters">func</motion.span><motion.span variants={item} className="js-type-letters">{'('}</motion.span><motion.span variants={item} className="pl-smi js-type-letters">int</motion.span><motion.span variants={item} className="js-type-letters">) </motion.span><motion.span variants={item} className="pl-smi js-type-letters">int</motion.span><motion.span variants={item} className="js-type-letters">) </motion.span><motion.span variants={item} className="pl-k js-type-letters">func</motion.span><motion.span variants={item} className="js-type-letters">{'('}</motion.span><motion.span variants={item} className="pl-smi js-type-letters">int</motion.span><motion.span variants={item} className="js-type-letters">{')'} </motion.span><motion.span variants={item} className="pl-smi js-type-letters">int</motion.span><motion.span variants={item} className="js-type-letters"> {'{'} </motion.span></motion.span></pre>
                        <motion.div initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{delay:1.5, type:'just'}}>
                        <pre className=" bg-[#388bfd1a]"><span>      <span className="pl-s1">cache</span> <span className="pl-c1">:=</span> <span className="pl-en">make</span>(<span className="pl-k">map</span>[<span className="pl-smi">int</span>]<span className="pl-smi">int</span>)</span></pre>
                        <pre className=" bg-[#388bfd1a]"><span>      <span className="pl-k">return</span> <span className="pl-k">func</span>(<span className="pl-s1">n</span> <span className="pl-smi">int</span>) <span className="pl-smi">int</span> {'{'}</span></pre>
                        <pre className=" bg-[#388bfd1a]"><span>          <span className="pl-k">if</span> <span className="pl-s1">v</span>, <span className="pl-s1">ok</span> <span className="pl-c1">:=</span> <span className="pl-s1">cache</span>[<span className="pl-s1">n</span>]; <span className="pl-s1">ok</span>  {'{'}</span></pre>
                        <pre className=" bg-[#388bfd1a]"><span>              <span className="pl-k">return</span> <span className="pl-s1">v</span></span></pre>
                        <pre className=" bg-[#388bfd1a]"><span>          {'}'}</span></pre>
                        <pre className=" bg-[#388bfd1a]"><span>          <span className="pl-s1">cache</span>[<span className="pl-s1">n</span>] <span className="pl-c1">=</span> <span className="pl-en">fn</span>(<span className="pl-s1">n</span>)</span></pre>
                        <pre className=" bg-[#388bfd1a]"><span>          <span className="pl-k">return</span> <span className="pl-s1">cache</span>[<span className="pl-s1">n</span>]</span></pre>
                        <pre className=" bg-[#388bfd1a]"><span>      {'}'}</span></pre>
                        <pre className=" bg-[#388bfd1a]"><span >  {'}'}</span></pre>
                        <div className="rounded-tl-none shadow-xl bg-[#1f6feb] absolute color-fg-on-emphasis rounded-md font-bold flex items-center js-type-row p-2 f5 row-is-visible">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor" aria-hidden="true" className="mr-1"><path d="M5.5 8.75282C5.5 8.33863 5.83569 8.00282 6.25 8.00282C6.66415 8.00282 7 8.33861 7 8.75282V10.2489C7 10.6631 6.66431 10.9989 6.25 10.9989C5.83569 10.9989 5.5 10.6631 5.5 10.2489V8.75282Z"></path><path d="M10.5 8.75282C10.5 8.33863 10.1643 8.00282 9.75 8.00282C9.33551 8.00282 9 8.33881 9 8.75282V10.2489C9 10.6631 9.33569 10.9989 9.75 10.9989C10.1643 10.9989 10.5 10.6631 10.5 10.2489V8.75282Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M5.04443 0.0297942C6.05371 -0.0606599 7.3667 0.00708908 8 0.919809C8.6333 0.00708908 9.94629 -0.0606599 10.9556 0.0297942C12.1118 0.145761 13.0854 0.543222 13.6328 1.12708C14.5825 2.1648 14.6267 4.34144 14.1685 5.5398C14.2146 5.74464 14.2585 5.95216 14.29 6.17176C15.1366 6.39482 16 7.59408 16 8.45167V10.0717C16 10.5215 15.79 10.9314 15.4199 11.2114C13.3044 12.7835 10.6672 14.0012 8 14.0012C5.33276 14.0012 2.69556 12.7835 0.580078 11.2114C0.209961 10.9314 0 10.5215 0 10.0717V8.45167C0 7.59408 0.863428 6.39482 1.70996 6.17176C1.7416 5.95216 1.7855 5.74461 1.83154 5.5398C1.37329 4.34144 1.41748 2.1648 2.36719 1.12708C2.91455 0.543222 3.88818 0.145761 5.04443 0.0297942ZM8 12.5014C9.93994 12.5014 11.8501 11.6426 13 11.0028V6.65907C11.1445 7.37782 9.00928 7.00721 8.00146 5.34229H7.99854C6.99072 7.00721 4.85547 7.37782 3 6.65907V11.0028C4.1499 11.6426 6.06006 12.5014 8 12.5014ZM5 5.49879C6.64062 5.49879 7 4.20582 7 3.01832C7 1.91517 6.8125 1.50392 5.53125 1.50392C3.31396 1.50392 3.04688 2.25282 3.04688 4.00282C3.04688 5.10597 3.35938 5.49879 5 5.49879ZM11 5.49879C9.35938 5.49879 9 4.20582 9 3.01832C9 1.91517 9.1875 1.50392 10.4688 1.50392C12.686 1.50392 12.9531 2.25282 12.9531 4.00282C12.9531 5.10597 12.6406 5.49879 11 5.49879Z"></path></svg>
                            Copilot
                        </div>
                        </motion.div>
                    </div>
                    <div onClick={() => setCount(count + 1)}  className='absolute w-full z-[1]  bottom-[-60px] left-0 flex items-center justify-center mb-5'>
                        <button type="button" className='flex items-center text-white justify-between'>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" fill='currentColor' width="16" data-view-component="true" className="octicon octicon-sync mr-2">
                                <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
                            </svg>
                            Replay
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</HoverCard>
  )
}

export default CopilotFeature