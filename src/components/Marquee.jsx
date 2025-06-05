import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ imagesurl, direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex xl:gap-40 w-[100%] xl:mb-20 mb-15 h-[6vh] gap-20 xl:h-[7vh] shrink-0 items-center"
      >
        {imagesurl.map((icon, index) => (
          <div key={index} className="text-blue-500 dark:text-white">
            {icon}
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex gap-20 xl:gap-40 w-20 h-10 shrink-0 items-center"
      >
        {imagesurl.map((icon, index) => (
          <div key={index} className="text-blue-500 dark:text-white">
            {icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
