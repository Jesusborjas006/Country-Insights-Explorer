import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import getCountries from "../../apiCalls";
import CountriesContainer from "../CountriesContainer/CountriesContainer";

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
        <input
        className="search-input"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for a country..."
        />
      </form>
      <CountriesContainer allCountries={filteredCountries} />
    </div>
  );
}

export default App;
