import { ReactNode } from "react";

const SectionTitle = ({children, rightPos = false } : {children: ReactNode, rightPos?: boolean}) => {
  return (
    <h2 className={`uppercase font-black text-4xl py-4 ${rightPos && 'md:text-right'}`}>{children}</h2>
  )
}

export default SectionTitle;