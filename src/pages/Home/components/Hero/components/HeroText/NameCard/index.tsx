import { useTranslation } from "react-i18next";
import Me from "@/assets/imgs/me.jpg";

const NameCard = ({ card_job }: { card_job: string }) => {
  return (
    <div className="border-muted-foreground bg-primary relative mt-32 flex flex-col space-y-2 border md:mt-0">
      <div className="relative w-full md:hidden">
        <img
          src={Me}
          className="absolute -top-36 right-[50%] w-1/2 translate-x-1/2 rounded-full"
        />
      </div>
      <div className="relative flex items-center py-1">
        <div className="flex gap-1 py-2 pl-2">
          <div className="h-2 w-2 rounded bg-[#A62828]"></div>
          <div className="h-2 w-2 rounded bg-[#9E931B]"></div>
          <div className="h-2 w-2 rounded bg-[#1B9130]"></div>
        </div>
      </div>
      <div className="dark:text-foreground z-2 w-full pl-4 text-[3em] leading-none font-black text-white md:text-[4em]">
        Filipe
        <br />
        Vilas Bôas
      </div>
      <div className="w-full bg-white py-2 pl-4 text-xl font-bold text-black">
        {card_job}
      </div>
    </div>
  );
};

export default NameCard;
