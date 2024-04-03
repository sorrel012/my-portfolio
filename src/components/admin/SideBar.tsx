import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
  background-color: ${(props) => props.theme.admin.navBgColor};
  height: 100vh;
  width: 25vw;
`;

const LoginUser = styled.section``;

const Categories = styled.section`
  text-align: center;

  a {
    display: block;
    text-transform: uppercase;
    font-size: 2.5vw;
    font-weight: bold;
    color: ${(props) => props.theme.admin.navTextColor};
    border-bottom: 1px solid ${(props) => props.theme.admin.navBorderColor};
    padding: 10px 0;
  }

  .isActive {
    color: ${(props) => props.theme.admin.navTextHoverColor};
  }
`;

const Logout = styled.button``;

function SideBar() {
  return (
    <Wrapper>
      <LoginUser></LoginUser>
      <Categories>
        <NavLink
          to="/admin"
          className={({ isActive }) => (isActive ? 'isActive' : '')}
          end
        >
          home
        </NavLink>
        <NavLink
          to="/admin/profile"
          className={({ isActive }) => (isActive ? 'isActive' : '')}
        >
          profile
        </NavLink>
        <NavLink
          to="/admin/skills"
          className={({ isActive }) => (isActive ? 'isActive' : '')}
        >
          skills
        </NavLink>
        <NavLink
          to="/admin/projects"
          className={({ isActive }) => (isActive ? 'isActive' : '')}
        >
          projects
        </NavLink>
        <NavLink
          to="/admin/contact"
          className={({ isActive }) => (isActive ? 'isActive' : '')}
        >
          contact
        </NavLink>
      </Categories>
      <Logout>LOGOUT</Logout>
    </Wrapper>
  );
}

export default SideBar;
