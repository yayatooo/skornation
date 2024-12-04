import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export const Promo = () => {
  return (
    <section className="bg-redPrimary flex flex-col items-center justify-center py-8">
      <h1 className="font-extrabold text-white text-xl text-center mb-2">
        JOIN & SUBSCRIBE <br /> GET 10% OFF
      </h1>
      <Button>
        Sign up for Free <ArrowRight className="text-redPrimary" />
      </Button>
    </section>
  );
};
