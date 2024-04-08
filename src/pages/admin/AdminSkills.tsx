import styled from 'styled-components';
import AdminSkillsClient from '../../components/admin/skills/AdminSkillsClient.tsx';
import AdminSkillsTool from '../../components/admin/skills/AdminSkillsTool.tsx';
import AdminSkillsServer from '../../components/admin/skills/AdminSkillsServer.tsx';

const Wrapper = styled.main`
  background-color: ${(props) => props.theme.admin.bgColor};
  width: 75vw;
  height: 100vh;
  padding: 3%;
  overflow-y: auto;
`;

export const Skills = styled.section`
  background-color: ${(props) => props.theme.admin.wrapperBgColor};
  border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
  border-radius: 5px;
  color: ${(props) => props.theme.admin.textColor};
  padding: 3%;
  margin-bottom: 3%;
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

export interface ISkills {
  fileName: string;
  fileOrder: number;
}

function AdminSkills() {
  return (
    <Wrapper>
      <AdminSkillsClient />
      <AdminSkillsServer />
      <AdminSkillsTool />
    </Wrapper>
  );
}

export default AdminSkills;
