import { useState, useEffect } from "react";
import "../style/GpsPermissionPage.css";

function GpsPermissionPage({ onGrant, onSkip }) {
  const [permissionState, setPermissionState] = useState("unknown");

  useEffect(() => {
    if (!navigator.permissions) {
      setPermissionState("unknown");
      return;
    }
    navigator.permissions
      .query({ name: "geolocation" })
      .then((result) => {
        setPermissionState(result.state);
        result.onchange = () => setPermissionState(result.state);
      })
      .catch(() => setPermissionState("unknown"));
  }, []);

  return (
    <div className="gps-container">
      <div className="gps-icon">📍</div>

      <h1>Posizione necessaria</h1>

      <p className="gps-description">
        L'app usa il GPS per capire in quale borgo ti trovi e per guidarti
        verso i punti di interesse durante il gioco.
      </p>

      {permissionState === "granted" && (
        <>
          <p className="gps-status gps-status--ok">
            GPS già attivo su questo dispositivo.
          </p>
          <button className="gps-button" onClick={onGrant}>
            Continua
          </button>
        </>
      )}

      {permissionState === "denied" && (
        <>
          <p className="gps-status gps-status--error">
            Hai bloccato l'accesso alla posizione. Per abilitarlo, clicca
            sul lucchetto nella barra del browser → Impostazioni sito →
            Posizione → Consenti.
          </p>
          <button className="gps-button" onClick={onGrant}>
            Ho abilitato il GPS, continua
          </button>
          <button className="gps-skip" onClick={onSkip}>
            Continua senza GPS
          </button>
        </>
      )}

      {(permissionState === "prompt" || permissionState === "unknown") && (
        <>
          <button className="gps-button" onClick={onGrant}>
            Concedi accesso GPS
          </button>
          <button className="gps-skip" onClick={onSkip}>
            Continua senza GPS
          </button>
        </>
      )}
    </div>
  );
}

export default GpsPermissionPage;
