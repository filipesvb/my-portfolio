import HoverableWithBall from "@/components/HoverableWithBall";
import CardTitle from "../../../../../../components/CardTitle";

import Card3D from "@/components/Card3D";
import useMediaQuery from "@/hooks/useMediaQuery";

type Project = {
  title: string;
  description: string;
  image: string;
};

const ProjectSingle = ({ title, description, image }: Project) => {

  const isSmallScreen = useMediaQuery();
  
  return (
    <div className="w-full ">
      <Card3D hideBall={isSmallScreen} />
      <CardTitle className="text-foreground">{title}</CardTitle>
      <p className="whitespace-wrap w-full text-muted-foreground">{description}</p>
    </div>
  );
};

export default ProjectSingle;
