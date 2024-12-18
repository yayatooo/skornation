import {  MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../../common/ButtonUi";

export const Address = () => {
  return (
    <section
      id="store"
      className="w-10/12 mx-auto lg:flex lg:justify-center lg:gap-8"
    >
      <div>
        <div className="flex justify-center">
          <Image
            src="/assets/outline.svg"
            width={500}
            height={500}
            alt="store"
          />
        </div>
      </div>
      <div className="text-start lg:text-3xl xl:w-3/12 flex flex-col lg:justify-around ">
        <div className="flex justify-center items-center lg:justify-start pt-4">
          <MapPin className="text-redPrimary mr-2" />
          <h1 className="font-extrabold cursor-pointer">SKOR CAMBODIA</h1>
        </div>
        <div className="font-medium text-sm lg:text-2xl text-center lg:text-start pb-4">
          <p>443A Preah Monivong Blvd (93) Phnom Penh, Cambodia</p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <Button href="https://maps.app.goo.gl/GNiMABpA4Q5yQHvr6" target="_blank">
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
};
