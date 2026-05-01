"use client";

import { useState } from "react";

export default function GuardianMode() {
  const [isOn, setIsOn] = useState(false);

  function toggleGuardianMode() {
    setIsOn(!isOn);
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial", textAlign: "center" }}>
      <h1>Travel Guardian Mode</h1>
      <p>Share your travel status with trusted contacts.</p>

      <button
        onClick={toggleGuardianMode}
        style={{
          padding: "18px 35px",
          border: "none",
          borderRadius: "10px",
          background: isOn ? "green" : "#2563eb",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        {isOn ? "Guardian Mode ON" : "Start Guardian Mode"}
      </button>

      {isOn && (
        <p style={{ marginTop: "20px", color: "green" }}>
          ✅ Your trusted contacts can now monitor your travel status.
        </p>
      )}
    </main>
  );
}