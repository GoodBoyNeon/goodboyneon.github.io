import { firaSans } from "./fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sushant Ray",
  description: "Welcome to Sushant's Portfolio!",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${firaSans.className} bg-background`}>{children}</body>
    </html>
  );
}
