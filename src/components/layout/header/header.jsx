import React, { useState } from "react";
import MaxWidthWrapper from "../../section/MaxWidthWrapper";
import Button from "../../section/Button";
import { Cross, Hamburger } from "../../icons/ToggleIcons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lists = [
    { title: "home", link: "#home" },
    { title: "portfolio", link: "#portfolio" },
    { title: "about me", link: "#about-me" },
    { title: "testimonials", link: "#testimonials" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MaxWidthWrapper>
      <div className="flex justify-between items-center lg:py-[25px] py-[25px] ">
        {/* Logo */}
        <img src="Logo.png" alt="logo" width="186px" height="40px" />

        {/* Mobile Menu View */}

        <button className="lg:hidden focus:ouline-none " onClick={toggleMenu}>
          {isMenuOpen ? <Cross /> : <Hamburger />}
        </button>

        {/* Navigation Links(desktop & mobile) */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-20 left-0 w-full h-full bg-white lg:static lg:flex lg:w-auto lg:gap-8 capitalize font-medium lg:font-normal text-[21px]  `}
        >
          {lists.map((list, index) => (
            <a
              onClick={toggleMenu}
              key={index}
              className="block text-center px-5 py-3 hover:text-primary lg:inline-block"
              href={list.link}
            >
              {list.title}
            </a>
          ))}

          {/* contact button(mobile view) */}
          <div className="lg:hidden text-center mt-[16px]">
            <Button title="Contact Me" type="submit" varient="bg-primary" />
          </div>
        </nav>

        {/* contact button(desktop view) */}
        <div className="hidden lg:block ">
          <Button title="Contact Me" type="submit" varient="bg-primary" />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Header;
