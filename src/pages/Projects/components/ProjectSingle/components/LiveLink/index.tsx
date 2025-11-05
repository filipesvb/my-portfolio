const LiveLink = ({link}:{link: string}) => {
  return (
    
    <a target="_blank" href={link} className="border py-3 px-6 rounded-full relative">
      <div className="absolute right-2 top-2 rounded-full bg-red-500 w-2 h-2 animate-pulse"></div>
      Live
    </a>
  )
}
export default LiveLink;