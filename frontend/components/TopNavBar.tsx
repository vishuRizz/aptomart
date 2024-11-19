import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { WalletSelector } from "./WalletSelector";

function TopNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="flex items-center justify-between p-5">
      {/* Logo */}
      <div className="flex items-center ml-7">
        <img src="/images/logo.png" alt="Logo" width={50} height={50} />
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation */}
      <div className={`${isMenuOpen ? "block" : "hidden"} absolute top-20 left-0 right-0 bg-white px-12 py-2 pb-10 md:pb-2 space-y-4 md:static md:flex md:flex-row md:items-center md:space-x-9 md:space-y-0`}>
     

        <WalletSelector placeholder="Connect a Wallet" />

        {/* <a href="/" className="block border border-black px-4 py-2">Sign In</a>
        <a href="/" className="block bg-black text-white px-4 py-2">Sign Up</a> */}
      </div>
    </nav>
  );
}

export default TopNavBar;