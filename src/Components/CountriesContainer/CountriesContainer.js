import Country from "../Country/Country";

const CountriesContainer = (props) => {
  const countryElements = props.allCountries.map((country) => (
    <Country
      name={country.name}
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
