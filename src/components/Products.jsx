import React, { useState, useEffect } from 'react';
import Product from './Product';
import { motion } from 'framer-motion';
import moviefy from '../assets/moviefy.webm';
import clg from '../assets/clg.webm';
import bidkar from '../assets/bidkar.webm';
import portfolio from '../assets/portfolio.webm';



import Button from './Button';
import { Link } from 'react-router-dom';

const Products = () => {
  const [pos, setPos] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const products = [
    {
      title: "Movie-fy",
      description: " The app allows users to browse trending titles, search for specific movies, and view detailed info in a modern responsive UI",
      tech: ["React", "Tailwind", "Framer Motion", "TMDB API"],
      img: moviefy,
      link: "https://moviefy-a-movie-webapp-in-react.vercel.app/"
    },
    {
      title: "BidKar",
      description: "Designed secure JWT-based user authentication and RESTful API routes for auctions and users.Created responsive frontend with reusable components (AuctionList, AuctionItem, Navbar, etc.)",
      tech: ["React", "CSS Modules", "Monogodb", "Nodejs", "Expressjs"],
      img: bidkar,
      link: "https://auctionplatform-be.onrender.com/",
    },
    {
      title: "IET College",
      description: "Developed a responsive multipage college website in 3rd Semester showcasing features like event information, faculty details, and course offerings, ensuring an intuitive and user-friendly interface.",
      tech: ["HTML", "CSS", "Javascript"],
      img: clg,
      link: "https://animenzo.github.io/collegeproject/",
    },
    {
      title: "Personal Portfolio",
      description: "My personal portfolio",
      tech: ["React","Framer Motion","Tailwind"],
      img: portfolio,
      link: "https://piyushtailor.vercel.app/",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  const mover = (val) => {
    setPos(val * 13)
    
  };
  

  return (
    <div id='#products' className="xl:mt-20  mt-2 relative">
      <motion.h1 
        className="text-3xl xl:text-4xl mb-2 text-center"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="inline-block mb-4 border-x-2 border-zinc-600 px-4">
          Featured Projects
        </span>
      </motion.h1>
      <motion.p
        className="text-center text-zinc-500 dark:text-zinc-300 mb-8"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Recently Deployed — My Most Active Repos
      </motion.p>
      {/* Desktop View */}
      {!isMobile && products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}

      {!isMobile && (
      
         <div className="w-full h-full absolute top-0 pointer-events-none border-r-2 ">
       
              
               <motion.div initial={{y:pos, x:"-50%"}} 
            animate={{y:pos+`rem`}}
            className='w-[25rem] window  absolute left-[40%]  overflow-hidden mt-36  rounded-lg h-[13rem] '>
                <motion.div animate={{y: -pos+`rem`}} 
                transition={{ease:[0.76, 0, 0.24,1], duration: 0.5}}
                className='w-full bg-zinc-400  h-full'>
                   
                   
                            <video autoPlay muted loop>
                                <source src={moviefy} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        
                    
                </motion.div>
                <motion.div animate={{y: -pos+`rem`}}  
                 transition={{ease:[0.76, 0, 0.24,1], duration: 0.5}} className='w-full bg-zinc-500  h-full'>
                     <video autoPlay muted loop>
                                <source src={bidkar} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                 </motion.div>
                <motion.div animate={{y: -pos+`rem`}}  
                 transition={{ease:[0.76, 0, 0.24,1], duration: 0.5}}
                className='w-full bg-zinc-600  h-full'>
                     <video autoPlay muted loop>
                                <source src={clg} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                </motion.div>
                <motion.div  transition={{ease:[0.76, 0, 0.24,1], duration: 0.5}} animate={{y: -pos+`rem`}}  className='w-full bg-zinc-700  h-full'>
                <video autoPlay muted loop>
                                <source src={moviefy} type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                </motion.div>
              
            </motion.div>
           
          
        
         
        </div>
      
      )}

      {/* Mobile View */}
      {isMobile && (
        <div className="overflow-hidden px-4">
          <motion.div
            drag="x"
            dragConstraints={{ left: -((products.length - 1) * 320), right: 0 }}
            className="flex space-x-6 cursor-grab active:cursor-grabbing"
            style={{ width: `${products.length * 320}px` }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] max-w-[320px] dark:bg-transparent bg-emerald-50 border-2 rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <video
                  className="w-full h-48 object-cover"
                  src={product.img}
                  muted
                  autoPlay
                  loop
                />
                <div className="p-4">
                  <div className='justify-between flex'>
                    <h2 className="text-xl font-bold dark:text-white text-black mb-2">{product.title}</h2>

                    <a href={product.link}><Button /></a>

                  </div>
                  <p className="dark:text-gray-300 text-zinc-700 text-sm mb-3">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-white text-black text-xs px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
  <div className='  mt-10 items-center justify-center flex relative'>
               <Link to={"/all-projects"} className='border-x-1 border-zinc-600 px-1 hover:text-blue-400'>See All Projects</Link>
             </div>
    </div>
  );
};

export default Products;
