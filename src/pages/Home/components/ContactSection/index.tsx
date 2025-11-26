import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "./components/ContactForm";
import { useTranslation } from "react-i18next";
import ContactInfo from "./components/ContactInfo";

const ContactSection = () => {
  const { t } = useTranslation("contact");

  return (
    <Section className="flex flex-col md:flex-row space-y-10">
      <div className="md:flex-2/5 ">
        <SectionTitle>{t("section_title")}</SectionTitle>
        <p className="text-foreground">{t("section_description")}</p>
        <ContactInfo />
      </div>
      <div className="md:flex-3/5 md:p-3">
        <div className="h-full rounded-2xl border bg-white dark:bg-white">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
