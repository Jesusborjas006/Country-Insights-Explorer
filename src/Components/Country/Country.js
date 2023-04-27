const Country = (props) => {
  return (
    <div className="country-card">
      <h2>{props.name}</h2>
      <p>Population: {props.population}</p>
      <p>Region: {props.region}</p>
      <p>Capital: {props.capital}</p>
    </div>
  );
};

export default Country;
