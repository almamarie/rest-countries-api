import React from "react";
import styles from "./Home.module.css";
import Inputs from "./Inputs";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Inputs />
    </div>
  );
};

export default Home;
