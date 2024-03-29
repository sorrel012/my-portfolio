import styled from 'styled-components';
import ProjectItem from './ProjectItem.tsx';

const Wrapper = styled.main`
  height: 100vh;
  width: 60vw;
  background: ${(props) => props.theme.projects.wrapperBgColor};
`;

const Title = styled.h2``;

const RaceImg = styled.img``;

const TitleHeader = styled.div``;

const Content = styled.div``;

function Project() {
  return (
    <Wrapper>
      <Title>
        <RaceImg />
        <TitleHeader />
      </Title>
      <Content>
        <ProjectItem />
      </Content>
    </Wrapper>
  );
}

export default Project;
