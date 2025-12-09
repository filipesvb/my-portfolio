import CardTitle from "../../../../../../components/CardTitle";

import Card3D from "@/components/Card3D";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useTranslation } from "react-i18next";

type Project = {
  title: string;
  description: string;
  image: string;
  imagePosition: string;
};

const ProjectSingle = ({
  title,
  description,
  image,
  imagePosition,
}: Project) => {
  const { t } = useTranslation("project_section");

  const isSmallScreen = useMediaQuery();

  return (
    <div className="flex w-full flex-col md:max-w-[300px]">
      <Card3D
        hideBallText={isSmallScreen}
        image={image}
        title={title}
        imagePosition={imagePosition}
      />
      <CardTitle className="text-foreground">{title}</CardTitle>
      <p className="whitespace-wrap text-muted-foreground w-full">
        {description}
      </p>
    </div>
  );
};

export default ProjectSingle;
