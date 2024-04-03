import styled from 'styled-components';
import Header from '../../components/Header.tsx';
import flower1 from '../../assets/images/home/flower1.png';
import flower3 from '../../assets/images/home/flower3.png';
import flower5 from '../../assets/images/home/flower5.png';
import flower2 from '../../assets/images/home/flower2.png';
import flower4 from '../../assets/images/home/flower4.png';
import {
  BackgroundWrapper,
  Flower,
  FlowerFirstRow,
  Flowers,
  FlowerSecondRow,
  GRASS,
  Grass,
} from '../Home.tsx';

const Wrapper = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.home.bgColor};
`;

function Login() {
  return (
    <Wrapper>
      <Header category="login" />
      <BackgroundWrapper>
        <Grass src={GRASS} />
        <Flowers>
          <FlowerFirstRow>
            <Flower src={flower1} transform="matrix(-1, 0, 0, 1, 0, 0)" />
            <Flower src={flower3} transform="matrix(-1, 0, 0, 1, 0, 0)" />
            <Flower src={flower5} transform="matrix(-1, 0, 0, 1, 0, 0)" />
          </FlowerFirstRow>
          <FlowerSecondRow>
            <Flower src={flower2} transform="" />
            <Flower src={flower4} transform="" />
          </FlowerSecondRow>
        </Flowers>
      </BackgroundWrapper>
    </Wrapper>
  );
}

export default Login;
