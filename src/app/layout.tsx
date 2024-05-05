import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <header className="bg-red-500 p-2">Header</header>
          {children}
          <footer className="bg-red-500 p-2">Footer</footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
