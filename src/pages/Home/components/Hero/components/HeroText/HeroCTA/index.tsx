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
      <h3 className="font-bold text-2xl leading-none text-foreground">{orcamentoTxt}</h3>
      <LiquidButton variant={"custom"} size={"lg"} className="text-foreground border-muted-foreground">
        {ctaTxt}
      </LiquidButton>
    </div>
  );
};

export default HeroCTA;
