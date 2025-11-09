import { useState } from "react";

const Buttons = (props) => {
  const { label, color, setValue, positive } = props;

  return (
    <>
      <button
        className={`${color} text-3xl text-white font-bold px-4  py-2 rounded-lg`}
        onClick={() => {
          setValue((prev) => (positive ? prev + 1 : prev - 1));
        }}
      >
        {label}
      </button>
    </>
  );
};

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="flex justify-center items-center h-screen space-x-2">
      <Buttons label="-" color="bg-red-700" setValue={setValue} value={value} />
      <div className="bg-gray-400 px-6  py-2 rounded-lg text-3xl w-20 flex justify-center">
        {value}
      </div>
      <Buttons
        label="+"
        color="bg-green-700"
        setValue={setValue}
        value={value}
        positive={true}
      />
    </div>
  );
};

export default Counter;
