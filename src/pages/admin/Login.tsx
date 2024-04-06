import styled from 'styled-components';
import Header from '../../components/Header';
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
} from '../Home';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

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
  width: 50%;
  position: relative;
`;

const Form = styled.form`
  width: 35%;
  position: absolute;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.admin.loginColor};
  font-size: 2vw;
  width: 70%;
`;

const LoginButton = styled.button<{ src: string }>`
  background: url(${(props) => props.src}) no-repeat center center;
  background-size: contain;
  border: none;
  width: 100%;
  height: 80%;
  position: absolute;
  margin-top: 8%;
  cursor: pointer;
`;

const BOOK = '/src/assets/images/admin/login-book.png';
const RABBIT = '/src/assets/images/admin/login-rabbit.png';

interface ILogin {
  id: string;
  pw: string;
}

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<ILogin>();
  const apiUrl = useSelector((state: RootState) => state.apiUrl.url);

  const onLoginSubmit = (data: ILogin) => {
    if (data.id.trim().length > 0 && data.pw.trim().length > 0) {
      // 아이디
      const params = { id: data.id, pw: data.pw };
      axios
        .post(`${apiUrl}/login`, params)
        .then((response) => {
          console.log(response);
        })
        .catch(() => {
          Swal.fire({
            title: '❗',
            text: '아이디 비밀번호가 일치하지 않습니다.',
          });
        });
    } else {
      Swal.fire({
        title: '❗',
        text: '아이디 비밀번호를 확인해 주세요.',
      });
    }
    // navigate('/admin');
  };

  return (
    <Wrapper>
      <Header category="login" />
      <MainWrapper>
        <Book src={BOOK}></Book>
        <Form onSubmit={handleSubmit(onLoginSubmit)}>
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
                {...register('id', { required: false })}
                className="font-size-2 font-default pd-lr-10"
                style={{
                  border: '1px solid #6D422A',
                  borderRadius: 5,
                  outline: 'none',
                }}
              />
              <input
                id="pw"
                type="password"
                {...register('pw', { required: false })}
                className="font-size-2 font-default pd-lr-10 mg-t-30"
                style={{
                  border: '1px solid #6D422A',
                  borderRadius: 5,
                  outline: 'none',
                }}
              />
            </Col>
          </InputBox>
          <LoginButton src={RABBIT} type="submit" />
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
