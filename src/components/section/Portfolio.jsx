import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "./Button";

function Portfolio() {
  const items = [
    {
      logo: "img-1.png",
      title: "Ahuse",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      logo: "img-2.png",
      title: "App Dashboard",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      logo: "img-3.png",
      title: "Easy Rent",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];

  return (
    <MaxWidthWrapper>
      <div id="portfolio" className="flex flex-col gap-[106px] py-[149px] ">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[21px] font-semibold ">Recent Projects</p>
            <h1 className="text-[64px] font-bold mt-[21px] ">My Portfolio</h1>
          </div>
          <Button
            title="🌐 Visit My Dribble"
            type="button"
            varient="bg-[#E62872]"
          />
        </div>
        <div className=" flex justify-between ">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-[100%] max-w-[554px] "
              style={{ boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.10)" }}
            >
              <img
                src={item.logo}
                alt=""
                style={{ width: "100%", maxWidth: "554px", height: "auto" }}
              />
              <div className="p-[32px] ">
                <h2 className="text-[32px] font-semibold mb-[10px] ">
                  {item.title}
                </h2>
                <p className="text-[21px] font-normal mb-[32px] ">
                  {item.desc}
                </p>
                <div className="text-[18px] hover:text-primary font-semibold border-b-[1.33px] border-primary w-[169px] pb-[10px] ">
                  <a href="#">View In Dribbble 🡭</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Portfolio;
