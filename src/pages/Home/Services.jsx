import React from "react";

const Services = () => {
  return (
    // Container for the Services section
    <div className="max-w-screen mx-auto px-4 font-all mt-[9em] overflow-hidden">
      <div className="flex flex-col">
        {/* Section title */}
        <div className="flex justify-center">
          <h1 className="text-[#f1f1f1] pb-[3em] lg:text-[1em] text-[0.5em]">
            ( MAIN SERVICES )
          </h1>
        </div>

        {/* Services list */}
        <div className="flex flex-row justify-between text-[1.2em]  lg:text-[5em] border p-3 rounded-xl border-[#383838]">
          {/* Front End service */}
          <div className="text-[#f1f1f1]">Front End</div>

          {/* Back End service */}
          <div className="text-[#797979]">Back End</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
