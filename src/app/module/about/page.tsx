import React from "react";
import { HeaderAbout } from "./components/HeaderAbout";
import { GalleryAbout } from "./components/GalleryAbout";

export default function AboutPage() {
  return (
    <>
      <div className="py-0 lg:py-16">
        <GalleryAbout />
        <HeaderAbout />
      </div>
    </>
  );
}
