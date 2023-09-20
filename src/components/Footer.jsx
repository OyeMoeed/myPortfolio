import React from "react";
import { CiLinkedin, CiFacebook, CiInstagram } from "react-icons/ci";
import { AiOutlineGithub } from "react-icons/ai";
import { Email } from "./Api/Email";

const Footer = () => {
  return (
    <div className="max-w-screen mx-auto px-4 font-all">
      {/* Footer content container */}
      <div className="flex lg:flex-row flex-col">
        {/* Social media links */}
        <div className="flex flex-col lg:w-1/2">
          {/* Facebook and Instagram links */}
          <div className="flex flex-row space-x-3 lg:h-[30em] h-[20em]">
            <a
              href="https://www.facebook.com/OyeMoeed/"
              target="blank"
              className="w-1/2 border cursor-pointer hover:border-[#f1f1f1] hover:text-[#f1f1f1] border-[#383838] rounded-3xl text-[#383838] flex flex-col justify-between p-[1em]"
            >
              <CiFacebook size={40} />
              <p className="text-[#f1f1f1] lg:text-[2em]">Facebook</p>
            </a>
            <a
              href="https://www.instagram.com/oye_moeed/"
              target="blank"
              className="w-1/2 border border-[#383838] hover:border-[#f1f1f1] hover:text-[#f1f1f1] rounded-3xl text-[#383838] p-[1em]  flex flex-col justify-between"
            >
              <CiInstagram size={40} />
              <p className="text-[#f1f1f1] lg:text-[2em]">Instagram</p>
            </a>
          </div>

          {/* LinkedIn and Github links */}
          <div className="flex flex-row space-x-3 lg:h-[30em] h-[20em] mt-[1rem]">
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile/"
              target="blank"
              className="w-1/2 border border-[#383838] hover:border-[#f1f1f1] hover:text-[#f1f1f1] rounded-3xl text-[#383838] p-[1em]  flex flex-col justify-between"
            >
              <CiLinkedin size={40} />
              <p className="text-[#f1f1f1] lg:text-[2em]">LinkedIn</p>
            </a>
            <a
              href="https://github.com/your-github-username/"
              target="blank"
              className="w-1/2 border border-[#383838] hover:border-[#f1f1f1] hover:text-[#f1f1f1] rounded-3xl text-[#383838] p-[1em]  flex flex-col justify-between"
            >
              <AiOutlineGithub size={40} />
              <p className="text-[#f1f1f1] lg:text-[2em]">Github</p>
            </a>
          </div>
        </div>

        {/* Contact information */}
        <div className="pl-2 lg:w-1/2">
          <div className="mt-[1em] lg:mt-[0em] border border-[#383838] rounded-3xl p-[1em] flex flex-col">
            <h1 className="lg:w-[20em] lg:text-[2em] text-[1.5em]  text-[#f1f1f1] pb-[5rem]">
              If you have a general or product-related query, please feel free
              to drop me an email or fill out the form below:
            </h1>
            <p className="text-[#383838] pb-[2em]">Email</p>
            <p className="text-[#f1f1f1] lg:text-[2em] text-[1.5em] pb-[7.3em]">
              oyemoeed@gmail.com
            </p>
            <p className="text-[#383838] pb-[2em]">Enter Your Details</p>
            {/* Include the Email component */}
            <Email />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
