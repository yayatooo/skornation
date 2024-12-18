import React from "react";
import { TittleHeading } from "../../common/ui/TittleHeading";
import { DescriptionHeading } from "../../common/ui/DescriptionHeading";
import { CardCollection } from "./CategoryCard";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";

export const CollectionContainer = () => {
  const t = useTranslations("CollectionPage");

  const badges = [
    "Sport Casual",
    "Fitness",
    "Training",
    "Running",
    "Football",
    "Basketball",
    "Golf",
    "Skateboarding",
    "Swim",
    "Tennis",
  ];

  return (
    <section className="w-10/12 mx-auto">
      <div className="flex justify-end w-full">
        <div className="w-full mx-auto text-center pb-6">
          <div className="py-4 xl:py-12 w-10/12 xl:w-8/12 mx-auto">
            <TittleHeading>{t("Title2")}</TittleHeading>
            <DescriptionHeading>{t("Description")}</DescriptionHeading>
            <div className="flex flex-wrap gap-1 lg:gap-3 justify-center w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12 mx-auto py-2 lg:py-4">
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
