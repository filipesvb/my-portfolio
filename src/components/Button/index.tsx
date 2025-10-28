import { ReactNode } from 'react';

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="border-1 p-3 w-full font-extrabold text-2xl rounded-md cursor-pointer">
      {children}
    </button>
  );
};

export default Button;
