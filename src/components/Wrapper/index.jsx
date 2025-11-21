const Wrapper = ({ children }) => {
  return (
    <div className="w-full flex">
      <div className="w-full max-w-[1300px] px-[3%]">{children}</div>
    </div>
  );
};

export default Wrapper;
