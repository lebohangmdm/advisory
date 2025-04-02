import Link from "next/link";
import Menu from "@/app/components/Menu";
import { navLinks } from "@/lib/links";

const Header = () => {
  return (
    <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:pt-6 backdrop-blur-md">
      <nav className=" flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">Logo</h1>
        <ul className="hidden lg:flex items-center lg:gap-x-12 xl:gap-x-14">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.href} className="nav-link text-white">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <Menu /> */}
      </nav>
    </header>

    // <header className="absolute top-0 left-0 w-full max-x-6xl mx-auto px-4 sm:px-6 ">
    //   <nav className="flex items-center justify-between">
    //     <p className="text-3xl font-bold">Logo</p>
    //     <ul className="hidden lg:flex items-center lg:gap-x-12 xl:gap-x-14">
    //       <li>
    //         <Link href={"/"} className="nav-link">
    //           About Us
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href={"/"} className="nav-link">
    //           Services
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href={"/"} className="nav-link">
    //           Credentials
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href={"/"} className="nav-link">
    //           Testimonials
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href={"/"} className="nav-link">
    //           Contact Us
    //         </Link>
    //       </li>
    //     </ul>

    //     <Menu />
    //   </nav>
    // </header>
  );
};

export default Header;
