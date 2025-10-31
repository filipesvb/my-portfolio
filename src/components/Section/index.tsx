import { ReactNode } from "react";

const Section = ({children, variant}: {children: ReactNode, variant?: object}) => {
  return <section className="mt-20" style={variant}>{children}</section>
}

export default Section;