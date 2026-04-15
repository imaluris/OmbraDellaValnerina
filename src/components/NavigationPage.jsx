function NavigationPage({
  selectedOption,
  riddleUnlocked,
  answer,
  feedback,
  onUnlockRiddle,
  onAnswerChange,
  onSubmitAnswer,
  onShowHint,
  onBackToStory,
}) {
  if (!selectedOption) {
    return (
      <div>
        <h2>Errore</h2>
        <p>Nessuna opzione selezionata.</p>
        <button onClick={onBackToStory}>Torna alla storia</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Navigazione</h2>

      <p>{selectedOption.navigationText}</p>

      {!riddleUnlocked && (
        <button onClick={onUnlockRiddle}>
          Sono arrivato
        </button>
      )}

      {riddleUnlocked && (
        <div style={{ marginTop: "24px" }}>
          <p>{selectedOption.riddleText}</p>

          <p>
            <strong>{selectedOption.riddleQuestion}</strong>
          </p>

          <input
            type="text"
            value={answer}
            onChange={(e) => onAnswerChange(e.target.value)}
            placeholder="Scrivi la risposta"
          />

          <br />
          <br />

          <button onClick={onSubmitAnswer}>
            Conferma risposta
          </button>

          <button
            onClick={onShowHint}
            style={{ marginLeft: "12px" }}
          >
            Mostra indizio
          </button>

          {feedback && (
            <p style={{ marginTop: "16px" }}>
              {feedback}
            </p>
          )}
        </div>
      )}

      <div style={{ marginTop: "24px" }}>
        <button onClick={onBackToStory}>
          Torna alla storia
        </button>
      </div>
    </div>
  );
}

export default NavigationPage;