import React from "react";

const Services = () => {
  return (
    <div className="max-w-screen mx-auto px-4 font-all mt-[9em] overflow-hidden">
      <div className="flex flex-col">
        <div className="flex justify-center w-screen">
          {" "}
          <h1 className="text-[#f1f1f1] pb-[3em]">(MAIN SERVICES)</h1>
        </div>
        <div className="flex flex-row justify-between text-[2em] lg:text-[5em] border p-3 rounded-xl border-[#383838]">
          <div className="text-[#f1f1f1]">Front End</div>
          <div className="text-[#797979]">Back End</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
