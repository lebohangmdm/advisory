"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menuLinks } from "@/lib/links";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Facebook, Instagram, Menu, X as XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

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

  const handleLinkClick = () => {
    setOpen(false); // Close the menu when a link is clicked
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="lg:hidden bg-transparent text-black"
          aria-label="Open menu"
        >
          <Menu size={32} className="text-black cursor-pointer" />
        </button>
      </SheetTrigger>

      <SheetContent className="bg-slate-900 text-white border border-slate-900 transition-none [&>button]:focus:outline-none [&>button]:h-">
        <SheetTitle className="sr-only">
          <VisuallyHidden>Navigation Menu</VisuallyHidden>
        </SheetTitle>

        <div className="mt-12 px-4 space-y-4">
          <ul className="flex flex-col gap-2">
            {menuLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={handleLinkClick} // Close menu on link click
                  className="text-base  capitalize sm:text-lg font-semibold hover:text-blue-500 transition-all duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div>
            <p className="text-sm font-semibold">Address</p>
            <p className="text-sm font-medium max-w-48">
              304 North Cardinal St. Dorchester Center, MA 02124
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Working Hours</p>
            <p className="text-sm font-medium max-w-48">
              Monday to Friday: 7AM - 7PM
            </p>
            <p className="text-sm font-medium max-w-48">Weekend: 10AM - 5PM</p>
          </div>

          <ul className="flex items-center gap-2.5">
            <li>
              <Link
                href="/"
                className="p-[3px] bg-white rounded-full inline-flex"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-slate-900" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="p-[3px] bg-white rounded-sm inline-flex"
                aria-label="Twitter/X"
              >
                <XIcon className="h-4 w-4 text-slate-900" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="p-[3px] bg-white rounded-sm inline-flex"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-slate-900" />
              </Link>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
