import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

import {motion} from 'framer-motion'


export function Footer(props) {

    const text = [
        { char: 'P', className: 'text-blue-400' },
        { char: 'i' },
        { char: 'y' },
        { char: 'u' },
        { char: 's' },
        { char: 'h' },
        { char: '.', className: 'text-green-500' },
        { char: 'D', className: 'text-blue-400' },
        { char: 'e', className: 'text-blue-400' },
        { char: 'v', className: 'text-blue-400' },
      ];

    return (
        <div className="w-full border-t border-gray-300">
            <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col xl:flex-row justify-between gap-8">
                <div className="flex-1">
                    <h1 className="text-3xl xl:text-6xl font-semibold leading-none tracking-tight flex">
                        {text.map((item, index) => (
        <motion.span
          key={index}
          className={item.className || ''}
          
          animate={{
            y: [0, -4, 0],
            opacity: [1, 0.5, 1],
            filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
            delay: index * 0.1,
            ease: "easeInOut"
          }}
        >
          {item.char}
        </motion.span>
      ))}
                    </h1>
                </div>

                <div className="flex flex-1 gap-8 justify-between flex-wrap">
                    <div className="min-w-[150px]">
                        <h4 className="mb-3 capitalize">socials.</h4>
                        <a href="https://www.linkedin.com/in/piyush-tailor-641b7015a" className="hover:text-blue-500 flex items-center gap-2 mt-3 text-zinc-600 capitalize">
                            Linkedin <FaLinkedinIn />
                        </a>
                        <a href="https://github.com/animenzo" className="hover:text-blue-500 flex items-center gap-2 mt-3 text-zinc-600 capitalize">
                            Github <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/piyusshh_?igsh=MWNkaGVzazljeGo0Zg==" className="hover:text-blue-500 flex items-center gap-2 mt-3 text-zinc-600 capitalize">
                            Instagram <FaInstagram />
                        </a>
                    </div>

                    <div className="min-w-[150px]">
                        <h4 className="mb-3 capitalize">Navigation.</h4>
                        <div className=' grid grid-cols-2'>
                            <Link to="/" className="hover:text-blue-500 flex items-center gap-2 mt-3 text-zinc-600 capitalize">
                            Home 
                        </Link>   
                        <a href="#projects" className="hover:text-blue-500 flex items-center gap-2 mt-3 text-zinc-600 capitalize">
                            Projects 
                        </a>
                        <a href="#skills" className="hover:text-blue-500 flex items-center gap-2 mt-3 text-zinc-600 capitalize">
                            Skills 
                        </a>
                         <Link to="/all-projects" className="hover:text-blue-500 flex items-center gap-2 mt-3 text-zinc-600 capitalize">
                            All Projects 
                        </Link>
                        <a href="#contact" className="hover:text-blue-500 flex items-center gap-2 mt-3 text-zinc-600 capitalize">
                            contact 
                        </a>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-zinc-500 font-extralight py-4 px-4 text-sm">
                Piyush Tailor Copyright © 2025. All rights reserved.
            </div>
        </div>
    );
}
