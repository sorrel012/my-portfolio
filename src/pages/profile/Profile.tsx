import styled from 'styled-components';
import ProfileIntro from '../../components/profile/ProfileIntro';
import ProfileMain from '../../components/profile/ProfileMain';
import ProfileHistory from '../../components/profile/ProfileHistory';

const Wrapper = styled.div`
  background: ${(props) => props.theme.profile.bgColor};
  height: 100vh;
`;

function Profile() {
  return (
    <Wrapper>
      <ProfileIntro />
      <ProfileMain />
      <ProfileHistory />
    </Wrapper>
  );
}

export default Profile;
