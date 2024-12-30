import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../../common/ButtonUi";

export const Address = () => {
  return (
    <section
      id="store"
      className="w-10/12 mx-auto lg:flex lg:justify-center lg:gap-8 my-14 xl:my-20"
    >
      <div>
        <div className="flex justify-center">
          <div className="w-full max-w-xs md:max-w-sm lg:max-w-lg">
            <Image
              src="/assets/outline.svg"
              alt="store"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="text-start lg:text-3xl xl:w-3/12 flex flex-col lg:justify-around ">
        <div className="flex justify-center items-center lg:justify-start pt-4">
          <MapPin className="text-redPrimary mr-2" />
          <h1 className="font-extrabold cursor-pointer">SKOR CAMBODIA</h1>
        </div>
        <div className="font-medium text-sm lg:text-2xl text-center lg:text-start pb-4">
          <p>443A, Preah Monivong Blvd (93), St.105,
          Sangkat Boeung Prolit, Khan 7 Makara, Phnom Penh</p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <Button
            href="https://maps.app.goo.gl/GNiMABpA4Q5yQHvr6"
            target="_blank"
          >
            Get Direction
          </Button>
        </div>
      </div>
    </section>
  );
};
