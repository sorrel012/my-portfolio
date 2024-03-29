import styled from 'styled-components';
import Project from '../components/project/Project.tsx';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.projects.bgColor};
`;

const Turtle = styled.img``;

const Rabbit = styled.img``;

function Projects() {
  return (
    <Wrapper>
      <Turtle />
      <Project />
      <Rabbit />
    </Wrapper>
  );
}

export default Projects;
