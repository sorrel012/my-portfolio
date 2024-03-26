import styled from 'styled-components';
import mushroom from '../../assets/images/home/mushroom.png';

const Wrapper = styled.div`
  background: ${(props) => props.theme.profile.bgColor};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Introduction = styled.div`
  height: 50vh;
  padding: 0 5%;
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
