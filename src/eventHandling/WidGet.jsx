import { useState } from "react";

const WidGet1 = () => {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <div className="border-2 border-green-700 bg-green-100 rounded-md mt-4">
      <div className="flex flex-col items-center p-12 space-y-6">
        {showIcon ? <h1 className="text-3xl">👶</h1> : null}
        <button
          className="bg-green-700 px-6 py-2 text-white rounded-full cursor-pointer"
          onClick={() => setShowIcon(!showIcon)}
        >
          Click me
        </button>
      </div>
    </div>
  );
};

const WidGet2 = () => {
  const [value, setvalue] = useState(true);

  return (
    <div className="border-2 border-orange-700 bg-orange-100 rounded-md">
      <div className="flex justify-center p-12">
        <button
          className={`${value ? "bg-orange-700" : "bg-purple-700"} 
          text-white px-6 py-2 rounded-full cursor-pointer`}
          onClick={() => setvalue(!value)}
        >
          Click me
        </button>
      </div>
    </div>
  );
};

const WidGet3 = () => {
  const [value, setvalue] = useState(false);

  return (
    <div className="border-2 border-purple-700 bg-purple-100 rounded-md">
      <div className="flex flex-col justify-center items-center p-12 space-y-6">
        {value && <h1 className="text-3xl">👶</h1>}
        <button
          className="bg-purple-700 text-white px-6 py-2 rounded-full cursor-pointer"
          onClick={() => setvalue(!value)}
        >
          Click me
        </button>
      </div>
    </div>
  );
};

const WidGet = () => {
  return (
    <div className="flex flex-col items-center border-2 h-screen space-y-6">
      <WidGet1 />
      <WidGet2 />
      <WidGet3 />
    </div>
  );
};

export default WidGet;
