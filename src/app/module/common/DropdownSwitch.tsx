import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import Image from 'next/image';

export const DropdownSwitch = () => {
  return (
    <DropdownMenu>
          <DropdownMenuTrigger className='flex items-center'><Image src="/usa-flag-round-circle-icon.svg" width={23} height={23} alt="flag"/></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Choose Language</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>English U.S</DropdownMenuItem>
            <DropdownMenuItem>Cambodia</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
  )
}
