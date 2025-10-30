import Button from '@/components/Button';
import { LiquidButton } from '@/components/ui/shadcn-io/liquid-button';

const HeroCTA = ({orcamentoTxt, ctaTxt}: {orcamentoTxt: string, ctaTxt: string}) => {
  return (
    <div>
      <h3 className="font-bold text-2xl mt-10 my-2">
        {orcamentoTxt}
      </h3>
      <LiquidButton variant={"custom"} size={"lg"}>{ctaTxt}</LiquidButton>
    </div>
  );
};

export default HeroCTA;
