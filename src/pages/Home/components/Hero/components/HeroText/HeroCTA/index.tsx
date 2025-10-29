import Button from '@/components/Button';

const HeroCTA = ({orcamentoTxt, ctaTxt}: {orcamentoTxt: string, ctaTxt: string}) => {
  return (
    <div>
      <h3 className="font-bold text-2xl mt-10 my-2">
        {orcamentoTxt}
      </h3>
      <Button>{ctaTxt}</Button>
    </div>
  );
};

export default HeroCTA;
