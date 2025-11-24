import { useTranslation } from "react-i18next";
import ServiceSingle from "../ServiceSingle";

const ServicesContainer = () => {
  const { t } = useTranslation("service_section");

  const cards = t("section_cards", { returnObjects: true });

  return (
    <div className="flex w-full flex-col gap-10 md:flex-row">
      {Object.entries(cards).map((key, value) => (
        <ServiceSingle
          title={t(`section_cards.${key[0]}.title`)}
          description={t(`section_cards.${key[0]}.description`)}
        />
      ))}
    </div>
  );
};

export default ServicesContainer;
