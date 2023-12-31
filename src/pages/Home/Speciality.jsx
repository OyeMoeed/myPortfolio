import React from "react";

const Speciality = () => {
  return (
    // Container for the Speciality section
    <div className="max-w-screen mx-auto lg:px-[3.5em] px-[2em]  font-all my-[10em]">
      <div>
        {/* Main text content */}
        <h1 className="text-[#797979] lg:text-[4rem] md:text-[2.5rem] text-[0.9rem]">
          <span className="lg:ml-[17em] ml-[3em] md:ml-[15em]  ">
            I craft digital experiences that balance{" "}
          </span>
          <span className="text-[#f1f1f1]">efficiency, aesthetics</span>, and{" "}
          <span className="text-[#f1f1f1]"> functionality. </span>
          Imbuing them with a sense of purpose and character.
        </h1>
      </div>
    </div>
  );
};

export default Speciality;
