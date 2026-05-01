import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial",
      background: "#f4f7fb"
    }}>
      <section style={{
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "42px", color: "#1f2937" }}>
          Human Safety Website
        </h1>

        <p style={{ fontSize: "18px", color: "#555" }}>
          Emergency help, safe travel, and trusted contact protection in one place.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
          marginTop: "40px"
        }}>
          <FeatureCard title="Emergency Alert" text="Send instant danger alert." link="/emergency-alert" />
          <FeatureCard title="Nearest People" text="Notify nearby trusted people." link="/nearest-people" />
          <FeatureCard title="Safety Travel" text="Check safe travel route." link="/safety-travel" />
          <FeatureCard title="Guardian Mode" text="Share travel status live." link="/guardian-mode" />
          <FeatureCard title="Emergency Contact" text="Save trusted contacts." link="/emergency-contact" />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, text, link }: { title: string; text: string; link: string }) {
  return (
    <Link href={link} style={{
      textDecoration: "none",
      background: "white",
      padding: "25px",
      borderRadius: "15px",
      boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
      color: "#111827"
    }}>
      <h2>{title}</h2>
      <p style={{ color: "#666" }}>{text}</p>
      <button style={{
        marginTop: "10px",
        padding: "10px 18px",
        border: "none",
        borderRadius: "8px",
        background: "#2563eb",
        color: "white",
        cursor: "pointer"
      }}>
        Open
      </button>
    </Link>
  );
}