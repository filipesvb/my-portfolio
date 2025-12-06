import { Link } from "react-router";
import HoverableWithBall from "../HoverableWithBall";
import { CardBody, CardContainer } from "../ui/shadcn-io/3d-card";

const Card3D = ({
  width,
  height,
  hideBall,
  image,
  title,
}: {
  width?: string;
  height?: string;
  hideBall: boolean;
  image?: string;
  title?: string;
}) => {
  return (
    <CardContainer
      className="inter-var w-full md:w-auto"
      containerClassName="py-0 md:py-2"
    >
      <CardBody className="group/card relative h-[500px] md:h-auto md:w-40 md:min-w-[18rem]">
        <HoverableWithBall
          hideBall={hideBall}
          ballText="Veja mais"
          className="h-full overflow-hidden"
        >
          <Link to={`/projetos?query=${title}`} className="w-full cursor-none">
            <div
              className={`border-muted-foreground h-full w-full border-2 md:h-110`}
            >
              <img
                src={image}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </Link>
        </HoverableWithBall>
      </CardBody>
    </CardContainer>
  );
};

export default Card3D;
