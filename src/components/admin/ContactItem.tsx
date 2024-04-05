import styled from 'styled-components';
import { useState } from 'react';

const ContactBox = styled.section`
  background-color: ${(props) => props.theme.admin.wrapperBgColor};
  border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
  border-radius: 5px;
  color: ${(props) => props.theme.admin.textColor};
  padding: 3% 3% 1% 3%;
  margin-bottom: 3%;
`;

const Content = styled.div`
  margin-bottom: 5%;
`;

const Label = styled.h3`
  font-size: 2vw;
  flex: 2;
  margin-bottom: 1%;
  font-weight: bold;
`;

const Text = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
  border-radius: 5px;
  padding: 10px;
  font-size: 1.8vw;
`;

function ContactItem() {
  const [openDetail, setOpenDetail] = useState(false);

  const onOpen = () => {
    setOpenDetail((prev) => !prev);
  };

  return (
    <ContactBox>
      <Content>
        <Label style={{ cursor: 'pointer' }} onClick={onOpen}>
          날짜
        </Label>
        <Text>2024-04-01 15:15</Text>
      </Content>
      {openDetail && (
        <>
          <Content>
            <Label>이름</Label>
            <Text>한효원</Text>
          </Content>
          <Content>
            <Label>이메일</Label>
            <Text>sorrel012@gmail.com</Text>
          </Content>
          <Content>
            <Label>제목</Label>
            <Text>연락 부탁드립니다.</Text>
          </Content>
          <Content>
            <Label>내용</Label>
            <Text>~~~~~~로 연락주세용</Text>
          </Content>
        </>
      )}
    </ContactBox>
  );
}

export default ContactItem;
