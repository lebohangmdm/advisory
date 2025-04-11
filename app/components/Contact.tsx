import { Mail, MapPin, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="#contact-us"
      className="bg-cover bg-center bg-[url('/contact.jpg')]"
    >
      <div className="relative z-10 bg-white/20">
        <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 md:py-8 lg:px-8 lg:py-12 ">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-xl text-blue-600 capitalize font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
                Get In touch
              </h2>
              <p className="text-sm">
                Get in touch—we’ll get back to you as soon as we can.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center gap-4">
                <div>
                  <PhoneCall className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <p className="text-base md:text-lg font-semibold">Call</p>
                  <a
                    href="tel:+12345678901"
                    className="text-sm  sm:text-base font-medium hover:text-blue-600  transition-all duration-150"
                  >
                    +1 (234) 567-8901
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 ">
                <div>
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <p className="text-base md:text-lg font-semibold ">Email</p>
                  <a
                    href="mailto:contact@example.com"
                    className="text-sm sm:text-base font-medium hover:text-blue-600  transition-all duration-150"
                  >
                    gary@Verdunba.co.za
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <p className="text-base md:text-lg font-semibold">Address</p>
                  <address className="not-italic">
                    <a
                      href="https://www.google.com/maps?q=132+9th+St,+Linden,+Randburg,+2195"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-medium md:backdrop-blur-lg md:bg-white/10 hover:text-blue-600 transition-all duration-150"
                    >
                      132 9th, Linden 2195
                    </a>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
