import React from "react";
import {
  Container,
  Wrapper,
  Heading,
  AboutSection,
  AboutLeft,
  AboutRight,
} from "./About.style";
import { motion } from "framer-motion";
import myImg from "../../Assets/myImg.jpg";
const stagger = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};
const imageVariant = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
const contentVariant = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
const About = () => {
  return (
    <Container id='About'>
      <Wrapper initial='hidden' whileInView='show' viewport={{ once: false }}>
        <Heading>
          <h1>About me</h1>
        </Heading>
        <AboutSection variants={stagger}>
          <AboutLeft variants={imageVariant}>
            <div className='about__image'>
              <motion.div>
                <img src={myImg} alt='' />
              </motion.div>
            </div>
          </AboutLeft>
          <AboutRight variants={contentVariant}>
            <div className='aboutRight__heading'>
              Hi! I am Rutvin!
              <br /> I am so glad you're here!
            </div>
            <div className='aboutRight__desc'>
              <p>
                I like to design all kind of things. I specialize in front end
                and backend development. I have a passion for making beautiful
                interfaces with excellent usability.
              </p>
              <p>
                currently i'm pursuing bachelor of engineering in information
                technology from LDRP-ITR Gandhiagar,Gujarat,India.
              </p>
            </div>
            <a
              className='aboutRight__button'
              href='/RUTVIN_BHANDERI__RESUME.pdf'
              download='RUTVIN_BHANDERI__RESUME.pdf'
            >
              RESUME
            </a>
          </AboutRight>
        </AboutSection>
      </Wrapper>
    </Container>
  );
};

export default About;
