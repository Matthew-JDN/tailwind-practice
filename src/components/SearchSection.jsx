const SearchSection = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center bg-green-200">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-medium text-green-800">Gugole</h1>
        <input
          type="text"
          placeholder="Search..."
          className="w-[500px] pl-5 p-4 bg-green-100 border-1 border-green-800 bg-green-20 outline-none rounded-full mt-10"
        />
      </div>
      <div className="space-x-5 mt-10">
        <button className="p-3 bg-green-800 rounded-lg text-white cursor-pointer">
          Gugole Search
        </button>
        <button className="p-3 bg-green-800 rounded-lg text-white cursor-pointer">
          Image Search
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
