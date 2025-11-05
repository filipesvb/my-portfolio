import HoverableWithBall from "../HoverableWithBall";
import { CardBody, CardContainer } from "../ui/shadcn-io/3d-card";

const Card3D = ({width, height, hideBall} : {width?: string, height?: string, hideBall: boolean}) => {
  return (
    <CardContainer className="inter-var" containerClassName="py-8">
      <CardBody className=" relative group/card w-auto sm:w-[18rem] h-auto rounded-xl">
        <HoverableWithBall hideBall={hideBall} ballText="Veja mais" className="overflow-hidden">
          <div className={` h-120 border-2`}>
            {/* <img src={"image"} className='w-full' /> */}
          </div>
        </HoverableWithBall>
      </CardBody>
    </CardContainer>
  )
}

export default Card3D;