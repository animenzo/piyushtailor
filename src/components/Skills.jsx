import React from 'react';
import { motion } from 'framer-motion';

const technicalSkills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'React', level: 85 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'MongoDB', level: 70 },
  { name: 'Node.js', level: 75 },
  { name: 'Express.js', level: 70 },
  { name: 'C', level: 85 },
  { name: 'C++', level: 80 },
  { name: 'GitHub', level: 85 },
  { name: 'Postman', level: 80 },
];

const professionalSkills = [
  { name: 'Team Work', level: 80 },
  { name: 'Project Management', level: 70 },
  { name: 'Problem Solving', level: 85 },
  { name: 'Creativity', level: 75 },
];

export function Skills() {
  return (
    <section id='#skills' className=" text-zinc-800 dark:text-white py-24 px-4 md:px-10">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        
        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex justify-between mb-1 font-medium text-sm">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-zinc-300 dark:bg-zinc-700 h-3 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    className="h-3 bg-gradient-to-r from-blue-500 to-red-500 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.6)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-red-600 dark:text-red-400">Professional Skills</h3>
          <div className="grid grid-cols-2 gap-8 justify-items-center">
            {professionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="relative w-32 h-32 rounded-full flex items-center justify-center bg-gradient-to-br from-black/20 via-white/10 to-black/20 backdrop-blur-md shadow-xl"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <svg className="absolute w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    stroke="black"
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="282"
                    strokeDashoffset="282"
                    animate={{ strokeDashoffset: 282 - (282 * skill.level) / 100 }}
                    transition={{ duration: 1.2 }}
                    className="drop-shadow-glow"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="text-center z-10">
                  <div className="text-xl font-extrabold">{skill.level}%</div>
                  <div className="text-sm font-medium">{skill.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
