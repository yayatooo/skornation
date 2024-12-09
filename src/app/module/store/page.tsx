import React from "react";
import { TittleHeading } from "../common/ui/TittleHeading";
import { DescriptionHeading } from "../common/ui/DescriptionHeading";
import Image from "next/image";
import { Facebook, Instagram, Send } from "lucide-react";
import { Address } from "./components/Address";
import { Promo } from "./components/Promo";
import { useTranslations } from "next-intl";

export default function StorePage() {

  const t = useTranslations('GetInspiredPage')

  return (
    <>
      <section className="py-10 mt-64 w-10/12 mx-auto">
        <TittleHeading>{t('Title')}</TittleHeading>
        <DescriptionHeading>
         {t('Description')}
        </DescriptionHeading>
        <div className="w-full max-w-6xl mx-auto flex flex-col h-[405px] my-6">
          <div className="flex gap-x-2 justify-center items-center">
            {[
              { src: "/assets/inspired-2.png", width: 170, height: 170 },
              { src: "/assets/inspired-3.png", width: 170, height: 170 },
            ].map((image, index) => (
              <div key={index} className="w-[170px]">
                <Image
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt="gallery"
                  className="object-fill"
                />
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-center mt-2">
              <Image
                src="/assets/inspired-1.png"
                width={345}
                height={320}
                alt="gallery"
                className="object-fill"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8 py-8 my-4 border-y-2 border-darkThird">
          <Facebook />
          <Instagram />
          <Send />
        </div>
      </section>
      <Address />
      <Promo />
    </>
  );
}
