import React from "react";
import { Image } from "./Project.style";
import { Card } from "./Project.style";
import { motion } from "framer-motion";

const ProjectCard = ({ variant, src, title, link }) => {
  return (
    <>
      <Card variants={variant}>
        <motion.div className='card__content'>
          <p>{title}</p>
          <a href={link}>View Project</a>
        </motion.div>
        {/* <div style={{ width: "300px", height: "300px" }}></div> */}
        <a href={link}>
          <Image className='card__image' src={src} alt='' />
        </a>
      </Card>
    </>
  );
};

export default ProjectCard;
