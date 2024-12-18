import { Button } from "../../common/ButtonUi";
import { useTranslations } from "next-intl";
import React from "react";

export const Promo = () => {
  const t = useTranslations("PromoPage");
  return (
    <section className="bg-redPrimary flex flex-col items-center justify-center py-8">
      <h1 className="font-extrabold w-5/12 sm:w-3/12 lg:w-[18%] text-white text-xl text-center mb-2">
        {t("Title")}
      </h1>
      <Button href="/development" target="_blank">
        Get Started
      </Button>
    </section>
  );
};
