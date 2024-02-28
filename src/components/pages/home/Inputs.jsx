import React, { useContext, useRef } from "react";
import styles from "./Inputs.module.css";
import CustomSelect from "./CustomSelect";
import HomeContext from "../../../contexts/home-context";

const Inputs = () => {
  const homeCtx = useContext(HomeContext);
  const inputRef = useRef();
  const { countriesNames } = homeCtx;

  const searchHandler = (event) => {
    event.preventDefault();

    const searchName = inputRef.current.value;
    homeCtx.searchCountry(searchName);
  };
  return (
    <form className={styles.wrapper} onSubmit={searchHandler}>
      <div className={styles.inputs}>
        <div className={styles["wrapper--search-input"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.4"
            stroke="currentColor"
            className={styles["search-icon"]}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            ref={inputRef}
            className={styles.input}
            type="search"
            placeholder="Search for a country..."
            list="countries"
          />
        </div>

        <CustomSelect />
        <datalist id="countries">
          {countriesNames.map((con, index) => (
            <option key={index} value={con}>
              {con}
            </option>
          ))}
        </datalist>
        <button type="submit" className="hide"></button>
      </div>
    </form>
  );
};

export default Inputs;
