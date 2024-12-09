import React from "react";
import { TittleHeading } from "../../common/ui/TittleHeading";
import { DescriptionHeading } from "../../common/ui/DescriptionHeading";
import { Button } from "@/components/ui/button";
import { CardCollection } from "./CardCollection";
import { useTranslations } from "next-intl";

export const CollectionContainer = () => {
  
  const t = useTranslations('CollectionPage')

  return (
    <>
      <section className="w-10/12 mx-auto">
        <div className="text-start">
          <TittleHeading>{t('Title')}</TittleHeading>
          <DescriptionHeading>
            {t('Description')}
          </DescriptionHeading>
        </div>
        <div className="flex gap-4 pt-6">
          <Button>{t('genderM')}</Button>
          <Button variant="outline">{t('genderF')}</Button>
        </div>
      </section>
      <div className="py-6 flex justify-end w-full">
        <div className="w-full">
          <CardCollection />
        </div>
      </div>
    </>
  );
};
