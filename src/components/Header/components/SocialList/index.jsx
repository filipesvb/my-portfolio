import Linkedin from "../../../icons/LinkedinIcon";
import Github from "../../../icons/GithubIcon";
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
            className="group px-3 flex flex-row gap-2 items-center w-full  py-5 border-t hover:bg-white transition-colors duration-300"
          >
            <Icon />
            <span>{s.title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialList;
