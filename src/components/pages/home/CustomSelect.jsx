import React, { useContext, useState } from "react";
import styles from "./CustomSelect.module.css";
import HomeContext from "../../../contexts/home-context";

const CustomSelect = () => {
  const homeCtx = useContext(HomeContext);
  const [showOptions, setShowOptions] = useState(false);
  const [currentOption, setCurrentOption] = useState("");

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const selectHandler = (option) => {
    return () => {
      console.log("option: ", option);
      setShowOptions(false);
      setCurrentOption(option);
      homeCtx.fetchCountriesByRegion(option);
    };
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["select-head"]} onClick={toggleOptions}>
        <span className={styles.select}>
          {currentOption ? `Showing ${currentOption}` : "Filter by Region"}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={styles.chevron}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      <div className={`${styles.options} ${showOptions ? "" : " hide"}`}>
        <span onClick={selectHandler("Africa")} className={styles.option}>
          Africa
        </span>
        <span onClick={selectHandler("America")} className={styles.option}>
          America
        </span>
        <span onClick={selectHandler("Asia")} className={styles.option}>
          Asia
        </span>
        <span onClick={selectHandler("Europe")} className={styles.option}>
          Europe
        </span>
        <span onClick={selectHandler("Oceania")} className={styles.option}>
          Oceania
        </span>
      </div>
    </div>
  );
};

export default CustomSelect;
