import SectionTitle from "@/components/SectionTitle";
import Wrapper from "@/components/Wrapper";
import { useTranslation } from "react-i18next";
import ContactSection from "../Home/components/ContactSection";
import SocialList from "@/components/Header/components/SocialList";

const Contact = () => {
  const { t } = useTranslation("contact_section");

  return (
    <div className="font-azeret-mono h-full w-full">
      <Wrapper>
        <ContactSection descOverwrite={t("description")} />
        <div>
          <SectionTitle>{t("social_media.title")}</SectionTitle>
          <div className="border-muted-foreground space-y-3 border-b">
            <p className="text-foreground">{t("social_media.description")}</p>
            <SocialList />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
