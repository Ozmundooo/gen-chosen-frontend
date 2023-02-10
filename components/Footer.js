import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
export default function Footer() {
  return (
    <>
      <footer className="">
        <div className="text-center py-6 border border-black border-y-4">
          {" "}
          <h2 className="text-3xl font-bold lg:text-4xl font-['Philosopher']">
            Sign up to our newsletter
          </h2>
          <p className="text-md lg:text-lg  py-4 font-['Open Sans'] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex justify-center font-['Open Sans'] mt-3">
            <input
              className="border border-black lg:p-5 p-2 text-lg"
              type="text"
              placeholder="Enter your email"
            ></input>
            <button className="lg:p-5 p-2 px-6 font-['Open Sans'] text-lg  border-black border-4 font-semibold bg-[#D9D9D9]">
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
            <h3 className="text-2xl py-1 font-['Open Sans'] ">
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
          <p className="text-sm text-white lg:text-lg  py-1 font-['Open Sans'] ">
            Copyright © 2023 All rights reserved - Gen_Chos3n
          </p>
          <p className="text-sm text-white lg:text-lg py-1  font-['Open Sans'] ">
            Powered By OAD
          </p>
        </div>
      </footer>
    </>
  );
}
