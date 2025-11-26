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
            className="group px-3 flex flex-row items-center w-full  py-5 border-t border-muted-foreground hover:bg-white transition-colors duration-300 text-foreground"
          >
            <div className="flex-2/10">
              <Icon className="fill-foreground w-12  h-12"/>
            </div>
            <span className="text-foreground font-medium text-md tracking-wide flex-8/10">{s.title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialList;
