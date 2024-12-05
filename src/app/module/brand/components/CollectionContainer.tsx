import React from "react";
import { TittleHeading } from "../../common/ui/TittleHeading";
import { DescriptionHeading } from "../../common/ui/DescriptionHeading";
import { Button } from "@/components/ui/button";
import { CardCollection } from "./CardCollection";

export const CollectionContainer = () => {
  return (
    <>
      <section className="w-10/12 mx-auto pb-8">
        <div className="text-start">
          <TittleHeading>Our Collection</TittleHeading>
          <DescriptionHeading>
            All the categories you need are in SKOR, ready to provide products
            tailored to your needs.
          </DescriptionHeading>
        </div>
        <div className="flex justify-center gap-4 pt-6">
          <Button>Men&lsquo;s</Button>
          <Button variant="outline">Women</Button>
        </div>
      </section>
      <div className="pt-0 pb-4 flex justify-end w-full">
        <div className="w-11/12">
          <CardCollection />
        </div>
      </div>
    </>
  );
};
