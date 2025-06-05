import React, { useState } from 'react';
import { DarkModelToggler } from './DarkModelToggler';
import { Link } from 'react-router-dom';

import {motion} from 'framer-motion'

export function Navbar() {
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className='max-w-screen-xl z-20  rounded-md mx-auto border-b border-zinc-700  py-2 px-4 flex justify-between items-center  fixed backdrop-blur-md dark:bg-zinc-800/30 w-full shadow-md top-0 xl:left-32'>
        <div className='flex items-center'>
          
        <h1 className='text-xl font-bold flex'>
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
        <DarkModelToggler/>

        {/* Desktop Nav */}
        <div className='hidden ml-[25em] xl:flex gap-10 '>
        <Link to="/" className='hover:text-green-400'>Home</Link>

          {["Intro", "Projects", "Skills", "Contact"].map((elem, index) => (
            <a href={`#${elem.toLowerCase()}`} key={index} className='hover:text-blue-200 text-sm flex items-center gap-1'>
              {index === 1 && (
                <span style={{ boxShadow: "0 0 0.45em #00FF19" }} className='inline-block w-1 bg-green-200 rounded-full'></span>
              )}
              {elem}
            </a>
          ))}
        <Link to="/all-projects" className='hover:text-green-400 ml-10'>All Projects</Link>

        </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="xl:hidden cursor-pointer text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`
          xl:hidden
  fixed top-14 left-0 w-full  dark:bg-black/40 bg-white/50
  transition-all duration-300 ease-in-out z-50 
  flex flex-col items-center gap-6 py-4 font-semibold text-lg
        ${isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-5'}
      `}>
        <Link to="/">Home</Link>
        {["Intro", "Projects", "Skills", "Contact",].map((elem, index) => (
          <a href={`#${elem.toLowerCase()}`} key={index} className='hover:text-blue-500 text-zinc-800 dark:text-white'>
            {elem}
          </a>
        ))}
        <Link to="/all-projects">All Projects</Link>
        
     

      </div>
       
        
       
    </>
  );
}
