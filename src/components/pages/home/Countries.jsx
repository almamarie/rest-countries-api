import React, { Suspense, useContext, useEffect } from "react";
import styles from "./Countries.module.css";
import Country from "./Country";
import HomeContext from "../../../contexts/home-context";
import Loader from "../../loader/Loader";

const Countries = () => {
  const homeCtx = useContext(HomeContext);
  const { countries, fetchCountries } = homeCtx;

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <ul className={styles.ul}>
        {countries.map((country, index) => {
          return <Country key={index} country={country} />;
        })}
      </ul>
    </Suspense>
  );
};

export default Countries;
