import AboutMe from '@/components/AboutMe';
import AboutMeContainer from '@/components/AboutMeContainer';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import { useTranslation, Trans } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation('aboutMe');
  return (
    <Section>
      <SectionTitle rightPos>{t('section_title')}</SectionTitle>
      <AboutMeContainer compact={true} />
    </Section>
  );
};

export default AboutSection;
