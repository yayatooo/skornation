import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'

export const DetailAbout = () => {
    const t = useTranslations("AboutUs");
  return (
    <section className=" my-4 w-10/12 mx-auto lg:my-12">
        <div className="">
          <div className=" mx-auto ">
            <div className="text-black font-bold text-xl lg:text-6xl">
              <h1 className="w-full md:text-start">{t("Title")}</h1>
            </div>
            <div className="flex flex-col w-full py-3">
              <div className="space-y-4 w-full ">
                <p className="text-black font-medium text-sm lg:text-xl xl:text-2xl">
                  {t('Description')}
                </p>
                <div className="flex w-full justify-center">
                  <div>
                    <Image
                      src="/assets/gallery-5.png"
                      width={904}
                      height={603}
                      alt="gallery"
                    />
                  </div>
                </div>
                <p className="text-black font-medium text-sm lg:text-xl xl:text-2xl">
                  {t('SubDescription')}
                </p>
              </div>
            </div>
            <div className="font-bold text-redPrimary text-3xl md:my-4 md:text-4xl md:text-center lg:my-6 lg:text-7xl">
              <h1>&quot;{t('HeadLine')}&quot;</h1>
            </div>
          </div>
        </div>
      </section>
  )
}
