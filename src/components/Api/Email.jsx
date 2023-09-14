import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vf6n4fu",
        "template_omnacct",
        form.current,
        "5O4rikNL3avBauwM-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="text-[#f1f1f1]">
      <form
        ref={form}
        className="flex flex-col space-y-[2em]"
      >
        <div className="flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-5">
          <input
            type="text"
            name="from_name"
            placeholder="Name*"
            className="border border-[#383838] bg-[#020202] p-3 rounded-xl lg:w-1/2 text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email*"
            className="border border-[#383838] bg-[#020202] p-3 rounded-xl lg:w-1/2 text-white"
          />
        </div>
        <input
          type="text"
          name="project"
          placeholder="Project Details*"
          className="border border-[#383838] bg-[#020202] p-3 rounded-xl text-white"
        />
        <textarea
          name="message"
          placeholder="Message*"
          className="border border-[#383838] bg-[#020202] p-3 rounded-xl text-white"
        />
        <button
          type="submit"
          onClick={sendEmail}
          className="border border-[#f1f1f1] bg-[#020202] p-3 rounded-xl hover:bg-[#f1f1f1] hover:text-[#020202]"
        >Send</button>
      </form>
    </div>
  );
};
