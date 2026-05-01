"use client";

import { useState } from "react";

export default function EmergencyAlert() {
  const [mapLink, setMapLink] = useState("");
  const [message, setMessage] = useState("");

  function sendAlert() {
    const savedContacts = localStorage.getItem("emergencyContacts");

    if (!savedContacts) {
      setMessage("❌ No contacts found");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const contacts = JSON.parse(savedContacts);
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const link = `https://www.google.com/maps?q=${lat},${lng}`;

        setMapLink(link);
        setMessage(`🚨 Alert sent to: ${contacts.join(", ")}`);
      },
      () => {
        setMessage("❌ Location permission denied.");
      }
    );
  }

  return (
    <main style={{ padding: "40px", textAlign: "center", fontFamily: "Arial" }}>
      <h1 style={{ color: "red", fontSize: "36px" }}>🚨 Emergency Alert</h1>

      <p>If you are in danger, press the button immediately.</p>

      <button
        onClick={sendAlert}
        style={{
          marginTop: "30px",
          padding: "20px 40px",
          fontSize: "20px",
          border: "none",
          borderRadius: "12px",
          background: "red",
          color: "white",
          cursor: "pointer",
        }}
      >
        SEND ALERT
      </button>

      {message && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          {message}
        </p>
      )}

      {mapLink && (
        <a
          href={mapLink}
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 25px",
            background: "#2563eb",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          📍 Open Location in Google Maps
        </a>
      )}
    </main>
  );
}