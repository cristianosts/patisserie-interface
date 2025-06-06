import type { Metadata } from "next";
import { Tenor_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header"

const tenor = Tenor_Sans({
  subsets: ["latin"],
weight: ["400"]
});

export const metadata: Metadata = {
  title: "Delícias da Carol",
  description: "O cantinho da Patisserie da Carol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${tenor.className}`}>

          <Header/>

        {children}
      </body>
    </html>
  );
}
