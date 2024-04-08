import styled from 'styled-components';
import { FormEvent, useEffect, useRef } from 'react';
import {
  editProfileInfo,
  getProfileInfo,
  IProfileInfo,
} from '../../util/api.ts';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '../../index.tsx';
import Swal from 'sweetalert2';
import AdminProfileCert from '../../components/admin/profile/AdminProfileCert.tsx';
import AdminProfileEdu from '../../components/admin/profile/AdminProfileEdu.tsx';
import AdminProfileCareer from '../../components/admin/profile/AdminProfileCareer.tsx';
import AdminProfileCareerProject from '../../components/admin/profile/AdminProfileCareerProject.tsx';
import AdminProfileCareerWork from '../../components/admin/profile/AdminProfileCareerWork.tsx';

const Wrapper = styled.main`
  background-color: ${(props) => props.theme.admin.bgColor};
  width: 75vw;
  height: 100vh;
  padding: 3%;
  overflow-y: auto;
`;

export const Profile = styled.section`
  background-color: ${(props) => props.theme.admin.wrapperBgColor};
  border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
  border-radius: 5px;
  color: ${(props) => props.theme.admin.textColor};
  padding: 3%;
  margin-bottom: 3%;
`;

export const MainTitle = styled.h2`
  font-size: 2vw;
  font-weight: bold;
  margin-bottom: 2%;
`;

export const Form = styled.form`
  width: 100%;
  text-align: left;
`;

export const InputRow = styled.div`
  display: flex;
`;

export const TextAreaRow = styled.div`
  display: flex;
  margin-bottom: 1%;
`;

const Label = styled.label`
  font-size: 2vw;
  flex: 2;
  margin-bottom: 1%;
`;

export const Save = styled.div`
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

const TextArea = styled.textarea`
  flex: 10;
  width: 80%;
  border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
  border-radius: 5px;
  resize: none;
  font-size: 1.8vw;
  padding: 0 5px;
  font-family: 'SUITE-Regular', sans-serif;
  color: ${(props) => props.theme.admin.textColor};
  outline: none;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.admin.bgColor};
  border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
  border-radius: 5px;
  color: ${(props) => props.theme.admin.textColor};
  font-family: 'SUITE-Regular', sans-serif;
  font-size: 1.8vw;
  padding: 0.5% 2%;
  margin-top: 3.5%;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;

  input {
    border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
    border-radius: 5px;
    color: ${(props) => props.theme.admin.textColor};
    font-size: 1.8vw;
    padding: 0 10px;
    outline: none;
    font-family: 'SUITE-Regular', sans-serif;
    margin-bottom: 1%;
    width: 95%;
  }
`;

export const TableButton = styled.button`
  background-color: ${(props) => props.theme.admin.bgColor};
  border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
  border-radius: 5px;
  color: ${(props) => props.theme.admin.textColor};
  font-family: 'SUITE-Regular', sans-serif;
  font-size: 1.8vw;
  cursor: pointer;
`;

export const Th = styled.th`
  font-size: 2vw;
`;

function AdminProfile() {
  const introPicRef = useRef<HTMLInputElement>(null);
  const introTitleRef = useRef<HTMLInputElement>(null);
  const introCnRef = useRef<HTMLTextAreaElement>(null);
  const subPicRef = useRef<HTMLInputElement>(null);
  const birthRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  const { data, isLoading } = useQuery({
    queryKey: ['profileInfo'],
    queryFn: getProfileInfo,
  });

  const { mutate } = useMutation({
    mutationFn: editProfileInfo,
    onSuccess: () => {
      Swal.fire({
        title: '✅',
        text: '저장에 성공했습니다.',
      });
      queryClient.invalidateQueries({ queryKey: ['profileInfo'] });
    },
    onError: () => {
      Swal.fire({
        title: '❗',
        text: '저장에 실패했습니다.',
      });
    },
  });

  const onSaveIntro = (e: FormEvent) => {
    e.preventDefault();
    const params: IProfileInfo = {
      mainPic: introPicRef?.current?.value,
      title: introTitleRef?.current?.value,
      content: introCnRef?.current?.value,
      subPic: subPicRef?.current?.value,
      name: nameRef?.current?.value,
      birth: birthRef?.current?.value,
      email: emailRef?.current?.value,
      address: addressRef?.current?.value,
    };

    mutate(params);
  };

  useEffect(() => {
    if (
      !isLoading &&
      data &&
      introPicRef.current &&
      introTitleRef.current &&
      introCnRef.current &&
      subPicRef.current &&
      nameRef.current &&
      birthRef.current &&
      emailRef.current &&
      addressRef.current
    ) {
      introPicRef.current.value = data.mainPic;
      introTitleRef.current.value = data.title;
      introCnRef.current.value = data.content;
      subPicRef.current.value = data.subPic;
      nameRef.current.value = data.name;
      birthRef.current.value = data.birth;
      emailRef.current.value = data.email;
      addressRef.current.value = data.address;
    }
  }, [data, isLoading]);

  return (
    <Wrapper>
      <Profile>
        <MainTitle>개인정보</MainTitle>
        {!isLoading && (
          <Form>
            <InputRow>
              <Label>메인사진</Label>
              <Input ref={introPicRef} flex="10" />
            </InputRow>
            <InputRow>
              <Label>제목</Label>
              <Input ref={introTitleRef} flex="10" />
            </InputRow>
            <TextAreaRow>
              <Label>내용</Label>
              <TextArea ref={introCnRef} />
            </TextAreaRow>
            <InputRow>
              <Label>작은사진</Label>
              <Input ref={subPicRef} flex="10" />
            </InputRow>
            <InputRow>
              <Label>이름</Label>
              <Input ref={nameRef} flex="10" />
            </InputRow>
            <InputRow>
              <Label>생년월일</Label>
              <Input ref={birthRef} flex="10" />
            </InputRow>
            <InputRow>
              <Label>이메일</Label>
              <Input ref={emailRef} flex="10" />
            </InputRow>
            <InputRow>
              <Label>주소</Label>
              <Input ref={addressRef} flex="10" />
            </InputRow>
            <Save>
              <Button onClick={onSaveIntro}>저장</Button>
            </Save>
          </Form>
        )}
      </Profile>
      <AdminProfileCert />
      <AdminProfileEdu />
      <AdminProfileCareer />
      <AdminProfileCareerProject />
      <AdminProfileCareerWork />
    </Wrapper>
  );
}

export default AdminProfile;
