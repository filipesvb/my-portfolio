import { ReactNode } from "react";

const LabelWrapper = ({ children }: { children: ReactNode }) => {
  return <label className="text-gray-600 dark:text-black">{children}</label>;
};

export default LabelWrapper;
