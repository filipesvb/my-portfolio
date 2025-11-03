import { ReactNode } from 'react';

const InputWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`border-2 border-black rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default InputWrapper;
