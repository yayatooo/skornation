import React from "react";
import { TittleHeading } from "../../common/ui/TittleHeading";
import { Brands } from "@/app/utils/data";
import { CardBrands } from "./CardBrands";
import { useTranslations } from "next-intl";

export const BrandContainer = () => {
  const t = useTranslations("BrandPage");

  return (
    <>
      <div className="w-full py-4 xl:py-12" id="brand">
        <section className="w-10/12 mx-auto text-center py-2  sm:pt-4 sm:pb-8">
          <TittleHeading>{t("Title")}</TittleHeading>
        </section>

        <div className="w-10/12 xl:w-8/12 mx-auto grid grid-cols-4 gap-4 md:gap-6 xl:gap-8">
          {Brands.map((item) => (
            <CardBrands
              key={item.id}
              image={item.image}
              title={item.title}
              // logo={item.logo}
              width={item.width}
              height={item.height}
            />
          ))}
        </div>
      </div>
    </>
  );
};
