import React from "react";
import HomePage from "../module/home/page";
import AboutPage from "../module/about/page";
import BrandPage from "../module/brand/page";
import SalePage from "../module/sale/page";
import StorePage from "../module/store/page";

export default function LocalePage() {
  return (
    <>
      <HomePage />
      <BrandPage />
      <AboutPage />
      <SalePage />
      <StorePage />
    </>
  );
}
