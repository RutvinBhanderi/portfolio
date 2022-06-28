import styled from "styled-components";
import { device } from "../../responsive/device";
import { motion } from "framer-motion";
export const Container = styled.div`
  height: 100%;
  width: 100vw;
  padding: 8rem 0 4rem 0;
  overflow-x: hidden;
  margin-bottom: 8rem;
`;
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  gap: 2rem;
`;
export const Title = styled.h1`
  font-size: 6.4rem;
  font-weight: 900;
  @media ${device.mobileL} {
    font-size: 4rem;
  }
  @media ${device.mobileS} {
    font-size: 3rem;
  }
`;
export const SkillContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  padding: 0 3em;
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;
export const SkillDiv = styled(motion.div)`
  position: relative;
  
  flex-basis: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: 0px -89px 68px -90px rgba(96, 68, 144, 0.3), inset 0px 98px 100px -150px rgba(202, 172, 255, 0.3), inset 0px 4px 18px rgba(154, 146, 210, 0.3), inset 0px 1px 40px rgba(227, 222, 255, 0.2);
  backdrop-filter: blur(100px);
  border-radius:40px;
  overflow: hidden;
  gap: 3rem;
  @media ${device.mobileL} {
    flex-basis:200px;
    // height:150px;
  }
  h3 {
    font-size: 3rem;
    font-weight: 400;
    z-index:2;
  }

  .skills {
    display: flex;
    width: 80%;
    justify-content: space-around;
    z-index: 10;
    .skillIcon {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.5rem;
      align-items: center;
      cursor:pointer;
      flex: 1;
      .Icon {
        flex: 0.9;
        font-size:30px;
        
      }
     
      .skillName {
        font-size: 1.3rem;
        font-weight: 300;
        flex: 0.1;
      }
    }
  }

  .waves {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    .wave {
      position: absolute;
      bottom: 0;
      left: 0;
      background: ${(props) => `url(${props.wave})`};
      transition:1s ease;
      width: ${(props) => props.width}%;
      height: ${(props) => props.height}%;
      background-size: 100% 100%;
    }
    .wave1 {
      opacity: 1;
      animation-delay: -2s;
      animation: animate 10s linear infinite backwards;
      z-index:1000;
    }
    .wave2 {
      bottom:2px;
      opacity: 0.4;
      animation-delay: -5s;
      animation: animate2 15s linear infinite;
      z-index:999;
    }
    .wave3 {
      bottom:8px;
      opacity: 0.2;
      animation-delay: 1s;
      animation: animate 30s linear infinite;
      z-index:998;
    }
    
  }

  @keyframes animate {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: ${(props) => (props.width * 300) / 100}px;
    }
  }
  @keyframes animate2 {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: ${(props) => (props.width * 300) / 100}px;
    }
  

  
`;
