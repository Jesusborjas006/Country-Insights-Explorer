import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import getCountries from "../../apiCalls";

function App() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    getCountries().then((data) => {
      console.log(data);
      setCountryData(countryData);
    });
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
