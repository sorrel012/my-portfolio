import styled from 'styled-components';
import AdminProject from '../../components/admin/projects/AdminProject.tsx';
import AdminProjectFn from '../../components/admin/projects/AdminProjectFn.tsx';
import AdminProjectTbShooting from '../../components/admin/projects/AdminProjectTbShooting.tsx';

const Wrapper = styled.main`
  background-color: ${(props) => props.theme.admin.bgColor};
  width: 75vw;
  height: 100vh;
  padding: 3%;
  overflow-y: auto;
`;

export const Projects = styled.section`
  background-color: ${(props) => props.theme.admin.wrapperBgColor};
  border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
  border-radius: 5px;
  color: ${(props) => props.theme.admin.textColor};
  padding: 3%;
  margin-bottom: 3%;
`;

function AdminProjects() {
  return (
    <Wrapper>
      <AdminProject />
      <AdminProjectFn />
      <AdminProjectTbShooting />
    </Wrapper>
  );
}

export default AdminProjects;
