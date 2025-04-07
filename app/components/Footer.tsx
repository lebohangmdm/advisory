import { Facebook, Instagram, XIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-2 sm:py-2.5 md:py-3">
      <div className="ax-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs md:text-sm">
            © {year} Verdun Business Advisory | Website Designed by{" "}
            <Link
              href={"https://my-profile-dusky.vercel.app/"}
              className="font-medium"
            >
              SynthCreations
            </Link>
          </p>
          <ul className="flex items-center gap-2.5">
            <li>
              <Link
                href="/"
                className="p-[3px] bg-transparent rounded-full inline-flex"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-slate-900" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="p-[3px] bg-transparent rounded-sm inline-flex"
                aria-label="Twitter/X"
              >
                <XIcon className="h-4 w-4 text-slate-900" />
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="p-[3px] bg-transparent rounded-sm inline-flex"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4  text-slate-900" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
