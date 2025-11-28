import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { Button } from "../../../ui/button";
import { ContactIcon, FolderIcon, HomeIcon, InfoIcon } from "lucide-react";
import { SheetClose } from "@/components/ui/sheet";

const menuOptions = [
  {
    value: "header_inicio",
    icon: HomeIcon,
    to: "",
  },
  {
    value: "header_projetos",
    icon: FolderIcon,
    to: "projetos",
  },
  {
    value: "header_sobre",
    icon: InfoIcon,
    to: "sobre",
  },
  {
    value: "header_contato",
    icon: ContactIcon,
    to: "contato",
  },
];

const Menu = ({ variant = "" }) => {
  const { t } = useTranslation("header");

  const menuClassName = {
    footer: "flex flex-col gap-4",
    md: "flex-row flex gap-2 items-center",
  };

  return (
    <nav className="">
      <div>
        {menuClassName[variant] ? <DesktopMenu t={t} variantStyle={menuClassName[variant]} /> : <MobileMenu t={t} />}
      </div>
    </nav>
  );
};

const DesktopMenu = ({t, variantStyle}) => {
  return (
    <div className={`flex w-full gap-6 ${variantStyle}`}>
      {menuOptions.map((opt, i) => {
        const content = (
          <Link to={`/${opt.to}`} className="flex gap-1">
            <span className="group-hover:text-background transition-colors duration-300 text-foreground">
              {t(`${opt.value}`)}
            </span>
          </Link>
        );

        return (
          <>
            {content}
          </>
        );
      
      })}
    </div>
  )
}

const MobileMenu = ({ t }) => {
  return (
    <div className="px-4 space-y-2">
      {menuOptions.map((opt, i) => {
        const Icon = opt.icon;
        const content = (
          <Link to={`/${opt.to}`} className="bg-muted-background">
            <Icon className="group-hover:stroke-background transition-colors duration-300 stroke-foreground" />
            <span className="group-hover:text-background transition-colors duration-300 text-foreground">
              {t(`${opt.value}`)}
            </span>
          </Link>
        );

        return (
          <Button
            variant={"outline"}
            asChild
            key={`${opt.value}`}
            className="flex justify-start group border-muted-foreground text-foreground"
          >
            {<SheetClose asChild>
              {content}
            </SheetClose>}
          </Button>
        );
      })}
    </div>
  );
};

export default Menu;
