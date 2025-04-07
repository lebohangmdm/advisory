import React from "react";
import Header from "@/app/components/Header";
import Image from "next/image";
import logo from "@/public/Verdun_Logo1-1-removebg-preview.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center  bg-[url('/bg-hero.png')]"
    >
      <Header />
      <div className="relative z-10 bg-white/20 h-full flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full sm:w-3/4 md:w-3/5 lg:w-1/2 pb-8">
            <Image
              src={logo}
              alt="Verdun logo"
              style={{ objectFit: "cover", objectPosition: "center" }}
              width={1000}
              height={1000}
            />

            <p className="mt-4 text-base sm:text-lg md:text-xl max-w-xl bg-white/10 backdrop-blur-md">
              We provide tailored strategies and actionable insights to help
              your business grow, optimize operations, and stay competitive in
              today’s market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
