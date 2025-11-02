import AboutMe from '@/components/AboutMe';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import { useTranslation, Trans } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation('aboutMe');
  return (
    <Section>
      <SectionTitle rightPos>{t('title')}</SectionTitle>
      <div className="flex border-2">
        <div className="flex-1 p-4">
          <div className="border-2 border-dotted h-full"></div>
        </div>
        <div className="flex-1 px-4 py-4 ">
          <AboutMe />
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
