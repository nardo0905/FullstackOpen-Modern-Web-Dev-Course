import { useState, useEffect } from "react";
import CountriesSearchField from "./components/CountriesSearchField";
import CountriesToShow from "./components/CountriesToShow";
import axios from "axios";

function App() {
  const [countryFilter, setCountryFilter] = useState("");
  const [countries, setCountries] = useState([]);

  const fetchAllCountries = () => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  };
  useEffect(fetchAllCountries, []);

  const handleNewCountryFilter = (event) => {
    setCountryFilter(event.target.value);
  };

  return (
    <div>
      <CountriesSearchField
        country={countryFilter}
        handleCountryChange={handleNewCountryFilter}
      ></CountriesSearchField>
      <CountriesToShow
        countries={countries}
        filter={countryFilter}
      ></CountriesToShow>
    </div>
  );
}

export default App;
