import { ReactNode } from "react";

const CardTitle = ({children, className} : {children: ReactNode, className?: string}) => {
  return (
    <h3 className={`text-xl font-extrabold py-3 ${className}`}>{children}</h3>
  )
}

export default CardTitle;