import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/routing";

export const DetailAbout = () => {
  const t = useTranslations("AboutUs");
  return (
    <section className="my-4 w-10/12 mx-auto lg:my-12">
      <div className="">
        <div className="mx-auto">
          {/* <!-- Flex Container for Text and Image --> */}
          <div className="flex flex-col md:flex-row w-full py-3 gap-6 items-center">
            {/* <!-- Text Section --> */}
            <div className="space-y-4 w-full md:w-1/2">
              <div className="text-black flex items-center gap-4 font-bold text-xl lg:text-6xl">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link href="/">
                        <ArrowLeft size={35} />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Back to Home Page</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <h1 className="w-full md:text-start">{t("Title")}</h1>
              </div>
              <p className="text-black font-medium text-sm lg:text-xl xl:text-2xl">
                {t("Description")}
              </p>
              <p className="text-black font-medium text-sm lg:text-xl xl:text-2xl">
                {t("SubDescription")}
              </p>
            </div>

            {/* <!-- Image Section --> */}
            <div className="flex w-full md:w-1/2 justify-center">
              <Image
                src="/assets/gallery-5.png"
                width={904}
                height={603}
                alt="gallery"
                className="object-contain"
              />
            </div>
          </div>

          <div className="font-extrabold text-redPrimary w-5/12 md:w-full md:text-center text-4xl md:my-4 lg:my-6 lg:text-7xl">
            <h1 className="">&quot;{t("HeadLine")}&quot;</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
