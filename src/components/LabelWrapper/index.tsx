import { ReactNode } from "react";

const LabelWrapper = ({ children }: { children: ReactNode }) => {
  return <label className="text-white dark:text-black">{children}</label>;
};

export default LabelWrapper;
