import Button from "@/components/Button";
import { LiquidButton } from "@/components/ui/shadcn-io/liquid-button";

const HeroCTA = ({
  orcamentoTxt,
  ctaTxt,
}: {
  orcamentoTxt: string;
  ctaTxt: string;
}) => {
  return (
    <div className="flex flex-col space-y-3 items-center md:items-start">
      <h3 className="font-bold text-2xl leading-none">{orcamentoTxt}</h3>
      <LiquidButton variant={"custom"} size={"lg"}>
        {ctaTxt}
      </LiquidButton>
    </div>
  );
};

export default HeroCTA;
