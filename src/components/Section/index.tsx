import { ReactNode } from "react";

const Section = ({children, className}: {children: ReactNode, className?: string}) => {
  return <section className={`mt-20 ${className}`} >{children}</section>
}

export default Section;