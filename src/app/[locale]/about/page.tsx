import React from "react";
import { DetailAbout } from "./components/DetailAbout";
import { BrandDetailAbout } from "./components/BrandsDetailAbout";
import { SwiperDetailAbout } from "./components/SwiperDetailAbout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - SKORNATION",
  description:
    "Learn about SKORNATION, our mission, and the values that drive us. Join us and discover exclusive benefits today!",
};

export default function About() {

  return (
    <>
      <DetailAbout />
      <BrandDetailAbout />
      <SwiperDetailAbout />
    </>
  );
}
