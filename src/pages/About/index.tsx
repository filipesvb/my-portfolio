import AboutMeContainer from '@/components/AboutMeContainer';
import SectionTitle from '@/components/SectionTitle';
import Wrapper from '@/components/Wrapper';
import { useTranslation } from 'react-i18next';
import MyTechStack from './components/MyTechStack';

const About = () => {
  const { t } = useTranslation('aboutMe');

  return (
    <div className="w-full h-full font-azeret-mono">
      <Wrapper>
        <SectionTitle>{t('section_title')}</SectionTitle>
        <p className="text-justify md:w-1/2 mb-15 text-foreground">{t('description')}</p>
        <AboutMeContainer compact={false} />
        <div className="w-full flex justify-center py-10">
          <MyTechStack />
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
