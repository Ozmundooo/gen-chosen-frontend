import React from "react";
import { urlFor } from "../../lib/sanity/client";
export default function PillarCard({ pillar }) {
  return (
    <div className="lg:w-1/3 text-center my-5" key={pillar.title}>
      <img className="w-1/2 mx-auto" src={urlFor(pillar.image)} />
      <h3 className="text-2xl font-bold lg:text-4xl font-['Philosopher'] py-2">
        {pillar.title}
      </h3>
      <p className="text-md lg:text-xl font-['Open Sans'] px-20 py-2">
        {pillar.description}
      </p>
    </div>
  );
}
