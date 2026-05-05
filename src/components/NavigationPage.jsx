import { distanceInMeters } from "../utils/geo";

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
  userPosition,
  gpsLoading,
  gpsError,
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

  const distanceToTarget =
    userPosition && selectedOption
      ? Math.round(
          distanceInMeters(
            userPosition.lat,
            userPosition.lng,
            selectedOption.targetLat,
            selectedOption.targetLng
          )
        )
      : null;

  const gpsAvailable = !gpsLoading && !gpsError && userPosition;

  return (
    <div style={{ padding: "40px" }}>
      <h2>Navigazione</h2>

      <p>{selectedOption.navigationText}</p>

      {!riddleUnlocked && (
        <div>
          {gpsLoading && <p>Sto cercando la tua posizione...</p>}

          {gpsAvailable && (
            <p>
              {distanceToTarget !== null
                ? `Sei a ${distanceToTarget} metri dal punto`
                : "Calcolo distanza..."}
            </p>
          )}

          {(gpsError || (!gpsLoading && !userPosition)) && (
            <div>
              <p>GPS non disponibile.</p>
              <button onClick={onUnlockRiddle}>Sono arrivato</button>
            </div>
          )}
        </div>
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

          <button onClick={onSubmitAnswer}>Conferma risposta</button>

          <button onClick={onShowHint} style={{ marginLeft: "12px" }}>
            Mostra indizio
          </button>

          {feedback && (
            <p style={{ marginTop: "16px" }}>{feedback}</p>
          )}
        </div>
      )}

      <div style={{ marginTop: "24px" }}>
        <button onClick={onBackToStory}>Torna alla storia</button>
      </div>
    </div>
  );
}

export default NavigationPage;
