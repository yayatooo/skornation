
import Link from 'next/link'
import React from 'react'

export default function DevelopmentPage() {
  return (
    <div className="flex flex-col items-center justify-center w-10/12 mx-auto h-screen">
      <h2 className="font-extrabold text-7xl text-redPrimary">We Sorry</h2>
      <h2 className="font-extrabold text-4xl text-darkThird text-center">This Page in Development Stage</h2>
      <p className='pt-8 text-center'>SKORNATION E-commerce on development Progress</p>
      <Link
        href="/"
        className="py-2 px-3 my-8 bg-redPrimary hover:bg-red-900 text-white font-semibold"
      >
        Return Home
      </Link>
    </div>
  )
}
