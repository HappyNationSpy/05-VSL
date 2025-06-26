import type { Metadata } from "next";
import { Darker_Grotesque, Rubik, Saira } from "next/font/google";

import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: "variable",
});

// Configurando a fonte Rubik
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: "variable",
});

// Configurando a fonte Darker Grotesque
const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Happy Nation Spy",
  description: "Happy Nation Spy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <head></head>
      <body
        className={`${rubik.variable} ${saira.variable} ${darkerGrotesque.variable}`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
