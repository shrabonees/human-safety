import "./globals.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Human Safety App",
  description: "Emergency safety and travel protection website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* Navbar */}
        <nav className="navbar">
          <h2>Safety App</h2>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/emergency-alert" className="danger">Emergency</Link>
            <Link href="/safety-travel">Travel</Link>
            <Link href="/emergency-contact">Contact</Link>
          </div>
        </nav>

        {/* Page Content */}
        {children}

      </body>
    </html>
  );
}