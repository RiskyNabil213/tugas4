import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar"; // langsung dari ./sidebar

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional Platform",
  description: "Platform profesional untuk kebutuhan bisnis Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}>
        <Sidebar title="Professional Platform">
          {children}
        </Sidebar>
      </body>
    </html>
  );
}