import React from "react";
import MaxWidthWrapper from "../../section/MaxWidthWrapper";
import Button from "../../section/Button";

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
        <Button title="Contact Me" type="submit" varient="bg-primary" />
      </div>
    </MaxWidthWrapper>
  );
}

export default Header;
