import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Address = () => {
  return (
    <section id="store" className="w-10/12 mx-auto">
      <div className="flex justify-center">
        <Image src="/assets/outline.svg" width={500} height={500} alt="store" />
      </div>
      <div className="flex justify-center items-center pt-4">
        <MapPin className="text-redPrimary mr-2" />
        <h1 className="font-extrabold cursor-pointer">SKOR CAMBODIA</h1>
      </div>
      <div className="font-medium text-sm text-center pb-4">
        <p>443A Preah Monivong Blvd (93) Phnom Penh, Cambodia</p>
      </div>
      <div className="flex justify-center">
        <Button>
          <a
            href="https://maps.app.goo.gl/GNiMABpA4Q5yQHvr6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Get Direction <ArrowRight className="text-redPrimary" />
          </a>
        </Button>
      </div>
    </section>
  );
};
