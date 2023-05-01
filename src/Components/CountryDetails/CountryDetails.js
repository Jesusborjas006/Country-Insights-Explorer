import "./CountryDetails.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CountryDetails = (props) => {
  const [countryDetails, setCountryDetails] = useState({});
  console.log(countryDetails);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${props.countrySelected}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setCountryDetails(data[0]);
      });
  }, []);

  return (
    <div className="country-details-page">
      <Link to="/" className="back-btn" onClick={props.toggleInput}>
        Go Back
      </Link>
      <div className="details-content">
        <img
          className="country-details-img"
          src={countryDetails.flag}
          alt={`${countryDetails.name} flag`}
        />
        <div className="details-text-content">
          <div className="left-text">
            <h3 className="details-name">{countryDetails.name}</h3>

            <p>
              <span className="bold">Native Name: </span>
              {countryDetails.nativeName}
            </p>
            <p>
              <span className="bold">Population: </span>
              {countryDetails.population}
            </p>
            <p>
              <span className="bold">Region: </span>
              {countryDetails.region}
            </p>
            <p>
              <span className="bold">Sub Region: </span>
              {countryDetails.subregion}
            </p>
            <p>
              <span className="bold">Capital: </span>
              {countryDetails.capital}
            </p>
          </div>
          <div className="right-text">
            {/* <p>
              <span className="bold">Currencies: </span>
              {countryDetails.currencies}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
