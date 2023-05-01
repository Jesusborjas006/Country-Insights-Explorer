import { Link } from "react-router-dom";
import "./Country.css";

const Country = (props) => {
  return (
    <Link to={`/name/${props.name}`}>
      <div
        className="country-card"
        id={props.name}
        onClick={() => {
          props.getCountryFunc(props.name);
          props.toggleInput();
        }}
      >
        <img className="flag-img" src={props.flag} alt={`${props.name} flag`} />
        <h2>{props.name}</h2>
        <p>
          <span className="bold">Population:</span>{" "}
          {props.population.toLocaleString("en-US")}
        </p>
        <p>
          <span className="bold">Region:</span> {props.region}
        </p>
        <p className="capital-text">
          <span className="bold">Capital:</span> {props.capital}
        </p>
      </div>
    </Link>
  );
};

export default Country;
