import React from "react";

const Hero = () => {
  return (
    <div className="max-w-screen h-screen px-4 mx-auto font-all overflow-hidden">
      <div className="flex flex-col  rounded-3xl border border-[#383838] justify-center text-justify ">
          <div className="text-[#f1f1f1] my-[5em] lg:text-[1em] text-[0.5em] text-center">
            <h1>( NAME )</h1>
          </div>
        <div className="flex flex-col h-screen justify-between">
          <div className="flex flex-col text-center ">
            <h1 className="text-[#f1f1f1] font-light md:text-[9em] text-[3em]">
              Moeed
            </h1>
            <h1 className="text-[#f1f1f1] font-light md:text-[9em] text-[3em] ">
              Sarwar
            </h1>
          </div>
          <div className="text-[#797979] text-[0.4em] lg:text-[1em] text-center p-4">
            <p>
              'Your Time Is Limited, So Don't Waste It Living Someone Else's
              Life' - Steve Jobs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
