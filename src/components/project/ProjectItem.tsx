import styled from 'styled-components';
import flag from '../../assets/images/projects/flag.png';
import github from '../../assets/images/projects/github.png';
import site from '../../assets/images/projects/site.png';
import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../../util/api.ts';
import { IProject } from '../admin/projects/AdminProject.tsx';
import { AWS_URL } from '../../util/constant.ts';
import ProjectFnItem from './ProjectFnItem.tsx';

const Wrapper = styled.section`
  width: 90%;
  background: ${(props) => props.theme.projects.contentBgColor};
  border-radius: 30px;
  margin: 0 auto 10px;
  padding: 50px 50px 40px 50px;
  color: #494032;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const Title = styled.h3`
  font-size: 2.3vw;
  font-weight: bold;
  margin-bottom: 3%;
`;

const ImageContainer = styled.div`
  width: 80%;
`;
const Image = styled.img`
  width: 100%;
`;

const Content = styled.section``;

const Label = styled.div`
  display: flex;
  margin-top: 3%;
`;

const LabelImg = styled.img`
  width: 2vw;
  margin-right: 5px;
`;

const LabelText = styled.span`
  font-size: 2vw;
  font-weight: bold;
`;

const Period = styled.section``;

const PeriodText = styled.div`
  font-size: 1.6vw;
  margin-top: 1.5%;
`;

const Skills = styled.section``;

export const Text = styled.li`
  font-size: 1.6vw;
  margin-top: 1.5%;
  line-height: 1.3;
`;

const Overview = styled.section``;

const TroubleShooting = styled.section`
  margin-bottom: 5%;
`;

const TroubleShootingBox = styled.li`
  font-size: 1.6vw;
  margin-top: 1.5%;
  line-height: 1.3;
  border: 2px solid ${(props) => props.theme.projects.wrapperBgColor};
  border-radius: 15px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.3);
`;

const Trouble = styled.div`
  margin-bottom: 1.5%;
`;

const Solution = styled.div``;

const Links = styled.div`
  padding-top: 3%;
  text-align: right;
`;

const LogoImg = styled.img`
  width: 8%;
  margin-right: 5px;
  background-color: #79422f;
  padding: 10px;
  border-radius: 50%;
`;

const Github = styled.a``;

const Deployment = styled.a`
  margin-left: 3%;
`;

function ProjectItem() {
  const { data, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  return (
    <Wrapper>
      {!isLoading &&
        data &&
        data.map((project: IProject) => (
          <div key={project.projectName}>
            <Title>{project.projectName}</Title>
            <ImageContainer>
              <Image
                src={`${AWS_URL}/${project.projectPic}`}
                alt={project.projectName}
              />
            </ImageContainer>
            <Content>
              <Period>
                <Label>
                  <LabelImg src={flag} alt="flag" />
                  <LabelText>기간</LabelText>
                </Label>
                <PeriodText>{project.projectPeriodCnt}</PeriodText>
              </Period>
              <Skills>
                <Label>
                  <LabelImg src={flag} alt="flag" />
                  <LabelText>주요 기술</LabelText>
                </Label>
                <ul>
                  <Text>{project.projectFrontSkills}</Text>
                  <Text>{project.projectBackSkills}</Text>
                </ul>
              </Skills>
              <Overview>
                <Label>
                  <LabelImg src={flag} alt="flag" />
                  <LabelText>주요 기능</LabelText>
                </Label>
                <ProjectFnItem {...{ projectName: project.projectName }} />
              </Overview>
              <TroubleShooting>
                <Label>
                  <LabelImg src={flag} alt="flag" />
                  <LabelText>문제 해결</LabelText>
                </Label>
                <ul>
                  <TroubleShootingBox>
                    <Trouble>
                      ❔ CKEditor를 활용해 글쓰기 기능을 개발하는 과정에서,
                      이미지 업로드에 관한 어려움을 겪었다. CKEditor는 에디터를
                      통해 이미지를 삽입하는 순간, 해당 이미지를 실시간으로
                      저장하고 URL을 받아와 에디터 내에서 미리보기를 제공해야
                      하는 시스템이다. 에디터에 이미지를 띄우기 위해서는 무조건
                      저장이 되어야 하기 때문에 에디터에 이미지를 추가 후 다시
                      삭제하고 저장하는 경우도 따로 처리를 해야 했다.
                    </Trouble>
                    <Solution>
                      ❕ 먼저 이미지 삽입 문제를 해결하기 위해,AWS의 S3를
                      도입하여 이미지 저장소를 구축하여 CKEditor와 연동했다.
                      이미지를 삭제하고 글을 저장하는 경우에는 글 저장 시점에서
                      에디터 내 존재하는 이미지와 S3에 저장된 이미지를 비교
                      분석하여, 실제로 글에 포함된 최종 이미지만을 S3에 보존하는
                      로직을 구현했다.
                    </Solution>
                  </TroubleShootingBox>
                  <TroubleShootingBox>
                    <Trouble>
                      ❔ 사용자가 사이트를 이용하는 동안 유지되어야 하는 필수
                      정보(로그인 상태)를 저장하기 위해 Vuex를 사용하여 상태
                      관리를 구현했으나, 페이지를 새로고침할 때마다 Vuex
                      스토어의 상태 데이터가 초기화되는 문제가 발생했다.
                    </Trouble>
                    <Solution>
                      ❕ 이 문제를 해결하기 위해 sessionStorage를 사용했다.
                      sessionStorage는 페이지 세션이 유지되는 동안에만 데이터를
                      저장하기 때문에, 사용자가 브라우저를 닫으면 데이터가
                      삭제된다. 이러한 특성을 활용하여, 사용자의 로그인 상태 등
                      사용자가 사이트 이용 중 유지되어야 할 정보를
                      sessionStorage에 저장하는 방식을 사용했다. 이를 통해
                      페이지 새로고침 시에 필수 정보가 초기화되는 문제를
                      효과적으로 해결할 수 있었다.
                    </Solution>
                  </TroubleShootingBox>
                </ul>
              </TroubleShooting>
            </Content>
            <Links>
              <Github
                href="https://github.com/sorrel012/postcard"
                target="_blank"
              >
                <LogoImg src={github} alt="github" />
              </Github>
              <Deployment>
                <LogoImg src={site} alt="deploy" />
              </Deployment>
            </Links>
          </div>
        ))}
    </Wrapper>
  );
}

export default ProjectItem;
