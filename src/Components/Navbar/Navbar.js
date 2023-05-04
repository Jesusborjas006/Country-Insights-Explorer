import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className={props.darkMode ? "navbar-dark" : "navbar"}>
      <Link to="/" onClick={props.toggleInput}>
        <h1 className={props.darkMode ? "logo-dark" : "logo"}>
          Country Insights Explorer
        </h1>
      </Link>
      <p onClick={props.toggleDarkMode} className="toggle-text">
        {!props.darkMode ? "Dark Mode" : "Light Mode"}
      </p>
    </nav>
  );
};

export default Navbar;
