import AboutMe from "../AboutMe"

const AboutMeContainer = ( {compact} : {compact: boolean} ) => {
  return (
    <div className="flex flex-col md:flex-row border-2">
      <div className="md:flex-1 p-4 h-[500px]">
        <div className="border-2 border-dotted h-full"></div>
      </div>
      <div className="flex-1 px-4 py-4 ">
        <AboutMe  compact={compact} />
      </div>
    </div>
  )
}

export default AboutMeContainer;