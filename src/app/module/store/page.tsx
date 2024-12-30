import React from "react";
import { TittleHeading } from "../common/ui/TittleHeading";
import { DescriptionHeading } from "../common/ui/DescriptionHeading";
import { Address } from "./components/Address";
import { useTranslations } from "next-intl";
import { Comments } from "./components/Comments";
import { socialLinks } from "@/app/utils/data";

export default function StorePage() {
  const t = useTranslations("ReviewPage");

  const iconClasses = "w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 stroke-black";

  return (
    <div className="w-full mx-auto">
      {/* Heading Section */}
      <section className="py-6 xl:py-12 xxl:py16 text-center">
        <div className="pt-4 xl:py-12 w-10/12 mx-auto">
          <TittleHeading>{t("Title")}</TittleHeading>
          <DescriptionHeading>{t("Description")}</DescriptionHeading>
        </div>
        <Comments />
      </section>

      {/* Social Media Links */}
      <div className="flex gap-8 lg:gap-24 justify-center py-6 border-y-2 border-y-black">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
            aria-label={label}
          >
            <Icon className={iconClasses} />
          </a>
        ))}
      </div>

      {/* Address Section */}
      <div className="mb-8">
        <Address />
      </div>
    </div>
  );
}
