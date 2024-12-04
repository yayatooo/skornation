import type { Metadata } from "next";
import { MavenPro } from "./fonts/font";
import "./globals.css";



export const metadata: Metadata = {
  title: "SKORNATION"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={MavenPro.className}
      >
        {children}
      </body>
    </html>
  );
}
