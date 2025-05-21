import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const font = Open_Sans();

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
    "nanoflare",
    "astrox",
    "axforce",
    "100zz",
    "1000z",
    "88dpro",
    "77pro",
    "carlton",
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
