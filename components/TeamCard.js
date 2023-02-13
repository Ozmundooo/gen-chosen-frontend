import React from "react";
import { urlFor } from "../lib/sanity/client";
import { PortableText } from "@portabletext/react";
export default function TeamCard({ member }) {
  const components = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => (
        <h1 className="text-md line-clamp-1 font-['Poppins']">{children}</h1>
      ),
      normal: ({ children }) => (
        <p className="text-md font-['Poppins']">{children}</p>
      ),
    },
  };
  return (
    <>
      <div className="w-[320px] lg:w-[375px] mb-4 snap-start">
        <h3 className="text-xl font-bold lg:text-2xl font-['Raleway'] ">
          {member.title}
        </h3>
        <span className=" font-light underline font-['Raleway'] pb-4">
          {member.type}
        </span>
        <img
          className="h-[250px]  object-cover mt-4 mb-2"
          src={urlFor(member.image)}
        ></img>
        <PortableText value={member.content} components={components} />{" "}
      </div>
    </>
  );
}
