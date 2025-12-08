import AboutMe from "../AboutMe";

import Me2 from "@/assets/imgs/eu2.jpg";

const AboutMeContainer = ({ compact }: { compact: boolean }) => {
  return (
    <div className="border-muted-foreground flex flex-col border-2 md:flex-row">
      <div className="h-full p-4 md:flex-1">
        <div className="border-muted-foreground h-full">
          <img
            src={Me2}
            alt="Filipe Vilas Bôas"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-8 px-6 py-4">
        <AboutMe compact={compact} />
      </div>
    </div>
  );
};

export default AboutMeContainer;
