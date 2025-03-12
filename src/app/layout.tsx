import type { Metadata } from "next";
import { Mulish, Sofia_Sans, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/context/ThemeContext";
import { Footer } from "@/components/Footer";

const mulish = Mulish({
  weight: ["200", "300", "400", "600", "700"],
  variable: "--font-mulish",
  subsets: ["latin"],
});

const sofiaSans = Sofia_Sans({
  weight: ["200", "300", "400", "600", "700"],
  variable: "--font-sofia-sans",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["200", "300", "400", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kal Business Center",
  description: "A company that specializes in a myriad of sectors from general trade, accounting and financial consultancy to film production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${sofiaSans.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
