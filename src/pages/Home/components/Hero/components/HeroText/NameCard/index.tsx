import { useTranslation } from "react-i18next";

const NameCard = ({ card_job }: { card_job: string }) => {
  return (
    <div className="flex flex-col relative border-1 space-y-2 border-muted-foreground bg-primary">
      <div className="relative flex items-center py-1">
        <div className="flex gap-1 pl-2 py-2">
          <div className="rounded bg-[#A62828] w-2 h-2"></div>
          <div className="rounded bg-[#9E931B] w-2 h-2"></div>
          <div className="rounded bg-[#1B9130] w-2 h-2"></div>
        </div>
      </div>
      <div className="w-full text-[3em] md:text-[4em] text-white font-black leading-none pl-4 dark:text-foreground">
        Filipe
        <br />
        Vilas Bôas
      </div>
      <div className="pl-4 w-full bg-white text-black font-bold text-xl py-2">
        {card_job}
      </div>
    </div>
  );
};

export default NameCard;
