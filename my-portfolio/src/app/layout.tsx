import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Head from "./head";
import Footer from "./components/footer"
import CustomMDXProvider from "./components/blog/Typography";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Semicolon & Stories",
  description: "every line has a story to tell",
    icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <Head/>
        <div className="relative">
          <ParticleBackground />
          <CustomMDXProvider>
            <main className="pt-18 relative z-10">{children}</main>
          </CustomMDXProvider>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
