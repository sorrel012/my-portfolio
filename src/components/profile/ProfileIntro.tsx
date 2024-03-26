import styled from 'styled-components';
import mushroom from '../../assets/images/home/mushroom.png';

const Wrapper = styled.div`
  background: ${(props) => props.theme.profile.bgColor};
  height: 100vh;
  position: relative;
`;

const WaveBox = styled.div`
  overflow: hidden;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  height: 300px;
  opacity: 0.5;
`;

const Wave = styled.div`
  position: relative;
  display: block;
  margin: auto;
  width: 100%;
  height: 100%;

  div {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='157'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3E%3Cstop stop-color='%23ffffff' stop-opacity='1' offset='0%25'/%3E%3Cstop stop-color='%23ffffff' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 80C311 80 409.898-.25 811 0c400 0 500 80 789 80v77H0s.005-48 .005-77z' transform='matrix(-1 0 0 1 1600 0)'/%3E%3C/svg%3E")
      repeat-x;
    position: absolute;
    bottom: 0;
    width: 6400px;
    height: 157px;
    animation: wave 3s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }
  @keyframes wave {
    0% {
      margin-left: -1600px;
    }
    100% {
      margin-left: 0;
    }
  }
`;

const Introduction = styled.div`
  position: absolute;
  bottom: 0;
  padding: 0 40px;
  display: flex;
  color: ${(props) => props.theme.profile.titleColor};
  z-index: 99;
`;

const Picture = styled.img`
  width: 30%;
  aspect-ratio: 2 / 2.5;
`;

const Overview = styled.article`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.h2`
  font-size: 4vw;
  line-height: 1.3;
`;

const Content = styled.h3`
  font-size: 2.5vw;
  line-height: 1.5;
`;

function ProfileIntro() {
  return (
    <Wrapper>
      <WaveBox>
        <Wave>
          <div></div>
        </Wave>
      </WaveBox>
      <Introduction>
        <Picture src={mushroom} />
        <Overview>
          <Title>
            안녕하세요,
            <br /> 프론트엔드 개발자 한효원입니다.
          </Title>
          <Content>
            풀스택 개발자로 일하다 시각적 피드백에 매력을 느껴 프론트엔드 개발의
            세계로 뛰어들었습니다. 코드 한 줄 한 줄에 사용자의 편의를 더하기
            위해 노력하고 있습니다.
          </Content>
        </Overview>
      </Introduction>
    </Wrapper>
  );
}

export default ProfileIntro;
