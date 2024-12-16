import React from "react";
import { TittleHeading } from "../../common/ui/TittleHeading";
import { DescriptionHeading } from "../../common/ui/DescriptionHeading";
import { CardCollection } from "./CategoryCard";
import { useTranslations } from "next-intl";
import { CollectionCard } from "./CollectionCard";

export const CollectionContainer = () => {
  const t = useTranslations("CollectionPage");

  return (
    <>
      <section className="w-10/12 mx-auto">
        <div className="text-center lg:text-start py-2">
          <TittleHeading>{t("Title")}</TittleHeading>
          <DescriptionHeading>{t("Description")}</DescriptionHeading>
        </div>
        <div className="flex flex-col xl:flex-row lg:items-center gap-2 mb-12">
          <CollectionCard
            title="Apparel"
            desc="T-Shirt, Polo Shirt, Tank Top, Crop Top, Sport Bra, Pants, Shorts, Skirt, Jacket, Hoodie, Sweatshirt, Swimsuit, Jammer"
            image="/assets/model-2.png"
          />
          <CollectionCard
            title="footwear"
            desc="Clog, Slide, Sandal, Sneaker"
            image="/assets/model-2.png"
          />
          <CollectionCard
            title="Accesories"
            desc="Bags, Hats, Caps, Sock, Goggles, and more."
            image="/assets/model-2.png"
          />
        </div>
      </section>
      <div className="py-6 flex justify-end w-full">
        <div className="w-full bg-darkThird pb-6">
          <h1 className="py-4 text-center text-xl lg:text-4xl font-bold text-white">
            {t("Title2")}
          </h1>
          <CardCollection />
        </div>
      </div>
    </>
  );
};
