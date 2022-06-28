// import Spline from "@splinetool/react-spline";
import React from "react";
import { Container, Wrapper } from "./Home.style";
import { motion } from "framer-motion";

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  show: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 1.6,
      ease: [0.6, 0.05, -0.01, 0.99],
    },
  },
};
const item1 = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  show: {
    height: 20,
    opacity: 1,
    transition: {
      duration: 3,
      ease: [0.6, 0.05, -0.01, 0.99],
    },
  },
};
const Home = () => {
  return (
    <Container>
      <Wrapper variants={stagger} initial='hidden' animate='show'>
        <motion.div className='home__heading'>
          <motion.h1 variants={item}>
            LET’S BUILD SOMETHING AMAZING TOGETHER
          </motion.h1>
        </motion.div>
        <div>
          <motion.p variants={item1}>
            I’M <span>MERN</span> STACK DEVELOPER
          </motion.p>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Home;
