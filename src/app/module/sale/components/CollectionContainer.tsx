import React from "react";
import { TittleHeading } from "../../common/ui/TittleHeading";
import { DescriptionHeading } from "../../common/ui/DescriptionHeading";
import { CardCollection } from "./CategoryCard";
import { useTranslations } from "next-intl";

export const CollectionContainer = () => {
  const t = useTranslations("CollectionPage");

  return (
    <>
      <section className="w-10/12 mx-auto"></section>
      <div className="py-6 flex justify-end w-full">
        <div className="w-10/12 mx-auto text-center pb-6">
          <div className="py-8">
            <TittleHeading>{t("Title2")}</TittleHeading>
            <DescriptionHeading>
             {t('Description')}
            </DescriptionHeading>
          </div>
          <CardCollection />
        </div>
      </div>
        <div className="bg-redPrimary text-center p-4 mb-8 md:p-8 text-white w-10/12 mx-auto md:text-2xl">
          Sport Casual, Fitness, Training, Running, Football, Basketball,
          Tennis, Golf, Skateboarding, and Swim.
        </div>
    </>
  );
};
