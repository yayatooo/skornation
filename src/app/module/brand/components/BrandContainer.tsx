import React from "react";
import { TittleHeading } from "../../common/ui/TittleHeading";
import { Brands } from "@/app/utils/data";
import { CardBrands } from "./CardBrands";

export const BrandContainer = () => {
  return (
    <>
      <section className="w-10/12 mx-auto pt-8">
        <TittleHeading>Brands You Love</TittleHeading>
      </section>
      <div className="pb-8">
        <div className="flex">
          {Brands.map((item) => (
            <CardBrands
              key={item.id}
              image={item.image}
              title={item.title}
              logo={item.logo}
              width={item.width}
              height={item.height}
            />
          ))}
        </div>
      </div>
    </>
  );
};
