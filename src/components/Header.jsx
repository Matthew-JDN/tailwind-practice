import userAccount from "../images/userAccount.png";

const Header = () => {
  return (
    <nav className="flex justify-between bg-green-800 px-12">
      <ul className="flex py-6 space-x-5">
        <li className="text-xl text-white cursor-pointer">About</li>
        <li className="text-xl text-white cursor-pointer">Store</li>
      </ul>
      <ul className="flex items-center">
        <li className="text-white text-xl cursor-pointer">Preferences</li>
        <li className="ml-2 cursor-pointer">
          <img src={userAccount} alt="user-image" className="h-10 w-10" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
