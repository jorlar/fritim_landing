import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fritim - Frivilligadministrasjon for festivaler og arrangementer",
  description: "Administrer frivillige enkelt og effektivt. Fra registrering til koordinering – alt på ett sted. Perfekt for festivaler, konserter og arrangementer.",
  keywords: ["frivillig", "festival", "arrangement", "koordinering", "administrasjon", "vaktliste"],
  openGraph: {
    title: "Fritim - Frivilligadministrasjon",
    description: "Det komplette verktøyet for å håndtere frivillige på festivaler og arrangementer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
