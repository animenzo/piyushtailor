import React from 'react';
import Button from './Button';

const Product = ({ val, mover, count }) => {
  return (
    <div 
      onMouseEnter={() => mover(count)} 
      className='w-full  py-10 xl:py-20 h-auto xl:h-[14rem] dark:text-white text-zinc-800'
    >
      <div className='max-w-screen-xl mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4'>
        <h1 className='text-3xl xl:text-4xl capitalize font-semibold'>{val.title}</h1>

        {/* On large screens, description is always visible; on small screens it's hidden by default and shown on hover */}
        <div className='relative w-full xl:w-1/3 group'>
          <p className='hidden group-hover:block xl:block mb-2 transition-all duration-300'>
            {val.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
           { val.tech.map((tech,i) => (
<span
                       
                        className="bg-blue-400 text-black text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
            ))}
          </div>
            
     <div className='items-center flex gap-5'>
           <a href={val.link} target='_blank'><Button /></a>
     </div>
        </div>
        
      </div>
    
    </div>
  );
};

export default Product;
