import React from "react";
import image from "../assets/landing.png";
import image2 from "../assets/Expense.png";
import image3 from "../assets/weather.png";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    // Container for the Projects section
    <div className="max-w-screen px-4 py-[5em] mx-auto font-all overflow-hidden">
      <div className="flex flex-col justify-center text-justify ">
        {/* Section title */}
        <div className="text-[#f1f1f1] mt-[5em] lg:text-[1em] text-[0.5em] text-center">
          <h1>( Playground )</h1>
        </div>

        {/* Projects */}
        <div className="flex flex-col">
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
              className="border border-[#383838] border-b-0 border-l-0 border-r-0 rounded-3xl lg:text-[1em] text-[0.5em] mb-[2em] cursor-pointer w-screen"
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
          <div className="flex lg:flex-row flex-col lg:space-x-[15em] lg:space-y-0 space-y-[1em]" >
            <motion.a
              whileHover={{ opacity: 0.6 }}
              href="https://weather-app-two-brown.vercel.app/"
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
                href="hhttps://expense-tracker-two-neon.vercel.app/"
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

        {/* All Projects Link */}
        <Link
          to="/playground"
          className="border  border-[#383838] border-b-0 border-l-0 border-r-0 rounded-2xl lg:text-[1em] text-[0.5em]"
        >
          <div className="flex justify-between text-left flex-col">
            <h1 className="text-white py-[2em] pl-[1em] cursor-pointer">
              <div>All Projects</div>
            </h1>
            <div className="border  border-[#383838]  rounded-2xl lg:text-[1em] text-[0.5em] h-[60em] items-center justify-center flex lg:h-[30em] hover:border-[#f1f1f1]">
              <motion.div
                whileHover={{ rotate: 540 }}
                transition={{ duration: 1 }}
              >
                <AiOutlinePlus
                  size={50}
                  className="text-[#383838] hover:text-[#f1f1f1]"
                />
              </motion.div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
