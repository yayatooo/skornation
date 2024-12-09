// app/layout.tsx
import type { Metadata } from "next";
import { MavenPro } from "./fonts/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKORNATION"
};

export default function RootLayout({
    children,
    params: { locale }
  }: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
  }>) {
  return (
    <html lang={locale}>
      <body className={MavenPro.className}>
        {children}
      </body>
    </html>
  );
}