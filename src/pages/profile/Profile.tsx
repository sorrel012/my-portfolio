import FullPage from '@fullpage/react-fullpage';
import ProfileHistory from './ProfileHistory.tsx';
import Header from '../../components/Header.tsx';
import { useQuery } from '@tanstack/react-query';
import { getProfileEdu, getProfileInfo } from '../../util/api.ts';
import ProfileIntro from './ProfileIntro.tsx';
import { useEffect, useState } from 'react';
import { IEducation } from '../../components/admin/profile/AdminProfileEdu.tsx';
import ProfileMain from './ProfileMain.tsx';

export interface IIntroProps {
  mainPic: string;
  title: string;
  content: string;
}

export interface IMainProps {
  name: string;
  birth: string;
  email: string;
  address: string;
  educations: IEducation[];
}

function Profile() {
  const [sEducations, setSEducations] = useState<IEducation[]>([]);
  const [eEducations, setEEducations] = useState<IEducation[]>([]);
  const { data: infoData, isLoading: isInfoLoading } = useQuery({
    queryKey: ['profileInfo'],
    queryFn: getProfileInfo,
  });

  const { data: eduData, isLoading: isEduLoading } = useQuery({
    queryKey: ['profileEdu'],
    queryFn: getProfileEdu,
  });

  useEffect(() => {
    if (!isEduLoading && eduData) {
      setSEducations(eduData.filter((v: IEducation) => v.eduCategory === 'S'));
      setEEducations(eduData.filter((v: IEducation) => v.eduCategory === 'E'));
    }
  }, [eduData, isEduLoading]);

  const introProfile: IIntroProps = {
    mainPic: infoData?.mainPic,
    title: infoData?.title,
    content: infoData?.content,
  };

  const mainProfile: IMainProps = {
    name: infoData?.name,
    birth: infoData?.birth,
    email: infoData?.email,
    address: infoData?.address,
    educations: sEducations,
  };

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
              {!isInfoLoading && <ProfileIntro {...introProfile} />}
            </div>
            <div className="section">
              {!isEduLoading && <ProfileMain {...mainProfile} />}
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
