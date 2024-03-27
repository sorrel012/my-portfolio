import styled from 'styled-components';
import mushroom from '../../assets/images/home/mushroom.png';
import seashell from '../../assets/images/profile/seashell.png';
import seashell2 from '../../assets/images/profile/seashell2.png';

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

const Label = styled.span`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 2.5vw;
  margin-right: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Text = styled.div<{ custom: string }>`
  color: ${(props) =>
    props.custom === 'black'
      ? props.theme.profile.textColor
      : props.theme.profile.labelColor};
  font-size: 2vw;
  font-weight: bold;
`;

const Row = styled.div``;

const Certificate = styled.section``;

const CertContent = styled.div``;

const Education = styled.section``;

const Period = styled.time``;

const School = styled.span``;

const Bubbles = styled.div``;

const BubbleLeft = styled.div``;

const BubbleRight = styled.div``;

const BubbleFirst = styled.div``;

const BubbleSecond = styled.div``;

const BubbleThird = styled.div``;

const BubbleLast = styled.div``;

const SeaweedWrapper = styled.div``;

const Seaweed = styled.img``;

function ProfileHistory() {
  return (
    <Wrapper>
      <Box>
        <PersonalInfo>
          <Img src={mushroom} />
          <Info>
            <LabelWrapper>
              <Label>
                <Logo src={seashell} />
                <Text custom="red">이름</Text>
              </Label>
              <Label>
                <Logo src={seashell} />
                <Text custom="red">생년월일</Text>
              </Label>
              <Label>
                <Logo src={seashell} />
                <Text custom="red">이메일</Text>
              </Label>
              <Label>
                <Logo src={seashell} />
                <Text custom="red">주소</Text>
              </Label>
            </LabelWrapper>
            <Content>
              <Text custom="black">한효원</Text>
              <Text custom="black">1998.01.17</Text>
              <Text custom="black">sorrel012@gmail.com</Text>
              <Text custom="black">서울특별시 송파구</Text>
            </Content>
          </Info>
        </PersonalInfo>
        <Certificate>
          <Row>
            <Label>
              <Logo src={seashell2} />
              <Text custom="red">자격증 및 어학</Text>
            </Label>
          </Row>
          <CertContent>
            <Content>정보처리기사(2023.06)</Content>
            <Content>TOEIC(2022.06)</Content>
            <Content>SQLD(2023.07)</Content>
          </CertContent>
        </Certificate>
        <Education>
          <Row>
            <Label>
              <Logo src={seashell2} />
              <Text custom="red">학력</Text>
            </Label>
          </Row>
          <Row>
            <Period>2017.02-2021-02</Period>
            <School>청주교육대학교 / 초등교육과 (심화: 영어교육)</School>
          </Row>
          <Row>
            <Period>2022.09-2024.08(예정)</Period>
            <School>한국방송통신대학교 / 컴퓨터과학과 </School>
          </Row>
        </Education>
      </Box>
      <Bubbles>
        <BubbleLeft>
          <BubbleFirst />
          <BubbleSecond />
        </BubbleLeft>
        <BubbleRight>
          <BubbleThird />
          <BubbleLast />
        </BubbleRight>
      </Bubbles>
      <SeaweedWrapper>
        <Seaweed />
        <Seaweed />
      </SeaweedWrapper>
    </Wrapper>
  );
}

export default ProfileHistory;
