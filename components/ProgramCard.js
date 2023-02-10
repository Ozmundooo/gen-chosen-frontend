import React from "react";
import { urlFor } from "../lib/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default function ProgramCard({ program }) {
  const components = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => (
        <h1 className="text-md line-clamp-1 font-['Open Sans']">{children}</h1>
      ),
      normal: ({ children }) => (
        <p className="text-md line-clamp-1 font-['Open Sans']">{children}</p>
      ),
    },
  };

  return (
    <Link
      className=" cursor"
      href={`program/${program.slug.current}`}
      key={program.id}
    >
      <div className="w-[320px] lg:w-[400px] mb-4 snap-start">
        <h3 className="text-xl font-bold lg:text-2xl font-['Philosopher'] py-2">
          {program.title}
        </h3>
        <img
          className="h-[250px]  object-cover mb-2"
          src={urlFor(program.mainImage)}
        ></img>
        <PortableText value={program.content} components={components} />{" "}
        <p className="font-['Open Sans'] font-semibold mt-3 underline">
          See more
        </p>
      </div>
    </Link>
  );
}
