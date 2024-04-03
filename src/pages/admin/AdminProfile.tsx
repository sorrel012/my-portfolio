import styled from 'styled-components';

const Wrapper = styled.main`
  background-color: ${(props) => props.theme.admin.bgColor};
  width: 75vw;
  height: 100vh;
  padding: 3%;
  overflow-y: auto;
`;

const Profile = styled.section`
  background-color: ${(props) => props.theme.admin.wrapperBgColor};
  border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
  border-radius: 5px;
  color: ${(props) => props.theme.admin.textColor};
  padding: 3%;
  margin-bottom: 3%;
`;

const MainTitle = styled.h2`
  font-size: 2vw;
  font-weight: bold;
  margin-bottom: 2%;
`;

const Form = styled.form`
  width: 100%;
  text-align: left;
`;

const InputRow = styled.div`
  display: flex;
`;

const TextAreaRow = styled.div`
  display: flex;
`;

const Label = styled.label`
  font-size: 2vw;
  flex: 2;
  margin-bottom: 1%;
`;

const Save = styled.div`
  text-align: right;
`;

const Input = styled.input<{ flex: string }>`
  flex: ${(props) => props.flex};
  border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
  border-radius: 5px;
  color: ${(props) => props.theme.admin.textColor};
  font-size: 1.8vw;
  padding: 0 10px;
  outline: none;
  font-family: 'SUITE-Regular', sans-serif;
  margin-bottom: 1%;
`;

const Buttons = styled.span`
  flex: 1;
`;

const DnButton = styled.button`
  background-color: ${(props) => props.theme.admin.bgColor};
  border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
  border-radius: 5px;
  color: ${(props) => props.theme.admin.textColor};
  font-family: 'SUITE-Regular', sans-serif;
  font-size: 1.8vw;
  padding: 0.5% 2%;
  margin-left: 2%;
  width: 2.5vw;
`;

const TextArea = styled.textarea`
  flex: 10;
  border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
  border-radius: 5px;
  resize: none;
  font-size: 1.8vw;
  padding: 0 5px;
  font-family: 'SUITE-Regular', sans-serif;
  color: ${(props) => props.theme.admin.textColor};
  outline: none;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.admin.bgColor};
  border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
  border-radius: 5px;
  color: ${(props) => props.theme.admin.textColor};
  font-family: 'SUITE-Regular', sans-serif;
  font-size: 1.8vw;
  padding: 0.5% 2%;
  margin-top: 3.5%;
`;

function AdminProfile() {
  return (
    <Wrapper>
      <Profile>
        <MainTitle>자기소개</MainTitle>
        <Form>
          <InputRow>
            <Label>사진</Label>
            <Input flex="9" />
            <Buttons>
              <DnButton>+</DnButton>
              <DnButton>-</DnButton>
            </Buttons>
          </InputRow>
          <InputRow>
            <Label>제목</Label>
            <Input flex="10" />
          </InputRow>
          <TextAreaRow>
            <Label>내용</Label>
            <TextArea />
          </TextAreaRow>
          <Save>
            <Button>저장</Button>
          </Save>
        </Form>
      </Profile>
      <Profile>
        <MainTitle>개인정보</MainTitle>
        <Form>
          <InputRow>
            <Label>사진</Label>
            <Input flex="9" />
            <Buttons>
              <DnButton>+</DnButton>
              <DnButton>-</DnButton>
            </Buttons>
          </InputRow>
          <InputRow>
            <Label>이름</Label>
            <Input flex="10" />
          </InputRow>
          <InputRow>
            <Label>생년월일</Label>
            <Input flex="10" />
          </InputRow>
          <InputRow>
            <Label>이메일</Label>
            <Input flex="10" />
          </InputRow>
          <InputRow>
            <Label>주소</Label>
            <Input flex="10" />
          </InputRow>
          <Save>
            <Button>저장</Button>
          </Save>
        </Form>
      </Profile>
      <Profile>
        <MainTitle>자격증 및 어학</MainTitle>
        <Form></Form>
      </Profile>
    </Wrapper>
  );
}

export default AdminProfile;
