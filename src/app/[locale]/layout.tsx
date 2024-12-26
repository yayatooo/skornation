import type { Metadata } from "next";
import { MavenPro } from "../fonts/font";
import "../globals.css";
import { PromoDropDown } from "../module/common/PromoDropDown";
import { Navbar } from "../module/common/Navbar";
import Footer from "../module/common/Footer";

export const metadata: Metadata = {
  title: "SKORNATION",
};


export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={MavenPro.className}>
        <PromoDropDown />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
