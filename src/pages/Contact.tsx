import styled from 'styled-components';

import wing1 from '../assets/images/contact/wing1.png';
import wing2 from '../assets/images/contact/wing2.png';
import star from '../assets/images/contact/star.png';
import { motion } from 'framer-motion';
import Header from '../components/Header.tsx';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.contact.bgColor};
  text-align: center;
  padding-top: 10%;
  overflow-y: scroll;
  position: relative;
`;

const Category = styled.h1`
  font-size: 3vw;
  font-weight: bold;
  color: ${(props) => props.theme.contact.headerColor};
  text-shadow:
    0 0 20px #ffffff,
    0 0 20px #f1f5fc;
  margin-bottom: 1.5%;
`;

const ContactWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  position: relative;
`;

const Wing = styled.img`
  width: 20%;
`;

const Box = styled.form`
  background: ${(props) => props.theme.contact.boxColor};
  width: 100%;
  border-radius: 25px;
  padding: 2%;
  text-align: left;
  z-index: 99;
`;

const Row = styled.div`
  display: flex;
`;

const Name = styled.div`
  flex: 6;
  margin-right: 15px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img<{ custom: string }>`
  width: 2.5vw;
  margin-right: 10px;
`;

const Text = styled.h3`
  display: inline-block;
  font-weight: bold;
  color: ${(props) => props.theme.contact.textColor};
  font-size: 2vw;
  padding-top: 5px;
`;

const Input = styled.input`
  margin: 20px 0 30px 5px;
  padding: 5px 15px;
  width: 100%;
  border: none;
  border-radius: 10px;
  font-size: 2vw;
  font-family: 'SUITE-Regular', sans-serif;
  &:focus-visible {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  margin: 20px 0 30px 5px;
  padding: 5px 15px;
  width: 100%;
  border: none;
  border-radius: 10px;
  font-size: 2vw;
  font-family: 'SUITE-Regular', sans-serif;
  &:focus-visible {
    outline: none;
  }
`;

const Email = styled.div`
  flex: 6;
`;

const Title = styled.div``;

const Content = styled.div``;

const Bottom = styled.div`
  height: 15%;
  position: relative;
`;

interface IStarPosition {
  top: string;
  left: string;
}

const Star = styled(motion.svg)<IStarPosition>`
  width: 1vw;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: 1;
`;

function generateTopStars(n: number): IStarPosition[] {
  const stars: IStarPosition[] = [];
  for (let i = 0; i < n; i++) {
    const top = `${Math.floor(Math.random() * 30) + 5}%`;
    const left = `${Math.floor(Math.random() * 96)}%`;

    stars.push({ top, left });
  }
  return stars;
}
function generateStars(n: number): IStarPosition[] {
  const stars: IStarPosition[] = [];
  for (let i = 0; i < n; i++) {
    const top = `${Math.floor(Math.random() * 95) + 5}%`;
    const left = `${Math.floor(Math.random() * 96)}%`;

    stars.push({ top, left });
  }
  return stars;
}

const stars: IStarPosition[] = generateTopStars(15);
const centerStars: IStarPosition[] = generateStars(30);
const bottomStars: IStarPosition[] = generateStars(10);

const starVariants = {
  initial: { fill: 'rgba(255, 255, 255, 0)' },
  sparkle: {
    fill: 'rgba(255, 255, 255, 1)',
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },
};

function Contact() {
  return (
    <Wrapper>
      <Header category="contact" />
      <Category>CONTACT</Category>
      <ContactWrapper>
        <Wing src={wing1} alt="wing" />
        <Box>
          <Row>
            <Name>
              <Label>
                <Logo src={star} alt="star" custom="first" />
                <Text>이름</Text>
              </Label>
              <Input />
            </Name>
            <Email>
              <Label>
                <Logo src={star} alt="star" custom="sec" />
                <Text>이메일</Text>
              </Label>
              <Input />
            </Email>
          </Row>
          <Title>
            <Label>
              <Logo src={star} alt="star" custom="" />
              <Text>제목</Text>
            </Label>
            <Input />
          </Title>
          <Content>
            <Label>
              <Logo src={star} alt="star" custom="" />
              <Text>내용</Text>
            </Label>
            <TextArea className="h-30" />
          </Content>
        </Box>
        <Wing src={wing2} alt="wing" />
        {centerStars.map((star, i) => (
          <Star
            key={i}
            top={star.top}
            left={star.left}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <motion.path
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              variants={starVariants}
              initial="initial"
              animate="sparkle"
            />
          </Star>
        ))}
      </ContactWrapper>
      <Bottom>
        {bottomStars.map((star, i) => (
          <Star
            key={i}
            top={star.top}
            left={star.left}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <motion.path
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
              variants={starVariants}
              initial="initial"
              animate="sparkle"
            />
          </Star>
        ))}
      </Bottom>
      {stars.map((star, i) => (
        <Star
          key={i}
          top={star.top}
          left={star.left}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <motion.path
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            variants={starVariants}
            initial="initial"
            animate="sparkle"
          />
        </Star>
      ))}
    </Wrapper>
  );
}

export default Contact;
