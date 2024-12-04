import { ChildrenProps } from '@/app/types/data'
import React from 'react'



export const TittleHeading:React.FC<ChildrenProps> = ({children}) => {
  return (
    <h1 className='font-extrabold text-xl text-redPrimary'>{children}</h1>
  )
}
