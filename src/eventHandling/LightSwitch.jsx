import { useState } from "react";
import clsx from "clsx";

const LightSwitch = () => {
  const [toggleLight, setToggleLight] = useState(true);
  return (
    <div
      className={clsx(
        "h-screen flex flex-col justify-center items-center",
        toggleLight ? "bg-slate-700" : "bg-yellow-100"
      )}
    >
      <div
        className={clsx(
          "px-2 py-4 cursor-pointer",
          toggleLight ? "bg-gray-100" : "bg-gray-500"
        )}
        onClick={() => setToggleLight(true)}
      >
        Off
      </div>
      <div
        className={clsx(
          "px-2 py-4 cursor-pointer",
          toggleLight ? "bg-gray-500" : "bg-gray-100"
        )}
        onClick={() => setToggleLight(false)}
      >
        On
      </div>
    </div>
  );
};

export default LightSwitch;
