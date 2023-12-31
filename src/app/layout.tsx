import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vados Create Next App",
  description: "Generated by create vados next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="coffee">
      <body className="grid h-screen w-screen place-items-center content-center">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
