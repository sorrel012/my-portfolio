import styled from 'styled-components';
import ProfileIntro from '../../components/profile/ProfileIntro';

const Wrapper = styled.div`
  background: ${(props) => props.theme.profile.bgColor};
  height: 100vh;
`;

function Profile() {
  return (
    <Wrapper>
      <ProfileIntro />
    </Wrapper>
  );
}

export default Profile;
