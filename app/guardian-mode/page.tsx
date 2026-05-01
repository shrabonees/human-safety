"use client";

import { useState } from "react";

export default function GuardianMode() {
  const [status, setStatus] = useState("Guardian Mode OFF");
  const [mapLink, setMapLink] = useState("");

  function startGuardianMode() {
    setStatus("Guardian Mode ON ✅ Tracking location...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const link = `https://www.google.com/maps?q=${lat},${lng}`;

        setMapLink(link);
      },
      () => {
        setStatus("❌ Location permission denied.");
      }
    );
  }

  return (
    <main style={{ padding: "40px", textAlign: "center", fontFamily: "Arial" }}>
      <h1>Travel Guardian Mode</h1>
      <p>Share your travel location with trusted contacts.</p>

      <button
        onClick={startGuardianMode}
        style={{
          padding: "18px 35px",
          border: "none",
          borderRadius: "10px",
          background: "green",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Start Guardian Mode
      </button>

      <p style={{ marginTop: "20px", fontWeight: "bold" }}>{status}</p>

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
