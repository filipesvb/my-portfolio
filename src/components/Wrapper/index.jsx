const Wrapper = ({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1300px]">{children}</div>
    </div>
  );
};

export default Wrapper;
