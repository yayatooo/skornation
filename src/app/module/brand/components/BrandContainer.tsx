import React from "react";
import { TittleHeading } from "../../common/ui/TittleHeading";
import { Brands } from "@/app/utils/data";
import { CardBrands } from "./CardBrands";
import { useTranslations } from "next-intl";

export const BrandContainer = () => {

  const t = useTranslations('BrandPage')

  return (
    <>
      <div className="py-8">
      <section className="w-10/12 mx-auto pt-52">
        <TittleHeading>{t('Title')}</TittleHeading>
      </section>
        <div className="flex">
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
