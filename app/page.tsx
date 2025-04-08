import About from "@/app/components/About";
import Founder from "@/app/components/Founder";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import ScrollToTopButton from "@/app/components/ScrollUpBtn";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Founder />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
