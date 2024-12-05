// import Image from "next/image";
import React from "react";
import { TittleHeading } from "../../common/ui/TittleHeading";
import { DescriptionHeading } from "../../common/ui/DescriptionHeading";
import { SwiperAbout } from "./SwiperAbout";

export const GalleryAbout = () => {
  return (
    <section className="pt-28 mini:pt-36 Ipad:pt-40 Ipad2:pt-48 sm:pt-80">
      <div className="w-10/12 mx-auto pt-4">
        <TittleHeading>Explore Our Store</TittleHeading>
        <DescriptionHeading>
          To become the go-to destination for sports products, synonymous with
          quality, innovation, and customer satisfaction.
        </DescriptionHeading>
      </div>
      <div>
        <SwiperAbout />
      </div>
    </section>
  );
};
