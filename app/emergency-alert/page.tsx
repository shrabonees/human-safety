"use client";

export default function EmergencyAlert() {
  function sendAlert() {
    alert("🚨 Emergency Alert Sent! Your trusted contacts will be notified.");
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
    </main>
  );
}