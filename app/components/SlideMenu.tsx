"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Import this

export default function SlideMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="lg:hidden bg-transparent text-white">
          <Menu size={32} className="text-white cursor-pointer" />
        </button>
      </SheetTrigger>
      <SheetTitle className="hidden">
        <VisuallyHidden>Navigation Menu</VisuallyHidden>{" "}
        {/* Hidden but required */}
      </SheetTitle>
      <SheetContent>
        <div className="mt-12 px-4 space-y-4">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href={"/"}
                className="text-base sm:text-lg font-semibold  hover:text-blue-500 transition-all duration-150"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/#about-us"}
                className="text-base sm:text-lg font-semibold hover:text-blue-500 transition-all duration-150"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={"/#services"}
                className="text-base sm:text-lg font-semibold hover:text-blue-500 transition-all duration-150"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"/#testimonials"}
                className="text-base sm:text-lg font-semibold hover:text-blue-500 transition-all duration-150"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href={"/#contact-us"}
                className="text-base sm:text-lg font-semibold hover:text-blue-500 transition-all duration-150"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div>
            <p className="text-sm font-semibold">Address</p>
            <p className="text-sm font-medium max-w-48 ">
              304 North Cardinal St. Dorchester Center, MA02124
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Working Hours</p>
            <p className="text-sm font-medium max-w-48 ">
              Monday to Friday: 7AM - 7PM
            </p>
            <p className="text-sm font-medium max-w-48 ">Weekend: 10AM - 5PM</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
