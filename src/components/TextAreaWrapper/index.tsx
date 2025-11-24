import LabelWrapper from "../LabelWrapper";

const TextAreaWrapper = ({
  label,
  rows,
  cols,
  placeholder,
  value,
  onUpdate,
}: {
  label: string;
  rows: number;
  cols?: number;
  placeholder?: string;
  value: string;
  onUpdate: (e) => void;
}) => {
  return (
    <label>
      <LabelWrapper>{label}</LabelWrapper>
      <textarea
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className="w-full rounded-lg border-2 border-white px-2 py-4 text-white dark:border-black dark:text-black"
        value={value}
        onChange={(e) => onUpdate(e.target.value)}
      ></textarea>
    </label>
  );
};

export default TextAreaWrapper;
