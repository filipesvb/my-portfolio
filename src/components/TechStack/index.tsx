import { useEffect, useRef, useState } from "react";
import { TechKey, techstack, type Technology } from "../../data/techstack";
import TechBadge from "./components/TechBadge";

interface TechStackProps {
  tags: TechKey[];
}

const TechStack = ({ tags }: TechStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      setShowLeftFade(el.scrollLeft > 0);
      setShowRightFade(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    handleScroll(); // inicial
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="no-scrollbar fade-mask fade-left-4 fade-right-4 relative flex w-full gap-2 overflow-x-auto px-2 py-4"
      ref={containerRef}
    >
      {tags.map((t, i) => {
        const bg = techstack[t] ? techstack[t].style.bg : "#ff0000";
        const text = techstack[t] ? techstack[t].style.text : "#000000";

        return (
          <TechBadge
            key={techstack[t] ? techstack[t].title : "N/A" + i}
            title={techstack[t] ? techstack[t].title : "N/A"}
            style={{ backgroundColor: bg, color: text }}
          />
        );
      })}
    </div>
  );
};

export default TechStack;
