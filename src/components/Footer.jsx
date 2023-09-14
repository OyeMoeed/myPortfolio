import React from "react";
import { CiLinkedin, CiFacebook, CiInstagram } from "react-icons/ci";
import { AiOutlineGithub} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="max-w-screen mx-auto px-4 font-all  ">
      <div className="flex lg:flex-row flex-col">
        <div className="flex flex-col lg:w-1/2">
          <div className="flex flex-row space-x-3 lg:h-[30em] h-[20em] ">
            <a
              href="https://www.facebook.com/OyeMoeed/"
              target="_blank"
              className="w-1/2 border cursor-pointer hover:border-[#f1f1f1] hover:text-[#f1f1f1] border-[#383838] rounded-3xl text-[#383838] flex flex-col justify-between p-[1em]"
            >
              <CiFacebook size={40} />
              <p className="text-[#f1f1f1] lg:text-[2em]">Facebook</p>
            </a>
            <a
              href="https://www.instagram.com/oye_moeed/"
              target="_blank"
              className="w-1/2 border border-[#383838]  hover:border-[#f1f1f1] hover:text-[#f1f1f1] rounded-3xl text-[#383838] p-[1em]  flex flex-col justify-between"
            >
              <CiInstagram size={40} />
              <p className="text-[#f1f1f1] lg:text-[2em]">Instagram</p>
            </a>
          </div>
          <div className="flex flex-row space-x-3 lg:h-[30em] h-[20em] mt-[1rem] ">
            <a
              href="https://www.instagram.com/oye_moeed/"
              target="_blank"
              className="w-1/2 border border-[#383838]  hover:border-[#f1f1f1] hover:text-[#f1f1f1] rounded-3xl text-[#383838] p-[1em]  flex flex-col justify-between"
            >
              <CiLinkedin size={40} />
              <p className="text-[#f1f1f1] lg:text-[2em]">Linked In</p>
            </a>
            <a
              href="https://www.instagram.com/oye_moeed/"
              target="_blank"
              className="w-1/2 border border-[#383838]  hover:border-[#f1f1f1] hover:text-[#f1f1f1] rounded-3xl text-[#383838] p-[1em]  flex flex-col justify-between"
            >
              <AiOutlineGithub size={40} />
              <p className="text-[#f1f1f1] lg:text-[2em]">Github</p>
            </a>
          </div>
        </div>
        <div className="pl-2 lg:w-1/2">
          <div className=" mt-[1em] lg:mt-[0em] border border-[#383838] rounded-3xl p-[1em] flex flex-col">
            <h1 className="lg:w-[20em] lg:text-[2em] text-[1.5em]  text-[#f1f1f1] pb-[5rem]">
              If you have a general or product related query, please feel free
              to drop me an email or fill the form
            </h1>
            <p className="text-[#383838] pb-[2em]">Email</p>
            <p className="text-[#f1f1f1] lg:text-[2em] text-[1.5em] pb-[2em]">
              oyemoeed@gmail.com
            </p>
            <p className="text-[#383838] pb-[2em]">Enter Your Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
