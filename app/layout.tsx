import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import { ReduxProvider } from "./ReduxProvider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "电影网站",
  description: "观看最新最全的高清电影资源",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "电影网站",
    description: "观看最新最全的高清电影资源",
    url: "http://localhost:3000",
    siteName: "一个电影网站",
    type: "website",
    images: [
      {
        url: "/bg.jpg",
        alt: "电影网站封面",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
