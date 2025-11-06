const Button = (props) => {
  const { btnName, isCancel } = props;

  const CancelBtn = isCancel ? "bg-slate-500 " : "bg-green-500";
  return (
    <>
      <button
        className={`rounded-lg
             p-2 px-5 
             ${CancelBtn} 
             text-white 
             ml-10 
             cursor-pointer`}
      >
        {btnName}
      </button>
    </>
  );
};

const FancyButton = () => {
  return (
    <>
      <div className="bg-white mt-5 h-20 w-full">
        <p className="text-xl text-center">Button Practice</p>
        <Button btnName="Cancel" isCancel={true} />
        <Button btnName="Submit" />
      </div>
    </>
  );
};

export default FancyButton;
