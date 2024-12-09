// app/layout.tsx
import type { Metadata } from "next";
import { MavenPro } from "./fonts/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKORNATION"
};

interface LayoutProps {
  children: React.ReactNode;

}

export default function RootLayout({ children}: LayoutProps) {
  return (
    <html>
      <body className={MavenPro.className}>{children}</body>
    </html>
  );
}