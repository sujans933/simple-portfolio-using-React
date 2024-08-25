import React from "react";
import MaxWidthWrapper from "../../section/MaxWidthWrapper";

function Header() {
  const lists = [
    { title: "home", link: "/#" },
    { title: "Portfolio", link: "/#" },
    { title: "About me", link: "/#" },
    { title: "testimonials", link: "/#" },
  ];
  return (
    <MaxWidthWrapper>
      <div className="flex justify-between items-center py-[44px] ">
        <img src="Logo.png" alt="logo" width="186px" height="40px" />
        <div className="flex gap-[42px] text-[21px] font-normal capitalize ">
          {lists.map((list, index) => (
            <a className="hover:text-primary " href={list.link}>
              {list.title}
            </a>
          ))}
        </div>
        <button className="border-[1.5px] border-primary text-primary rounded-[5px] py-[18px] px-[42px] ">
          Contact me
        </button>
      </div>
    </MaxWidthWrapper>
  );
}

export default Header;
