import { ReactNode } from "react";

const CardTitle = ({children} : {children: ReactNode}) => {
  return (
    <h3 className="text-xl font-extrabold py-3">{children}</h3>
  )
}

export default CardTitle;