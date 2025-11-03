const TextAreaWrapper = ({
  rows,
  cols,
  placeholder,
  value,
}: {
  rows: number;
  cols?: number;
  placeholder?: string;
  value: string;
}) => {
  return (
    <label>
      <span>Mensagem</span>
      <textarea
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className="w-full rounded-lg border-2 border-black px-2 py-4"
        value={value}
      ></textarea>
    </label>
  );
};

export default TextAreaWrapper;
