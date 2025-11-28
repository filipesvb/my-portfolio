import Wrapper from "../Wrapper";
import LanguageSelect from "../LanguageSelect";
import { useState } from "react";
import SocialList from "./components/SocialList";
import Menu from "./components/Menu";
import { useTranslation } from "react-i18next";
import MenuButton from "../../components/MenuButton"
import { useTheme } from "@/contexts/ThemeContext";
import {Button} from "../ui/button"

const Header = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const {theme, toggleTheme} = useTheme();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  return (
    <header className="font-inter w-full py-5">
      <Wrapper>
        <div className=" w-full hidden justify-between md:block">
          <div className="flex flex-row items-center justify-between ">
            <Menu variant={"md"} />
            <div className="flex gap-4">
              <SocialList />
              <LanguageSelect
                selectedOption={language}
                selectOption={changeLanguage}
              />
              <div className=" flex items-center">
                <Button variant={"outline"} onClick={toggleTheme} className="border-foreground cursor-pointer">
                  {theme === "light" ? "☀️" : "🌙"}
                </Button>
              </div>
            </div>
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
