import { MapPin, Star } from "lucide-react";
import React from "react";

interface CommentsCardProps {
  id?: number;
  user: string;
  comment: string;
}

export const CommentsCard = ({
  id,
  user,
  comment,
}: CommentsCardProps) => {
  return (
    <section className="bg-gray-50 w-full min-h-[216px] p-4 rounded-sm shadow-sm" key={id}>
      <div className="flex justify-between">
        <h1 className="font-semibold text-darkThird">{user}</h1>
        <MapPin color="red" />
      </div>
      <div className="flex py-2 text-yellow-500">
        <Star fill="rgb(234 179 8 / var(--tw-text-opacity, 1))" />
        <Star fill="rgb(234 179 8 / var(--tw-text-opacity, 1))" />
        <Star fill="rgb(234 179 8 / var(--tw-text-opacity, 1))" />
        <Star fill="rgb(234 179 8 / var(--tw-text-opacity, 1))" />
        <Star fill="rgb(234 179 8 / var(--tw-text-opacity, 1))" />
      </div>
      <p>{comment}</p>
    </section>
  );
};
