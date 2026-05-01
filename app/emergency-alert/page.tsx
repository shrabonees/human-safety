"use client";

import { useEffect, useRef, useState } from "react";

export default function EmergencyAlert() {
  const [isTracking, setIsTracking] = useState(false);
  const [status, setStatus] = useState("");
  const [mapLink, setMapLink] = useState("");
  const [countdown, setCountdown] = useState(5);

  const watchIdRef = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  function startAlert() {
    const saved = localStorage.getItem("emergencyContacts");
    if (!saved) {
      setStatus("❌ No contacts found. Add contacts first.");
      return;
    }

    setStatus("⏳ Preparing to send alert...");
    setIsTracking(true);
    setCountdown(5);

    // countdown before sending
    timerRef.current = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(timerRef.current!);
          sendLiveLocation();
          return 0;
        }
        return c - 1;
      });
    }, 1000);
  }

  function sendLiveLocation() {
    const contacts = JSON.parse(
      localStorage.getItem("emergencyContacts") || "[]"
    );

    if (!navigator.geolocation) {
      setStatus("❌ Geolocation not supported.");
      return;
    }

    // watchPosition = continuous tracking
    watchIdRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const link = `https://www.google.com/maps?q=${lat},${lng}`;

        setMapLink(link);
        setStatus(
          `🚨 Alert sent to: ${contacts.join(
            ", "
          )} | 🔴 Live tracking ON`
        );
      },
      () => {
        setStatus("❌ Location permission denied.");
      },
      { enableHighAccuracy: true }
    );
  }

  function stopAlert() {
    setIsTracking(false);
    setStatus("🟢 Alert stopped");

    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }

  useEffect(() => {
    return () => {
      // cleanup on unmount
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ color: "red", fontSize: "36px" }}>🚨 Emergency Alert</h1>

      <p>If you are in danger, press the button immediately.</p>

      {!isTracking ? (
        <button
          onClick={startAlert}
          className="main-btn"
          style={{ background: "red", marginTop: "20px" }}
        >
          SEND ALERT
        </button>
      ) : (
        <button
          onClick={stopAlert}
          className="main-btn"
          style={{ background: "#16a34a", marginTop: "20px" }}
        >
          STOP ALERT
        </button>
      )}

      {countdown > 0 && isTracking && (
        <p style={{ marginTop: "15px" }}>
          Sending in: <b>{countdown}s</b>
        </p>
      )}

      {status && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>{status}</p>
      )}

      {mapLink && (
        <a
          href={mapLink}
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "12px 25px",
            background: "#2563eb",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          📍 View Live Location
        </a>
      )}
    </main>
  );
}