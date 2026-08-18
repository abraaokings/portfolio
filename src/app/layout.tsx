import type { Metadata, Viewport } from "next";
import { Golos_Text } from "next/font/google";
import "./globals.css";

const golos = Golos_Text({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-golos",
});

export const metadata: Metadata = {
  title: "Abraao Silva dos Reis | Desenvolvedor Front-end",
  description:
    "Portfolio de Abraao Silva dos Reis, desenvolvedor front-end focado em React, Next.js e TypeScript.",
  authors: [{ name: "Abraao Silva dos Reis" }],
  creator: "Abraao Silva dos Reis",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Abraao Silva dos Reis",
    description: "Desenvolvedor Front-end",
    locale: "pt_BR",
    type: "profile",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={golos.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
