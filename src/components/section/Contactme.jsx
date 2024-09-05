import React from "react";
import Button from "./Button";

function Contactme() {
  return (
    <div className="flex flex-col gap-[64px] justify-center items-center py-[149px] ">
      <div className="flex flex-col items-center">
        <p className="text-[21px] font-semibold capitalize ">get in touch</p>
        <h1 className="text-[64px] font-bold capitalize mt-[21px] mb-[32px] ">
          contact me
        </h1>
        <p className="text-[24px] font-normal capitalize ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <form
        className="flex flex-col gap-[32px] w-full max-w-[1024px] "
        action=""
      >
        <div className="flex gap-[32px] ">
          <div className="flex flex-col gap-[10px] w-[50%] ">
            <label className="text-[21px] font-normal " htmlFor="">
              First Name
            </label>
            <input
              type="name"
              required
              className="border-[1.5px] border-primary rounded-[8px] p-2 "
            />
          </div>
          <div className="flex flex-col gap-[10px] w-[50%] ">
            <label className="text-[21px] font-normal " htmlFor="">
              Last Name
            </label>
            <input
              type="name"
              className="border-[1.5px] border-primary rounded-[8px] p-2 "
            />
          </div>
        </div>
        <div className="flex gap-[32px] ">
          <div className="flex flex-col gap-[10px] w-[50%] ">
            <label className="text-[21px] font-normal " htmlFor="">
              Email
            </label>
            <input
              type="email"
              required
              className="border-[1.5px] border-primary rounded-[8px] p-2 "
            />
          </div>
          <div className="flex flex-col gap-[10px] w-[50%] ">
            <label className="text-[21px] font-normal " htmlFor="">
              Phone Number
            </label>
            <input
              type="number"
              required
              className="border-[1.5px] border-primary rounded-[8px] p-2 "
            />
          </div>
        </div>
        <div className="flex flex-col gap-[10px] ">
          <label className="text-[21px] font-normal " htmlFor="">
            Choose a topic
          </label>
          <select
            name=""
            id=""
            className="border-[1.5px] border-primary rounded-[8px] p-2  "
          >
            <option value="" selected disabled>
              Select one...
            </option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
          </select>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label className="text-[21px] font-normal " htmlFor="">
            Message
          </label>
          <textarea
            className="border-[1.5px] border-primary rounded-[8px] p-2 "
            name=""
            id=""
          ></textarea>
        </div>
        <div className="flex gap-2 ">
          <input type="checkbox" />
          <span>I accept the terms</span>
        </div>
        <Button title="Submit" varient="w-[170px]" type="submit" />
      </form>
    </div>
  );
}

export default Contactme;
