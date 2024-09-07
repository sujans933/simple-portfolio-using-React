import React from "react";

function Button({ title, type, varient }) {
  return (
    <button
      type={`${type}`}
      className={`${varient} text-white bg-primary hover:bg-white hover:border-[1.5px] hover:border-primary hover:text-primary rounded-[5px] lg:px-[42px] px-[28px] lg:py-[18px] py-[12px]`}
    >
      {title}
    </button>
  );
}

export default Button;
