import FullPage from '@fullpage/react-fullpage';
import ProfileHistory from './ProfileHistory.tsx';
import ProfileIntro from './ProfileIntro.tsx';
import ProfileMain from './ProfileMain.tsx';
import Header from '../../components/Header.tsx';

function Profile() {
  return (
    <FullPage
      licenseKey={import.meta.env.VITE_FULLPAGE_LICENSE_KEY}
      scrollingSpeed={1000}
      navigation
      anchors={['intro', 'main', 'history']}
      controlArrows
      controlArrowsHTML={[
        '<div class="fp-arrow"></div>',
        '<div class="fp-arrow"></div>',
      ]}
      sectionsColor={['#fff']}
      render={() => {
        return (
          <>
            <div className="section">
              <Header category="profile" />
              <ProfileIntro />
            </div>
            <div className="section">
              <ProfileMain />
            </div>
            <div className="section">
              <ProfileHistory />
            </div>
          </>
        );
      }}
      credits={{
        enabled: false,
      }}
    />
  );
}

export default Profile;
