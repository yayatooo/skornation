import { MapPin, Star } from "lucide-react";
import React, { memo } from "react";
import * as motion from "motion/react-client";

interface CommentsCardProps {
  id?: number;
  user: string;
  comment: string;
}

const CommentsCard: React.FC<CommentsCardProps> = memo(({ user, comment }) => {
  return (
    <motion.section
      className="bg-gray-50 w-full text-start min-h-[216px] p-4 rounded-sm shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between">
        <h1 className="font-semibold text-darkThird">{user}</h1>
        <MapPin color="red" />
      </div>
      <div className="flex py-2 text-yellow-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} fill="rgb(234 179 8 / var(--tw-text-opacity, 1))" />
        ))}
      </div>
      <p>{comment}</p>
    </motion.section>
  );
});

CommentsCard.displayName = "CommentsCard";

export { CommentsCard };
