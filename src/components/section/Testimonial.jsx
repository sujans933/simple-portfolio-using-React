import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Star } from "../icons/Star";

function Testimonial() {
  return (
    <div className=" bg-[#F5FCFF]  ">
      <MaxWidthWrapper>
        <div className="py-[150px] flex flex-col gap-[106px] ">
          <div className="firstRow">
            <p className="text-[21px] font-semibold ">Clients Feedback</p>
            <h1 className="text-[64px] font-bold mt-[21px] ">
              Customer testimonials
            </h1>
          </div>
          <div className="secondRow">
            <div className="text-[21px] flex flex-col gap-[42px] w-[100%] max-w-[554px] p-[42px] border-[1.33px] border-[#006B6A] rounded-[8px]  ">
              <div className="flex gap-2">
                <Star /> <Star /> <Star /> <Star /> <Star />
              </div>
              <p className=" font-normal ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis
              </p>
              <div className="flex items-center ">
                <img
                  src="Avatar1.png"
                  alt=""
                  width="74px"
                  height="74px"
                  className="mr-[21px] "
                />
                <div className="">
                  <p className=" font-semibold ">Dianne Russell</p>
                  <p className=" font-normal ">Starbucks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Testimonial;