import React from "react";

export default function Footer() {
  return (
    <footer className="bg-darkThird py-8">
      <div className="flex justify-center gap-8 font-semibold text-[12px] text-white">
        <div className="space-y-4">
          <p>Our Story & Location</p>
          <p>Term & Condition</p>
          <p>Help & Contact Us</p>
        </div>
        <div className="space-y-4">
          <p>Privacy & Cookies</p>
          <p>Collection & Product</p>
          <p>Work With Us</p>
        </div>
      </div>
    </footer>
  );
}
