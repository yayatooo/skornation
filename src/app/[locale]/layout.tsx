import type { Metadata } from "next";
import { MavenPro } from "../fonts/font";
import "../globals.css";
import { Navbar } from "../module/common/Navbar";
import Footer from "../module/common/Footer";

export const metadata: Metadata = {
  title: "SKORNATION",
  description:
    "Discover the latest deals and exclusive offers at SKORNATION. Shop now for great discounts and free shipping!",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
