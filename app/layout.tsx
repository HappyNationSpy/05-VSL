import type { Metadata } from "next";
import { Darker_Grotesque, Rubik, Saira } from "next/font/google";
import Head from "next/head";
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
      <Head>
        <link
          rel="prerender"
          href="https://scripts.converteai.net/50168b72-b90c-4307-88b1-05e70a16f603/players/6852f9583be2bca68d08f0ac/embed.html"
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/50168b72-b90c-4307-88b1-05e70a16f603/players/6852f9583be2bca68d08f0ac/player.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://images.converteai.net/50168b72-b90c-4307-88b1-05e70a16f603/players/6852f9583be2bca68d08f0ac/thumbnail.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="https://cdn.converteai.net/50168b72-b90c-4307-88b1-05e70a16f603/6852f8dc3be2bca68d08f028/main.m3u8"
          as="fetch"
        />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
      </Head>
      <body
        className={`${rubik.variable} ${saira.variable} ${darkerGrotesque.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
