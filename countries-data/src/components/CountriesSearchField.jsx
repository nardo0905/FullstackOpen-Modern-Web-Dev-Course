const CountriesSearchField = ({ country, handleCountryChange }) => {
  return (
    <div>
      find countries <input value={country} onChange={handleCountryChange} />
    </div>
  );
};

export default CountriesSearchField;
