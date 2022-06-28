import styled from "styled-components";
import { device } from "../../responsive/device";
import { motion } from "framer-motion";
export const Conatiner = styled.div`
  max-width: 100vw;
  width: 100vw;
  height: 100vh;
  padding: 4rem 0 4rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5f7;
  opacity: 1;
  background-color: #2a2a2a;
  opacity: 1;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #2a2a2a 10px
    ),
    repeating-linear-gradient(#c691ff55, #c691ff);
  @media ${device.mobileL} {
    padding: 0;
  } ;
`;

export const Wrapper = styled(motion.div)`
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobileL} {
    flex-direction: column;
    justify-content: space-around;
    height: 50rem;
  } ;
`;
export const LeftDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  h1 {
    font-size: 6.4rem;
    color: #ffffff;
  }
  @media ${device.laptop} {
    h1 {
      font-size: 5rem;
    }
  }
  @media ${device.mobileL} {
    flex: 0.2;
    h1 {
      font-size: 3.5rem;
    }
  } ;
`;
export const RightDiv = styled(motion.div)`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: #151515;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  & > div {
    .rightTitle {
      font-size: 6.4rem;
      font-weight: 900;
      color: #ffffff;
      margin-left: -5px;
    }

    .rightDesc {
      font-size: 1.3rem;
      color: white;
      margin-top: 2rem;
      p {
        margin-top: 0.7rem;
        font-weight: 500;
        transform-origin: 80px;
      }

      & > div {
        display: flex;
        align-items: center;
        margin-top: 0.8rem;
        a {
          color: white;
          font-size: 15px;
        }

        .sendIcon {
          margin-left: 0.5rem;
          font-size: 25px;
          color: #764abc;
        }
      }
    }
  }
  @media ${device.tablet} {
    & > div .rightTitle {
      font-size: 4.5rem;
    }
  }
  @media ${device.mobileL} {
    flex: 0.5;
  } ;
`;
