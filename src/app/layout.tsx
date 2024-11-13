import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Nav/Navigation";
import NavMobile from "@/components/Nav/NavMobile";
import { Kanit } from 'next/font/google'
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Zeus Bet",
  description: "Zeus Bet - Casino",
};

const roboto = Kanit({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen w-full ${roboto.className} bg-background`}
      >
        <Navigation></Navigation>
        {children}
        <Footer></Footer>
        <NavMobile></NavMobile>
      </body>
    </html>
  );
}
