import React from "react";

function Button({ title, type, varient }) {
  return (
    <button
      type={`${type}`}
      className={`${varient} text-white bg-primary hover:bg-white hover:border-[1.5px] hover:border-primary hover:text-primary rounded-[5px] px-[42px] py-[18px]`}
    >
      {title}
    </button>
  );
}

export default Button;
