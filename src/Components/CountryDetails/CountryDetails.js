import "./CountryDetails.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CountryDetails = (props) => {
  const [countryDetails, setCountryDetails] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${props.countrySelected}`)
      .then((response) => response.json())
      .then((data) => {
        return setCountryDetails(data[0]);
      });
  }, []);

  if (countryDetails) {
    return (
      <div
        className={
          props.darkMode ? "country-details-page-dark" : "country-details-page"
        }
      >
        <Link to="/" className="back-btn" onClick={props.toggleInput}>
          Go Back
        </Link>
        <div className="details-content">
          <img
            className="country-details-img"
            src={countryDetails.flag}
            alt={`${countryDetails.name} flag`}
          />
          <div className="container">
            <div className="details-text-content">
              <div className="left-text">
                <h3 className="details-name">{countryDetails.name}</h3>

                <p>
                  <span className="bold">Native Name: </span>
                  {countryDetails.nativeName}
                </p>
                <p>
                  <span className="bold">Population: </span>
                  {countryDetails.population &&
                    countryDetails.population.toLocaleString()}
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
                <p>
                  <span className="bold">Currencies: </span>
                  {countryDetails.currencies
                    ? countryDetails.currencies[0].name
                    : "Not Available"}
                </p>
                <p>
                  <span className="bold">Languages: </span>
                  {countryDetails.currencies
                    ? countryDetails.languages.map((country) => country.name)
                    : "Not Available"}
                </p>
                <p>
                  <span className="bold">Latitude: </span>
                  {countryDetails.latlng && countryDetails.latlng[0]}
                </p>
                <p>
                  <span className="bold">Longitude: </span>
                  {countryDetails.latlng && countryDetails.latlng[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CountryDetails;
