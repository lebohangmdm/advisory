import React from "react";
import { ServiceCard } from "@/app/components/ServiceCard";
import { GraduationCap, Lightbulb, Settings } from "lucide-react";

export const serviceData = [
  {
    icon: <GraduationCap size={32} />,
    title: "Diverse Engineering Expertise",
    description:
      "With decades of experience, Verdun Business Advisory can bring a wealth of knowledge across various industries, ensuring you receive informed, practical solutions.",
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Strategic Insights",
    description:
      "Leveraging our deep industry knowledge, we provide actionable insights that align with your long-term objectives, helping you make informed decisions that yield tangible results.",
  },
  {
    icon: <Settings size={32} />,
    title: "Tailored Business Solutions",
    description:
      "We analyze your unique business challenges in the industrial and engineering sectors",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-container">
      <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
        <h2 className="text-2xl  text-blue-500 capitalize font-semibold md:text-3xl lg:text-4xl mb-1 md:m-1.5 lg:mb-2">
          Our areas of focus and success
        </h2>
        <p className="text-sm font-medium sm:text-base lg:text-lg uppercase flex flex-wrap gap-3 md:gap-4 lg:gap-5">
          <span className="uppercase">Manufacturing</span> <span>|</span>{" "}
          <span className="uppercase">Repair </span> <span>|</span>{" "}
          <span className="uppercase">Services </span>{" "}
        </p>

        <p className="text-xs font-medium sm:text-sm md:text-base">
          Companies in the industrial and engineering sectors.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {serviceData.map((service) => {
          return (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
