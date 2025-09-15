import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="logo">
      <img src={LOGO_URL} />
    </div>

    <div className="nav-items">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
