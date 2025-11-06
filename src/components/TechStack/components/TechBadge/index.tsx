import { useState } from "react";

interface TechBadgeProps {
  title: string;
  style: { backgroundColor: string; color: string };
}

const TechBadge = ({ title, style }: TechBadgeProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-full flex items-center border-2 transition-color duration-300`}
      style={
        hover
          ? { borderColor: style.backgroundColor }
          : { borderColor: "white" }
      }
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`relative z-3 rounded-full py-2 font-bold px-3 flex items-center transition-color duration-100`}
      >
        <span className={"select-none"}>{title}</span>
      </div>
      <div
        className={`z-1 w-100 h-100 py-2 font-bold px-0 absolute origin-left scale-x-0 overflow-hidden transition-transform duration-300 ${hover && "scale-x-100 opacity-100 px-3"}`}
        style={{ backgroundColor: style.backgroundColor }}
      ></div>
    </div>
  );
};

export default TechBadge;
