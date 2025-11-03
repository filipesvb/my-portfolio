const TextAreaWrapper = ({
  label,
  rows,
  cols,
  placeholder,
  value,
  onUpdate
}: {
  label: string,
  rows: number;
  cols?: number;
  placeholder?: string;
  value: string;
  onUpdate: (e) => void;
}) => {
  return (
    <label>
      <span>{label}</span>
      <textarea
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className="w-full rounded-lg border-2 border-black px-2 py-4"
        value={value}
        onChange={(e) => onUpdate(e.target.value)}
      ></textarea>
    </label>
  );
};

export default TextAreaWrapper;
