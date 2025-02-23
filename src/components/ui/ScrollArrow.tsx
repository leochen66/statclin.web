"use client";

import { ChevronDown } from "lucide-react";

const ScrollArrow = () => {
  const handleScroll = () => {
    const aboutSection = document.querySelector("#about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <ChevronDown
        className="scroll-arrow w-8 h-8 text-white opacity-80 hover:opacity-100 cursor-pointer"
        onClick={handleScroll}
      />
    </div>
  );
};

export default ScrollArrow;
