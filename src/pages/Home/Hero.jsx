import React from "react";

const Hero = () => {
  return (
    <div className="max-w-screen max-h-screen px-4 mx-auto font-all">
      <div className="flex flex-col border rounded-2xl border-[#383838] justify-center text-justify ">
        <div className="flex flex-col h-screen justify-between">
          <div className="flex flex-col text-center ">
            <h1 className="text-[#f1f1f1] font-light md:text-[9em] text-[5em]">
              Moeed
            </h1>
            <h1 className="text-[#f1f1f1] font-light md:text-[9em] text-[5em] ">
              Sarwar
            </h1>
          </div>
          <div className="text-[#797979] text-center">
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
