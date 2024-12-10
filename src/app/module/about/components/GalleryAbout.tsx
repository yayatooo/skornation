// import Image from "next/image";
import React from "react";
import { TittleHeading } from "../../common/ui/TittleHeading";
import { DescriptionHeading } from "../../common/ui/DescriptionHeading";
import { SwiperAbout } from "./SwiperAbout";
import { useTranslations } from "next-intl";

export const GalleryAbout = () => {

  const t = useTranslations('AboutPage')

  return (
    <section className="pt-28 sm:pt-52">
      <div className="w-10/12 mx-auto pt-4">
        <TittleHeading>{t('Title')}</TittleHeading>
        <DescriptionHeading>
          {t('Description')}
        </DescriptionHeading>
      </div>
      <div>
        <SwiperAbout />
      </div>
    </section>
  );
};
