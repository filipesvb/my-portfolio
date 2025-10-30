import SectionTitle from '@/components/SectionTitle';
import Section from '../../../../components/Section'
import { useTranslation } from 'react-i18next';

const ProjectSection = () => {

  const { t } = useTranslation('project_section')
  
  return(
    <Section>
      <SectionTitle>{t('section_title')}</SectionTitle>
    </Section>
  )
}

export default ProjectSection;