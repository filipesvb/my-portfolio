import HoverableWithBall from "@/components/HoverableWithBall";
import CardTitle from "../../../../../../components/CardTitle";

import Card3D from "@/components/Card3D";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Link } from "react-router";

type Project = {
  title: string;
  description: string;
  image: string;
};

const ProjectSingle = ({ title, description, image }: Project) => {
  const isSmallScreen = useMediaQuery();

  return (
    <div className="flex w-full flex-col md:max-w-[300px]">
      <Card3D hideBall={isSmallScreen} image={image} title={title} />
      <CardTitle className="text-foreground">{title}</CardTitle>
      <p className="whitespace-wrap text-muted-foreground w-full">
        {description}
      </p>
    </div>
  );
};

export default ProjectSingle;
