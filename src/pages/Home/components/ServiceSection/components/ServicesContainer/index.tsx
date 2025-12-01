import { useTranslation } from "react-i18next";
import ServiceSingle from "../ServiceSingle";
import { services } from "@/data/services"

const ServicesContainer = () => {
  const { t } = useTranslation("service_section");

  return (
    <div className="flex w-full flex-col gap-10 md:flex-row">
      {services.map((service, i) => (
        <ServiceSingle
          title={t(`section_cards.${service.id}.title`)}
          description={t(`section_cards.${service.id}.description`)}
          image={service.image}
        />
      ))}
    </div>
  );
};

export default ServicesContainer;
