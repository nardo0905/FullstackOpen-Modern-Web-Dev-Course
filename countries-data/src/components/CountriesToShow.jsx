import { useEffect } from "react";
import CountriesAPI from "../services/CountriesAPI";

const CountriesToShow = ({ countries, filter }) => {
  if (!filter) return;

  const countriesToShowWithFilter = countries.filter((cf) =>
    cf.name.common.toLowerCase().includes(filter)
  );

  if (countriesToShowWithFilter.length > 10) {
    return (
      <div>
        <p>Too many countries, use another filter</p>
      </div>
    );
  }

  //   const getCountryData = () => {
  //     return CountriesAPI.getCountryDataByName(
  //       countriesToShowWithFilter[0].name.common.toLowerCase()
  //     );
  //   };
  //   useEffect(getCountryData(), [filter]);

  if (countriesToShowWithFilter.length === 1) {
    const countryData = CountriesAPI.getCountryDataByName(
      countriesToShowWithFilter[0].name.common.toLowerCase()
    );
    console.log("countryData", countryData);
    // const countryLang = Object.values(countryData[0].languages);
    // console.log("countryLang", countryLang);

    return (
      <div>
        <h2>{countriesToShowWithFilter[0].name.common}</h2>
        <p>capital {countryData.capital}</p>
        <p>area {countryData.area}</p>
        <h4>languages: </h4>
        <ul>{countryData.languages}</ul>
      </div>
    );
  }

  return (
    <div>
      {countriesToShowWithFilter.map((ctry) => {
        return <p key={ctry.cca2}>{ctry.name.common}</p>;
      })}
    </div>
  );
};

export default CountriesToShow;
