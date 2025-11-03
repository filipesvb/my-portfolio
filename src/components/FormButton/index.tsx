import { ReactNode } from 'react';

const FormButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="border border-black rounded-lg flex bg-black text-white p-4 px-20 justify-self-start cursor-pointer">
      {children}
    </button>
  );
};

export default FormButton;
