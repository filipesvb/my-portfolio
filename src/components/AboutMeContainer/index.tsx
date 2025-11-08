import AboutMe from "../AboutMe"

const AboutMeContainer = ( {compact} : {compact: boolean} ) => {
  return (
    <div className="flex border-2">
      <div className="flex-1 p-4">
        <div className="border-2 border-dotted h-full"></div>
      </div>
      <div className="flex-1 px-4 py-4 ">
        <AboutMe  compact={compact} />
      </div>
    </div>
  )
}

export default AboutMeContainer;