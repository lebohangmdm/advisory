import SlideMenu from "@/app/components/SlideMenu";
import { navLinks } from "@/lib/links";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-white/20">
      <div className=" max-w-6xl mx-auto px-4  sm:px-6 lg:px-8 py-4 md:pt-6 z-30">
        <nav className="flex items-center justify-between">
          <Logo />
          <ul className="hidden lg:flex items-center lg:gap-x-12 xl:gap-x-14">
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-black capitalize font-semibold text-lg hover:text-blue-500 transition-all duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <SlideMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
