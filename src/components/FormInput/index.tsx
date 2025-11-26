import { ReactNode } from "react";

const FormInput = ({
  children,
  tipo = "text",
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
      autoComplete="invalid"
      type={tipo}
      className={`h-full w-full border-0 text-black outline-0 dark:text-black ${className}`}
      placeholder={placeholder}
      {...(onChange && { onChange: (e) => onChange(e) })}
      value={value}
    />
  );
};

export default FormInput;
