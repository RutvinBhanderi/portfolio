import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => `${props.width}px`};
  width: 300px;
  height: 100vh;
  color: white;
  background: rgba(61, 65, 89, 0.5);
  backdrop-filter: blur(4px);
  z-index: 200;
  transition: 0.3s ease-in-out;
  .sidebarIcon {
    position: absolute;
    top: 50%;
    right: -26%;
    transform: translateY(-50%);
    transform: rotate(180deg);
    height: 80px;
    width: 80px;
    background: linear-gradient(180deg, #37375e 0%, #715888 100%);
    backdrop-filter: blur(15px);
    clip-path: circle(50% at 100% 50%);
    // border-radius: 50%;
    font-size: 4rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 10px;
  }
`;

export const Wrapper = styled.div`
  padding: 4rem;
  height: 100%;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  height: 100%;
`;
export const ListItem = styled(motion.li)`
  font-size: 4rem;
  margin-top: 3rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  z-index: 1;
  // &::after {
  //   content: attr(data-font);
  //   position: absolute;
  //   width: 110%;
  //   height: 100%;
  //   top: 0;
  //   left: 0;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   z-index: -1;
  //   // font-family: "Rubik Moonrocks", cursive;
  //   font-family: "Amatic SC", cursive;
  //   font-size: 80px;
  //   opacity: 0.5;
  //   visibility: hidden;
  //   letter-spacing: 9px;
  //   transition: 0.3s;
  // }
  // &:hover::after {
  //   visibility: visible;
  //   color: #715888;
  // }
  &:hover {
    color: white;
  }
`;

export const SocialIcons = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
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
