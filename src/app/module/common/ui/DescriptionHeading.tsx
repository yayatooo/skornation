import { ChildrenProps } from '@/app/types/data'
import React from 'react'


export const DescriptionHeading:React.FC<ChildrenProps> = ({children}) => {
  return (
    <p className='text-sm font-medium lg:text-2xl'>{children}</p>
  )
}
