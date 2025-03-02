import type { Metadata } from "next";
import { Poppins, Urbanist, Inter, Manrope } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MediChain - Verify Your Medication",
  description:
    "Using AI, blockchain, and computer vision to detect fake medications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${urbanist.variable} ${inter.variable} ${manrope.variable} font-poppins antialiased flex flex-col min-h-screen bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
