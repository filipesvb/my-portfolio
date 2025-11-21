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

const Header = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  return (
    <header className="w-full  py-5 font-inter">
      <Wrapper>
        <div className="flex justify-between hidden md:block">
          <Menu variant={"md"} />
          <div className=" flex gap-4">
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
                <LanguageSelect
                  selectedOption={language}
                  selectOption={changeLanguage}
                />
              </SheetHeader>
              <div className="flex flex-col gap-4  justify-between  h-full">
                <Menu  />
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
