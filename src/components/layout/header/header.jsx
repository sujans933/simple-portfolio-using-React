import React from "react";
import MaxWidthWrapper from "../../section/MaxWidthWrapper";

function Header() {
  const lists = [
    { title: "home", link: "/#" },
    { title: "portfolio", link: "/#" },
    { title: "about me", link: "/#" },
    { title: "testimonials", link: "/#" },
  ];
  return (
    <MaxWidthWrapper>
      <div className="flex justify-between items-center py-[25px] ">
        <img src="Logo.png" alt="logo" width="186px" height="40px" />
        <div className="flex gap-[42px] capitalize font-normal text-[21px] ">
          {lists.map((list, index) => (
            <a className="hover:text-primary" href={list.link} key={index}>
              {list.title}
            </a>
          ))}
        </div>
        <button className="bg-primary text-white hover:bg-white hover:border-[1.5px] hover:border-primary hover:text-primary rounded-[5px] px-[42px] py-[18px] ">
          Contact Me
        </button>
      </div>
    </MaxWidthWrapper>
  );
}

export default Header;
