import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import DefaultHeaderNavigation from "./components/default";

import { SocialMediaIconsFooterSection } from "./components/social-media";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hyphentrade.org",
  description: "Developed by Thirdbracket | Hyphentrade.org",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Implements Dark Theme functionality */}
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <DefaultHeaderNavigation />
        {children}

        <SocialMediaIconsFooterSection />
      </body>
    </html>
  );
}
