import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Todo List!",
  description:
    "Small Next.js + Prisma assessment for Project Odyssey applicants.",
};

/**
 * The `layout.tsx` file is a wrapper around the `page.tsx` file and allows shared elements (navbar, etc) to be defined once.
 * @param prop - props of the layout
 * @param prop.children - the page.tsx ReactNode
 * @returns the wrapped page
 */
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
