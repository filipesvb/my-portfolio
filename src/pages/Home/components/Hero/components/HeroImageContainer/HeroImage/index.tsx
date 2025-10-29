import ImageCTA from '../ImageCTA'
import { useState, useRef } from 'react'

const HeroImage = ({ img } : {img: string}) => {
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({x: 0, y: 0});
  const circleRef = useRef<HTMLDivElement>(null);
  const handleCTAHover = (e) => {
    const circle = circleRef.current;
    if(!circle) return;
    const rect = circle.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPos({x, y})
  }
  return (
    <div className="rounded-full w-2/3 pt-[65%] border border-dotted relative"
      ref={circleRef}
      onMouseMove={handleCTAHover}
      onMouseEnter={() => {setActive(true)}}
      onMouseLeave={() => {setActive(false)}}
    >
      <ImageCTA active={active} x={pos.x} y={pos.y}/>
    </div>
  )
}

export default HeroImage;