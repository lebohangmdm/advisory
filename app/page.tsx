// "use client";

import About from "@/app/components/About";
import Founder from "@/app/components/Founder";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
// import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   // Check if there's a hash in the URL when the page loads
  //   const hash = window.location.hash;
  //   if (hash) {
  //     const element = document.querySelector(hash);
  //     if (element) {
  //       // Scroll into view with smooth behavior
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, []); // This effect runs only once, on page load

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Founder />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
