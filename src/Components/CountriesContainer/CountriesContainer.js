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
      getCountryFunc={props.getCountryFunc}
      toggleInput={props.toggleInput}
      darkMode={props.darkMode}
    />
  ));

  return (
    <div
      className={
        props.darkMode ? "countries-container-dark" : "countries-container"
      }
    >
      {countryElements}
    </div>
  );
};

export default CountriesContainer;
