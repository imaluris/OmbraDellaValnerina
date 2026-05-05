import "../style/CountryPage.css"

function CountryPage({ countries, gpsLoading, gpsError, onSelectCountry }) {
  return (
    <div className="country-container">
      <h1>Scegli il paese</h1>

      {gpsLoading && (
        <p className="country-p">Sto cercando la tua posizione...</p>
      )}

      {gpsError && (
        <p className="country-p">GPS non disponibile: {gpsError}</p>
      )}

      {countries.map((country) => (
        <div key={country.id}>
          <button
            className="country-button"
            disabled={!country.enabled}
            onClick={() => onSelectCountry(country.id)}
          >
            {country.name}
          </button>

          {!country.enabled && !gpsLoading && !gpsError && (
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
