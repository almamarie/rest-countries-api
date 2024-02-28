import React from "react";
import styles from "./Inputs.module.css";
import CustomSelect from "./CustomSelect";

const Inputs = () => {
  return (
    <div className={styles.wrapper}>
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
            className={styles.input}
            type="search"
            placeholder="Search for a country..."
          />
        </div>

        <CustomSelect />
      </div>
    </div>
  );
};

export default Inputs;
