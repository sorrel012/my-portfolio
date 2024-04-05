import styled from 'styled-components';
import ContactItem from '../../components/admin/ContactItem.tsx';
import { MainTitle } from './AdminProfile.tsx';

const Wrapper = styled.main`
  background-color: ${(props) => props.theme.admin.bgColor};
  width: 75vw;
  height: 100vh;
  padding: 3%;
  overflow-y: auto;
  color: ${(props) => props.theme.admin.textColor};
`;

function AdminContact() {
  return (
    <Wrapper>
      <MainTitle>Contact</MainTitle>
      <ContactItem />
    </Wrapper>
  );
}

export default AdminContact;
