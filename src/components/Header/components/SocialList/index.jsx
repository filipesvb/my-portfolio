import Linkedin from "@/assets/icons/socials/linkedin.svg?react";
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
    <div className="flex flex-col items-start justify-start md:flex-row">
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <Link
            key={s.title}
            target="_blank"
            to={s.to}
            className="border-muted-foreground hover:bg-foreground text-foreground group flex w-full flex-row items-center gap-4 border-t px-3 py-5 transition-colors duration-300 md:gap-2 md:border-none"
          >
            <div className="flex-2/10">
              <Icon className="fill-foreground group-hover:fill-background md:y-6 h-12 w-12 md:w-6" />
            </div>
            <span className="text-foreground text-md flex-8/10 group-hover:text-background font-medium tracking-wide">
              {s.title}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialList;
