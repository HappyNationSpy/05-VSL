import type { Metadata } from "next";
import { Darker_Grotesque, Rubik, Saira } from "next/font/google";

import "./globals.css";
import Script from "next/script";

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
      <head>
        <Script
          id="utmify-pixel-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "66d6815a51d3f0f79140d660";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />

        {/* TAG 2: Script externo para UTMs */}
        <Script
          id="utmify-utms-script"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
        />
      </head>
      <body
        className={`${rubik.variable} ${saira.variable} ${darkerGrotesque.variable}`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
