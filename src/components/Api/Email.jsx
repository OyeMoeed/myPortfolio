import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Email = () => {
  // Create a ref to the form element
  const form = useRef();

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if any of the required fields are empty
    let hasEmptyFields = false;

    // Iterate through the form elements and check for empty required fields
    for (const input of form.current.elements) {
      if (input.required && input.value.trim() === "") {
        hasEmptyFields = true;
        input.classList.add("border-red-500"); // Add a red border to highlight empty required fields
      } else {
        input.classList.remove("border-red-500"); // Remove the red border if the field is filled
      }
    }

    if (hasEmptyFields) {
      alert("Please Fill All the Required Fields");
      return; // Don't submit the form if required fields are empty
    }

    // Reset the form after submission
    form.current.reset();

    // Send the form data using emailjs
    emailjs
      .sendForm(
        "service_vf6n4fu",
        "template_rvja0rg",
        form.current,
        "5O4rikNL3avBauwM-"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully"); // Display a success message
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email"); // Display an error message
        }
      );
  };

  // Function to remove the red border when an input field is filled
  const handleInputChange = (e) => {
    if (e.target.required && e.target.value.trim() !== "") {
      e.target.classList.remove("border-red-500"); // Remove the red border
    }
  };

  return (
    <div className="text-[#f1f1f1]">
      <form ref={form} className="flex flex-col space-y-[2em]">
        <div className="flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className="border border-[#383838] bg-[#020202] p-3 rounded-xl lg:w-1/2 text-white"
            required // Mark as required
            onInput={handleInputChange} // Add input event listener
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            className="border border-[#383838] bg-[#020202] p-3 rounded-xl lg:w-1/2 text-white"
            required // Mark as required
            onInput={handleInputChange} // Add input event listener
          />
        </div>
        <input
          type="text"
          name="project"
          placeholder="Project Topic*"
          className="border border-[#383838] bg-[#020202] p-3 rounded-xl text-white"
          required // Mark as required
          onInput={handleInputChange} // Add input event listener
        />
        <textarea
          name="details"
          placeholder="Details"
          className="border border-[#383838] bg-[#020202] p-3 rounded-xl text-white"
          required // Mark as required
          onInput={handleInputChange} // Add input event listener
        />
        <button
          type="submit"
          onClick={sendEmail}
          className="border border-[#f1f1f1] bg-[#020202] p-3 rounded-xl hover:bg-[#f1f1f1] hover:text-[#020202]"
        >
          Send
        </button>
      </form>
    </div>
  );
};
