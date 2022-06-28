import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  List,
  ListItem,
  SocialIcons,
} from "./Sidebar.style";

import { FaInstagram } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const Sidebar = (props) => {
  const [width, setWidth] = useState(-300);
  const [open, setOpen] = useState(false);
  const handleSidebar = () => {
    setWidth((prev) => {
      if (prev === -300) {
        return 0;
      } else {
        return -300;
      }
    });
    console.log(open);
    setOpen((prev) => !prev);
    // props.handleOpen(!open);
    console.log("dbl");
  };

  const handleScroll = (position) => {
    console.log(props.scroll);
    // props.scroll.current.style.transform = `translate3d(0, -700px, 0)`;
    console.log(props.scroll.current.childNodes[0].getBoundingClientRect());
    let move = 0;
    for (let i = 0; i < position; i++) {
      move += props.scroll.current.childNodes[i].getBoundingClientRect().height;
    }

    window.scrollTo(0, move);
  };
  useEffect(() => {
    const closeSidebar = () => {
      handleSidebar();
    };
    window.addEventListener("dblclick", closeSidebar);
    return () => window.removeEventListener("dblclick", closeSidebar);
  }, []);
  return (
    <Container width={width}>
      <Wrapper>
        <List>
          <ListItem
            data-font='Home'
            whileHover={{
              letterSpacing: "8px",
              transition: { type: "spring", stiffness: 700 },
            }}
            whileTap={{
              letterSpacing: "8px",
              transition: { type: "spring", stiffness: 700 },
            }}
          >
            <a onClick={() => handleScroll(0)}>Home</a>
          </ListItem>
          <ListItem
            data-font='About'
            whileHover={{
              letterSpacing: "10px",
              transition: { type: "spring", stiffness: 700 },
            }}
            whileTap={{
              letterSpacing: "8px",
              transition: { type: "spring", stiffness: 700 },
            }}
          >
            <a onClick={() => handleScroll(1)}>About</a>
          </ListItem>
          <ListItem
            data-font='Portfolio'
            whileHover={{
              letterSpacing: "10px",
              transition: { type: "spring", stiffness: 700 },
            }}
            whileTap={{
              letterSpacing: "8px",
              transition: { type: "spring", stiffness: 700 },
            }}
          >
            <a onClick={() => handleScroll(2)}>Portfolio</a>
          </ListItem>
          <ListItem
            data-font='Skills'
            whileHover={{
              letterSpacing: "10px",
              transition: { type: "spring", stiffness: 700 },
            }}
            whileTap={{
              letterSpacing: "8px",
              transition: { type: "spring", stiffness: 700 },
            }}
          >
            <a onClick={() => handleScroll(3)}>Skills</a>
          </ListItem>
          <ListItem
            data-font='Contact'
            whileHover={{
              letterSpacing: "10px",
              transition: { type: "spring", stiffness: 700 },
            }}
            whileTap={{
              letterSpacing: "8px",
              transition: { type: "spring", stiffness: 700 },
            }}
          >
            <a onClick={() => handleScroll(4)}>Contact</a>
          </ListItem>
        </List>
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
      </Wrapper>
      {/* <div className='sidebarIcon' onDoubleClick={handleSidebar}>
        {open ? <FiChevronRight /> : <FiChevronLeft />}
      </div> */}
    </Container>
  );
};

export default Sidebar;
