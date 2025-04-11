import React from "react";
import about from "@/public/about.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section id="about-us" className="section-container">
      <div className="grid md:grid-cols-2 lg:grid-cols-[60%_40%] gap-12 md:gap-14 lg:gap-16">
        <div className="">
          <h2 className="text-2xl text-blue-500 capitalize font-semibold  md:text-3xl lg:text-4xl mb-4 sm:mb-6 md:mb-8">
            Get to know us
          </h2>

          <div className="space-y-2 mb-4 md:mb-6">
            <p className="text-base lg:text-lg ">
              We begin by conducting a thorough assessment of your business to
              understand your goal unique challenges and goals.
            </p>
            <p className="text-base lg:text-lg">
              From there, we work closely with you to develop a tailored
              advisory plan, providing ongoing support and adjustments as needed
              to ensure successful outcomes
            </p>
          </div>

          <div className="space-y-1.5  md:space-y-2 lg:space-y-2.5">
            <p className="text-lg lg:text-xl font-bold capitalize">
              Verdun&apos;s area of focus:
            </p>
            <ul className="flex flex-col gap-1 lg:gap-1.5 list-disc ml-8">
              <li className="text-base lg:text-lg">
                Critical evaluation of business rescue plans
              </li>
              <li className="text-base lg:text-lg">
                Business continuation following unexpected leadership loss
              </li>
              <li className="text-base lg:text-lg">
                Business in need of revival/rejuvenation
              </li>
              <li className="text-base lg:text-lg">
                New organizations in need of mentoring and advisory services
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="w-full h-full">
            <Image
              src={about}
              alt="workers in the office discussing"
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="mx-auto"
            />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
