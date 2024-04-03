import SideBar from '../../components/admin/SideBar.tsx';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
`;

function Admin() {
  return (
    <Wrapper>
      <SideBar />
      <Outlet />
    </Wrapper>
  );
}

export default Admin;
