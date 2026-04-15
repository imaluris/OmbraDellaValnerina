function VictoryPage({
  name,
  onShowRecap,
  onResetProgress,
}) {
  return (
    <div>
      <h1>Complimenti {name}!</h1>
      <p>Hai concluso la tua avventura.</p>

      <div>
        <button onClick={onShowRecap}>Rileggi la tua storia</button>
      </div>

      <div>
        <button onClick={onResetProgress}>Ricomincia da capo</button>
      </div>
    </div>
  );
}

export default VictoryPage;