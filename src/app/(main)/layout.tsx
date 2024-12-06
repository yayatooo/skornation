import React from "react";
import { Navbar } from "../module/common/Navbar";
import Footer from "../module/common/Footer";
import { PromoDropDown } from "../module/common/PromoDropDown";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PromoDropDown />
      <Navbar />
      <main className="bg-graySecondary">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
