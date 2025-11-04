import SectionTitle from '@/components/SectionTitle';
import Section from '../../../../components/Section'
import { useTranslation } from 'react-i18next';
import ProjectContainer from './components/ProjectContainer';

const ProjectSection = () => {

  const { t } = useTranslation('projects')
  
  return(
    <Section>
      <SectionTitle>{t('section_title')}</SectionTitle>
      <ProjectContainer />
    </Section>
  )
}

export default ProjectSection;