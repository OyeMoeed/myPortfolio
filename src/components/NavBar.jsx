import React, { useState } from "react";
import { Link } from "react-router-dom";
import Clock from "../utils/Clock";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { Email } from "./Api/Email";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showForm, setShowForm] = useState(false); // Add showForm state

  const NavHandeler = () => {
    setNav(!nav);
    document.body.style.overflow = nav ? "auto" : "hidden";
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="font-all">
      {" "}
      <div
        className={
          showForm
            ? "fixed pt-[2em] px-[1em] rounded-3xl  right-0 lg:top-[0em] top-0 w-screen lg:w-[50%] h-screen lg:backdrop-blur-lg backdrop-blur-3xl ease-in-out duration-500 z-[100000000000000000000000000000000000000]"
            : "fixed pt-[2em] px-[1em] rounded-3xl  right-[-200%] top-0 lg:w-screen w-[60%] h-screen space-y-[21rem] lg:backdrop-blur-lg backdrop-blur-3xl ease-in-out duration-500 z-[100000000000000000000000000000000000000]"
        }
      >
        <div className="flex flex-col px-[0.5em]">
          <div className="flex justify-between items-center">
            <p className="text-[#f1f1f1]">Contact</p>
            <AiOutlineClose
              onClick={toggleForm}
              size={30}
              className="text-white"
            />
          </div>
          <div className="text-white text-[2em] w-[10em] lg:pb-[3em] pb-[1em] pt-[1em]">
            <p>Let's Plan a brighter Future</p>
          </div>
          <div className="text-[#797979] text-[1.5em] pb-[1em]">
            <p>Enter Your Details</p>
          </div>
          <div> {showForm && <Email />}</div>
          <div className="text-[#797979] flex flex-col pt-[1em] space-y-2 justify-center text-center">
          <p>OR</p>
          <p className="lg:text-[2em]">oyemoeed@gmail.com</p>
          </div>
        </div>
      </div>
      <nav className="max-w-screen h-[5em] font-all">
        <div
          className="fixed right-0 left-0 flex flex-row justify-between items-center h-[5em]
      px-4 z-[100000000]"
        >
          <a className="text-[#F1F1F1] lg:text-[1em] text-[0.7em] z-[100000000]">
            <Link to={"/"}>
              <h1>Moeed Sarwar</h1>
              <p className="text-[#797979] lg:text-[0.8em] text-[0.5em] ">
                Gujranwala,Pk
              </p>
            </Link>
          </a>
          <nav>
            <ul className="md:flex space-x-3 text-[#f1f1f1] lg:text-[1em] text-[0.7em] items-center hidden">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/"}>Playground</Link>
              </li>
              <li onClick={toggleForm}>
                <Link to={"/"}>Contact</Link>
              </li>
              <li>
                <Clock />
              </li>
            </ul>
          </nav>
          <nav className="text-[#f1f1f1] z-[1000000000] text-[0.8em] flex flex-row items-center space-x-2 md:hidden">
            <h1>Menu</h1>
            <div onClick={NavHandeler}>
              {!nav ? (
                <IoMenuOutline size={15} />
              ) : (
                <IoCloseOutline size={15} />
              )}
            </div>
          </nav>
        </div>
        <div
          className={
            nav
              ? "fixed pt-[4em] right-0 top-0 w-screen h-screen bg-[#020202] ease-in-out duration-500"
              : "fixed pt-[4em] right-[-200%] top-0 w-screen h-screen space-y-[21rem] bg-[#020202] ease-in-out duration-500"
          }
        >
          <div className="flex flex-col justify-between h-[90vh]">
            <ul className="p-4 space-y-3 text-[2em] text-[#f1f1f1] items-center">
              <li
                type="submit"
                className=" border rounded-2xl border-[#383838]  "
                onClick={NavHandeler}
              >
                <Link to={"/"} className="pl-2 flex ">
                  Home
                </Link>
              </li>
              <li
                className="border rounded-2xl border-[#383838] "
                onClick={NavHandeler}
              >
                <Link to={"/about"} className="pl-2 flex">
                  About
                </Link>
              </li>
              <li
                className="border rounded-2xl border-[#383838] "
                onClick={NavHandeler}
              >
                <Link to={"/"} className="pl-2 flex">
                  Playground
                </Link>
              </li>
              <li
                className="border rounded-2xl border-[#383838] "
                onClick={toggleForm}
              >
                <Link to={"/"} className="pl-2 flex">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="pl-4">
              <h1 className="text-[#797979]">Enquiries</h1>
              <p className="text-[#f1f1f1]">oyemoeed@gmail.com</p>
              <div>
                <ul className="flex flex-row text-[#797979] space-x-2 pt-[2em]">
                  <li>
                    <a href="https://github.com/OyeMoeed" target="blank">
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/moeedsarwar/"
                      target="blank"
                    >
                      Linked In
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/oye_moeed/"
                      target="blank"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
