import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
    </html>
  );
}
