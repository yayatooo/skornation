import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { ButtonToAbout } from "../../common/ButtonToAbout";

export const GalleryStore = () => {
  const t = useTranslations("AboutUs");

  return (
    <section className="bg-redPrimary p-4 lg:p-12 my-4 xl:my-12" id="about">
      <div className="flex flex-col-reverse justify-center gap-0 md:flex-row md:items-center lg:items-start md:gap-8">
        <div className="flex justify-center md:hidden">
          <ButtonToAbout/>
        </div>
        <div className="flex w-10/12 mx-auto py-4 lg:py-0 justify-center">
          <div>
            <Image
              src="/assets/gallery-5.png"
              width={904}
              height={603}
              alt="gallery"
            />
          </div>
        </div>

        <div className="w-10/12 mx-auto md:w-7/12 md:mx-0">
          <div className="text-white font-bold text-xl lg:text-6xl">
            <h1 className="w-full text-center md:text-start">{t("Title")}</h1>
          </div>
          <div className="flex flex-col w-full py-3 xl:py-8">
            <div className="space-y-4 w-full ">
              <p className="text-white font-medium text-sm lg:text-xl xl:text-2xl">
                {t("Description")}
              </p>
              <p className="text-white font-medium text-sm lg:text-xl xl:text-2xl">
                {t("SubDescription")}
              </p>
            </div>
          </div>
          <div className="hidden md:flex">
           <ButtonToAbout />
          </div>
        </div>
      </div>
    </section>
  );
};
