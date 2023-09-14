import React from "react";
import image from "../assets/landing.png";
import image2 from "../assets/Expense.png";
import { AiOutlinePlus } from "react-icons/ai";
const Projects = () => {
  return (
    <div className="max-w-screen px-4 py-[5em] mx-auto font-all overflow-hidden">
      <div className="flex flex-col  justify-center text-justify ">
        <div className="text-[#f1f1f1] mt-[5em] lg:text-[1em] text-[0.5em] text-center">
          <h1>( WORKS )</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col text-center mb-[5em] ">
            <h1 className="text-[#f1f1f1] font-light md:text-[9em] text-[3em]">
              Projects
            </h1>
          </div>
          <div className="border border-[#383838] border-b-0 border-l-0 border-r-0 rounded-3xl lg:text-[1em] text-[0.5em] pb-[2em]">
            <div className="flex justify-between text-left  ">
              <h1 className="text-[#f1f1f1] py-[2em] pl-[1em] cursor-pointer">
                <a href="https://moeedinternship.netlify.app/" target="_blank">
                  A+ Studio Landing Page
                </a>
              </h1>
              <h1 className="[#f1f1f1] py-[2em] pr-[1em]"> Starter</h1>
            </div>
            <div>
              <img src={image} alt="/" className="px-[1em] w-screen" />
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:space-x-4 mt-[2em] ">
          <div className="border lg:w-1/2 border-[#383838] border-b-0 border-l-0 border-r-0 rounded-3xl  lg:text-[1em] text-[0.5em] ">
            <div className="flex justify-between text-left  ">
              <h1 className="text-white py-[2em] pl-[1em] cursor-pointer">
                <a
                  href="https://symphonious-sable-5ddc06.netlify.app/"
                  target="_blank"
                >
                  Expense Tracker
                </a>
              </h1>
              <h1 className="text-white py-[2em] pr-[1em]"> Starter</h1>
            </div>
            <div>
              <img src={image2} alt="/" className="pt-[1em] pb-[3em] " />
            </div>
          </div>
          <div className="border lg:w-1/2 border-[#383838] border-b-0 border-l-0 border-r-0 rounded-2xl lg:text-[1em] text-[0.5em]">
            <div className="flex justify-between text-left flex-col  ">
              <h1 className="text-white py-[2em] pl-[1em] cursor-pointer">
                <a>All Projects</a>
              </h1>
              <div className="border  border-[#383838]  rounded-2xl lg:text-[1em] text-[0.5em] h-[60em] items-center justify-center flex lg:h-[30em]">
                <AiOutlinePlus size={30} className="text-[#383838]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
