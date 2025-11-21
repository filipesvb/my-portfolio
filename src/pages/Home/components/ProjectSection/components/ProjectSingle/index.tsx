import HoverableWithBall from "@/components/HoverableWithBall";
import CardTitle from "../../../../../../components/CardTitle";

import Card3D from "@/components/Card3D";

type Project = {
  title: string;
  description: string;
  image: string;
};

const ProjectSingle = ({ title, description, image }: Project) => {
  return (
    <div className=" ">
      <Card3D hideBall={false} />
      <CardTitle>{title}</CardTitle>
      <p className="whitespace-wrap w-full">{description}</p>
    </div>
  );
};

export default ProjectSingle;
