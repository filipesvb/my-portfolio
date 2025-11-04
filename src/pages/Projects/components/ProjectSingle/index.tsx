import Card3D from "@/components/Card3D";
import CardTitle from "@/components/CardTitle";
import { ReactNode } from "react";

interface ProjectSingleProps {
  title: string;
  description: string;
  inverted?: boolean;
  query?: string;
}

const ProjectSingle = ({
  title,
  description,
  inverted = false,
  query,
}: ProjectSingleProps) => {
  function getTextoDestacado(desc: string) {
    const partes = desc.split(new RegExp(`(${query})`, "gi"));

    return query && query.length > 1
      ? partes.map((parte, index) =>
          parte.toLowerCase() === query.toLowerCase() ? (
            <span key={index} style={{ backgroundColor: "#315078" }}>
              {parte}
            </span>
          ) : (
            <span key={index}>{parte}</span>
          ),
        )
      : desc;
  }

  return (
    <div
      className={`flex border-2 rounded-lg gap-5 ${inverted && "flex-row-reverse"}`}
    >
      <div className="flex flex-2/5 justify-center items-start">
        <Card3D height="10" />
      </div>
      <div className="flex-3/5 flex gap-10 py-4 px-10">
        <div className="">
          <CardTitle className="text-[2rem] text-left">{title}</CardTitle>
          <p>{getTextoDestacado(description)}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectSingle;
