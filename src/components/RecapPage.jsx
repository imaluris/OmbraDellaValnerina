function RecapPage({
  name,
  completedSteps,
  onBackToVictory,
}) {
  return (
    <div style={{ padding: "40px", height: "100vh", overflowY: "auto" }}>
      <h1>La tua storia</h1>
      <p>
        <strong>Giocatore:</strong> {name}
      </p>

      {completedSteps.length === 0 ? (
        <p>Nessun passo registrato.</p>
      ) : (
        completedSteps.map((step, index) => (
          <div
            key={`${step.chapterId}-${step.optionId}-${index}`}
            style={{
              marginBottom: "24px",
              padding: "16px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <p><strong>Paese:</strong> {step.countryId}</p>
            <p><strong>Capitolo:</strong> {step.chapterId}</p>
            <p>{step.chapterText}</p>
            <p><strong>Scelta:</strong> {step.buttonText}</p>
            <p><strong>Percorso:</strong> {step.navigationText}</p>
            <p>{step.riddleText}</p>
            <p><strong>Enigma:</strong> {step.riddleQuestion}</p>
            <p><strong>Risposta corretta:</strong> {step.riddleAnswer}</p>
          </div>
        ))
      )}

      <button onClick={onBackToVictory}>
        Torna alla schermata finale
      </button>
    </div>
  );
}

export default RecapPage;