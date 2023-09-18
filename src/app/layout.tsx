import "./globals.css";
import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { Overlays } from "../components";

const font = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Neon The Developer",
  description: "Welcome to Neon's Portfolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-background`}>
        <Overlays />
        {children}
      </body>
    </html>
  );
}
