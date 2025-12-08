import { useState, useRef, ReactNode } from "react";
import CTABall from "./components/CTABall";

const HoverableWithBall = ({
  children,
  className,
  ballText,
  hideBallText,
}: {
  children: ReactNode;
  className: string;
  ballText: string | undefined;
  hideBallText?: boolean;
}) => {
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const circleRef = useRef<HTMLDivElement>(null);
  const handleCTAHover = (e) => {
    const circle = circleRef.current;
    if (!circle) return;
    const rect = circle.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPos({ x, y });
  };
  return (
    <div
      className={`relative ${className}`}
      ref={circleRef}
      onMouseMove={handleCTAHover}
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      {children}

      <CTABall
        active={active}
        x={pos.x}
        y={pos.y}
        text={hideBallText ? "" : ballText}
      />
    </div>
  );
};

export default HoverableWithBall;
