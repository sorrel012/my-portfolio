import styled from 'styled-components';

const ProjectContent = styled.li`
  padding-left: 2%;
  width: 100%;
  font-size: 1.2vw;
  margin-bottom: 7px;
  font-weight: bold;
`;

function CareerWorkItem() {
  return (
    <ul>
      <ProjectContent>
        - 신세계포인트 앱 다국어 버전 Admin 화면 이관
      </ProjectContent>
      <ProjectContent>- 관계사 이벤트 배너 표시 추가</ProjectContent>
      <ProjectContent>- 비밀번호 변경 주기 적용</ProjectContent>
      <ProjectContent>
        - 포인트 비밀번호 변경 본인인증 및 비회원 기능 추가
      </ProjectContent>
      <ProjectContent>
        - 차량정보 수집 필수 동의 및 혜택 제공 동의 분리
      </ProjectContent>
    </ul>
  );
}

export default CareerWorkItem;
