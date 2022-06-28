import React, { useRef, useState } from "react";
import { SkillDiv } from "./Skill.style";
import { DiReact, DiHtml5, DiCss3 } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import wave from "../../Assets/wave.png";
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
      wave={wave}
    >
      <h3>Front End</h3>
      <div className='skills'>
        <div className='skillIcon' onClick={() => handleClick(70, 800)}>
          <DiHtml5 className='Icon' style={{ color: "#F1662A" }} />
          <span className='skillName'>HTML</span>
        </div>
        <div className='skillIcon' onClick={() => handleClick(90, 1000)}>
          <DiCss3 className='Icon' style={{ color: "#1572B6" }} />
          <span className='skillName'>Css</span>
        </div>
        <div className='skillIcon' onClick={() => handleClick(80, 900)}>
          <DiReact className='Icon' style={{ color: "#00D8FF" }} />
          <span className='skillName'>React.js</span>
        </div>
        <div className='skillIcon' onClick={() => handleClick(75, 850)}>
          <SiRedux className='Icon' style={{ color: "#764ABC" }} />
          <span className='skillName'>Redux</span>
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
