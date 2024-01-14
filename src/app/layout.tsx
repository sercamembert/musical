import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Złote Głosy Musicalu",
  description: "Wydarzenia artystyczne na wysokim poziomie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <Head>
        <title>Złote Głosy Musicalu</title>
        <meta
          name="description"
          content="Wydarzenia artystyczne na wysokim poziomie"
          key="desc"
        />
      </Head>
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
    </html>
  );
}
