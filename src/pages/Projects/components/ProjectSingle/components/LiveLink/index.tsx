const LiveLink = ({link}:{link: string}) => {
  return (
    
    <a target="_blank" href={link} className="border border-foreground py-3 px-6 rounded-full relative">
      <div className="absolute right-2 top-2 rounded-full bg-red-500 w-2 h-2 animate-pulse"></div>
      <span className="text-foreground">
      Live
      </span>
    </a>
  )
}
export default LiveLink;