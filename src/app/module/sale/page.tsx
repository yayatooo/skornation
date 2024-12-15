import React from "react";
import { ProductContainer } from "./components/ProductContainer";
import { CollectionContainer } from "./components/CollectionContainer";

export default function SalePage() {
  return (
    <>
      <CollectionContainer />
      <ProductContainer />
    </>
  );
}
