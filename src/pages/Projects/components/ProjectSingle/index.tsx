import Card3D from "@/components/Card3D";
import CardTitle from "@/components/CardTitle";

interface ProjectSingleProps {
  title : string;
  description: string;
  inverted?: boolean
}

const ProjectSingle = ({title, description, inverted = false} : ProjectSingleProps) => {
  return (
    <div className={`flex border-2 rounded-lg px-10 ${inverted && 'flex-row-reverse'}`}>
      <div className="flex flex-2/5 justify-center items-start">
        <Card3D height="10" />
      </div>
      <div className="flex-3/5 flex gap-10 py-4">
        {!inverted && <div className="border-r-2 border-white pl-10"></div>}
        <div className="">
          <CardTitle className="text-[2rem] text-left">{title}</CardTitle>
          <p>
            {description}
          </p>
        </div>
        {inverted && <div className="border-r-2 border-white pl-10"></div>}
      </div>
    </div>
  );
};
export default ProjectSingle;
