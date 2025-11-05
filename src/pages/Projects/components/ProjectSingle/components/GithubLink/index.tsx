const GithubLink = ({link}:{link: string}) => {
  return (

    <a target="_blank" href={link} className="border py-3 px-6 rounded-full relative hover:bg-white hover:text-black transition-color duration-300">
      Github
    </a>
  )
}
export default GithubLink;