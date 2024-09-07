import React from "react";
import Button from "../section/Button";
import MaxWidthWrapper from "../section/MaxWidthWrapper";

function Home() {
  return (
    <div
      id="home"
      className="bg-[#F5FCFF] lg:py-[133px] py-[65px] "
      style={{ boxShadow: "inset 0 11px 80px 0 rgba(0,0,0,0.1) " }}
    >
      <MaxWidthWrapper>
        <div className="flex justify-between items-center w-full ">
          <div className="flex flex-col gap-[21px] lg:w-[50%] ">
            <p className="lg:text-[21px] text-[18px] font-semibold ">
              Hey, I am John
            </p>
            <h1 className="lg:text-[74px] text-[48px] font-bold ">
              I create <span className="text-primary ">product design</span> and
              brand experience
            </h1>
            <p className="lg:text-[24px] text-[20px] font-normal ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="mt-[32px] ">
              <Button title="Get In Touch" type="button" varient=" " />
            </div>
          </div>
          <div className="w-[50%] lg:block hidden">
            <img src="home-img.png" alt="home-img" height="729px" />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Home;
