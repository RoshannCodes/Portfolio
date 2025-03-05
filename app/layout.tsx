import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Allerta_Stencil } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

const allertaStencil = Allerta_Stencil({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-allerta-stencil',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RoshannCodes",
  description: "Roshan Koirala's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${poppins.className} ${allertaStencil.variable} ${geistMono.variable} antialiased max-w-[1440px] mx-auto`}
      >
        <Navbar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
