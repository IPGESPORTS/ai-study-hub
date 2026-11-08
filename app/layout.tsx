import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Study Hub",
  description: "Din personliga studieplattform med AI-stöd."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}