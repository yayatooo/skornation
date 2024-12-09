import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export const Promo = () => {
  const t = useTranslations('PromoPage')
  return (
    <section className="bg-redPrimary flex flex-col items-center justify-center py-8">
      <h1 className="font-extrabold w-5/12 text-white text-xl text-center mb-2">
        {t('Title')}
      </h1>
      <Button>
        {t('Button')} <ArrowRight className="text-redPrimary" />
      </Button>
    </section>
  );
};
