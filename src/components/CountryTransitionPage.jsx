function CountryTransitionPage({
  currentCountryName,
  availableCountries,
  onContinueToCountry,
  onFinishStory,
}) {
  return (
    <div>
      <h1>Hai completato {currentCountryName}</h1>

      <p>
        Vuoi continuare l’avventura in un altro paese oppure terminare la storia?
      </p>

      {availableCountries.length > 0 && (
        <div>
          <h2>Scegli dove proseguire</h2>

          {availableCountries.map((country) => (
            <div key={country.id}>
              <button onClick={() => onContinueToCountry(country.id)}>
                Continua a {country.name}
              </button>
            </div>
          ))}
        </div>
      )}

      <div>
        <button onClick={onFinishStory}>Termina la storia</button>
      </div>
    </div>
  );
}

export default CountryTransitionPage;