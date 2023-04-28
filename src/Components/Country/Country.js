import "./Country.css";

const Country = (props) => {
  return (
    <div className="country-card">
      <img className="flag-img" src={props.flag} alt={`${props.name} flag`} />
      <h2>{props.name}</h2>
      <p>Population: {props.population}</p>
      <p>Region: {props.region}</p>
      <p>Capital: {props.capital}</p>
    </div>
  );
};

export default Country;
