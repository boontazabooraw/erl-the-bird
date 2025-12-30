import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import BgImgWrapper from "./components/BgImgWrapper";

const luckiestGuy = localFont({
  src: "/fonts/LuckiestGuy/LuckiestGuy-Regular.ttf",
  variable: "--font-lucky",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erl, The Bird - Official Website",
  description:
    "Official site of Erl, the Bird. Watch our latest music video and stream our songs on Spotify, Deezer and, Youtube Music. Bird Mode LETSGOOOO!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${luckiestGuy.variable} antialiased`}
      >
        {children}
        <div className="bg-wrapper -z-1 -top-40 left-0 fixed h-dvh w-dvw">
          <BgImgWrapper />
        </div>
      </body>
    </html>
  );
}
