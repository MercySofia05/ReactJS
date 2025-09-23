import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="relative bg-[#fff] font-[#02060c]">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-26 justify-between items-center">
          <div className="flex">
            <img src={LOGO_URL} alt="Your Company" className="h-26 w-auto" />
          </div>

          <div className="align-baseline">
            <ul className="flex space-x-4">
              <li className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                <Link to="/about">About Us</Link>
              </li>
              <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </nav>
);

export default Header;
