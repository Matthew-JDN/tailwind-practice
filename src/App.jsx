import Info from "./Info.jsx";
import TailwindPractice from "./TailwindPractice.jsx";
import FancyButton from "./FancyButton.jsx";
import Cat from "./Cat.jsx";
import Container from "./Dog.jsx";
import Users from "./Users.jsx";
import Layout from "./Layout.jsx";
import Header from "./components/Header.jsx";
import SearchSection from "./components/SearchSection.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    /*
    <>
      <div>
        <div className="flex h-64 p-4 m-4 border-2 border-blue-400 justify-center">
          <Cat />
          <Cat />
          <Cat />
        </div>
        <div className="flex h-64 p-4 m-4 border-2 border-red-400 justify-between">
          <Cat />
          <Cat />
          <Cat />
        </div>
        <div className="flex h-64 p-4 m-4 border-2 border-green-400 justify-center items-center">
          <Cat />
          <Cat />
          <Cat />
        </div>
        <div className="flex h-64 p-4 m-4 border-2 border-purple-400 justify-around items-end">
          <Cat />
          <Cat />
          <Cat />
        </div>
        <div className="flex h-64 p-4 m-4 border-2 border-orange-400 justify-between items-center">
          <Cat />
          <Cat />
          <Cat />
        </div>
      </div>
    </>
    */
    //<Container />

    //<Layout />
    <div className="h-screen flex flex-col">
      <Header />
      <SearchSection />
      <Footer />
    </div>
  );
};

export default App;
