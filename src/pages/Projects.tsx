import styled from 'styled-components';
import Project from '../components/project/Project.tsx';

import turtle from '../assets/images/projects/project-turtle.png';
import rabbit from '../assets/images/projects/project-rabbit.png';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.projects.bgColor};
  overflow-y: scroll;
  padding: 10% 0 8%;
  position: relative;
`;

const Turtle = styled.div`
  width: 10%;
  position: absolute;
  top: 0;
`;

const TurtleImg = styled.img`
  width: 100%;
`;

const Rabbit = styled.div`
  width: 10%;
  position: absolute;
  top: 0;
`;

const RabbitImg = styled.img`
  width: 100%;
`;

function Projects() {
  return (
    <Wrapper>
      <Turtle>
        <TurtleImg src={turtle} alt="turtle" />
      </Turtle>
      <Project />
      <Rabbit>
        <RabbitImg src={rabbit} alt="rabbit" />
      </Rabbit>
    </Wrapper>
  );
}

export default Projects;
