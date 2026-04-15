import "../style/CountryPage.css"


function CountryPage({ countries, onSelectCountry }) {
  return (
    <div className="country-container">
      <h1>Scegli il paese</h1>

      {countries.map((country) => (
        <div key={country.id}>
          <button className="country-button"
            disabled={!country.enabled}
            onClick={() => onSelectCountry(country.id)}
          >
            {country.name}
          </button>

          {!country.enabled && (
            <p className="country-p">
              Non disponibile nella tua posizione
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default CountryPage;