import React from "react";
import { DetailAbout } from "./components/DetailAbout";
import { BrandDetailAbout } from "./components/BrandsDetailAbout";
import { SwiperDetailAbout } from "./components/SwiperDetailAbout";

export default function About() {

  return (
    <>
      <DetailAbout />
      <BrandDetailAbout />
      <SwiperDetailAbout />
    </>
  );
}
