import React from "react";
import Header from "@/app/components/Header";

const Hero = () => {
  return (
    <div className="relative h-dvh">
      <div className="absolute inset-0 bg-[url('/bg-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        {/* Dark Overlay */}
      </div>
      <Header />
    </div>
  );
};

export default Hero;
