import React from "react";
import { urlFor } from "../../lib/sanity/client";
export default function PillarCard({ pillar, index }) {
  return (
    <li
      className="lg:w-full group shadow-2xl hover:shadow-4xl lg:hover:px-8 duration-500 px-10 py-2  rounded-lg"
      key={index}
    >
      <div className="  my-5" key={pillar.title}>
        <img
          className="group-hover:w-[150px] w-[100px] group-hover:py-5 duration-700 group-hover:duration-500 ease-out"
          src={urlFor(pillar.image)}
        />
        <h3 className="text-2xl font-semibold lg:text-4xl font-['Raleway'] py-2">
          {pillar.title}
        </h3>
        <p className="text-md lg:text-lg font-['Poppins'] py-2 text-black">
          {pillar.description}
        </p>
      </div>
    </li>
  );
}
