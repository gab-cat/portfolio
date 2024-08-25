import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import { Navbar } from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Projects from "@/components/main/Projects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Angelo Catimbang | Portfolio",
  description: "This is my space-themed portfolio showcasing my proficiency in software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://www.svgrepo.com/show/530412/user.svg" />
        <meta name="robots" content="all" />
      </head>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
