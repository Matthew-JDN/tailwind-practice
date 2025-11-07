const qoute1 = {
  text: "one of my most productive days was throwing away 1000 Lines of code.",
  author: "Ken Thompson",
  bio: "Designer of Unix Operating System",
};

const qoute2 = {
  text: "A ship port is safe, but that's not what ships are built for.",
  author: "Admiral Grace Hopper",
  bio: "Inventor of Programming Compilers",
};

const qoute3 = {
  text: "If you optimize everything, you will always be unhappy",
  author: "Donald knuth",
  bio: "Pioneer of Algorithm Analysis",
};

const QouteBox1 = (props) => {
  const { qoute1 } = props;

  return (
    <div className="w-96 m-10">
      <div className="p-8 bg-sky-500 rounded-t-lg">
        <p className="text-slate-100">{qoute1.text}</p>
      </div>
      <div className="bg-slate-100 p-6 rounded-b-lg">
        <div className="flex flex-col items-center">
          <h1 className="text-sky-500 text-md font-medium">{qoute1.author}</h1>
          <p className="text-slate-500">{qoute1.bio}</p>
        </div>
      </div>
    </div>
  );
};

const QouteBox2 = (props) => {
  const { qoute2 } = props;

  return (
    <div className="flex m-10">
      <div className="w-64 bg-blue-500 p-4 rounded-l-lg">
        <div className="mb-2">
          <h1 className="text-3xl text-white font-medium">{qoute2.author}</h1>
        </div>
        <div>
          <p className="text-slate-300">{qoute2.bio}</p>
        </div>
      </div>
      <div className="w-64 p-12 border-1 border-gray-300 rounded-r-full">
        <p className="text-gray-500">{qoute2.text}</p>
      </div>
    </div>
  );
};

const QouteBox3 = (props) => {
  const { qoute3 } = props;

  return (
    <div className="flex flex-col items-start m-10">
      <div className="bg-rose-400 text-white p-6 rounded-t-lg rounded-br-lg">
        <p>{qoute3.text}</p>
      </div>
      <div className="bg-red-200 p-4 rounded-b-lg">
        <h1 className="text-xl text-red-900 font-medium">{qoute3.author}</h1>
        <p className="text-red-400">{qoute3.bio}</p>
      </div>
    </div>
  );
};

const Layout = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      <QouteBox1 qoute1={qoute1} />
      <QouteBox2 qoute2={qoute2} />
      <QouteBox3 qoute3={qoute3} />
    </div>
  );
};

export default Layout;
