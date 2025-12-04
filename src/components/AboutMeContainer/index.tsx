import { Link } from "react-router";
import AboutMe from "../AboutMe";
import { Button } from "../ui/button";

const AboutMeContainer = ({ compact }: { compact: boolean }) => {
  return (
    <div className="border-muted-foreground flex flex-col border-2 md:flex-row">
      <div className="h-[500px] p-4 md:flex-1">
        <div className="border-muted-foreground h-full border-2 border-dotted"></div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-8 px-6 py-4">
        <AboutMe compact={compact} />
        
      </div>
    </div>
  );
};

export default AboutMeContainer;
