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
      <div className="flex justify-end w-full">
        <div className="w-full mx-auto text-center pb-6">
          <div className="py-4 xl:py-12 w-10/12 xl:w-8/12 mx-auto">
            <TittleHeading>{t("Title2")}</TittleHeading>
            <DescriptionHeading>
             {t('Description')}
            </DescriptionHeading>
          </div>
          <CardCollection />
        </div>
      </div>
    </>
  );
};
