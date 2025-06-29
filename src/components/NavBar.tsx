"use client";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const Menu = (
    <Image
      src={`/images/Menu.png`}
      className="menu-icon"
      alt="menu icon"
      width={24}
      height={24}
    />
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact-section");
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed z-100 px-4 md:px-12 py-4 flex w-full items-center justify-between gap-5">
      <div
        className={`z-10  aspect-square p-0 rounded-full border-[1.5px] border-accent frost p-5`}
      >
        <Link href="/">
          <Image
            src="/images/logo-icon.png"
            alt="kal-business logo"
            width={80}
            height={80}
            className="max-h-fit"
          />
        </Link>
      </div>
      <div
        className={`z-5 flex max-h-16 items-center border-[1.5px] border-accent basis-full justify-end md:justify-between -ml-10 px-6 py-2 rounded-r-full frost`}
      >
        <p className="hidden md:inline font-sofia-sans">KAL GENERAL BUSINESS</p>
        <div className="hidden md:flex items-center space-x-6 md:space-x-12">
          <div className="relative group">
            <button className="hover:text-accent flex gap-2 items-center">
              SERVICES <ArrowDown className="h-full w-auto text-accent" />
            </button>
            <div className="absolute left-auto hidden w-80 py-3 group-hover:block">
              <ul className="p-6 bg-primary text-white text-lg shadow-lg rounded-xl border-[1.5px] border-accent">
                <a
                  href="/trading"
                  className="flex items-center justify-between group/link"
                >
                  <li className="px-4 py-2 group-hover/link:text-accent transition-colors ease-in">
                    General Trading
                  </li>
                  <ArrowRight className="h-5 w-5 hidden group-hover/link:block text-accent transition-all duration-200 ease-in-out" />
                </a>
                <a
                  href="/financial"
                  className="flex items-center justify-between group/link"
                >
                  <li className="px-4 py-2 group-hover/link:text-accent transition-colors ease-in">
                    Accounting and Financial Services
                  </li>
                  <ArrowRight className="h-5 w-5 hidden group-hover/link:block text-accent transition-all duration-200 ease-in-out" />
                </a>
                <a
                  href="/film"
                  className="flex items-center justify-between group/link"
                >
                  <li className="px-4 py-2 group-hover/link:text-accent transition-colors ease-in">
                    Film Production
                  </li>
                  <ArrowRight className="h-5 w-5 hidden group-hover/link:block text-accent transition-all duration-200 ease-in-out" />
                </a>
              </ul>
            </div>
          </div>
          <button onClick={toggleTheme} className="focus:outline-none">
            <div
              className={`flex p-2 aspect-square hover:bg-accent rounded-xl`}
            >
              <div className="w-7 h-7 icon-bg"></div>
            </div>
          </button>
        </div>
        <div className="md:hidden flex items-center space-x-6">
          <button onClick={toggleTheme} className="focus:outline-none">
            <div
              className={`flex p-2 aspect-square hover:bg-accent rounded-xl`}
            >
              <div className="w-7 h-7 icon-bg"></div>
            </div>
          </button>
          <button onClick={toggleMenu} className="focus:outline-none">
            <div
              className={`flex p-2 aspect-square rounded-xl hover:bg-accent`}
            >
              {Menu}
            </div>
          </button>
        </div>
        {isMenuOpen && (
          <div
            className={`absolute z-4 top-15 left-auto rounded-b-2xl border-[1.5px] border-foreground w-full shadow-lg md:hidden bg-primary`}
          >
            <ul className="flex flex-col items-center space-y-4 py-4 font-mulish text-center">
              <li className="text-accent">SERVICES</li>
              <a href="/trading">
                <li className="px-4 py-2 text-white hover:text-accent transition-colors ease-in">
                  General Trading
                </li>
              </a>
              <a href="/financial">
                <li className="px-4 py-2 text-white hover:text-accent transition-colors ease-in">
                  Accounting and Financial Services
                </li>
              </a>
              <a href="/film">
                <li className="px-4 py-2 text-white hover:text-accent transition-colors ease-in">
                  Film Production
                </li>
              </a>
              <button
                className="pl-4 p-1 border-[1.5px] border-accent flex gap-3 items-center rounded-full"
                onClick={scrollToContact}
              >
                <p className="text-white text-sm">CONTACT US</p>
                <span className="content-center px-3 bg-accent aspect-square rounded-full">
                  <Image
                    height={14}
                    width={14}
                    src="/images/tiltedArrow.png"
                    alt="arrow"
                  />
                </span>
              </button>
            </ul>
          </div>
        )}
      </div>
      <button
        onClick={scrollToContact}
        className={`group hidden border-[1.5px] border-accent md:flex gap-3 items-center rounded-full w-fit h-14 pl-4 p-1 frost`}
      >
        <p className="whitespace-nowrap font-medium font-mulish">CONTACT US</p>
        <span className="flex items-center justify-center bg-accent aspect-square rounded-full h-full">
          <Image
            height={16}
            width={16}
            className="max-h-3 max-w-3 group-hover:rotate-45 transition-all duration-100 ease-in"
            src="/images/tiltedArrow.png"
            alt="arrow"
          />
        </span>
      </button>
    </nav>
  );
};

export default NavBar;
