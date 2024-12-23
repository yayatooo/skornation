import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing"; 
import { useTranslations } from "next-intl";

export const ButtonToAbout = () => {

    const t = useTranslations("Button");

  return (
    <Link
      href="/about"
      className="bg-black text-white font-semibold flex justify-start items-center gap-2 p-3 xl:text-2xl"
    >
      {t('discoverMore')} <ArrowRight className="text-redPrimary" />
    </Link>
  );
};