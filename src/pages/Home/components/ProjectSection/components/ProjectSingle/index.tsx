import HoverableWithBall from "@/components/HoverableWithBall";
import CardTitle from "../../../../../../components/CardTitle";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/shadcn-io/3d-card";

type Project = {
  title: string;
  description: string;
  image: string;
};

const ProjectSingle = ({ title, description, image }: Project) => {
  return (
    <div className=" ">
      <CardContainer className="inter-var" containerClassName="py-8">
        <CardBody className=" relative group/card w-auto sm:w-[24rem] h-auto rounded-xl">
            <HoverableWithBall ballText="Veja mais" className="overflow-hidden">
              <div className="h-150 border-2">
                {/* <img src={"image"} className='w-full' /> */}
              </div>
            </HoverableWithBall>
        </CardBody>
      </CardContainer>
      <CardTitle>{title}</CardTitle>
      <p className="whitespace-wrap w-full">{description}</p>
    </div>
  );
};

export default ProjectSingle;
