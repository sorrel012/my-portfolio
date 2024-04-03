import styled from 'styled-components';
import Header from '../../components/Header';
import flower1 from '../../assets/images/home/flower1.png';
import flower3 from '../../assets/images/home/flower3.png';
import flower5 from '../../assets/images/home/flower5.png';
import flower2 from '../../assets/images/home/flower2.png';
import flower4 from '../../assets/images/home/flower4.png';
import rabbit from '../../assets/images/admin/login-rabbit.png';
import {
  BackgroundWrapper,
  Flower,
  FlowerFirstRow,
  Flowers,
  FlowerSecondRow,
  GRASS,
  Grass,
} from '../Home';

const Wrapper = styled.main`
  height: 100vh;
  background: ${(props) => props.theme.home.bgColor};
`;

const MainWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Book = styled.img<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-position: center center;
  width: 65%;
  position: relative;
`;

const Form = styled.form`
  width: 55%;
  position: absolute;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.admin.loginColor};
  font-size: 3vw;
`;

const LoginButton = styled.img`
  width: 15%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 5%;
`;

const BOOK = '/src/assets/images/admin/login-book.png';

function Login() {
  return (
    <Wrapper>
      <Header category="login" />
      <MainWrapper>
        <Book src={BOOK}></Book>
        <Form>
          <InputBox>
            <Col>
              <label htmlFor="id" className="mg-b-30">
                아이디
              </label>
              <label htmlFor="pw">비밀번호</label>
            </Col>
            <Col>
              <input
                id="id"
                className="font-size-2half font-default pd-lr-10 mg-b-30
                 "
                style={{
                  border: '1px solid #6D422A',
                  borderRadius: 5,
                  outline: 'none',
                }}
              />
              <input
                id="pw"
                className="font-size-2half font-default pd-lr-10 "
                style={{
                  border: '1px solid #6D422A',
                  borderRadius: 5,
                  outline: 'none',
                }}
              />
            </Col>
          </InputBox>
          <LoginButton src={rabbit} alt="rabbit" />
        </Form>
      </MainWrapper>
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
