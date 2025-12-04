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
    <div className="w-full">
      <Link to={`/projetos?query=${title}`}>
        <Card3D hideBall={isSmallScreen} image={image} />
      </Link>
      <CardTitle className="text-foreground">{title}</CardTitle>
      <p className="whitespace-wrap text-muted-foreground w-full">
        {description}
      </p>
    </div>
  );
};

export default ProjectSingle;
