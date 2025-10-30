import { useTranslation } from "react-i18next";
import SectionTitle from "../../../../components/SectionTitle"
import ServicesContainer from "./components/ServicesContainer";

const ServiceSection = () => {

  const { t } = useTranslation('service_section')
  
  return (
    <section className="mt-20">
      <SectionTitle rightPos={true} >{t('section_title')}</SectionTitle>
      <ServicesContainer />
    </section>
  )
}

export default ServiceSection;