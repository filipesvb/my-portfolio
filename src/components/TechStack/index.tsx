import { TechKey, techstack, type Technology } from "../../data/techstack";
import TechBadge from "./components/TechBadge";

interface TechStackProps {
  tags: TechKey[]
}

const TechStack = ({
  tags
} : TechStackProps) => {

  return (
    <div className=" rounded-lg flex gap-2 py-4">
      {
        tags.map(
          (t) => {

            const bg = techstack[t].style.bg;
            const text = techstack[t].style.text;
              
            return (
                <TechBadge key={techstack[t].title} title={techstack[t].title} style={{backgroundColor: bg, color: text}}/>
            
            )  
          }
          
        )
      }
    </div>
  )
}

export default TechStack;