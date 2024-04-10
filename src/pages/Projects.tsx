import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Project from '../components/project/Project.tsx';

import turtle from '../assets/images/projects/project-turtle.png';
import rabbit from '../assets/images/projects/project-rabbit.png';
import rest from '../assets/images/projects/rest.png';
import Header from '../components/Header.tsx';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.projects.bgColor};
  overflow-y: scroll;
  overflow-x: hidden;
  padding-top: 10%;
  position: relative;
`;

const Turtle = styled(motion.div)`
  width: 10%;
  position: absolute;
  left: 5%;
`;

const TurtleImg = styled.img`
  width: 100%;
`;

const Rabbit = styled(motion.div)`
  width: 10%;
  position: absolute;
  right: 5%;
  top: 0;
  z-index: 99;
`;

const RabbitImg = styled.img`
  width: 100%;
`;

const RestImg = styled.img`
  width: 17%;
  position: absolute;
  right: 1%;
`;

function Projects() {
  const scrollRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const turtleRef = useRef<HTMLDivElement>(null);
  const [moveRange, setMoveRange] = useState<number>(0); // 거북이가 이동할 범위

  useEffect(() => {
    const updateMoveRange = () => {
      if (projectRef.current && turtleRef.current) {
        const projectHeight = projectRef.current.offsetHeight;
        const turtleHeight = turtleRef.current.offsetHeight;
        setMoveRange(projectHeight - turtleHeight);
      }
    };

    window.addEventListener('resize', updateMoveRange);
    updateMoveRange();

    return () => window.removeEventListener('resize', updateMoveRange);
  }, []);

  const turtleVariants = {
    scroll: {
      y: [0, moveRange],
      transition: { duration: 30 },
    },
  };

  const rabbitVariants = {
    scroll: {
      y: [100, moveRange / 1.3],
      transition: { duration: 15 },
    },
  };

  return (
    <Wrapper ref={scrollRef}>
      <Header category="projects" />
      <Turtle ref={turtleRef} variants={turtleVariants} animate="scroll">
        <TurtleImg src={turtle} alt="turtle" />
      </Turtle>
      <div ref={projectRef}>
        <Project />
      </div>
      <Rabbit variants={rabbitVariants} animate="scroll">
        <RabbitImg src={rabbit} alt="rabbit" />
      </Rabbit>
      <RestImg src={rest} alt="rest" style={{ top: moveRange / 1.4 }} />
    </Wrapper>
  );
}

export default Projects;
