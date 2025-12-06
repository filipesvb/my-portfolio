import Button from "@/components/Button";
import { LiquidButton } from "@/components/ui/shadcn-io/liquid-button";
import { Link } from "react-router";

const HeroCTA = ({
  orcamentoTxt,
  ctaTxt,
}: {
  orcamentoTxt: string;
  ctaTxt: string;
}) => {
  return (
    <div className="flex flex-col items-center space-y-8 md:items-start">
      <h3 className="text-foreground text-xl leading-none font-bold">
        {orcamentoTxt}
      </h3>
      <Link to={"/contato"}>
        <LiquidButton
          variant={"custom"}
          size={"lg"}
          className="text-foreground border-muted-foreground"
        >
          {ctaTxt}
        </LiquidButton>
      </Link>
    </div>
  );
};

export default HeroCTA;
