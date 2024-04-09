import FullPage from '@fullpage/react-fullpage';
import ProfileHistory from './ProfileHistory.tsx';
import Header from '../../components/Header.tsx';
import { useQuery } from '@tanstack/react-query';
import { getProfileInfo } from '../../util/api.ts';
import ProfileIntro from './ProfileIntro.tsx';
import ProfileMain from './ProfileMain.tsx';
import ProfileEdu from './ProfileEdu.tsx';

export interface IIntroProps {
  mainPic: string;
  title: string;
  content: string;
}

export interface IMainProps {
  subPic: string;
  name: string;
  birth: string;
  email: string;
  address: string;
}

export interface IHistoryProps {}

function Profile() {
  const { data: infoData, isLoading: isInfoLoading } = useQuery({
    queryKey: ['profileInfo'],
    queryFn: getProfileInfo,
  });

  const introProfile: IIntroProps = {
    mainPic: infoData?.mainPic,
    title: infoData?.title,
    content: infoData?.content,
  };

  const mainProfile: IMainProps = {
    subPic: infoData?.subPic,
    name: infoData?.name,
    birth: infoData?.birth,
    email: infoData?.email,
    address: infoData?.address,
  };

  return (
    <FullPage
      licenseKey={import.meta.env.VITE_FULLPAGE_LICENSE_KEY}
      scrollingSpeed={1000}
      navigation
      anchors={['intro', 'main', 'edu', 'career']}
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
              {!isInfoLoading && <ProfileIntro {...introProfile} />}
            </div>
            <div className="section">
              <ProfileMain {...mainProfile} />
            </div>
            <div className="section">
              <ProfileEdu />
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
