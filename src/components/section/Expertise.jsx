import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

function Expertise() {
  const expertise = [
    {
      logo: "icon-1.png",
      title: "Strategy & Direction",
      desc: "orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      logo: "icon-2.png",
      title: "Branding & Logo",
      desc: "orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      logo: "icon-3.png",
      title: "UI & UX Design",
      desc: "orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      logo: "icon-4.png",
      title: "Webflow Development",
      desc: "orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];
  return (
    <MaxWidthWrapper>
      <div className="py-[150px] flex flex-col gap-[106px] ">
        <div className="flex flex-col gap-[21px] ">
          <p className="text-[21px] font-semibold ">My Skills</p>
          <h1 className="text-[64px] font-bold ">My Expertise</h1>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 justify-between">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="w-[405px] h-[370px] p-[32px] bg-[#F5FCFF] rounded-[10px] hover:border-b-[4px] hover:border-primary "
            >
              <div
                className="bg-white rounded-[10px] w-[80px] h-[80px] p-[13px] "
                style={{ boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.10)" }}
              >
                <img src={item.logo} alt="icon-1" width="53px" height="53px" />
              </div>
              <h1 className="text-[32px] font-bold mt-[32px] mb-[21px] ">
                {item.title}
              </h1>
              <p className="text-[21px] font-normal ">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Expertise;
