import React, { useRef, useState } from "react";
import { SkillDiv } from "./Skill.style";
import { DiMongodb } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";

const SkillCard = ({ x }) => {
  const skillVariant = useRef({
    hidden: {
      opacity: 0,
      x: x,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  });
  const [height, setHeight] = useState({ h: 0, w: 0 });
  const handleClick = (h, w) => {
    console.log("hello");
    console.log(h, w);
    setHeight({ h, w });
  };
  return (
    <SkillDiv
      height={height.h}
      width={height.w}
      variants={skillVariant.current}
    >
      <h3>Back End</h3>
      <div className='skills'>
        <div className='skillIcon' onClick={() => handleClick(70, 800)}>
          <IoLogoNodejs className='Icon' style={{ color: "#41873F" }} />
          <span className='skillName'>Node.js</span>
        </div>
        <div className='skillIcon' onClick={() => handleClick(70, 800)}>
          <SiExpress className='Icon' />
          <span className='skillName'>Express </span>
        </div>
        <div className='skillIcon' onClick={() => handleClick(65, 600)}>
          <DiMongodb className='Icon' style={{ color: "#0FA958" }} />
          <span className='skillName'>MongoDB</span>
        </div>
      </div>
      <div className='waves'>
        <div className='wave wave1'></div>
        <div className='wave wave2'></div>
        <div className='wave wave3'></div>
      </div>
    </SkillDiv>
  );
};

export default SkillCard;
