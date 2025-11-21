import { Technology } from '@/data/techstack';
import React from 'react';
import { FC, SVGProps } from 'react';

const TechIcon = ({ tech }: { tech: Technology }) => {
  const [hover, setHover] = React.useState(false);
  const Icon = tech.image;

  return (
    <div
      className="border-2 rounded-lg p-3 w-30 relative overflow-hidden transition-colors duration-500 ease-in-out"
      style={hover ? { borderColor: tech.style.bg } : {}}
      key={tech.value}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="flex absolute top-full right-full w-full h-full justify-center items-center  transition-all ease-in-out duration-300 rounded-md"
        style={
          hover
            ? { background: tech.style.bg, right: 0, top: 0 }
            : { backgroundColor: tech.style.bg }
        }
      >
        {hover && <div className="select-none">{tech.title}</div>}
      </div>
      <Icon className="fill-white" />
    </div>
  );
};

export default TechIcon;
