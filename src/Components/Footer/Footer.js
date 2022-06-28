import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const Footer1 = styled.div`
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;
const SocialIcons = styled.div`
  margin-bottom: 20px;
  .sIcon {
    font-size: 20px;
    color: white;
    margin-right: 15px;
    transition: color 0.2s;
    &:hover {
      color: #764abc;
    }
  }
`;
const Footer = () => {
  return (
    <Footer1>
      <SocialIcons>
        <a href='https://github.com/RutvinBhanderi' target='_blank'>
          <BsGithub className='sIcon' />
        </a>
        <a href='https://www.linkedin.com/in/rutvinbhanderi/' target='_blank'>
          <BsLinkedin className='sIcon' />
        </a>
        <a href='https://www.instagram.com/rutvinbhanderi/' target='_blank'>
          <FaInstagram className='sIcon' />
        </a>
      </SocialIcons>
      <div>
        <p>Copyright &#169; 2022 rutvinbhanderiportfolio</p>
      </div>
    </Footer1>
  );
};

export default Footer;
