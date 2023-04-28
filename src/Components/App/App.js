import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import getCountries from "../../apiCalls";
import CountriesContainer from "../CountriesContainer/CountriesContainer";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [query, setQuery] = useState("");

  const filteredCountries = countryData.filter((country) => {
    return country.name.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    getCountries().then((data) => {
      setCountryData(data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <form className="form">
        <Link to="/country/1">New Page</Link>
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
          render={() => <CountriesContainer allCountries={filteredCountries} />}
        />

        <Route path="/country/1" render={() => <h2>Country Details</h2>} />
      </Switch>
    </div>
  );
}

export default App;
