import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../responsive/device";
export const Container = styled.div`
  width: 100vw;
  // height: 40vh;
  height: 70vh;
  // padding: 4rem 0 4rem 0;
  overflow: hidden;
`;
export const Wrapper = styled(motion.div)`
  display: flex;
  height: 100%;
  flex-direction: column;
  color: #f8f8f8;
  gap: 5rem;
  position: relative;

  .radialBg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;
export const Heading = styled.div`
  h1 {
    font-size: 6.4rem;
    text-align: center;
    font-weight: 900;
    margin: 0;
    padding: 0;
    line-height: 0.9;
  }
  p {
    text-align: center;
    font-size: 1.5rem;
    color: #8685e8;
    marin-top: -0.5rem;
  }
  @media ${device.laptop} {
    h1 {
      font-size: 6.4rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  @media ${device.tablet} {
    h1 {
      font-size: 6.4rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
  @media ${device.mobileL} {
    h1 {
      font-size: 5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
  @media ${device.mobileM} {
    h1 {
      font-size: 4.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media ${device.mobileS} {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;
export const Work = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
  width: 100%;
  padding: 0rem 3rem;

  @media ${device.laptopL} {
    width: 80%;
    margin-inline: auto;
  }
  @media ${device.tablet} {
    width: 100%;
    gap: 2.3rem;
  }
  @media ${device.mobileL} {
    width: 100%;
    gap: 2rem;
  }
  @media ${device.mobileM} {
    width: 100%;
    gap: 2rem;
  }
  @media ${device.mobileS} {
    width: 100%;
    gap: 2rem;
  }
`;

export const Card = styled(motion.div)` 
    width:max(400px,40%);
    position:relative;
    
    &::after{
      content:'';
      width:110%;
      height:120%;
      background:linear-gradient(#56558d, #715888);
      opacity:0.6;
      backdrop-filter:blur(50px);
      position:absolute;
      top:-10%;
      left:-5%;
      z-index:-1;
     opacity:0;
      border-radius:10px;
      transition:all ease-in 0.3s;
    }
    &:hover::after{
      
      opacity:1;
    }

    .card__content{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      color:#ffffff;
      flex-direction:column;
      background-color:rgba(0,0,0,0.6);
      border-radius:10px;
      opacity:0;
      transition: all 1s;
      p{
        font-size:2rem;
      }

      a{
        padding:10px 15px;
        margin-top:5px;
        border-radius:5px;
        outline:none;
        border:none;
        text-decoration:none;
        background-color:white;
        font-weight:600;
      }

    }

    &:hover{
      .card__content{
        opacity:1;
        
      }
    }
    @media ${device.laptopL}{
      width:min(340px,40%);
    }
    @media ${device.tablet}{
      width:300px;
    }
    // @media ${device.tablet}{
    //   width:max(340px,40%);
    // }
  }
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;
