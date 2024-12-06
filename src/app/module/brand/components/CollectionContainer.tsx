import React from "react";
import { TittleHeading } from "../../common/ui/TittleHeading";
import { DescriptionHeading } from "../../common/ui/DescriptionHeading";
import { Button } from "@/components/ui/button";
import { CardCollection } from "./CardCollection";

export const CollectionContainer = () => {
  return (
    <>
      <section className="w-10/12 mx-auto">
        <div className="text-start">
          <TittleHeading>Our Collection</TittleHeading>
          <DescriptionHeading>
            All the categories you need are in SKOR, ready to provide products
            tailored to your needs.
          </DescriptionHeading>
        </div>
        <div className="flex gap-4 pt-6">
          <Button>Men&lsquo;s</Button>
          <Button variant="outline">Women</Button>
        </div>
      </section>
      <div className="py-6 flex justify-end w-full">
        <div className="w-full">
          <CardCollection />
        </div>
      </div>
    </>
  );
};
