// import Image from "next/image";
import React from "react";
import { TittleHeading } from "../../common/ui/TittleHeading";
import { DescriptionHeading } from "../../common/ui/DescriptionHeading";
import { SwiperAbout } from "./SwiperAbout";
import { useTranslations } from "next-intl";

export const GalleryAbout = () => {

  const t = useTranslations('AboutStore')

  return (
    <section>
      <div className="w-10/12 text-center flex flex-col items-center justify-end mx-auto py-4 xl:py-12">
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
