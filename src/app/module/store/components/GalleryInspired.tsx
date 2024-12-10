import Image from "next/image";
import React from "react";

export const GalleryInspired = () => {
  return (
    <div className="w-full mx-auto flex flex-col h-[405px] my-6">
      <div className="flex gap-x-2 justify-center items-center">
        {[
          { src: "/assets/inspired-2.png" },
          { src: "/assets/inspired-3.png" },
        ].map((image, index) => (
          <div
            key={index}
            className="relative w-[170px] h-[170px] sm:w-full sm:h-[310px] lg:w-6/12 lg:h-[30vh]"
          >
            <Image
              src={image.src}
              fill
              alt="gallery"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-center mt-2">
          <div className="relative w-[345px] h-[320px] sm:w-full sm:h-[455px] lg:w-full lg:h-[40vh]">
            <Image
              src="/assets/inspired-1.png"
              fill
              alt="gallery"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
