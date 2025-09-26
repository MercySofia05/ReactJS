import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [loginLogoutBtn, setLoginLogoutBtn] = useState("Login");
  return (
    <nav className="relative bg-[#fff] font-[#02060c]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-26 justify-between items-center">
          <div className="flex">
            <img src={LOGO_URL} alt="Your Company" className="h-26 w-auto" />
          </div>

          <div className="align-baseline">
            <ul className="flex space-x-4">
              <li className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-orange-300 font-bold" : "text-500"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="rounded-md px-3 py-2 text-sm font-medium text-300 hover:bg-gray-200">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-500 font-bold" : "text-500"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="rounded-md px-3 py-2 text-sm font-medium text-300 hover:bg-gray-200">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-500 font-bold" : "text-500"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className="rounded-md px-3 py-2 text-sm font-medium text-300 hover:bg-gray-200">
                <NavLink
                  to="/offers"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-500 font-bold" : "text-500"
                  }
                >
                  Offers
                </NavLink>
              </li>
              <li className="rounded-md px-3 py-2 text-sm font-medium text-300 hover:bg-gray-200">
                <NavLink
                  to="/help"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-500 font-bold" : "text-500"
                  }
                >
                  Help
                </NavLink>
              </li>

              <span className="">
                <button
                  className="rounded-md bg-yellow-500 px-2 py-2 text-sm font-medium hover:cursor-pointer"
                  onClick={() => {
                    setLoginLogoutBtn(
                      loginLogoutBtn == "Login" ? "Logout" : "Login"
                    );
                  }}
                >
                  {loginLogoutBtn}
                </button>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
