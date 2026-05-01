"use client";

import { useState } from "react";

export default function NearestPeople() {
  const [notified, setNotified] = useState(false);

  function notifyPeople() {
    setNotified(true);
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial", textAlign: "center" }}>
      <h1>Nearest People Notification</h1>
      <p>Notify nearby trusted people in case of danger.</p>

      <button
        onClick={notifyPeople}
        style={{
          padding: "18px 35px",
          border: "none",
          borderRadius: "10px",
          background: "#f59e0b",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Notify Nearby People
      </button>

      {notified && (
        <p style={{ marginTop: "20px", color: "green" }}>
          📍 Notification sent to nearby trusted people!
        </p>
      )}
    </main>
  );
}