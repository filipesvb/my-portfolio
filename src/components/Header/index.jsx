import Wrapper from "../Wrapper";
import LanguageSelect from "../LanguageSelect";
import { useState } from "react";
import SocialList from "./components/SocialList";
import Menu from "./components/Menu";
import { useTranslation } from "react-i18next";
import MenuButton from "../../components/MenuButton"

const Header = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  return (
    <header className="font-inter w-full py-5">
      <Wrapper>
        <div className="flex hidden justify-between md:block">
          <Menu variant={"md"} />
          <div className="flex gap-4">
            <SocialList />
            <LanguageSelect
              selectedOption={language}
              selectOption={changeLanguage}
            />
          </div>
        </div>

        <div className="flex justify-end md:hidden">
         <MenuButton language={language} changeLanguage={changeLanguage}/>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
