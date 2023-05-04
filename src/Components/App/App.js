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
  const [formDisplay, setFormDisplay] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const filteredCountries = countryData.filter((country) => {
    return country.name.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    getCountries().then((data) => {
      setCountryData(data);
    });
  }, []);

  const getCountryName = (name) => {
    setCountryNameSelected(name);
  };

  const toggleForm = () => {
    setFormDisplay(!formDisplay);
  };

  const toggleWithLogo = () => {
    setFormDisplay(true);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <Navbar
        toggleInput={toggleWithLogo}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {formDisplay && (
        <form className={darkMode ? "form-dark" : "form"}>
          <input
            className="search-input"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for a country..."
          />
        </form>
      )}

      <Switch>
        <Route
          path="/"
          exact
          render={() =>
            !filteredCountries.length ? (
              <h2 className={darkMode ? "error-message-dark" : "error-message"}>Sorry, no countries were found</h2>
            ) : (
              <CountriesContainer
                allCountries={filteredCountries}
                getCountryFunc={getCountryName}
                toggleInput={toggleForm}
                darkMode={darkMode}
              />
            )
          }
        />

        <Route
          path="/name/:countryName"
          render={() => (
            <CountryDetails
              countrySelected={countryNameSelected}
              toggleInput={toggleForm}
              darkMode={darkMode}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
