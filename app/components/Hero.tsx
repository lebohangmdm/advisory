import React from "react";
import Header from "@/app/components/Header";

const Hero = () => {
  return (
    <section className="h-screen bg-cover bg-center  bg-[url('/bg-hero.png')]">
      <Header />
      <div className="relative z-10 bg-white/20 h-full px-4 text-center flex items-center justify-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to Our Site
          </h1>

          <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto">
            Tailored advisory solutions built around your unique
            goals—partnering with you for lasting success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
