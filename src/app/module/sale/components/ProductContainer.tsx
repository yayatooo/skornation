import React from 'react'
import { TittleHeading } from '../../common/ui/TittleHeading'
import { CardProduct } from './CardProduct'
import { useTranslations } from 'next-intl'

export const ProductContainer = () => {

  const t = useTranslations('ProductPage')

  return (
    <section className='py-6'>
      <div className='w-10/12 mx-auto'>
        <TittleHeading>{t('Title')}</TittleHeading>
      </div>
        <CardProduct />
    </section>
  )
}
