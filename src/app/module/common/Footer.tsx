import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-black py-8">
        <div className="flex w-10/12 mx-auto justify-center md:justify-between gap-8 text-[12px] text-graySecondary">
          <div className="w-[62px] h-[30px] lg:w-[102px] lg:h-[50px]">
            <Image
              src="/assets/skor-logo-navbar.png"
              width={102}
              height={50}
              alt="navbar logo"
            />
          </div>
          <div className="flex gap-8 lg:text-lg">
            <div className="space-y-2">
              <p className="font-semibold text-white">Contact Us</p>
              <p>skor@bold-lifestyle.com</p>
              <p>Telegram</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white">Follow Us</p>
              <a
                href="https://www.facebook.com/skornationcambodia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/skor_cambodia/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Instagram{" "}
              </a>
              <a
                href="https://www.tiktok.com/@skor_cambodia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Tiktok{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-graySecondary text-sm text-center border-y-1 py-2 bg-black">
        <p>
          {" "}
          © {new Date().getFullYear()} skornation.com, Inc. All Rights Reserved
        </p>
      </div>
    </>
  );
}
