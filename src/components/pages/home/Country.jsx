import React from "react";
import styles from "./country.module.css";
import { Link } from "react-router-dom";

const Country = (props) => {
  const { country } = props;

  return (
    <li className={styles.wrapper}>
      <Link to={`/countries/${country.name.official}`} className={styles.link}>
        <img
          src={country.flags.svg}
          className={styles.img}
          alt={`${country.name} flag`}
        />
        <div className={styles.description}>
          <h3 className={styles.name}>{country.name.official}</h3>
          <span>Population: {country.population.toLocaleString("en-US")}</span>
          <span>Region: {country.region}</span>
          <span>Capital: {country.capital}</span>
        </div>
      </Link>
    </li>
  );
};

export default Country;
