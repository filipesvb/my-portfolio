const GithubLink = ({link}:{link: string}) => {
  return (

    <a target="_blank" href={link} className="border border-foreground py-3 px-6 rounded-full relative hover:bg-white hover:text-black transition-color duration-300">
      <span className="text-foreground">
        Github
      </span>
    </a>
  )
}
export default GithubLink;