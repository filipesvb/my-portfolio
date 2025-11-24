import Wrapper from "../Wrapper";
import LanguageSelect from "../LanguageSelect";
import { useState } from "react";
import SocialList from "./components/SocialList";
import Menu from "./components/Menu";
import { useTranslation } from "react-i18next";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Header = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const { theme, toggleTheme } = useTheme();

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
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size={"icon-lg"}
                variant="outline"
                className="bg-transparent"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="bg-background border-transparent"
              removeDefaultCloseButton
            >
              <SheetHeader className="flex flex-row justify-between">
                <SheetTitle>
                  <span>Menu</span>
                </SheetTitle>
                <Button variant={"outline"} onClick={toggleTheme}>
                  {theme === "light" ? "☀️" : "🌙"}
                </Button>
                <LanguageSelect
                  selectedOption={language}
                  selectOption={changeLanguage}
                />
              </SheetHeader>
              <div className="flex h-full flex-col justify-between gap-4">
                <Menu />
                <div className="w-full">
                  <SocialList />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
