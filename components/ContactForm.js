import React from "react";

export default function ContactForm() {
  return (
    <>
      <div className="lg:w-[60vw] mx-auto  border-black border-4 my-10">
        <h3 className="text-3xl  text-center font-bold lg:text-4xl font-['Raleway'] my-10">
          Contact Us
        </h3>
        <form className="lg:w-3/4 gap-4 mx-10">
          <div className="w-full flex flex-col lg:flex-row align-middle gap-4 mb-5">
            <input
              className="border border-black lg:p-5 p-2 text-lg w-full lg:w-1/2"
              type="text"
              placeholder="Enter your name"
            ></input>

            <input
              className="border border-black lg:p-5 p-2 text-lg w-full lg:w-1/2"
              type="text"
              placeholder="Enter your email"
            ></input>
          </div>
          {/* <div className="w-full lg:flex gap-4 mb-5">
            <input
              className="border border-black lg:p-5 p-2 text-lg w-1/2"
              type="text"
              placeholder="Enter your name"
            ></input>

            <input
              className="border border-black lg:p-5 p-2 text-lg w-1/2"
              type="text"
              placeholder="Enter your email"
            ></input>
          </div> */}
          <div className="w-full flex gap-4 mb-5">
            <textarea
              name="message"
              rows="6"
              className="border border-black lg:p-5 p-2 text-lg w-full"
              placeholder="Enter your message"
            />{" "}
          </div>{" "}
          <button
            className="mt-1 p-5 mb-10 bg-white text-center  font-anon  text-black font-bold text-2xl hover:shadow-2xl border border-black w-full  mx-auto rounded-full"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
