import React from "react";
import { urlFor } from "../../lib/sanity/client";
export default function PrincipleCards({ principle }) {
  return (
    <div className="w-fill lg:w-1/3 text-center my-5">
      <img className="w-1/4 mb-3 mx-auto" src={urlFor(principle.image)} />
      <h3 className="text-2xl font-semibold lg:text-4xl font-['Raleway'] py-2">
        {principle.title}
      </h3>
      <p className="text-md lg:text-lg font-['Poppins'] lg:px-24 py-1">
        {principle.description}
      </p>
    </div>
  );
}
