import React from "react";
import { TittleHeading } from "../../common/ui/TittleHeading";
import { DescriptionHeading } from "../../common/ui/DescriptionHeading";
import { CardCollection } from "./CategoryCard";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { badges } from "@/app/utils/data";

export const CollectionContainer = () => {
  const t = useTranslations("CollectionPage");


  return (
    <section className="w-full mx-auto">
      <div className="flex justify-end w-full">
        <div className="w-full mx-auto text-center pb-6">
          <div className="py-4 xl:py-12 w-10/12 xl:w-8/12 mx-auto">
            <TittleHeading>{t("Title2")}</TittleHeading>
            <DescriptionHeading>{t("Description")}</DescriptionHeading>
            <div className="flex flex-wrap gap-1 lg:gap-3 justify-center w-10/12 mx-auto py-2 lg:py-4">
              {badges.map((badge, index) => (
                <Badge key={index} className=" lg:text-3xl" variant="outline">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
          <CardCollection />
        </div>
      </div>
    </section>
  );
};
