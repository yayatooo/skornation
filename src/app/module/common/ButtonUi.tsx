import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link"; // Import Next.js Link for proper routing

interface ButtonUiProps {
  href: string; // The link destination
  children: React.ReactNode; // Content inside the button
  className?: string; // Allow additional custom styling
  target?: "_self" | "_blank"; // Optional target for opening in a new tab
}

export const Button: React.FC<ButtonUiProps> = ({ href, children, className, target = "_self" }) => {
  const isExternal = target === "_blank";

  return (
    <div className="hidden md:flex">
      <Link
        href={href}
        target={target}
        rel={isExternal ? "noopener noreferrer" : undefined} // Add rel only if opening in a new tab
        className={`bg-black text-white font-semibold flex items-center gap-2 p-3 xl:text-2xl hover:bg-gray-800 transition-all ${className}`}
      >
        {children} <ArrowRight className="text-redPrimary" />
      </Link>
    </div>
  );
};
