import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import getCountries from "../../apiCalls";
import CountriesContainer from "../CountriesContainer/CountriesContainer";
import { Route, Switch } from "react-router-dom";
import CountryDetails from "../CountryDetails/CountryDetails";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [query, setQuery] = useState("");
  const [countryNameSelected, setCountryNameSelected] = useState("");
  console.log("Country selected", countryNameSelected);

  const filteredCountries = countryData.filter((country) => {
    return country.name.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    getCountries().then((data) => {
      setCountryData(data);
    });
  }, []);

  const getCountryName = (name) => {
    console.log(name);
    setCountryNameSelected(name);
  };

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${setCountryNameSelected}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <Navbar />
      <form className="form">
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for a country..."
        />
      </form>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <CountriesContainer
              allCountries={filteredCountries}
              getCountryFunc={getCountryName}
            />
          )}
        />

        <Route path="/name/:countryName" render={() => <CountryDetails />} />
      </Switch>
    </div>
  );
}

export default App;
