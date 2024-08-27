import React from "react";
import Button from "../section/Button";
import MaxWidthWrapper from "../section/MaxWidthWrapper";

function Home() {
  return (
    <div
      className="bg-[#F5FCFF] h-[100vh] pt-[133px] "
      style={{ boxShadow: "inset 0 11px 80px 0 rgba(0,0,0,0.1) " }}
    >
      <MaxWidthWrapper>
        <div className="flex justify-between items-center w-full ">
          <div className="flex flex-col gap-[21px] w-[50%] ">
            <p className="text-[21px] font-semibold ">Hey, I am John</p>
            <h1 className="text-[74px] font-bold ">
              I create <span className="text-primary ">product design</span> and
              brand experience
            </h1>
            <p className="text-[24px] font-normal ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="mt-[32px] ">
              <Button title="Get In Touch" type="button" varient=" " />
            </div>
          </div>
          <div className="w-[50%]">
            <img src="home-img.png" alt="home-img" height="729px" />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Home;
