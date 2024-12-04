// import { Button } from "@/components/ui/button";
// import { ArrowRight, CircleArrowRight } from "lucide-react";
// import Image from "next/image";
import React from "react";
import { GalleryStore } from "./components/GalleryStore";
import { ProductContainer } from "./components/ProductContainer";

export default function SalePage() {
  return (
    <>
      <GalleryStore />
      <ProductContainer />
    </>
  );
}
