import { Link } from "react-router";
import HoverableWithBall from "../HoverableWithBall";
import { CardBody, CardContainer } from "../ui/shadcn-io/3d-card";
import { useTranslation } from "react-i18next";

const Card3D = ({
  width,
  height,
  hideBallText,
  image,
  title,
}: {
  width?: string;
  height?: string;
  hideBallText: boolean;
  image?: string;
  title?: string;
}) => {
  const { t } = useTranslation("project_section");

  return (
    <CardContainer
      className="inter-var w-full md:w-full"
      containerClassName="py-0 md:py-2"
    >
      <CardBody className="group/card relative h-[500px] w-full md:h-auto md:min-w-[18rem]">
        <HoverableWithBall
          hideBallText={hideBallText}
          ballText={t("project_single_hoverball_text")}
          className="h-full overflow-hidden"
        >
          <Link to={`/projetos?query=${title}`} className="w-full cursor-none">
            <div
              className={`border-muted-foreground md:h-110 h-full w-full border-2`}
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
