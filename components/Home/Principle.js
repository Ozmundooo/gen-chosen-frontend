import React from "react";
import PrincipleCard from "./PrincipleCard";
export default function Principles({ principles }) {
  return (
    <>
      <h3 className="text-3xl text-center font-bold lg:text-4xl font-['Raleway'] mb-8 py-2 mt-20">
        Our Principles
      </h3>
      <p className="text-sm lg:text-xl text-center font-['Poppins'] font-normal mb-10 xl:mx-80">
        At Generation Chosen we seek to inculcate five key virtues that we think
        overwhelmingly contribute to the emotional and mental health of any
        subject. These virtues are made manifest in all of our programming, and
        constitute the very matrix of our organization.
      </p>

      <div className="hidden lg:flex flex-wrap justify-center mx-5 my-10">
        {principles.map((principle, i) => (
          <PrincipleCard principle={principle} key={i} />
        ))}
      </div>
    </>
  );
}
