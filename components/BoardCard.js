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
        <p className="text-md font-['Poppins'] w-3/4">{children}</p>
      ),
    },
  };
  return (
    <>
      <div
        className={
          index % 2 === 0
            ? "flex group mb-4 place-items-center gap-4 mx-20"
            : "flex flex-row-reverse mb-4 place-items-center gap-4 mx-20"
        }
      >
        <img
          className="w-1/2  object-cover mb-2"
          src={urlFor(board.image)}
        ></img>
        <div className="w-1/2">
          <h3 className="text-xl font-bold lg:text-2xl font-['Raleway'] py-2">
            {board.title}
          </h3>
          <PortableText value={board.content} components={components} />{" "}
        </div>
      </div>
    </>
  );
}
