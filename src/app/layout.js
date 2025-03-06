import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vishal Prajapati",
  description: "Software solutions combining creativity, precision, and technical expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
