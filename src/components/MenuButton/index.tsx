import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

import LanguageSelect from "../LanguageSelect";
import Menu from "../Header/components/Menu";
import SocialList from "../Header/components/SocialList";
import { useTheme } from "@/contexts/ThemeContext";



const MenuButton = ({language, changeLanguage} : {language: string; changeLanguage: (str:string) => void}) => {

  const { theme, toggleTheme } = useTheme();
  
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button
          size={"icon-lg"}
          className="bg-muted-background border-foreground border-1 group hover:bg-foreground"
        >
          <MenuIcon className="stroke-foreground  group-hover:stroke-background" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="bg-background border-transparent"
        removeDefaultCloseButton={true}
      >
        <SheetHeader className="flex flex-row justify-between">
          <SheetTitle>
            <span className="text-foreground">Menu</span>
          </SheetTitle>
          <Button variant={"outline"} onClick={toggleTheme} className="border-foreground">
            {theme === "light" ? "☀️" : "🌙"}
          </Button>
          <LanguageSelect
            
            selectedOption={language}
            selectOption={changeLanguage}
          />
        </SheetHeader>
        
        <div className="flex h-full flex-col justify-between gap-4">
          <Menu  />
          <div className="w-full">
            <SocialList />
          </div>
        </div>
        
      </SheetContent>
    </Sheet>
  )
}

export default MenuButton;