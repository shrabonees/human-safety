import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Human Safety Website</h1>
        <p>Emergency help, safe travel, and trusted contact protection in one place.</p>

        <div className="hero-buttons">
          <Link href="/emergency-alert" className="hero-btn emergency-btn">
            Get Help Now
          </Link>

          <a href="#features" className="hero-btn explore-btn">
            Explore Features
          </a>
        </div>
      </section>

      <section id="features" className="feature-grid">
        <FeatureCard title="🚨 Emergency Alert" text="Send instant danger alert with location." link="/emergency-alert" />
        <FeatureCard title="📍 Nearest People" text="Notify nearby trusted people quickly." link="/nearest-people" />
        <FeatureCard title="🛣️ Safety Travel" text="Check your route before travelling." link="/safety-travel" />
        <FeatureCard title="🛰️ Guardian Mode" text="Share your live travel status." link="/guardian-mode" />
        <FeatureCard title="📞 Emergency Contact" text="Save and manage trusted contacts." link="/emergency-contact" />
      </section>

      <footer className="footer">
        © 2026 Human Safety. Designed for emergency support and safer travel.
      </footer>
    </main>
  );
}

function FeatureCard({ title, text, link }: { title: string; text: string; link: string }) {
  return (
    <Link href={link} className="feature-card">
      <h2>{title}</h2>
      <p>{text}</p>
      <button className="main-btn">Open</button>
    </Link>
  );
}