import { BadgeCheck, BriefcaseBusiness, GraduationCap } from "lucide-react";
import founder from "@/public/gary.jpg";
import Image from "next/image";

const Founder = () => {
  return (
    <section className="section-container">
      <div className="grid  md:grid-cols-2 gap-12 lg:gap-14 xl:gap-16">
        <div className="mx-auto order-2 md:order-1">
          <Image
            src={founder}
            alt="Gary Greeff"
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="mx-auto"
          />
          <figcaption className="text-sm md:pl-1 lg:pl-0 md:text-[15px] text-gray-600 mt-2 max-w-lg italic">
            &quot;We can ignore, but we cannot ignore the consequences of
            ignoring reality (Ayn Rand)&quot; ~{" "}
            <strong className="text-black">Gary Greeff</strong>
          </figcaption>
        </div>
        <div className="md:order-2">
          <h3 className="text-lg font-sans md:text-xl lg:text-2xl text-blue-500 font-medium mb-2">
            Our Founder
          </h3>
          <div className="mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-2xl font-roboto capitalize font-bold md:text-3xl lg:text-4xl">
              Gary Greeff
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 ">
            <div className="bg-blue-50 p-5">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-2">
                  <GraduationCap size={32} className="text-blue-800" />
                </div>
                <div>
                  <p className="text-lg font-semibold lg:text-xl">
                    Qualifications
                  </p>
                  <div className="mt-2">
                    <div className="space-y-2 ml-4">
                      <div>
                        <p className="text-base lg:text-lg font-medium font-serif">
                          University of South Africa
                        </p>
                        <ul className="text-sm sm:text-base lg:text-lg list-disc ml-8">
                          <li>Graduated BCom Degree Unisa</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-base lg:text-lg font-medium font-serif ">
                          Unisa School of Business Leadership
                        </p>
                        <ul className="text-sm sm:text-base lg:text-lg list-disc ml-8">
                          <li>
                            Graduated Master of Business Leadership Degree(MBL)
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-base lg:text-lg font-medium font-serif">
                          Davinci Business School
                        </p>
                        <ul className="text-sm sm:text-base lg:text-lg  list-disc ml-8">
                          <li>
                            Currently completing Phd in business turnaround and
                            rescue
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <ul className="text-sm sm:text-base lg:text-lg space-y-1.5 list-disc ml-8">
                        <li>Graduated BCom Degree Unisa</li>
                        <li>
                          Graduated Master of Business Leadership Degree(MBL)
                        </li>
                        <li>
                          Currently completing Phd in business turnaround and
                          rescue
                        </li>
                      </ul> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-5 ">
              <div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <BadgeCheck size={32} className="text-blue-800" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold lg:text-xl">
                      Accreditation
                    </p>
                    <div className="mt-2">
                      <p className="text-base lg:text-lg font-medium font-serif">
                        Professional Certifications
                      </p>
                      <ul className="text-sm sm:text-base lg:text-lg space-y-1.5 list-disc ml-8">
                        <li>
                          Certified Turnaround Practitioner with TMA Southern
                          Africa
                        </li>
                        <li>
                          Certified Business Advisor With IBASA{" "}
                          <span className="block font-medium">
                            Membership number: M5829
                          </span>
                        </li>
                        <li>
                          Accredited Experienced Business Rescue Practitioner
                          with CIPC{" "}
                          <span className="block font-medium">
                            License number: 6934
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-5 ">
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
                      <p className="text-base lg:text-lg font-medium font-serif">
                        Business Rescue and Turnaround Experience
                      </p>
                      <ul className="text-sm sm:text-base lg:text-lg space-y-1.5 list-disc ml-8">
                        <li>Divisional Director at Lennings Group Statrote</li>
                        <li>
                          Divisional Director at Whiteys A Division of Powertech
                          Industries
                        </li>
                        <li>
                          Divisional Director at Linden Industrial Engineering
                        </li>
                        <li>Founded Several Ongoing Technology Companies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-blue-50 p-5">
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
                      <div className="space-y-2 ml-4">
                        <div>
                          <p className="text-base lg:text-lg font-medium font-serif">
                            Business Rescue and Turnaround Experience
                          </p>
                          <ul className="text-sm sm:text-base lg:text-lg list-disc ml-8">
                            <li>Lennings Group Statrote</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-base lg:text-lg font-medium font-serif ">
                            Divisional Director
                          </p>
                          <ul className="text-sm sm:text-base lg:text-lg list-disc ml-8">
                            <li>Whiteys A Division of Powertech Industries</li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-base lg:text-lg font-medium font-serif">
                            Divisional Director
                          </p>
                          <ul className="text-sm sm:text-base lg:text-lg  list-disc ml-8">
                            <li>Linden Industrial Engineering</li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-base lg:text-lg font-medium font-serif">
                            Entrepreneurial Experience
                          </p>
                          <ul className="text-sm sm:text-base lg:text-lg  list-disc ml-8">
                            <li>
                              Founded Several Ongoing Technology Companies
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
