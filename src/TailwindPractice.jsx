const Card = () => {
  return (
    <>
      <div className="border-y-10 border-slate-800 bg-slate-500 h-105 w-100 rounded-xl mx-auto mt-10 shadow-xl shadow-slate-500/50">
        <img
          src="/images/pic.jpg"
          alt="picture"
          className="h-60 max-w-xl p-5 mx-auto rounded-[30px]"
        />
        <div className="bg-slate-200 mx-3 rounded-sm p-2">
          <h1 className="text-xl text-center text-slate-500">
            Peralta, Lei Matthew C.
          </h1>
        </div>

        <div className="bg-slate-200 mx-3 my-3 rounded-sm p-2 h-22">
          <h1 className="text-center text-slate-500">
            <a href="https://www.facebook.com/matthew.peralta.80039">
              <span className="font-bold">fb: </span>
              <span className="underline decoration-slate-500">
                Matthew Peralta
              </span>
            </a>
          </h1>
          <p className="text-slate-500 text-xs text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni,
            aspernatur modi nulla error magnam ullam vero labore voluptatum
            illum est totam
          </p>
        </div>
      </div>
    </>
  );
};

const DynamicText = () => {
  const errorHandler = true;
  return (
    <>
      <div
        className={`${
          errorHandler ? "bg-green-500" : "bg-red-500"
        } text-white mt-3`}
      >
        <p className="font-bold p-5 text-center text-xl">Success</p>
      </div>
    </>
  );
};

const Random = () => {
  return (
    <>
      <Card />
      <DynamicText />
    </>
  );
};

export default Random;
