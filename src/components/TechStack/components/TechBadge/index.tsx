import { useState } from "react";

interface TechBadgeProps {
  title: string;
  style: { backgroundColor: string; color: string };
}

const TechBadge = ({ title, style }: TechBadgeProps) => {
  const [hover, setHover] = useState(false);

  const isDarkBadge = style.backgroundColor === "#000000";

  return (
    <div
      className={`border-1 transition-color no-scrollbar relative flex w-auto shrink-0 items-center overflow-hidden rounded-full duration-300`}
      style={
        hover
          ? {
              borderColor: isDarkBadge
                ? "var(--dark-badge-bg)"
                : style.backgroundColor,
            }
          : { borderColor: "var(--foreground)" }
      }
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`z-3 transition-color flex items-center rounded-full px-3 py-2 font-medium duration-100`}
      >
        <span className={"text-foreground select-none"}>{title}</span>
      </div>

      <div
        className={`z-1 w-100 h-100 absolute origin-left scale-x-0 overflow-hidden px-0 py-2 font-bold transition-transform duration-300 ${hover && "scale-x-100 px-3 opacity-100"}`}
        style={{
          backgroundColor: isDarkBadge
            ? "var(--dark-badge-bg)"
            : style.backgroundColor,
        }}
      ></div>
    </div>
  );
};

export default TechBadge;
