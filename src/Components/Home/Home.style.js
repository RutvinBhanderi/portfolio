import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../responsive/device";
export const Container = styled.div`
  max-width: 100vw;
  // min-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f2f2f2;
  // position: relative;
  // .rocket {
  //   position: absolute;
  //   width: 95%;
  //   height: 95%;
  //   top: -15%;
  //   left: -2%;
  //   z-index: 0;
  //   overflow: hidden;
  // }
`;

export const Wrapper = styled(motion.div)`
  width: 80%;
  text-align: center;
  margin-top: -8rem;
  position: relative;
  z-index: 5;
  div > h1 {
    overflow: hidden;
    font-size: 6rem;
    font-weight: 900;
    z-index: 1;
  }

  div:nth-child(2) > p {
    font-size: 1.8rem;
    overflow: hidden;
    font-weight: 400;
    color: #8685ef;
    z-index: 1;
    span {
      height: 0;
      color: #f2f2f2;
      font-weight: 700;
    }
  }
  @media ${device.laptop} {
    width: 80%;

    div > h1 {
      font-size: 6rem;
    }

    div > p {
      font-size: 2rem;
    }
  }
  @media ${device.tablet} {
    width: 80%;
    div > h1 {
      font-size: 4.5rem;
    }
    div > p {
      font-size: 1.5rem;
    }
  }
  @media ${device.mobileL} {
    width: 90%;
    div > h1 {
      font-size: 4.5rem;
    }
    div > p {
      font-size: 1rem;
    }
  }
  @media ${device.mobileS} {
    width: 90%;
    color: white;
    div > h1 {
      font-size: 4rem;
    }
    div > p {
      font-size: 1rem;
    }
  }
`;
