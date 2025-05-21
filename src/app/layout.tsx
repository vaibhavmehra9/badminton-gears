import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Badminton Gears",
  description:
    "From Axelsen to An Se Young—find out what rackets your badminton idols trust and why.",
  keywords: [
    "badminton rackets",
    "professional badminton racket",
    "best badminton racket",
    "yonex badminton racket",
    "li-ning badminton racket",
    "victor badminton racket",
    "An se Young badminton racket",
    "Lakshya Sen badminton racket",
    "Viktor Axelsen badminton racket",
    "Lin Dan badminton racket",
    "Lee Chong Wei badminton racket",
    "Kento Momota badminton racket",
    "Astrox 100zz, Astrox 88dpro, Astrox 99pro, Nanoflare 1000z, Arcsaber 11pro",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>{children}</body>
    </html>
  );
}
