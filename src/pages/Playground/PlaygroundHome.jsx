import React from "react";
import image from "../assets/landing.png";
import image2 from "../assets/Expense.png";
import image3 from "../assets/weather.png";

import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const PlaygroundHome = () => {
  return (
    // Container for the Projects section
    <div className="max-w-screen px-4 mx-auto font-all overflow-hidden mb-[2em]">
      <div className="flex flex-col justify-center text-justify rounded-3xl border border-b-0 border-[#383838]">
        {/* Section title */}
        <div className="text-[#f1f1f1] mt-[5em] lg:text-[1em] text-[0.5em] text-center">
          <h1>( PLAYGROUND )</h1>
        </div>

        {/* Projects */}
        <div className="flex flex-col px-[2em]">
          <div className="flex flex-col text-center mb-[5em]">
            <h1 className="text-[#f1f1f1] font-light md:text-[9em] text-[3em]">
              Projects
            </h1>
          </div>

          {/* A+ Studio Landing Page */}
          <a
            href="https://moeedinternship.netlify.app/"
            target="blank"
            className="border border-[#383838] border-b-0 border-l-0 border-r-0 rounded-3xl lg:text-[1em] text-[0.5em] pb-[2em] cursor-pointer"
          >
            <div className="flex justify-between text-left">
              <h1 className="text-[#f1f1f1] py-[2em] pl-[1em]">
                <div>A+ Studio Landing Page</div>
              </h1>
              <h1 className="text-[#f1f1f1] py-[2em] pr-[1em]"> Starter</h1>
            </div>
            <div>
              <img src={image} alt="/" className="px-[1em] w-screen rounded-3xl" />
            </div>
          </a>
        </div>

        {/* Expense Tracker */}
        <div className="px-[2em]">
          <div className="flex lg:flex-row flex-col justify-between">
            <a
              href="https://symphonious-sable-5ddc06.netlify.app/"
              target="blank"
              className=" cursor-pointer"
            >
              <div className="border  border-[#383838] border-b-0 border-l-0 border-r-0 rounded-3xl  lg:text-[1em] text-[0.5em] ">
                <div className="flex justify-between text-left">
                  <h1 className="text-white py-[2em] pl-[1em] ">
                    <div>Weather App</div>
                  </h1>
                  <h1 className="text-white py-[2em] pr-[1em]"> Starter</h1>
                </div>
                <div>
                  <img
                    src={image3}
                    alt="/"
                    className="pt-[1em] pb-[3em] lg:w-[50em] rounded-3xl"
                  />
                </div>
              </div>
            </a>
            <div>
              <a
                href="https://symphonious-sable-5ddc06.netlify.app/"
                target="blank"
                className=" lg:space-x-4 mt-[2em] cursor-pointer"
              >
                <div className="border  border-[#383838] border-b-0 border-l-0 border-r-0 rounded-3xl  lg:text-[1em] text-[0.5em] ">
                  <div className="flex justify-between text-left">
                    <h1 className="text-white py-[2em] pl-[1em] ">
                      <div>Expense Tracker</div>
                    </h1>
                    <h1 className="text-white py-[2em] pr-[1em]"> Starter</h1>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="/"
                      className="pt-[1em] pb-[3em] lg:w-[50em] rounded-3xl"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundHome;
