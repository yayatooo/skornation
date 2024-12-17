import { ChildrenProps } from '@/app/types/data'
import React from 'react'


export const DescriptionHeading:React.FC<ChildrenProps> = ({children}) => {
  return (
    <p className='text-sm font-medium py-2 lg:text-2xl xl:text-4xl'>{children}</p>
  )
}
