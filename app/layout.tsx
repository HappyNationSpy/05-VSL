import type { Metadata } from "next";
import { Darker_Grotesque, Rubik, Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

// Configurando a fonte Rubik
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Configurando a fonte Darker Grotesque
const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="pt-br">
      <body
        className={`${saira.variable} ${rubik.variable} ${darkerGrotesque.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
