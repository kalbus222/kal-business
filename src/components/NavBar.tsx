"use client";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const NavBar = () => {
  const Moon = (
    <Image src="/images/Moon.png" alt="moon icon" width={30} height={30} />
  );
  const Sun = (
    <Image src="/images/Sun.png" alt="sun icon" width={28} height={28} />
  );
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
      src={theme === "dark" ? `/images/MenuLight.png` : `/images/Menu.png`}
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
        className={`z-10 p-4 flex items-center justify-center w-20 aspect-square rounded-full border-[1.5px] border-foreground ${
          theme === "dark" ? "darkFrost" : "lightFrost"
        }`}
      >
        <Image
          src="/images/logo.png"
          alt="kal-business logo"
          width={106}
          height={73}
          className="max-w-fit"
        />
      </div>
      <div
        className={`z-5 flex max-h-16 outline-[1.5px] outline-background items-center border-[1.5px] border-foreground basis-full justify-end md:justify-between -ml-10 px-6 py-2 rounded-r-full ${
          theme === "dark" ? "darkFrost" : "lightFrost"
        }`}
      >
        <p className="hidden md:inline">KAL GENERAL BUSINESS</p>
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="hover:text-accent">SERVICES</button>
            <div className="absolute left-auto  hidden w-96 py-3  group-hover:block">
              <ul className="p-6 bg-primary text-white text-lg shadow-lg rounded-xl">
                <a href="/trading">
                  <li className="px-4 py-2 hover:text-accent transition-colors ease-in">
                    General Trading
                  </li>
                </a>
                <a href="/financial">
                  <li className="px-4 py-2 hover:text-accent transition-colors ease-in">
                    Accounting and Financial Services
                  </li>
                </a>
                <a href="/film">
                  <li className="px-4 py-2 hover:text-accent transition-colors ease-in">
                    Film Production
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <button onClick={toggleTheme} className="focus:outline-none">
            <div className="flex p-2 aspect-square hover:bg-accent rounded-xl">
              {theme === "dark" ? Sun : Moon}
            </div>
          </button>
        </div>
        <div className="md:hidden flex items-center space-x-6">
          <button onClick={toggleTheme} className="focus:outline-none">
            <div className="flex p-2 aspect-square hover:bg-accent rounded-xl">
              {theme === "dark" ? Sun : Moon}
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
                className="pl-4 p-1 border-[1.5px] border-white flex gap-3 items-center rounded-full"
                onClick={scrollToContact}
              >
                <p className="text-white text-sm">CONTACT US</p>
                <span className="content-center px-4 bg-accent aspect-square rounded-full">
                  <Image
                    height={16}
                    width={16}
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
        className={`group hidden border-[1.5px] border-foreground md:flex gap-3 items-center rounded-full w-fit h-14 pl-4 p-1 ${
          theme === "dark" ? "darkFrost" : "lightFrost"
        }`}
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
