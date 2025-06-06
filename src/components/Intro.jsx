import React, { useEffect, useRef, useState } from "react";
import Resume from '../assets/Piyush_Tailor_Resume.pdf'
const words = ["Web Development", "Software Development", "App Development"];
import { motion } from 'framer-motion';

export function Intro() {

  const wordRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Split each word into spans on mount
  useEffect(() => {
    wordRefs.current.forEach((el, i) => {
      const word = words[i];
      el.innerHTML = "";
      word.split("").forEach((char) => {
        const span = document.createElement("span");
        span.className = "letter";
        span.textContent = char === " " ? "\u00A0" : char;
        el.appendChild(span);
      });

      el.style.opacity = i === 0 ? "1" : "0";
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = wordRefs.current[currentIndex];
      const nextIndex = currentIndex === words.length - 1 ? 0 : currentIndex + 1;
      const next = wordRefs.current[nextIndex];

      if (!current || !next) return;

      Array.from(current.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = "letter out";
        }, i * 80);
      });

      next.style.opacity = "1";
      Array.from(next.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
          letter.className = "letter in";
        }, 340 + i * 80);
      });

      setTimeout(() => {
        current.style.opacity = "0";
      }, 340 + next.children.length * 80);

      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  


  return (
    <div id="#home" className="w-full h-full xl:min-h-[60vh] xl:mt-20 mt-10 min-h-[70vh] py-2 px-[8%] xl:px-[15%] grid xl:grid-cols-2 items-center gap-16 relative">
      <div className="xl:max-w-[500px] w-full relative">
        <h1 className="xl:text-5xl text-4xl font-bold">Hi! I'm Piyush Tailor</h1>
        <div className="text-[1.1rem] xl:text-[1.6rem] font-semibold relative h-14 overflow-hidden mt-2">
          <h3 className="inline-flex">And I'm learning&nbsp;</h3>
          <h3 className="relative inline-block h-5 text-blue-400">
            {words.map((word, i) => (
              <span
                key={i}
                ref={(el) => (wordRefs.current[i] = el)}
                className="word"
              ></span>
            ))}
          </h3>
        </div>
        <p className="leading-[1.5] xl:text-lg">
          I’m an enthusiastic learner in software development, currently exploring the MERN stack and React Native by building hands-on projects. I'm focused on strengthening my skills and expanding my knowledge with each new challenge I take on.
        </p>

        <div className="flex items-center gap-2 mt-3">
          <h5 className="text-xl">Email:</h5>
          <span className="text-md dark:text-blue-300">
            <a className="hover:text-green-200" href="mailto:piyush.tailor.5076@gmail.com">piyush.tailor.5076@gmail.com</a>
          </span>
        </div>

        <div className="btn-box flex gap-4 mt-6">
          <a
            href={Resume}
            target="_blank"

            className="btn  px-6 ml-3 py-2 rounded-xl font-semibold text-zinc-800  transition"
          >
            Resume
          </a>
          <a
            href="mailto:piyush.tailor.5076@gmail.com"
            className="btn  px-6 ml-3 py-2 rounded-xl font-semibold text-zinc-800  transition "
          >
            Hire me now!
          </a>
        </div>

        <div className="mt-4 flex gap-4 text-2xl">
          <a href="https://www.instagram.com/piyusshh_?igsh=MWNkaGVzazljeGo0Zg==" className="hover:text-red-400" target="_blank" rel="noreferrer">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://github.com/animenzo" target="_blank" className="hover:text-zinc-500" rel="noreferrer">
            <i className="ri-github-fill"></i>
          </a>
          <a href="https://www.linkedin.com/in/piyush-tailor-641b7015a" className="hover:text-blue-500" target="_blank" rel="noreferrer">
            <i className="ri-linkedin-fill"></i>
          </a>
        </div>
      </div>
      <motion.div
      className="relative w-[220px] h-[220px]  mx-auto xl:block hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Background Layer 1 */}
      <div className="absolute w-full h-full rounded-xl bg-cover bg-center rotate-[15deg] top-0 left-0 z-0 shadow-lg "
        style={{
          backgroundImage: `url(/assets/grass.jpeg)`,
          filter: "brightness(0.6)",
        }}
      ></div>

      {/* Background Layer 2 */}
      <div className="absolute w-full h-full rounded-xl bg-cover bg-center rotate-[-15deg] top-0 left-0 z-0 shadow-lg  "
        style={{
          backgroundImage: `url(/assets/coder.jpeg)`,
          filter: "brightness(0.75)",
        }}
      ></div>

      {/* Foreground Image */}
      <motion.img
        src="/assets/profilepic.jpeg"
        alt="Piyush Tailor"
        className="relative z-10 w-full h-full rounded-xl object-cover  shadow-2xl"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />
    </motion.div>
    </div>
  );
}
