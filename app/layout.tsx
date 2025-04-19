// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./Navbar";

export const metadata = {
  title: "Triple A | Ambassadors Aligned",
  description: "Official site of Ambassadors Aligned (AAA)",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* 🛡️ CSP via <meta> (backup, main CSP goes in next.config.js) */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="
            default-src 'self';
            script-src 'self' 'unsafe-inline';
            style-src 'self' 'unsafe-inline';
            img-src 'self' data:;
            font-src 'self';
            connect-src 'self';
            frame-ancestors 'none';
            base-uri 'none';
          "
        />

        {/* 🧱 Basic hardening */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta name="referrer" content="no-referrer-when-downgrade" />

        {/* 🧬 Permissions Policy */}
        <meta
          httpEquiv="Permissions-Policy"
          content="geolocation=(), camera=(), microphone=(), payment=(), usb=()"
        />
      </head>

      <body className="bg-background text-text font-sans antialiased overflow-x-hidden scrollbar-gutter-stable">
        <Navbar />
        <main className="pt-20 relative">{children}</main>
      </body>
    </html>
  );
}
