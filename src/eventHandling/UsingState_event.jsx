import { useState } from "react";

const UsingState = () => {
  const [value, setValue] = useState("Hello Ballers");
  const [age, setAge] = useState(0);

  let color = undefined;
  if (age === 18) {
    color = "text-green-700";
  } else if (age === 23) {
    color = "text-red-500";
  } else if (age == 77) {
    color = "text-yellow-500";
  }

  return (
    <div className="flex flex-col justify-center item-center">
      <div className="flex justify-between">
        <h1 className="text-3xl">{value}</h1>
        <h1 className={`${color} text-3xl`}>{age}</h1>
      </div>
      <div className="flex space-x-6 justify-center mt-6">
        <button
          className="bg-green-800 px-6 py-2 rounded-lg text-white font-medium"
          onClick={() => {
            setValue("Matthew Peralta"), setAge(18);
          }}
        >
          one
        </button>
        <button
          className="bg-red-800 px-6 py-2 rounded-lg text-white font-medium"
          onClick={() => {
            setValue("Michael Jordan"), setAge(23);
          }}
        >
          two
        </button>
        <button
          className="bg-purple-800 px-4 py-2 rounded-lg text-white font-medium"
          onClick={() => {
            setValue("Luka Docic"), setAge(77);
          }}
        >
          three
        </button>
      </div>
    </div>
  );
};

export default UsingState;
