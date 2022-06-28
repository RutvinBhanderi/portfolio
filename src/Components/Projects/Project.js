import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Wrapper, Heading, Work } from "./Project.style";

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};
const imageVariant = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.6,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

const Project = () => {
  return (
    <Container id='Portfolio'>
      <Wrapper
        variants={stagger}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
      >
        <div style={{ zIndex: "-1" }}>
          <svg
            width='1437'
            height='919'
            viewBox='0 0 1437 919'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='radialBg'
          >
            <g clipPath='url(#clip0_255_113)'>
              <path d='M1437 -12H0V937H1437V-12Z' fill='#121316' />
              <path
                d='M1437 745.462C1351.42 678.988 1265.68 612.36 1194.47 561.815C1123.1 511.27 1066.25 476.655 979.715 438.669C893.335 400.531 777.257 359.023 718.979 285.35C660.701 211.676 660.222 105.838 659.902 0H1437V745.462Z'
                fill='url(#paint0_radial_255_113)'
                style={{ mixBlendMode: "overlay" }}
              />
              <path
                d='M0 173.538C92.6067 202.639 185.213 231.741 283.568 262.374C381.763 293.008 485.706 325.173 549.573 391.8C613.28 458.581 636.91 559.824 668.205 653.409C699.5 747.147 738.299 833.073 777.098 919H0V173.538Z'
                fill='url(#paint1_radial_255_113)'
                style={{ mixBlendMode: "overlay" }}
              />
            </g>
            <defs>
              <radialGradient
                id='paint0_radial_255_113'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(1048.45 372.731) rotate(90) scale(372.731 388.549)'
              >
                <stop stopColor='#8685EF' />
                <stop offset='1' stopColor='#8685EF' stopOpacity='0' />
              </radialGradient>
              <radialGradient
                id='paint1_radial_255_113'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(388.549 546.269) rotate(90) scale(372.731 388.549)'
              >
                <stop stopColor='#8685EF' />
                <stop offset='1' stopColor='#8685EF' stopOpacity='0' />
              </radialGradient>
              <clipPath id='clip0_255_113'>
                <rect width='1437' height='919' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </div>
        <Heading>
          <h1>Portfolio</h1>
          <p>Here are some of amazing work</p>
        </Heading>
        <Work>
          <ProjectCard
            variant={imageVariant}
            title='Social Media App'
            src='/SOCIALMEDIA.jpg'
            link='https://github.com/RutvinBhanderi/SocialMedia'
          />
          <ProjectCard
            variant={imageVariant}
            title='Ecommerce App'
            src='/ecommerce.png'
            link='https://github.com/RutvinBhanderi/ECOMMERCE'
          />
          {/* <ProjectCard variant={imageVariant} />
          <ProjectCard variant={imageVariant} /> */}
        </Work>
      </Wrapper>
    </Container>
  );
};

export default Project;
