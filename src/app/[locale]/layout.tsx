import Footer from "../module/common/Footer";
import { Navbar } from "../module/common/Navbar";
import { PromoDropDown } from "../module/common/PromoDropDown";

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PromoDropDown />
      <Navbar />
      <main className="bg-graySecondary">{children}</main>
      <Footer />
    </>
  );
}
