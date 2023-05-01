import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <Link to="/" onClick={props.toggleInput}>
        <h1>Country Insights Explorer</h1>
      </Link>
      <p>Dark Mode</p>
    </nav>
  );
};

export default Navbar;
