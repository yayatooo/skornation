import React from "react";
import { TittleHeading } from "../../common/ui/TittleHeading";
import { DescriptionHeading } from "../../common/ui/DescriptionHeading";
import { CategoryCard } from "./CategoryCard";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { badges } from "@/app/utils/data";
import * as motion from "motion/react-client";

export const CollectionContainer = () => {
  const t = useTranslations("CollectionPage");

  return (
    <section className="w-full mx-auto mt-8">
      <div className="flex justify-end w-full">
        <div className="w-full mx-auto text-center">
          <div className="py-4 xl:py-12 w-10/12 xl:w-8/12 mx-auto">
            <TittleHeading>{t("Title2")}</TittleHeading>
            <DescriptionHeading>{t("Description")}</DescriptionHeading>
          </div>
          <CategoryCard />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-1 lg:gap-3 justify-center w-10/12 lg:w-8/12 mx-auto py-8 lg:py-12"
            >
              {badges.map((badge, index) => (
                <Badge key={index} className="lg:text-3xl" variant="outline">
                  {badge}
                </Badge>
              ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};
