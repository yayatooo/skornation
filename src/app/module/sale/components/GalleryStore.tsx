import { Button } from '@/components/ui/button'
import { ArrowRight, CircleArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export const GalleryStore = () => {

  const t = useTranslations('SalePage')

  return (
    <section className="bg-redPrimary" id='sale'>
        <div className="w-10/12 mx-auto flex justify-between items-center">
          <div className="pt-4">
            <Image
              src="/assets/bold-logo-white.png"
              width={105}
              height={54}
              alt="bold"
            />
          </div>
          <div className="text-white -rotate-45">
            <CircleArrowRight size={25} />
          </div>
        </div>
        <div>
          <p className="text-white font-medium text-sm lg:text-xl w-10/12 mx-auto pb-4">
            {t('Description')}
          </p>
        </div>
        <div className="flex w-10/12 mx-auto gap-x-2 gap-y-4 py-2 justify-between">
          <div>
            <Image
              src="/assets/gallery-3.png"
              width={760}
              height={760}
              alt="gallery"
            />
          </div>
          <div>
            <Image
              src="/assets/gallery-4.png"
              width={760}
              height={760}
              alt="gallery"
            />
          </div>
        </div>
        <div className="py-8 flex justify-center">
          <Button>
            {t('Button')} <ArrowRight className="text-redPrimary" />
          </Button>
        </div>
      </section>
  )
}
