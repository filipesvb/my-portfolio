import { useTranslation } from "react-i18next";
import MenuButton from "./MenuButton"
import { useEffect, useState } from "react";

const ScrollAwareMenuButton =() => {

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
      if (window.scrollY > 200) {
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

    
    <div className={`fixed top-5 right-3 animation transition-all duration-300  ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
      <MenuButton language={language} changeLanguage={changeLanguage} />
    </div>
  )
}

export default ScrollAwareMenuButton