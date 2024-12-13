import Image from "next/image";
import React from "react";

interface CollectionCardProps {
  title: string;
  desc: string;
  image: string;
}

export const CollectionCard = ({ title, desc, image }: CollectionCardProps) => {
  return (
    <>
      <section className="flex flex-col gap-3 w-full">
        <div className="grid grid-cols-[auto,1fr] auto-rows-min items-stretch">
          <div>
            <Image
              src={image}
              width={101}
              height={124}
              alt="collection"
              className="object-cover"
            />
          </div>
          <div className="bg-redPrimary text-white flex flex-col overflow-y-auto max-h-[126px] justify-center px-2">
            <h1 className="font-bold text-xl">{title}</h1>
            <p className="text-sm py-2 overflow-y-auto max-h-full">{desc}</p>
          </div>
        </div>
      </section>
    </>
  );
};
