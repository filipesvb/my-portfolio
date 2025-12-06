import { useTranslation } from "react-i18next";
import AnimatedText from "./AnimatedText";
import HeroCTA from "./HeroCTA";
import NameCard from "./NameCard";

const HeroText = () => {
  const { t } = useTranslation("hero");

  return (
    <div className="flex flex-2/5 flex-col space-y-6 md:space-y-12">
      <NameCard card_job={t("hero_card_job")} />
      <AnimatedText
        textArr={[
          t("hero_typewriter_landingPages"),
          t("hero_typewriter_institucional"),
          t("hero_typewriter_dados"),
        ]}
      />
      <HeroCTA orcamentoTxt={t("hero_orcamento")} ctaTxt={t("hero_cta")} />
    </div>
  );
};

export default HeroText;
