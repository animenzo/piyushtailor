import React from 'react'
import {motion} from 'framer-motion'
import { FaGraduationCap } from "react-icons/fa6";


export function Education(props) {
    

    return (
        <>
            <div className='p-10 mb-10 font-sans'>
                <div className='p-10 max-w-[80vh] bg-transparent border-zinc-400 overflow-hidden mx-auto rounded-xl border-2 shadow-2xl mt-6'>
                    <h1 className='text-blue-400 text-2xl font-semibold flex items-center gap-2 mb-6'><FaGraduationCap className='text-green-400 '/>Education</h1>
                    <div className='border-l-1 border-zinc-400 ml-2 space-y-8'>
                        <motion.div className='pl-6 relative'
                        initial={{opacity:0, x:-30}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:0.5, delay:0.1}}
                        viewport={{once:true}}

                        >
                            <div className='absolute left-[-5px] top-1.5 w-2 h-2 bg-gray-400 rounded-full '></div>
                                
                            
                            <p className='text-sm text-gray-400'>2022-2026:</p>
                            <p className='text-blue-400 font-medium'>IET, MLSU, Udaipur, Rajasthan</p>
                            
                            <p className='text-sm mt-1 dark:text-gray-300 text-gray-600 ml-40'>B.Tech in Computer Science</p>

                        </motion.div>
                        <motion.div className='pl-6 relative'
                        initial={{opacity:0, x:-30}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:0.5, delay:0.2}}
                        viewport={{once:true}}
                        
                        >
                            <div className='absolute left-[-5px] top-1 w-2 h-2 bg-gray-500 rounded-full'></div>
                                
                            
                            <p className='text-sm text-gray-400'>2022:</p>
                            <p className='text-blue-400 font-medium'>Swami Vivekanand Govt. Model School, Bhim , Rajsamand, Rajasthan</p>
                            
                            <p className='text-sm mt-1 dark:text-gray-300 text-gray-600 ml-40'>12th PCM  <span className='xl:ml-15  text-green-400'>- 88.4%</span></p>

                        </motion.div>
                        
                       
                    </div>
                </div>
            </div>
        </>
    )
}
