import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Sans } from 'next/font/google'
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs'

const IBMPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: "--font-ibm-plex",
  weight: ['400', '500', '600', '700'],
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AesthetIQ",
  description: "AI pow image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn("font-ibm-plex antialiased", IBMPlex.variable)}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
