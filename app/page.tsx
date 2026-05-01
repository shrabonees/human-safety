import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "50px 20px",
        background: "#f4f7fb",
        fontFamily: "Arial",
      }}
    >
      <section style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "48px", color: "#111827" }}>
          Human Safety Website
        </h1>

        <p style={{ fontSize: "18px", color: "#555", marginTop: "10px" }}>
          Emergency help, safe travel, and trusted contact protection in one place.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <FeatureCard
          title="🚨 Emergency Alert"
          text="Send instant danger alert."
          link="/emergency-alert"
        />

        <FeatureCard
          title="📍 Nearest People"
          text="Notify nearby trusted people."
          link="/nearest-people"
        />

        <FeatureCard
          title="🛣️ Safety Travel"
          text="Check safe travel route."
          link="/safety-travel"
        />

        <FeatureCard
          title="🛰️ Guardian Mode"
          text="Share travel status live."
          link="/guardian-mode"
        />

        <FeatureCard
          title="📞 Emergency Contact"
          text="Save trusted contacts."
          link="/emergency-contact"
        />
      </section>
    </main>
  );
}

function FeatureCard({
  title,
  text,
  link,
}: {
  title: string;
  text: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="feature-card"
      style={{
        textDecoration: "none",
        background: "white",
        padding: "35px",
        borderRadius: "22px",
        boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
        color: "#111827",
        transition: "0.3s",
        border: "1px solid #e5e7eb",
      }}
    >
      <h2 style={{ fontSize: "22px" }}>{title}</h2>

      <p style={{ color: "#666", marginTop: "8px" }}>{text}</p>

      <button
        style={{
          marginTop: "15px",
          padding: "12px 24px",
          border: "none",
          borderRadius: "999px",
          background: "linear-gradient(135deg, #2563eb, #7c3aed)",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Open
      </button>
    </Link>
  );
}