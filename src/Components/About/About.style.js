import styled from "styled-components";
import { device } from "../../responsive/device";
import { motion } from "framer-motion";
export const Container = styled(motion.div)`
  max-width: 100vw;
  width: 100vw;
  height: auto;
  position: relative;
  padding: 3rem;
  position: realtive;
  background: linear-gradient(#56558d, #715888);
  overflow-x: hidden;
  margin-bottom: 8rem;
`;
export const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #f8f8f8;
`;
export const Heading = styled(motion.div)`
  margin-bottom: 5rem;
  h1 {
    font-size: 6rem;
    font-weight: 900;
    text-align: center;
    // background: linear-gradient(6deg, #9c27b0 50%, rgba(247, 249, 255, 1) 50%);
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
  }
  @media ${device.tablet} {
    h1 {
      font-size: 5rem;
    }
  }
  @media ${device.mobileL} {
    h1 {
      font-size: 5.5rem;
    }
  }
  @media ${device.mobileM} {
    h1 {
      font-size: 4rem;
    }
  }
  @media ${device.mobileS} {
    h1 {
      font-size: 3rem;
    }
  }
`;
export const AboutSection = styled(motion.div)`
  width: 80%;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  justify-content: center;
  gap: 5rem;
  @media ${device.laptopL} {
    gap: 6rem;
    // justify-content: space-around;
  }
  @media ${device.tablet} {
    // flex-direction: row;
    flex-direction: column;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;
export const AboutLeft = styled(motion.div)`
  flex: 1;
  .about__image {
    width: 100%;
    border-radius: 2rem;

      img {
        border:2px solid white;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2rem;
        z-index: 5;
      }
    }
  }

  @media ${device.laptopL} {
    justify-self: flex-start;
    img {
      width: 90%;
      aspect-ratio: 2/1.3;
    }
  }
  @media ${device.laptop} {
    img {
      aspect-ratio: 2/1.5;
    }
  }

  @media ${device.tablet} {
    img {
      aspect-ratio: 2/1;
    }
  }
  @media ${device.mobileL} {
    width:100%;
    img {
      aspect-ratio: 2/1.7;
      width: 100%;
    }
  }
  @media ${device.mobileS} {
    img {
      width: 100%;
      aspect-ratio: 1/1;
    }
  }
`;
export const AboutRight = styled(motion.div)`
  flex: 1;

  .aboutRight__heading {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 2rem;
    opacity: 0.85;
  }

  .aboutRight__desc {
    p {
      font-size: 1.4rem;
      font-weight: 300;
      opacity: 0.7;
    }
    p:nth-child(1) {
      margin-bottom: 1em;
    }
    p:nth-child(2) {
      margin-bottom: 2em;
    }
  }

  .aboutRight__button {
    // margin-top: 2rem;
    border-radius: 0.8rem;
    outline: none;
    background-color: #fbfbfb;
    border: 1px solid #fbfbfb;
    letter-spacing: 3px;
    font-size: 1.6rem;
    font-weight: bold;
    color: #595998;
    padding: 1em 3em;
    cursor: pointer;
    text-decoration: none;
  }
  @media ${device.laptopL} {
    .aboutRight__heading {
      font-size: 3rem;
    }
  }
  @media ${device.laptop} {
    .aboutRight__heading {
      font-size: 2.5rem;
    }
    .aboutRight__desc {
      p {
        font-size: 1.4rem;
      }
      p:nth-child(1) {
        margin-bottom: 0.5em;
      }
    }
    .aboutRight__button {
      font-size: 1.4rem;
    }
  }
  @media ${device.tablet} {
    .aboutRight__heading {
      font-size: 2.5rem;
    }
    .aboutRight__desc {
      p {
        font-size: 1.3rem;
      }
      p:nth-child(1) {
        margin-bottom: 0.5em;
      }
    }
    .aboutRight__button {
      font-size: 1.3rem;
    }
  }
  @media ${device.mobileL} {
    .aboutRight__heading {
      font-size: 2.4rem;
    }
    .aboutRight__desc {
      p {
        font-size: 1.3rem;
      }
      p:nth-child(1) {
        margin-bottom: 0.5em;
      }
    }
    .aboutRight__button {
      font-size: 1.2rem;
    }
  }
  @media ${device.mobileM} {
    .aboutRight__heading {
      font-size: 2.3rem;
    }
    .aboutRight__desc {
      p {
        font-size: 1.3rem;
      }
      p:nth-child(1) {
        margin-bottom: 0.5em;
      }
    }
    .aboutRight__button {
      font-size: 1rem;
    }
  }
  @media ${device.mobileS} {
    .aboutRight__heading {
      font-size: 1.8rem;
    }

    .aboutRight__button {
      font-size: 1rem;
    }
    .aboutRight__desc {
      p {
        font-size: 1.1rem;
      }
      p:nth-child(1) {
        margin-bottom: 0.5em;
      }
    }
  }
`;
