import { ReactNode } from 'react';

const FormInput = ({
  children,
  tipo = 'text',
  className,
  placeholder,
  onChange,
  value,
}: {
  children?: ReactNode;
  tipo: string;
  className: string;
  placeholder: string;
  onChange?: (e) => void;
  value?: string;
}) => {
  return (
    <input
      autoComplete="off"
      type={tipo}
      className={`w-full h-full border-0 outline-0 ${className}`}
      placeholder={placeholder}
      {...(onChange && { onChange: (e) => onChange(e) })}
      value={value}
    />
  );
};

export default FormInput;
