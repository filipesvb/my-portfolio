import HoverableWithBall from "../HoverableWithBall";
import { CardBody, CardContainer } from "../ui/shadcn-io/3d-card";

const Card3D = ({
  width,
  height,
  hideBall,
}: {
  width?: string;
  height?: string;
  hideBall: boolean;
}) => {
  return (
    <CardContainer className="inter-var  w-full " containerClassName="py-0 md:py-8">
      <CardBody className=" relative group/card md:min-w-[18rem]  md:h-auto h-[500px] md:h-auto w-full">
        <HoverableWithBall
          hideBall={hideBall}
          ballText="Veja mais"
          className="overflow-hidden h-full "
        >
          <div className={` md:h-110 h-full border-2`}>
            {/* <img src={"image"} className='w-full' /> */}
          </div>
        </HoverableWithBall>
      </CardBody>
    </CardContainer>
  );
};

export default Card3D;
