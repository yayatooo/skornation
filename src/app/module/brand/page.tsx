import { BrandContainer } from "./components/BrandContainer";
import { CollectionContainer } from "./components/CollectionContainer";

export default function BrandPage() {
  return (
    <>
      <div className="py-0 lg:pb-16">
        <BrandContainer />
        <CollectionContainer />
      </div>
    </>
  );
}
