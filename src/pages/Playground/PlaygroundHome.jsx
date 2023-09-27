import React from "react";
import image from "../assets/landing.png";
import image2 from "../assets/Expense.png";
import image3 from "../assets/weather.png";
import { motion } from "framer-motion";

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
          <div className="flex justify-center">
            <motion.a
              whileHover={{ opacity: 0.6 }}
              href="https://moeedinternship.netlify.app/"
              target="blank"
              className="border border-[#383838] border-b-0 border-l-0 border-r-0 rounded-3xl lg:text-[1em] text-[0.5em] mb-[2em] cursor-pointer  w-screen"
            >
              <div className="flex justify-between">
                <h1 className="text-[#f1f1f1] py-[2em] pl-[1em]">
                  <div>A+ Studio Landing Page</div>
                </h1>
                <h1 className="text-[#f1f1f1] py-[2em] pr-[1em]"> Starter</h1>
              </div>
              <div className="">
                <img src={image} alt="/" className=" w-full rounded-r-3xl" />
              </div>
            </motion.a>
          </div>
        </div>

        {/* Expense Tracker */}
        <div className="px-[2em] pb-[2em]">
          <div className="flex lg:flex-row flex-col lg:space-x-[15em] lg:space-y-0 space-y-[1em]">
            <motion.a
              whileHover={{ opacity: 0.6 }}
              href="https://weatherappbymoeed.netlify.app/"
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
                    className="lg:w-[50em] rounded-3xl max-h-fit"
                  />
                </div>
              </div>
            </motion.a>
            <motion.div whileHover={{ opacity: 0.6 }}>
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
                    <h1 className="text-white py-[2em] pr-[1em]"></h1>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="/"
                      className="lg:w-[50em] rounded-3xl"
                    />
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundHome;
