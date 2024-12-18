import { SwiperAbout } from '@/app/module/about/components/SwiperAbout'
import { useTranslations } from 'next-intl';
import React from 'react'

export const SwiperDetailAbout = () => {
    const t = useTranslations("AboutUs");
  return (
    <section className="mb-4">
        <SwiperAbout />
        <div className="text-center mt-4 w-10/12 mx-auto">
          <h1>
           {t('SwiperProfile')}
          </h1>
        </div>
      </section>
  )
}
