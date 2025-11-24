import { ReactNode } from "react";

const InputWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-lg border-2 border-white dark:border-black ${className}`}
    >
      {children}
    </div>
  );
};

export default InputWrapper;
