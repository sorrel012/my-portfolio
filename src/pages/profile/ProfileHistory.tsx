import seashell2 from '../../assets/images/profile/seashell2.png';
import {
  EduContent,
  Label,
  Logo,
  Period,
  PeriodWrapper,
  Row,
  Text,
} from './ProfileMain.tsx';
import styled from 'styled-components';
import Seaweeds from '../../components/profile/Seaweeds.tsx';
import Bubbles from '../../components/profile/Bubbles.tsx';

const Wrapper = styled.main`
  background: ${(props) => props.theme.profile.bgColor};
  height: 100vh;
  width: 100vw;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Experience = styled.section`
  width: 70%;
  background-color: ${(props) => props.theme.profile.boxColor};
  border-radius: 20px;
  padding: 30px 40px 20px 30px;
  z-index: 99;
  margin-bottom: 5vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 10;
`;

const Content = styled.span`
  margin-bottom: 10px;
`;

const Career = styled.section`
  width: 70%;
  background-color: ${(props) => props.theme.profile.boxColor};
  border-radius: 20px;
  padding: 30px 40px 20px 30px;
  z-index: 99;
  margin-bottom: 5vh;
`;

const CareerContent = styled.div`
  padding-left: 5%;
`;

const Company = styled.div`
  font-weight: bold;
  font-size: 1.8vw;
  display: flex;
  justify-content: space-between;
`;

const CompanyName = styled.div`
  flex: 10;
  margin-left: 8.5vw;
`;

const Project = styled.div`
  padding-left: 3%;
`;

const ProjectName = styled.h2`
  font-size: 1.5vw;
  margin-bottom: 10px;
  font-weight: bold;
`;

const ProjectContent = styled.li`
  padding-left: 2%;
  width: 100%;
  font-size: 1.2vw;
  margin-bottom: 7px;
  font-weight: bold;
`;

function ProfileHistory() {
  return (
    <Wrapper>
      <Experience>
        <Row>
          <Label>
            <Logo src={seashell2} alt="seashell" />
            <Text custom="red">교육·경험</Text>
          </Label>
        </Row>
        <EduContent>
          <PeriodWrapper>
            <Period>◾ 2023.02.01-2023-07.12</Period>
            <Period>◾ 2024.03.04-2024.03.15</Period>
            <Period>◾ 2024.03.11-2024.03.25</Period>
          </PeriodWrapper>
          <ContentWrapper>
            <Content>쌍용교육센터 Java 기반 Full-stack</Content>
            <Content>원티드 프리온보딩 프론트엔드 챌린지 3월</Content>
            <Content>노마드코더 ReactJS 챌린지 42기</Content>
          </ContentWrapper>
        </EduContent>
      </Experience>
      <Career>
        <Row>
          <Label>
            <Logo src={seashell2} alt="seashell" />
            <Text custom="red">경력</Text>
          </Label>
        </Row>
        <CareerContent>
          <Company>
            <Period>◾ 2023.08.01-재직 중</Period>
            <CompanyName>(주)레픽스</CompanyName>
          </Company>
          <Project>
            <ProjectName>
              ◽ 신세계포인트 2차 고도화 프로젝트(Vue.js, Spring boot)
            </ProjectName>
            <ul>
              <ProjectContent>
                - 신세계포인트 앱 다국어 버전 Admin 화면 이관
              </ProjectContent>
              <ProjectContent>- 관계사 이벤트 배너 표시 추가</ProjectContent>
              <ProjectContent>- 비밀번호 변경 주기 적용</ProjectContent>
              <ProjectContent>
                - 포인트 비밀번호 변경 본인인증 및 비회원 기능 추가
              </ProjectContent>
              <ProjectContent>
                - 차량정보 수집 필수 동의 및 혜택 제공 동의 분리
              </ProjectContent>
            </ul>
          </Project>
        </CareerContent>
      </Career>
      <Seaweeds />
      <Bubbles />
    </Wrapper>
  );
}

export default ProfileHistory;
