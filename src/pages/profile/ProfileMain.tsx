import styled from 'styled-components';
import mushroom from '../../assets/images/home/mushroom.png';
import seashell from '../../assets/images/profile/seashell.png';
import seashell2 from '../../assets/images/profile/seashell2.png';
import Bubbles from '../../components/profile/Bubbles.tsx';
import Seaweeds from '../../components/profile/Seaweeds.tsx';

const Wrapper = styled.main`
  background: ${(props) => props.theme.profile.bgColor};
  height: 100vh;
  width: 100vw;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.section`
  width: 70%;
  background-color: ${(props) => props.theme.profile.boxColor};
  border-radius: 20px;
  padding: 30px;
  z-index: 99;
`;

const PersonalInfo = styled.section`
  display: flex;
`;

const Img = styled.img`
  width: 30%;
  aspect-ratio: 2 / 2;
`;

const Info = styled.div`
  padding-left: 20px;
  display: flex;
`;

const LabelWrapper = styled.div`
  margin: 0 6.5vw 0 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 2.5vw;
  margin-right: 10px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: bold;
  font-size: 1.8vw;
`;

export const Text = styled.div<{ custom: string }>`
  color: ${(props) =>
    props.custom === 'black'
      ? props.theme.profile.textColor
      : props.theme.profile.labelColor};
  font-size: 2vw;
  font-weight: bold;
`;

export const Row = styled.div`
  margin-bottom: 10px;
`;

const Certificate = styled.section`
  margin-top: 10px;
`;

const CertContent = styled.div`
  padding-left: 5%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  color: ${(props) => props.theme.profile.textColor};
`;

const Content = styled.div`
  font-weight: bold;
  font-size: 1.8vw;
`;

const Education = styled.section`
  margin-top: 30px;
`;

export const EduContent = styled.div`
  padding-left: 5%;
  font-weight: bold;
  font-size: 1.8vw;
  display: flex;
  justify-content: space-between;
`;

export const PeriodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4vw;
`;

const SchoolWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Period = styled.time`
  margin-bottom: 10px;
`;

const School = styled.span`
  margin-bottom: 10px;
`;

function ProfileMain() {
  return (
    <Wrapper>
      <Box>
        <PersonalInfo>
          <Img src={mushroom} />
          <Info>
            <LabelWrapper>
              <Label>
                <Logo src={seashell} alt="seashell" />
                <Text custom="red">이름</Text>
              </Label>
              <Label>
                <Logo src={seashell} alt="seashell" />
                <Text custom="red">생년월일</Text>
              </Label>
              <Label>
                <Logo src={seashell} alt="seashell" />
                <Text custom="red">이메일</Text>
              </Label>
              <Label>
                <Logo src={seashell} alt="seashell" />
                <Text custom="red">주소</Text>
              </Label>
            </LabelWrapper>
            <Information>
              <Text custom="black">한효원</Text>
              <Text custom="black">1998.01.17</Text>
              <Text custom="black">sorrel012@gmail.com</Text>
              <Text custom="black">서울특별시 송파구</Text>
            </Information>
          </Info>
        </PersonalInfo>
        <Certificate>
          <Row>
            <Label>
              <Logo src={seashell2} alt="seashell" />
              <Text custom="red">자격증 및 어학</Text>
            </Label>
          </Row>
          <CertContent>
            <Content>◾ TOEIC(2022.06) - 880</Content>
            <Content>◾ 정보처리기사(2023.06)</Content>
            <Content>◾ SQLD(2023.07)</Content>
          </CertContent>
        </Certificate>
        <Education>
          <Row>
            <Label>
              <Logo src={seashell2} alt="seashell" />
              <Text custom="red">학력</Text>
            </Label>
          </Row>
          <EduContent>
            <PeriodWrapper>
              <Period>◾ 2017.02-2021-02</Period>
              <Period>◾ 2022.09-2024.08(예정)</Period>
            </PeriodWrapper>
            <SchoolWrapper>
              <School>청주교육대학교 / 초등교육과 (심화: 영어교육)</School>
              <School>한국방송통신대학교 / 컴퓨터과학과 </School>
            </SchoolWrapper>
          </EduContent>
        </Education>
      </Box>
      <Bubbles />
      <Seaweeds />
    </Wrapper>
  );
}

export default ProfileMain;
