import React from "react";

const Aim = () => {
  return (
    <div className="max-w-screen mx-auto lg:px-[3.5em] px-[2em]  font-all my-[10em] ">
      <div>
        <h1 className="text-[#f1f1f1] lg:text-[4rem] md:text-[2.5rem] text-[0.9rem]">
          <span className="lg:ml-[20.5em] ml-[3em] md:ml-[15em]  ">
            {" "}
            My goal is to harmoniously blend{" "}
          </span>
          <span className="text-[#797979]">beauty, practicality</span>, and{" "}
          <span className="text-[#797979]">meaning </span>
          in code, allowing us to delve into its profound dimensions and convey
          emotions using visual elements.{" "}
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col lg:justify-evenly text-[#f1f1f1] mt-[5em] lg:space-x-5 space-y-3">
        <div className="border border-[#383838] border-b-0 rounded-3xl lg:w-1/3 ">
          {" "}
          <h1 className="pt-[1em] pb-[1em] flex justify-center lg:text-[1.5em] text-[0.8em]">
            Based in Gujranwala, Pakistan
          </h1>
        </div>
        <div className="border border-[#383838] border-b-0 rounded-3xl lg:w-1/3 ">
          {" "}
          <h1 className="pt-[1em] pb-[1em] flex justify-center lg:text-[1.5em] text-[0.8em]">
            React Developer
          </h1>
        </div>
        <div className="border border-[#383838] border-b-0 rounded-3xl lg:w-1/3 ">
          {" "}
          <h1 className="pt-[1em] pb-[1em] flex justify-center lg:text-[1.5em] text-[0.8em]">
            Passionate
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Aim;
