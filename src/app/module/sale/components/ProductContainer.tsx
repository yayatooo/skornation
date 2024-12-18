import React from 'react'
import { TittleHeading } from '../../common/ui/TittleHeading'
import { CardProduct } from './CardProduct'
import { useTranslations } from 'next-intl'

export const ProductContainer = () => {

  const t = useTranslations('ProductPage')

  return (
    <section id='sale'>
      <div className='w-10/12 mx-auto text-center pt-4'>
        <TittleHeading>{t('Title')}</TittleHeading>
      </div>
        <CardProduct />
    </section>
  )
}
