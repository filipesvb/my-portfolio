import Wrapper from "../Wrapper";
import LanguageSelect from "../LanguageSelect";
import { useState } from "react";
import SocialList from "./components/SocialList";
import Menu from "./components/Menu";
import { useTranslation } from "react-i18next";
import MenuButton from "../../components/MenuButton";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "../ui/button";
import { HomeIcon, MoonIcon, SunIcon } from "lucide-react";
import { Link, useLocation } from "react-router";

const Header = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const { pathname } = useLocation();

  const { theme, toggleTheme } = useTheme();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  const locationIsHome = pathname == "/";

  return (
    <header className="font-inter w-full">
      <Wrapper>
        <div className="mb-3 hidden w-full justify-between md:block">
          <div className="flex flex-row items-center justify-between">
            <Menu variant={"md"} />
            <div className="flex gap-4">
              <SocialList />
              <LanguageSelect
                selectedOption={language}
                selectOption={changeLanguage}
              />
              <div className="flex items-center">
                <Button
                  variant={"outline"}
                  onClick={toggleTheme}
                  className="border-foreground cursor-pointer"
                >
                  {theme === "light" ? (
                    <MoonIcon className="stroke-foreground" />
                  ) : (
                    <SunIcon className="stroke-foreground" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex items-center py-2 ${!locationIsHome ? "justify-between" : "justify-end"} md:hidden`}
        >
          {!locationIsHome && (
            <Link to={"/"} className="">
              <HomeIcon
                className="stroke-foreground"
                size={32}
                strokeWidth={1}
              />
            </Link>
          )}
          <MenuButton language={language} changeLanguage={changeLanguage} />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
