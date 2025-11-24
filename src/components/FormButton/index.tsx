import { ReactNode } from "react";

const FormButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="flex cursor-pointer justify-self-start rounded-lg border border-none bg-[#123361] p-4 px-20 text-white dark:border-black dark:text-white">
      {children}
    </button>
  );
};

export default FormButton;
