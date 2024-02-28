import React from "react";
import styles from "./Countries.module.css";
import Country from "./Country";
import { countriesList } from "../../resources/list-of-countries";

const Countries = () => {
  return (
    <ul className={styles.ul}>
      {countriesList.slice(0, 50).map((country, index) => {
        return <Country key={index} country={country} />;
      })}
    </ul>
  );
};

export default Countries;
