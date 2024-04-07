import styled from 'styled-components';
import { FormEvent, useRef, useState } from 'react';
import { IProfileInfo, saveProfileInfo } from '../../util/api.ts';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../index.tsx';
import Swal from 'sweetalert2';

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

enum Categories {
  CERTIFICATION = 'cert',
  EDUCATION = 'edu',
  CAREER = 'career',
  CAREER_PROJECT = 'careerProject',
  CAREER_WORK = 'careerWork',
}

interface ICertification {
  certName: string;
  certDate: string;
  certScore: string;
  certOrder: number;
}

interface IEducation {
  eduPeriod: string;
  eduContent: string;
  eduCategory: string;
  eduOrder: number;
}

interface ICareer {
  careerCompany: string;
  careerPeriod: string;
  careerOrder: number;
}

interface ICareerProject {
  careerCompany: string;
  careerProjectName: string;
  careerProjectOrder: number;
}

interface ICareerWork {
  careerProjectName: string;
  careerWorkContent: string;
  careerWorkOrder: number;
}

function AdminProfile() {
  const [certifications, setCertifications] = useState<ICertification[]>([]);
  const [educations, setEducations] = useState<IEducation[]>([]);
  const [career, setCareer] = useState<ICareer[]>([]);
  const [careerProject, setCareerProject] = useState<ICareerProject[]>([]);
  const [careerWork, setCareerWork] = useState<ICareerWork[]>([]);
  const introPicRef = useRef<HTMLInputElement>(null);
  const introTitleRef = useRef<HTMLInputElement>(null);
  const introCnRef = useRef<HTMLTextAreaElement>(null);
  const subPicRef = useRef<HTMLInputElement>(null);
  const birthRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  const {
    mutate: profileInfoMutate,
    isError: profileInfoIsError,
    error: profileInfoError,
  } = useMutation({
    mutationFn: saveProfileInfo,
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

  const addRow = (type: string) => {
    switch (type) {
      case Categories.CERTIFICATION:
        setCertifications([
          ...certifications,
          { certName: '', certDate: '', certScore: '', certOrder: 1 },
        ]);
        break;
      case Categories.EDUCATION:
        setEducations([
          ...educations,
          { eduPeriod: '', eduContent: '', eduCategory: '', eduOrder: 1 },
        ]);
        break;
      case Categories.CAREER:
        setCareer([
          ...career,
          { careerCompany: '', careerPeriod: '', careerOrder: 1 },
        ]);
        break;
      case Categories.CAREER_PROJECT:
        setCareerProject([
          ...careerProject,
          { careerCompany: '', careerProjectName: '', careerProjectOrder: 1 },
        ]);
        break;
      case Categories.CAREER_WORK:
        setCareerWork([
          ...careerWork,
          { careerProjectName: '', careerWorkContent: '', careerWorkOrder: 1 },
        ]);
        break;
    }
  };

  const removeRow = (type: string, index: number) => {
    switch (type) {
      case Categories.CERTIFICATION:
        setCertifications(certifications.filter((_, i) => i !== index));
        break;
      case Categories.EDUCATION:
        setEducations(educations.filter((_, i) => i !== index));
        break;
      case Categories.CAREER:
        setCareer(career.filter((_, i) => i !== index));
        break;
      case Categories.CAREER_PROJECT:
        setCareerProject(careerProject.filter((_, i) => i !== index));
        break;
      case Categories.CAREER_WORK:
        setCareerWork(careerWork.filter((_, i) => i !== index));
        break;
    }
  };

  const onChange = (
    type: string,
    index: number,
    label: string,
    value: string | number,
  ) => {
    switch (type) {
      case Categories.CERTIFICATION:
        const updatedCertifications = certifications.map((certification, i) => {
          if (i === index) {
            return { ...certification, [label]: value };
          }
          return certification;
        });
        setCertifications(updatedCertifications);
        break;
      case Categories.EDUCATION:
        const updatedEducations = educations.map((education, i) => {
          if (i === index) {
            return { ...education, [label]: value };
          }
          return education;
        });
        setEducations(updatedEducations);
        break;
      case Categories.CAREER:
        const updatedCareer = career.map((career, i) => {
          if (i === index) {
            return { ...career, [label]: value };
          }
          return career;
        });
        setCareer(updatedCareer);
        break;
      case Categories.CAREER_PROJECT:
        const updatedCareerProject = careerProject.map((project, i) => {
          if (i === index) {
            return { ...project, [label]: value };
          }
          return project;
        });
        setCareerProject(updatedCareerProject);
        break;
      case Categories.CAREER_WORK:
        const updatedCareerWork = careerWork.map((work, i) => {
          if (i === index) {
            return { ...work, [label]: value };
          }
          return work;
        });
        setCareerWork(updatedCareerWork);
        break;
    }
  };

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
    profileInfoMutate(params);
  };

  return (
    <Wrapper>
      <Profile>
        <MainTitle>개인정보</MainTitle>
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
      </Profile>
      <Profile>
        <MainTitle>자격증 및 어학</MainTitle>
        <TableButton onClick={() => addRow(Categories.CERTIFICATION)}>
          +
        </TableButton>
        <Table>
          <thead>
            <tr>
              <Th>이름</Th>
              <Th>날짜</Th>
              <Th>점수</Th>
              <Th>정렬</Th>
              <Th>🗑</Th>
            </tr>
          </thead>
          <tbody>
            {certifications.map((certification, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={certification.certName}
                    onChange={(e) =>
                      onChange(
                        Categories.CERTIFICATION,
                        index,
                        'certName',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={certification.certDate}
                    onChange={(e) =>
                      onChange(
                        Categories.CERTIFICATION,
                        index,
                        'certDate',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={certification.certScore}
                    onChange={(e) =>
                      onChange(
                        Categories.CERTIFICATION,
                        index,
                        'certScore',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={certification.certOrder}
                    onChange={(e) =>
                      onChange(
                        Categories.CERTIFICATION,
                        index,
                        'certOrder',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <TableButton
                    onClick={() => removeRow(Categories.CERTIFICATION, index)}
                  >
                    -
                  </TableButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Save>
          <Button>저장</Button>
        </Save>
      </Profile>
      <Profile>
        <MainTitle>교육</MainTitle>
        <TableButton onClick={() => addRow(Categories.EDUCATION)}>
          +
        </TableButton>
        <Table>
          <thead>
            <tr>
              <Th>기간</Th>
              <Th>내용</Th>
              <Th>카테고리</Th>
              <Th>정렬</Th>
              <Th>🗑</Th>
            </tr>
          </thead>
          <tbody>
            {educations.map((education, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={education.eduPeriod}
                    onChange={(e) =>
                      onChange(
                        Categories.EDUCATION,
                        index,
                        'eduPeriod',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={education.eduContent}
                    onChange={(e) =>
                      onChange(
                        Categories.EDUCATION,
                        index,
                        'eduContent',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={education.eduCategory}
                    onChange={(e) =>
                      onChange(
                        Categories.EDUCATION,
                        index,
                        'eduCategory',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={education.eduOrder}
                    onChange={(e) =>
                      onChange(
                        Categories.EDUCATION,
                        index,
                        'eduOrder',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <TableButton
                    onClick={() => removeRow(Categories.EDUCATION, index)}
                  >
                    -
                  </TableButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Save>
          <Button>저장</Button>
        </Save>
      </Profile>
      <Profile>
        <MainTitle>경력</MainTitle>
        <TableButton onClick={() => addRow(Categories.CAREER)}>+</TableButton>
        <Table>
          <thead>
            <tr>
              <Th>회사명</Th>
              <Th>기간</Th>
              <Th>정렬</Th>
              <Th>🗑</Th>
            </tr>
          </thead>
          <tbody>
            {career.map((career, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={career.careerCompany}
                    onChange={(e) =>
                      onChange(
                        Categories.CAREER,
                        index,
                        'careerCompany',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={career.careerPeriod}
                    onChange={(e) =>
                      onChange(
                        Categories.CAREER,
                        index,
                        'careerPeriod',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={career.careerOrder}
                    onChange={(e) =>
                      onChange(
                        Categories.CAREER,
                        index,
                        'careerOrder',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <TableButton
                    onClick={() => removeRow(Categories.CAREER, index)}
                  >
                    -
                  </TableButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Save>
          <Button>저장</Button>
        </Save>
      </Profile>
      <Profile>
        <MainTitle>회사 프로젝트</MainTitle>
        <TableButton onClick={() => addRow(Categories.CAREER_PROJECT)}>
          +
        </TableButton>
        <Table>
          <thead>
            <tr>
              <Th>회사명</Th>
              <Th>프로젝트명</Th>
              <Th>정렬</Th>
              <Th>🗑</Th>
            </tr>
          </thead>
          <tbody>
            {careerProject.map((project, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={project.careerCompany}
                    onChange={(e) =>
                      onChange(
                        Categories.CAREER_PROJECT,
                        index,
                        'careerCompany',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={project.careerProjectName}
                    onChange={(e) =>
                      onChange(
                        Categories.CAREER_PROJECT,
                        index,
                        'careerProjectName',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={project.careerProjectOrder}
                    onChange={(e) =>
                      onChange(
                        Categories.CAREER_PROJECT,
                        index,
                        'careerProjectOrder',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <TableButton
                    onClick={() => removeRow(Categories.CAREER_PROJECT, index)}
                  >
                    -
                  </TableButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Save>
          <Button>저장</Button>
        </Save>
      </Profile>
      <Profile>
        <MainTitle>업무</MainTitle>
        <TableButton onClick={() => addRow(Categories.CAREER_WORK)}>
          +
        </TableButton>
        <Table>
          <thead>
            <tr>
              <Th>프로젝트명</Th>
              <Th>업무내용</Th>
              <Th>정렬</Th>
              <Th>🗑</Th>
            </tr>
          </thead>
          <tbody>
            {careerWork.map((work, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={work.careerProjectName}
                    onChange={(e) =>
                      onChange(
                        Categories.CAREER_WORK,
                        index,
                        'careerProjectName',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={work.careerWorkContent}
                    onChange={(e) =>
                      onChange(
                        Categories.CAREER_WORK,
                        index,
                        'careerWorkContent',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={work.careerWorkOrder}
                    onChange={(e) =>
                      onChange(
                        Categories.CAREER_WORK,
                        index,
                        'careerWorkOrder',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <TableButton
                    onClick={() => removeRow(Categories.CAREER_WORK, index)}
                  >
                    -
                  </TableButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Save>
          <Button>저장</Button>
        </Save>
      </Profile>
    </Wrapper>
  );
}

export default AdminProfile;
