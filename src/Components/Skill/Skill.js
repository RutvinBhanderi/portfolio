import React from "react";
import { useState } from "react";
import SkillCard from "./SkillCard";
import SkillCard1 from "./SkillCard1";
import { Container, Wrapper, Title, SkillContainer } from "./Skill.style";

const Skill = () => {
  return (
    <Container id='Skills'>
      <Wrapper>
        <Title>My Expertise</Title>
        <SkillContainer
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          <SkillCard x='-100' />
          <SkillCard1 x='100' />
        </SkillContainer>
      </Wrapper>
    </Container>
  );
};

export default React.memo(Skill);
