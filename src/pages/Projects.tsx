import styled from 'styled-components';
import Project from '../components/project/Project.tsx';

import turtle from '../assets/images/projects/project-turtle.png';
import rabbit from '../assets/images/projects/project-rabbit.png';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.projects.bgColor};
  display: flex;
  justify-content: space-around;
  padding-top: 15%;
`;

const Turtle = styled.div`
  width: 10%;
`;

const TurtleImg = styled.img`
  width: 100%;
`;

const Rabbit = styled.div`
  width: 10%;
`;

const RabbitImg = styled.img`
  width: 100%;
`;

function Projects() {
  return (
    <Wrapper>
      <Turtle>
        <TurtleImg src={turtle} />
      </Turtle>
      <Project />
      <Rabbit>
        <RabbitImg src={rabbit} />
      </Rabbit>
    </Wrapper>
  );
}

export default Projects;
