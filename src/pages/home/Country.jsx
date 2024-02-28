import React from "react";
import styles from "./country.module.css";

const Country = (props) => {
  const { country } = props;

  return (
    <li className={styles.wrapper}>
      <img
        src={country.flags.svg}
        className={styles.img}
        alt={`${country.name} flag`}
      />
      <div className={styles.description}>
        <h3 className={styles.name}>{country.name}</h3>
        <span>Population: {country.population}</span>
        <span>Region: {country.region}</span>
        <span>Capoital: {country.capital}</span>
      </div>
    </li>
  );
};

export default Country;
