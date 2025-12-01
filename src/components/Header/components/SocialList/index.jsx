import  Linkedin from "@/assets/icons/socials/linkedin.svg?react";
import Github from "@/assets/icons/socials/github.svg?react";
import { Link } from "react-router";

const socials = [
  {
    title: "Linkedin",
    icon: Linkedin,
    to: "https://www.linkedin.com/in/filipe-vilas-b%C3%B4as-developer/",
  },
  {
    title: "Github",
    icon: Github,
    to: "https://github.com/filipesvb",
  },
];

const SocialList = () => {
  return (
    <div className="flex flex-col md:flex-row  items-start justify-start">
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <Link
            target="_blank"
            to={s.to}
            className="group px-3 flex flex-row items-center w-full gap-4 md:gap-2  py-5 border-t md:border-none border-muted-foreground hover:bg-foreground transition-colors duration-300 text-foreground"
          >
            <div className="flex-2/10">
              <Icon className="fill-foreground group-hover:fill-background w-12  h-12 md:w-6 md:y-6"/>
            </div>
            <span className="text-foreground font-medium text-md tracking-wide flex-8/10 group-hover:text-background">{s.title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialList;
