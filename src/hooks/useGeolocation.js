import { useState, useEffect } from "react";

export function useGeolocation(active) {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!active) return;

    setLoading(true);

    if (!navigator.geolocation) {
      setError("GPS non supportato dal tuo dispositivo");
      setLoading(false);
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLoading(false);
        setError(null);
      },
      () => {
        setError("Impossibile ottenere la posizione GPS");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [active]);

  return { position, error, loading };
}
