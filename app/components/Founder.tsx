import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import founder from "@/public/founder.jpg";
import Image from "next/image";

const Founder = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 md:pl-0 md:py-16 lg:px-8 lg:py-20">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-14 xl:gap-16">
        <div className="mx-auto">
          <Image
            src={founder}
            alt="Gary Greeff"
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="mx-auto"
          />
          <figcaption className="text-sm md:pl-1 lg:pl-0 md:text-[15px] text-gray-600 mt-2 max-w-lg italic">
            &quot;At Verdun&apos;s Business Advisory, we prioritize innovation
            and customer satisfaction to make a real impact.&quot; –{" "}
            <strong className="text-black">Gary Greeff</strong>
          </figcaption>
        </div>
        <div>
          <h3 className="text-xl font-sans md:text-2xl lg:text-[28px] text-blue-500 font-medium mb-2.5">
            Our Founder
          </h3>
          <div className="mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-2xl font-roboto capitalize font-bold md:text-3xl lg:text-4xl">
              Gary Greeff
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 ">
            <div className="bg-blue-50 p-5 lg:p-6 ">
              <div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <GraduationCap size={32} className="text-blue-800" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold lg:text-xl">
                      Qualifications
                    </p>
                    <div className="mt-2">
                      <p className="text-base lg:text-lg font-medium font-serif">
                        University of South Africa
                      </p>
                      <ul className="text-sm sm:text-base lg:text-lg space-y-1 list-disc ml-8">
                        <li>
                          Graduated BCom Degree Unisa School of Business
                          Leadership
                        </li>
                        <li>
                          Graduated Master of Business Leadership Degree Davinci
                          Business School
                        </li>
                        <li>Currently completing Phd</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-5 lg:p-6">
              <div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <BriefcaseBusiness size={32} className="text-blue-800" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold lg:text-xl">
                      Experience
                    </p>
                    <div className="mt-2">
                      <p className="text-base lg:text-lg font-medium font-serif mb-1">
                        Senior Management in Large SA industrial Groups
                      </p>
                      <ul className="text-sm sm:text-base lg:text-lg space-y-1 list-disc ml-8">
                        <li>Lennings Group SA Divisional Director</li>
                        <li>Whiteys Division Powertech Industries</li>
                        <li>Altron Group Managing Director</li>
                        <li>
                          Linden Industrial Engineering Founded Several Ongoing
                          Technology Companies
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
