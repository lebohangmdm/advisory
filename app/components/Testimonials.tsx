import TestimonialCard from "@/app/components/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      title: "wave aperture winders",
      description:
        "Verdun provided exceptional strategic insights that transformed our business. Their strong commitment to confidentiality made us feel secure, and their expert advice played a key role in our recent growth. We couldn't be more satisfied with their service.",
    },
    {
      title: "MK forklifts",
      description:
        "During a critical phase in our business, we received invaluable financial advisory services. The team offered professional, confidential guidance and customized solutions that helped us overcome challenges and emerge stronger. We highly recommend their services to any company seeking discreet and effective business advice.",
    },
    {
      title: "Turners",
      description:
        "I was impressed by Verdun's deep knowledge and tailored approach during our M&A process. They handled every aspect with precision and confidentiality, offering practical solutions to potential challenges. If you need a business advisory service with the highest level of discretion, look no further.",
    },
  ];
  return (
    <section
      id="testimonials"
      className="max-w-6xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20"
    >
      <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16">
        <h2 className="text-xl text-blue-500 capitalize font-semibold sm:text-2xl md:text-3xl lg:text-4xl mb-0.5 md:m-1">
          Testimonials
        </h2>
        <p className="text-sm font-medium sm:text-base lg:text-lg">
          Here are some kind words form our partners
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.title}
            title={testimonial.title}
            description={testimonial.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
