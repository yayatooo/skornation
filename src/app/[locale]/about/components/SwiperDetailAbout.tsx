import { SwiperAbout } from '@/app/module/about/components/SwiperAbout'
import { badges } from '@/app/utils/data';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';
import React from 'react'

export const SwiperDetailAbout = () => {
    const t = useTranslations("AboutUs");
  return (
    <section className="mb-4">
        <SwiperAbout />
        <div className="lg:text-3xl text-center mt-4 w-10/12 mx-auto">
          <h1>
           {t('SwiperProfile')}
          </h1>
        </div>
        <div className="flex flex-wrap gap-1 lg:gap-3 justify-center w-7/12 mx-auto py-2 lg:py-4">
              {badges.map((badge, index) => (
                <Badge key={index} className=" lg:text-3xl" variant="outline">
                  {badge}
                </Badge>
              ))}
            </div>
      </section>
  )
}
