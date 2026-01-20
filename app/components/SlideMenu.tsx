"use client";

import { menuLinks } from "@/lib/links";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const MapUrl =
  "https://www.google.com/maps/place/41+13th+St,+Linden,+Randburg,+2104/@-26.1342006,28.0006844,17z";

export default function SlideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Auto-close on large screens
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    handleResize(); // run once on mount
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    window.location.href = href;
  };

  return (
    <>
      {/* Menu Button */}
      <button
        className="lg:hidden bg-transparent text-black"
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={32} className="text-black cursor-pointer" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-slate-900 text-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button aria-label="Close menu" onClick={() => setIsOpen(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="px-4 space-y-6">
          <ul className="flex flex-col gap-2">
            {menuLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base capitalize font-semibold hover:text-blue-500 transition-all duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div>
            <p className="text-sm font-semibold">Address</p>
            <p className="text-sm font-medium max-w-48">
              <a
                href={MapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-all duration-150"
              >
                41 13th Street Linden, Randburg
              </a>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Working Hours</p>
            <p className="text-sm font-medium">Monday to Friday: 7AM - 7PM</p>
            <p className="text-sm font-medium">Weekend: 10AM - 5PM</p>
          </div>
        </div>
      </div>
    </>
  );
}
