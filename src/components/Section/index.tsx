import { ReactNode } from "react";

const Section = ({children}: {children: ReactNode}) => {
  return <section className="mt-20">{children}</section>
}

export default Section;