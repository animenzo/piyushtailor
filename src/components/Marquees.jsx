import React from "react";
import Marquee from "./Marquee";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiC,
  SiCplusplus,
  SiPostman,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  
  SiJavascript,
  SiMysql
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Marquees = () => {
  const icons = [
    [
      <SiReact size={40} />,
      <SiHtml5 size={40} />,
      <SiCss3 size={40} />,
      <SiTailwindcss size={40} />,
      <SiJavascript size={40} />,
      <SiMongodb size={40} />,
      <SiNodedotjs size={40} />,
      <SiExpress size={40} />,
      <SiC size={40} />,
      <SiCplusplus size={40} />,
      <SiGithub size={40} />,
      <SiPostman size={40} />,
      <VscCode size={40} />,
      <SiMysql size={40} />
    ],
    [
      <SiReact size={40} />,
      <SiHtml5 size={40} />,
      <SiCss3 size={40} />,
      <SiTailwindcss size={40} />,
      <SiJavascript size={40} />,
      <SiMongodb size={40} />,
      <SiNodedotjs size={40} />,
      <SiExpress size={40} />,
      <SiC size={40} />,
      <SiCplusplus size={40} />,
      <SiGithub size={40} />,
      <SiPostman size={40} />,
      <VscCode size={40} />,
      <SiMysql size={40} />
    ]
  ];

  return (
    <div className="mt-2 w-full relative overflow-hidden">
      {icons.map((row, index) => (
        <Marquee
          direction={index === 0 ? "left" : "right"}
          key={index}
          imagesurl={row}
        />
      ))}
    </div>
  );
};

export default Marquees;
