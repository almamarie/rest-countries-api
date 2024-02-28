import React, { useState } from "react";

const HomeContext = React.createContext({
  isLoading: false,
  countries: [],
  countriesNames: [],
  fetchCountries: async () => {},
  fetchCountriesByRegion: async () => {},
  searchCountry: async () => {},
});

export const HomeContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState([]);
  const [countriesNames, setCountriesNames] = useState([]);

  console.log("Rrendering");

  const sortCountries = (data) => {
    return data.sort((a, b) => {
      // Case-insensitive alphabetical comparison
      const lowerA = a.name.official.toLowerCase();
      const lowerB = b.name.official.toLowerCase();
      if (lowerA < lowerB) return -1;
      if (lowerA > lowerB) return 1;
      return 0;
    });
  };

  const fetchCountries = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags"
    );
    if (!response.ok) {
      setIsLoading(false);
      setError(true);
    } else {
      const data = await response.json();

      const sortedData = sortCountries(data);
      setCountries((prev) => sortedData);
      setCountriesNames(sortedData.map((sorted) => sorted.name.official));
      setIsLoading(false);
      setError(false);
      //   console.log("Data: ", data);
    }
  };

  const fetchCountriesByRegion = async (region) => {
    setIsLoading(true);
    console.log("Region: ", region.toLowerCase());
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region.toLowerCase()}`
    );
    if (!response.ok) {
      setIsLoading(false);
      setError(true);
    } else {
      const data = await response.json();

      setCountries((prev) => {
        return data.sort((a, b) => {
          const lowerA = a.name.official.toLowerCase();
          const lowerB = b.name.official.toLowerCase();
          if (lowerA < lowerB) return -1;
          if (lowerA > lowerB) return 1;
          return 0;
        });
      });
      setIsLoading(false);
      setError(false);
    }
  };

  const searchCountry = async (country) => {
    setIsLoading(true);

    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}?fullText=true`
    );
    if (!response.ok) {
      setIsLoading(false);
      setError(true);
    } else {
      const data = await response.json();
      console.log("Searching...", data);

      setCountries((prev) => data);
      setIsLoading(false);
      setError(false);
    }
  };

  return (
    <HomeContext.Provider
      value={{
        isLoading,
        countries,
        countriesNames,
        error,
        fetchCountries,
        fetchCountriesByRegion,
        searchCountry,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeContext;
