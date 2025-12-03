const GithubLink = ({ link }: { link: string }) => {
  return (
    <a
      target="_blank"
      href={link}
      className="border-foreground hover:bg-foreground transition-color group relative rounded-full border px-6 py-3 duration-300"
    >
      <span className="text-foreground group-hover:text-background">
        Github
      </span>
    </a>
  );
};
export default GithubLink;
