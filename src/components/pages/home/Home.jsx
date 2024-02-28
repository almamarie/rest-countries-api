import React from "react";
import styles from "./Home.module.css";
import Inputs from "./Inputs";
import Countries from "./Countries";

const Home = () => {
  console.log("Rerendering");
  return (
    <div className={styles.wrapper}>
      <div className={styles.Inputs}>
        <Inputs />
      </div>
      <Countries />
    </div>
  );
};

export default Home;
