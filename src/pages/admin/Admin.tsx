import SideBar from '../../components/admin/SideBar.tsx';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

const Wrapper = styled.nav`
  display: flex;
`;

function Admin() {
  const { name, pic } = useSelector((state: RootState) => state.admin);

  return (
    <Wrapper>
      <SideBar name={name} pic={pic} />
      <Outlet />
    </Wrapper>
  );
}

export default Admin;
