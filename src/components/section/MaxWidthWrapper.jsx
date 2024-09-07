import React from "react";

function MaxWidthWrapper({ children }) {
  return <div className="lg:px-[86px] px-[20px] ">{children}</div>;
}

export default MaxWidthWrapper;
// small screen < (785px) = px-[25px]
// md(786px) < (1023px) = px-[45px]
// lg(1024px) < screen size  = {px-[86px]}
