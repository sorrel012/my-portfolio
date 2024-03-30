import styled from 'styled-components';

import wing1 from '../assets/images/contact/wing1.png';
import wing2 from '../assets/images/contact/wing2.png';
import star from '../assets/images/contact/star.png';
import { motion } from 'framer-motion';

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.contact.bgColor};
  text-align: center;
  padding-top: 10%;
  padding-bottom: 5%;
  overflow-y: scroll;
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
  border-radius: 15px;
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
  border-radius: 15px;
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

const Stars = styled.div``;

const Star = styled(motion.img)``;

function Contact() {
  return (
    <Wrapper>
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
      </ContactWrapper>
      <Stars>
        <Star />
      </Stars>
    </Wrapper>
  );
}

export default Contact;
