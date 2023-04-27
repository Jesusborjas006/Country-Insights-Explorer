import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import getCountries from "../../apiCalls";
import CountriesContainer from "../CountriesContainer/CountriesContainer";

function App() {
  const [countryData, setCountryData] = useState([]);
  console.log(countryData)

  useEffect(() => {
    getCountries().then((data) => {
      setCountryData(data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <CountriesContainer allCountries={countryData}/>
    </div>
  );
}

export default App;
