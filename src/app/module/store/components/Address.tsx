import { MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const Address = () => {
  return (
    <section>
    <div className="flex justify-center">
      <Image
        src="/assets/outline.svg"
        width={243}
        height={152}
        alt="store"
      />
    </div>
    <div className="flex justify-center pt-4">
      <MapPin className="text-redPrimary" /> 
      <h1 className="font-extrabold">SKOR CAMBODIA</h1>
    </div>
    <div className="font-medium text-sm text-center pb-4">
        <p>443A Preah Monivong Blvd (93) Phnom Penh, Cambodia</p>
    </div>
  </section>
  )
}
