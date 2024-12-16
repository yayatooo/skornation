import React from "react";
import { TittleHeading } from "../../common/ui/TittleHeading";
import { Brands } from "@/app/utils/data";
import { CardBrands } from "./CardBrands";
import { useTranslations } from "next-intl";

export const BrandContainer = () => {

  const t = useTranslations('BrandPage')

  return (
    <>
      <div className="py-4 xl:py-12" id="brand">
      <section className="w-10/12 mx-auto text-center py-2 xl:pt-4 xl:pb-8">
        <TittleHeading>{t('Title')}</TittleHeading>
      </section>
        <div className="w-10/12 mx-auto grid grid-cols-2 grid-rows-2 gap-1 sm:flex xl:w-8/12">
          {Brands.map((item) => (
            <CardBrands
              key={item.id}
              image={item.image}
              title={item.title}
              logo={item.logo}
              width={item.width}
              height={item.height}
            />
          ))}
        </div>
      </div>
    </>
  );
};
