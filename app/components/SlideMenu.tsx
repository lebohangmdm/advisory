"use client";

import { menuLinks } from "@/lib/links";
import { Facebook, Instagram, Menu, X, X as XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SlideMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-slate-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${
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
                aria-label="Facebook"
                className="p-[3px] bg-white rounded-full inline-flex"
              >
                <Facebook className="w-4 h-4 text-slate-900" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                aria-label="Facebook"
                className="p-[3px] bg-white rounded-full inline-flex"
              >
                <XIcon className="w-4 h-4 text-slate-900" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                aria-label="Instagram"
                className="p-[3px] bg-white rounded-sm inline-flex"
              >
                <Instagram className="h-4 w-4 text-slate-900" />
              </Link>
            </li>
            {/* Add more social icons if needed */}
          </ul>
        </div>
      </div>
    </>
  );
}
