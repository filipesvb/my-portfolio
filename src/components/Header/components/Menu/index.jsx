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
    <nav className="px-4">
      <div className={`${menuClassName[variant] || "flex flex-col gap-3"}`}>
        {menuClassName[variant] ? <div>desktop</div> : <MobileMenu t={t} />}
      </div>
    </nav>
  );
};

const MobileMenu = ({ t }) => {
  return (
    <>
      {menuOptions.map((opt, i) => {
        const Icon = opt.icon;
        const content = (
          <Link to={`/${opt.to}`}>
            <Icon className="group-hover:stroke-background transition-colors duration-300" />
            <span className="group-hover:text-background transition-colors duration-300">
              {t(`${opt.value}`)}
            </span>
          </Link>
        );

        return (
          <Button
            variant={"outline"}
            asChild
            key={`${opt.value}`}
            className="flex justify-start group"
          >
            {<SheetClose asChild>{content}</SheetClose>}
          </Button>
        );
      })}
    </>
  );
};

export default Menu;
