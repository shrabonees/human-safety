import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial" }}>

        {/* Navbar */}
        <nav style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px 30px",
          background: "#111827",
          color: "white"
        }}>
          <h2>Safety App</h2>

          <div style={{ display: "flex", gap: "15px" }}>
            <Link href="/" style={{ color: "white" }}>Home</Link>
            <Link href="/emergency-alert" style={{ color: "red" }}>Emergency</Link>
            <Link href="/safety-travel" style={{ color: "white" }}>Travel</Link>
            <Link href="/emergency-contact" style={{ color: "white" }}>Contact</Link>
          </div>
        </nav>

        {/* Page Content */}
        {children}

      </body>
    </html>
  );
}