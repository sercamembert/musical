import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Złote Głosy Musicalu - Koncerty Musicalowe Najwyższej Klasy w Polsce",
  description:
    "Ciesz się najwyższej jakości występami muzycznymi w Polsce z Złotymi Głosami Musicalu. Sprawdź nasze nadchodzące wydarzenia w Białymstoku, Łomży i Katowicach.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <meta
          property="og:image"
          content="https://zloteglosy.pl/images/logo.svg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="og:title"
          content="Złote Głosy Musicalu - Koncerty Musicalowe Najwyższej Klasy w Polsce"
        />
        <meta property="og:url" content="https://zloteglosy.pl/" />
      </head>
      <body
        className={
          inter.className +
          " bg-black w-screen overflow-x-hidden scroll-smooth font-primary text-white"
        }
      >
        <Navbar />
        {children}
        <Footer />
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-433S08GGWQ" />
      <Script id="google-analytics">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-433S08GGWQ');
        `}
      </Script>
      <Script
        src="https://assets.usestyle.ai/seonajsplugin"
        defer
        id="seona-js-plugin"
      />
    </html>
  );
}
