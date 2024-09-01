import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

function Aboutme() {
  return (
    <MaxWidthWrapper>
      <div className="flex items-center gap-[114px] py-[133px] ">
        <div className="w-[50%]">
          <img
            src="about-me.png"
            alt=""
            style={{ width: "100%", maxWidth: "813px", height: "auto" }}
          />
        </div>
        <div className="w-[50%]">
          <p className="text-[21px] font-semibold ">About</p>
          <h1 className="text-[64px] font-bold mb-[32px] ">About Me</h1>
          <p className="text-[24px] font-normal ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            quas vel unde natus nulla veniam provident dolore, autem perferendis
            quia corporis. Doloremque, quo! Consectetur porro debitis id
            suscipit consequatur maxime?
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Aboutme;
