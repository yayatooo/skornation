import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export const GalleryStore = () => {
  const t = useTranslations("SalePage");

  return (
    <section className="bg-redPrimary py-4 my-4 xl:my-12" id="sale">
      <div className="w-10/12 mx-auto flex justify-between lg:items-center pb-6">
        <div className="text-white font-extrabold text-6xl lg:text-9xl">
          <h1 className="w-6/12">{t("Title")}</h1>
        </div>
        <div className="pt-4">
          <Image
            src="/assets/bold-logo-white.svg"
            width={200}
            height={150}
            alt="bold"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:w-10/12 lg:mx-auto">
        <div className="space-y-4 w-full lg:w-7/12">
          <p className="text-white font-medium text-sm lg:text-xl w-10/12 mx-auto lg:mx-0">
            {t("Description")}
          </p>
          <p className="text-white font-medium text-sm lg:text-xl w-10/12 mx-auto lg:mx-0">
            {t("SubDescription")}
          </p>
        </div>
        <div className="flex w-10/12 mx-auto py-4 lg:py-0 justify-center">
          <div>
            <Image
              src="/assets/gallery-3.png"
              width={760}
              height={760}
              alt="gallery"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
