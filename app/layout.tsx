import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { montserrat } from "./(config)/fonts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "next app",
  description: "Generated by MW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.className}`}>
        {/* <ApolloWrapper>{children}</ApolloWrapper> */}
        {children}
        <Analytics /> <SpeedInsights />
      </body>
    </html>
  );
}
