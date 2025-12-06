const Wrapper = ({ children }) => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="h-full w-full max-w-[1300px] px-[3%]">{children}</div>
    </div>
  );
};

export default Wrapper;
