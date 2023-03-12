import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const MY_FORM_ID = 4938670;
  return (
    <>
      <footer className="">
        <div className="lg:flex text-center justify-between py-6  border-black border-y-4 align-middle">
          <div className="text-center lg:text-left lg:ml-20 lg:my-10 lg:w-1/2">
            <h2 className="text-3xl font-bold lg:text-4xl font-['Raleway']">
              Sign up to our newsletter
            </h2>
            {/* <p className="text-md lg:text-lg px-10 lg:px-0 pt-4 font-['Poppins'] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p> */}
          </div>

          <div className="flex justify-center font-['Poppins'] lg:mr-20 my-4 lg:my-auto lg:w-1/2">
            {/* <ConvertKitForm
              hideName={true}
              template="clare"
              formId={MY_FORM_ID}
            /> */}
            <input
              className="border border-black lg:p-5  placeholder:pl-2 p-0 text-lg h-[50px] lg:h-[75px]"
              type="text"
              placeholder="Enter your email"
            ></input>
            <button className="lg:p-5 p-2 px-4 pl-5 font-['Poppins'] text-lg  border-black border-4 font-semibold bg-[#D9D9D9] h-[50px] lg:h-[75px]">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          {/* Icons */}
          <div className="flex gap-4  my-4 lg:mb-2 lg:mt-6 justify-center">
            <SocialIcon
              className="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 duration-500"
              url="https://www.instagram.com/gen_chos3n/?hl=en"
            />
            <SocialIcon
              className="grayscale hover:grayscale-0 duration-500"
              url="https://twitter.com/GEN_CHOS3N"
            />
            <SocialIcon
              className="opacity-70 grayscale hover:grayscale-0 hover:opacity-100 duration-500"
              url="https://www.facebook.com/genchosen"
            />
          </div>
          {/* Links */}
          <div className="text-center hidden lg:block py-4">
            <h3 className="text-2xl py-1 font-['Poppins'] ">
              <Link className="hover:underline" href="/ourboard">
                Our Board
              </Link>{" "}
              <strong>·</strong>{" "}
              <Link className="hover:underline" href="/ourteam">
                Our Team
              </Link>{" "}
              <strong>·</strong>{" "}
              <Link className="hover:underline" href="/programs">
                Programs
              </Link>{" "}
              <strong>·</strong>{" "}
              <Link className="hover:underline" href="/videos">
                Videos
              </Link>{" "}
              <strong>·</strong>{" "}
              <Link className="hover:underline" href="/contact">
                Contact
              </Link>
            </h3>
          </div>
        </div>
        <div className="py-4 bg-black text-center font-semibold">
          <p className="text-sm text-white lg:text-lg  py-1 font-['Poppins'] ">
            Copyright © 2023 All rights reserved - Generation Chosen
          </p>
          <p className="text-sm text-white lg:text-lg py-1  font-['Poppins'] ">
            Powered By OAD
          </p>
        </div>
      </footer>
    </>
  );
}
