import styled from 'styled-components';
import ProjectItem from './ProjectItem.tsx';

import line from '../../assets/images/projects/line.png';

const Wrapper = styled.div`
  width: 60%;
`;

const Title = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.projects.wrapperBgColor};
`;

const RaceImg = styled.img`
  width: 100%;
`;

const TitleHeader = styled.h2`
  color: ${(props) => props.theme.projects.headerTextColor};
  background-color: ${(props) => props.theme.projects.headerBgColor};
  padding: 10px 20px;
  border-radius: 15px;
  font-size: 3vw;
  font-weight: bolder;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Content = styled.div`
  background: ${(props) => props.theme.projects.wrapperBgColor};
  padding: 50px 20px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

function Project() {
  return (
    <Wrapper>
      <Title>
        <RaceImg src={line} />
        <TitleHeader>PROJECTS</TitleHeader>
      </Title>
      <Content>
        <ProjectItem />
      </Content>
    </Wrapper>
  );
}

export default Project;
