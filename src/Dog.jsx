const Dog = () => {
  return (
    <>
      <div>🐕</div>
      <div>🐕</div>
      <div>🐕</div>
    </>
  );
};

const Box1 = () => {
  return (
    <div className="flex justify-center items-center h-64 p-4 m-4 border-2 border-blue-300">
      <Dog />
    </div>
  );
};
const Box2 = () => {
  return (
    <div className="flex flex-col justify-between items-center h-64 p-4 m-4 border-2 border-gray-300">
      <Dog />
    </div>
  );
};

const Box3 = () => {
  return (
    <div className="flex flex-col justify-end items-center h-64 p-4 m-4 border-2 border-orange-300">
      <Dog />
    </div>
  );
};

const Box4 = () => {
  return (
    <div className="flex flex-col justify-around items-end h-64 p-4 m-4 border-2 border-red-300">
      <Dog />
    </div>
  );
};

const Box5 = () => {
  return (
    <div className="flex justify-between items-start h-64 p-4 m-4 border-2 border-purple-300">
      <Dog />
    </div>
  );
};

const Container = () => {
  return (
    <>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
    </>
  );
};

export default Container;
