import { useTranslation } from "react-i18next";
import MenuButton from "./MenuButton";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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
    <AnimatePresence mode="wait">
      {showButton && (
        <motion.div
          className={`animation fixed top-2`}
          initial={{ opacity: 0, right: -30 }}
          animate={{ opacity: 1, right: 18 }}
          exit={{ opacity: 0, right: -30 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <MenuButton language={language} changeLanguage={changeLanguage} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollAwareMenuButton;
