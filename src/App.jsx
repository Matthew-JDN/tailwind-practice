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
    <div className="h-screen flex flex-col">
      <Header />
      <SearchSection />
      <Footer />
    </div>
  );
};

export default App;
