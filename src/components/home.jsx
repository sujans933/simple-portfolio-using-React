import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="">
      <header className="flex relative pt-[44px] items-center justify-between w-[80%] m-auto ">
        <div className="logo">
          <a
            className="no-underline text-[#0082e0] text-[36px] normal font-semibold height-normal   "
            href=""
          >
            FACEBOOK
          </a>
        </div>

        <div className="menu">
          <ul className="flex justify-between gap-[50px] list-none pl-[168px] pr-[168px] ">
            <li className="block items-center no-underline text-[20px] normal font-medium ">
              <a href="">Features</a>
            </li>
            <li className="block items-center no-underline text-[20px] normal font-medium ">
              <a href="">Post</a>
            </li>
            <li className="block items-center no-underline text-[20px] normal font-medium ">
              <a href="">About Us</a>
            </li>
            <li className="block items-center no-underline text-[20px] normal font-medium ">
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center px-[35px] py-[10px] rounded-[10px] border-[2px] border-[#050505] bg-[#fff] text-[#000] text-[28px] font-bold flex-shrink-0 ">
          Log In
        </div>
      </header>
      <section id="home" className="container">
        <div className="first-col">
          <h1>
            Welcome to the internet world!{" "}
            <span className="title">Join Us</span> for the new experience.
          </h1>
          <div className="icons-rating">
            <div className="visitors-ratings">
              <img src="People.png" alt="peoples" width="56px" height="56px" />
              <h3>
                Visitors <br />
                12k
              </h3>
            </div>
            <div className="line"></div>
            <div className="visitors-ratings">
              <img
                src="HalfStar.png"
                alt="half star"
                width="56px"
                height="56px"
              />
              <h3>
                Ratings <br />
                4.5 Star
              </h3>
            </div>
          </div>
          <div className="button">Learn More</div>
        </div>
        <div className="second-col"></div>
      </section>
    </div>
  );
}

export default Home;
