import React from 'react'
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Project({ imageSrc, title, technologies, description,viewLink, githubLink }) {
    

    return (
        <>
             <motion.div
      className="max-w-[43vh] xl:max-w-[48vh] bg-transparent rounded-lg shadow-xl overflow-hidden border-zinc-500 border-2 mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Project Image */}
      <img
        src={imageSrc}
        alt={`${title} screenshot`}
        className="w-full h-48 rounded-md object-cover"
      />

      <div className="p-5">
        {/* Project Title */}
        <h3 className="text-xl border-b-2 border-cyan-900  font-semibold mb-2">{title}</h3>

      
          <p className="text-zinc-800 dark:text-zinc-200 border-cyan-600  border-b-2 mb-2 text-md leading-5">{description}</p>
            {/* Technologies */}
        <div className="flex flex-wrap border-cyan-600  border-b-2 gap-1 py-1 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100   text-blue-800 text-xs font-medium mr-1 px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className='flex gap-4 flex-wrap ml-2'>
           {viewLink ? (
    <a
      href={viewLink}
      
      className="cursor-pointer hover:scale-125 transition-transform dark:text-zinc-300 text-lg"
    >
      <FaExternalLinkAlt />
    </a>
  ) : null}
       
        <a href={githubLink} className='cursor-pointer  transition hover:scale-125 dark:text-zinc-300 text-xl'>
<FaGithub />
        </a>
        </div>
       

      </div>
    </motion.div>
        </>
    )
}
