import { type Technology } from "../../data/projects";
import TechBadge from "./components/TechBadge";

interface TechStackProps {
  tags: Technology[]
}

const TechStack = ({
  tags
} : TechStackProps) => {

  return (
    <div className=" rounded-lg flex gap-2 py-4">
      {
        tags.map(
          (t) => {

            const bg = t.style.bg;
            const text = t.style.text;
              
            return (
                <TechBadge key={t.title} title={t.title} style={{backgroundColor: bg, color: text}}/>
            
            )  
          }
          
        )
      }
    </div>
  )
}

export default TechStack;