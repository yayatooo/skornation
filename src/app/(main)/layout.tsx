import React from "react";
import { Navbar } from "../module/common/Navbar";
import Footer from "../module/common/Footer";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="bg-graySecondary">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
