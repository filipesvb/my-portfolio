import { ReactNode } from "react";

const FormButton = ({ children }: { children: string }) => {
  return (
    <button className="flex w-full md:w-auto cursor-pointer  rounded-lg border border-none bg-[#123361] p-4 px-20 text-white dark:border-black dark:text-white">
      <span className="text-center  w-full">
        {children}
      </span>
    </button>
  );
};

export default FormButton;
