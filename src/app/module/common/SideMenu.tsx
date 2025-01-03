import { Navlink, socialLinks } from "@/app/utils/data";
import clsx from "clsx";
import { X } from "lucide-react";
import React from "react";

interface SidebarProps {
  openMenu: boolean;
  setOpenMenu: (isOpen: boolean) => void;
}

export const SideMenu = ({ openMenu, setOpenMenu }: SidebarProps) => {
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      handleCloseMenu();
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const iconClasses = "w-6 h-6 md:w-8 md:h-8 lg:w-14 lg:h-14 stroke-black";

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 h-screen w-8/12 bg-white text-center py-20 text-xl font-semibold text-redPrimary flex flex-col lg:hidden transition-all",
        openMenu ? "left-0" : "-left-[200%]"
      )}
    >
      {/* Close Button */}
      <div className="absolute top-14 left-14">
        <X onClick={handleCloseMenu} />
      </div>

      {/* Navigation Links */}
      <div className="flex-grow flex flex-col items-center justify-center space-y-6">
        {Navlink.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => scrollToSection(item.href.replace("#", ""))}
              className="hover:text-red-700 transition-colors"
            >
              {item.name}
            </button>
          </div>
        ))}
      </div>



      {/* Social Media Icons */}
      <div className="flex gap-6 justify-center mt-auto pb-6">
      {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            aria-label={label}
          >
            <Icon className={iconClasses} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
