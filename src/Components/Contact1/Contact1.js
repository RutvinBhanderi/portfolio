import React from "react";
import { Conatiner, LeftDiv, RightDiv, Wrapper } from "./Contact1.style";
import { motion } from "framer-motion";
import { AiOutlineSend } from "react-icons/ai";

const Contact1 = () => {
  return (
    <Conatiner id='Contact'>
      <Wrapper>
        <LeftDiv>
          <motion.h1>Take A Coffe & Chat With Me</motion.h1>
        </LeftDiv>
        <RightDiv>
          <motion.div>
            <div className='rightTitle'>Let's Talk</div>
            <div className='rightDesc'>
              <p>Share your excitement with Me.</p>
              <div>
                <a href='mailto:rutvinbhanderi@gmail.com?subject=Regarding Contact'>
                  rutvinbhanderi@gmail
                </a>
                <motion.span
                  initial={{ x: 10 }}
                  animate={{
                    x: 0,
                    transition: { yoyo: Infinity, ease: "easeOut" },
                  }}
                >
                  <AiOutlineSend className='sendIcon' />
                </motion.span>
              </div>
            </div>
          </motion.div>
        </RightDiv>
      </Wrapper>
    </Conatiner>
  );
};

export default Contact1;
