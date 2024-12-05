import React from 'react'
import { TittleHeading } from '../../common/ui/TittleHeading'
import { CardProduct } from './CardProduct'

export const ProductContainer = () => {
  return (
    <section className='py-6'>
      <div className='w-10/12 mx-auto'>
        <TittleHeading>Top Rated Product</TittleHeading>
      </div>
        <CardProduct />
    </section>
  )
}
