import { useTranslation } from "react-i18next";
import MenuButton from "./MenuButton";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const ScrollAwareMenuButton = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [showButton, setShowButton] = useState(false);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show button only if scrolled down 100px
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
        // setOpen(false); // close menu when back at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showButton && <motion.div
      className={`animation fixed right-3 top-0 transition-all duration-300`}
      initial={{ opacity: 0, translateY: "32px" }}
      animate={{ opacity: 1, translateY: "12px" }}
    >
      <MenuButton language={language} changeLanguage={changeLanguage} />
    </motion.div>
  );
};

export default ScrollAwareMenuButton;
