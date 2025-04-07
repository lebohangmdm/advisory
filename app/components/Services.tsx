import React from "react";
import { ServiceCard } from "@/app/components/ServiceCard";
import { GraduationCap, Lightbulb, Settings } from "lucide-react";

export const serviceData = [
  {
    icon: <GraduationCap size={32} />,
    title: "Diverse Engineering Expertise",
    description:
      "With decades of experience, Gary can bring a wealth of knowledge across various industries, ensuring you receive informed, practical solutions.",
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
      "We analyze your unique business challenges and craft customized strategies that drive growth, efficiency, and long-term success.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="max-w-6xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20"
    >
      <h2 className="text-2xl  text-blue-500 capitalize font-semibold md:text-3xl lg:text-4xl mb-6 md:mb-8 lg:mb-12 xl:mb-16">
        Our Services
      </h2>

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
