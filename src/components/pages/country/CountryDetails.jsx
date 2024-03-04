import React, { useEffect, useState } from "react";
import styles from "./CountryDetails.module.css";
import Loader from "../../loader/Loader";
import { Link, useNavigate, useParams } from "react-router-dom";

const CountryDetails = () => {
  // REMEMBER: use loader to fetch data
  const [country, setCountry] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { countryName } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchCountry = async () => {
      console.log();
      setIsLoading(true);

      const response = await fetch(`https://restcountries.com/v3.1/all`);
      if (!response.ok) {
        console.log("Error fetching");
        setIsLoading(false);
        setError(true);
      } else {
        const data = await response.json();

        const coun = data.find((count) => {
          return count.name.official === countryName;
        });

        let borderCountries = [];

        if (coun.borders) {
          borderCountries = data.filter((count) => {
            return coun.borders.includes(count.fifa);
          });
        }

        const borderCountriesNames = borderCountries.map((co) => co.name);

        coun.borders = borderCountriesNames;

        setCountry(coun);
        setIsLoading(false);
        setError(false);
      }
    };

    fetchCountry();
  }, [countryName]);

  if (isLoading) {
    console.log("Here 1");
    return <Loader />;
  } else if (error || !country) {
    console.log("Here 2");
    return <h3>An error occured</h3>;
  } else if (!isLoading && !error && country) {
    console.log("Country: ", country);
    return (
      <div className={styles.wrapper}>
        <button className={styles.button} type="text" onClick={goBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styles.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          <span>Back</span>
        </button>

        <div className={styles.content}>
          <img
            className={styles.img}
            src={country.flags.svg}
            alt="country flag"
          />
          <div className={styles.details}>
            <h3 className={styles.heading}>{country.name.official}</h3>
            <div className={styles["details-uls"]}>
              <ul className={styles["details-uls__1"]}>
                <li>
                  <span className={styles.title}>Native Name:</span>{" "}
                  <span className={styles.text}>{country.name.common}</span>
                </li>
                <li>
                  <span className={styles.title}>Population:</span>{" "}
                  <span className={styles.text}>
                    {country.population.toLocaleString("en-US")}
                  </span>
                </li>{" "}
                <li>
                  <span className={styles.title}>Region:</span>{" "}
                  <span className={styles.text}>{country.region}</span>
                </li>{" "}
                <li>
                  <span className={styles.title}>Sub region:</span>{" "}
                  <span className={styles.text}>{country.subregion}</span>
                </li>
                <li>
                  <span className={styles.title}>Capital:</span>{" "}
                  <span className={styles.text}>
                    {country.capital ? country.capital[0] : "none"}
                  </span>
                </li>
              </ul>
              <ul className={styles["details-uls__1"]}>
                <li>
                  <span className={styles.title}>Top Level Domain:</span>{" "}
                  <span className={styles.text}>{country.tld}</span>
                </li>
                <li>
                  <span className={styles.title}>Currencies:</span>{" "}
                  <span className={styles.text}>
                    {country.currencies
                      ? Object.keys(country.currencies)[0]
                      : "none"}
                  </span>
                </li>
                <li>
                  <span className={styles.title}>Languages:</span>{" "}
                  <span className={styles.text}>
                    {country.languages
                      ? Object.values(country.languages).join(", ")
                      : "none"}
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles["border-countries-wrapper"]}>
              <span className={styles.title}>Border Countries: </span>

              <div className={styles.scroll}>
                {" "}
                {country.borders.length > 0 ? (
                  <ul className={styles["border-countries"]}>
                    {country.borders.map((nam, index) => {
                      return (
                        <li key={index} className={styles["border-link"]}>
                          <Link to={`/countries/${nam.official}`} className={styles.link}>
                            {nam.common}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  "none"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CountryDetails;

// the angry african
// from my brother's
