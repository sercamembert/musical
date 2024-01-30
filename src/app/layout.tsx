import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Złote Głosy Musicalu",
  description: "Koncerty typu musical na najwyższym poziomie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
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
    </html>
  );
}
