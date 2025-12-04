import HoverableWithBall from "../HoverableWithBall";
import { CardBody, CardContainer } from "../ui/shadcn-io/3d-card";

const Card3D = ({
  width,
  height,
  hideBall,
  image,
}: {
  width?: string;
  height?: string;
  hideBall: boolean;
  image?: string;
}) => {
  return (
    <CardContainer
      className="inter-var w-full px-3"
      containerClassName="py-0 md:py-8"
    >
      <CardBody className="group/card relative h-[500px] w-40 md:h-auto md:min-w-[18rem]">
        <HoverableWithBall
          hideBall={hideBall}
          ballText="Veja mais"
          className="h-full overflow-hidden"
        >
          <div
            className={`md:h-110 border-muted-foreground h-full w-full border-2`}
          >
            <img
              src={image}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </HoverableWithBall>
      </CardBody>
    </CardContainer>
  );
};

export default Card3D;
