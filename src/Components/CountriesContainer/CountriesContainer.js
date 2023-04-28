import Country from "../Country/Country";
import "./CountriesContainer.css";

const CountriesContainer = (props) => {
  const countryElements = props.allCountries.map((country) => (
    <Country
      name={country.name}
      flag={country.flags.png}
      population={country.population}
      region={country.region}
      capital={country.capital}
      id={country.area}
      key={country.name}
    />
  ));

  return <div className="countries-container">{countryElements}</div>;
};

export default CountriesContainer;
