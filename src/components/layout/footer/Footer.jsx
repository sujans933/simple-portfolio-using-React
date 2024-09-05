import React from "react";
import MaxWidthWrapper from "../../section/MaxWidthWrapper";
import { Facebook, Instagaram, LinkD, Twitter } from "../../icons/Socialmedia";

function Footer() {
  return (
    <div className="bg-[#F5FCFF] py-[106px] ">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center">
          <img src="Logo.png" alt="logo" width="186px" height="40px" />
          <ul className="flex gap-[42px] capitalize text-[21px] font-normal ">
            <li className="hover:text-primary ">
              <a href="">home</a>
            </li>
            <li className="hover:text-primary ">
              <a href="">portfolio</a>
            </li>
            <li className="hover:text-primary ">
              <a href="">about me</a>
            </li>
            <li className="hover:text-primary ">
              <a href="">contact me</a>
            </li>
            <li className="hover:text-primary ">
              <a href="">testimonial</a>
            </li>
          </ul>
          <div className="flex gap-2">
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Instagaram />
            </a>
            <a href="">
              <Twitter />
            </a>
            <a href="">
              <LinkD />
            </a>
          </div>
        </div>
        <div className="flex justify-between text-[18px] font-normal mt-[106px] pt-[42px] border-t-[1.5px] border-[#2829388C]  ">
          <p className="  ">Made with 💖 by Airdokan</p>
          <ul className="flex gap-[32px] ">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Cookies Settings</a>
            </li>
          </ul>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Footer;
