import React from "react";
import { urlFor } from "../lib/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
export default function BoardCard({ board, index }) {
  const components = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => (
        <h1 className="text-md line-clamp-1 font-['Poppins']">{children}</h1>
      ),
      normal: ({ children }) => (
        <p className="text-md font-['Poppins'] mt-3">{children}</p>
      ),
    },
  };
  return (
    <>
      <div
        className={
          index % 2 === 0
            ? "lg:flex group mb-8 place-items-center gap-4 lg:mx-20 mx-8"
            : "lg:flex flex-row-reverse mb-8 place-items-center gap-4 lg:mb-0 lg:mx-20 mx-8"
        }
        key={board._id}
      >
        <img
          className="lg:w-1/2 w-3/4  object-cover mb-2"
          src={urlFor(board.image)}
        ></img>
        <div className="lg:w-1/2">
          <h3 className="text-xl font-bold lg:text-2xl font-['Raleway'] pt-2">
            {board.title}
          </h3>
          <span className="  underline font-['Raleway'] ">{board.type}</span>
          <PortableText value={board.content} components={components} />{" "}
        </div>
      </div>
    </>
  );
}
