import React from "react";
import PillarCard from "./PillarCard";

export default function Pillars({ pillars }) {
  return (
    <>
      <h3 className="text-3xl text-center font-bold lg:text-4xl font-['Raleway'] py-2 mt-10">
        Our Pillars
      </h3>
      <p className="text-sm lg:text-xl text-center font-['Poppins'] font-normal mt-6 mb-10 xl:mx-80">
        Our program caters to the needs of racialized, marginalized and
        disenfranchised inner-city youth by focussing on 4 key areas, which we
        believe, fundamentally catalyze holistic human development.
      </p>
      <ul className=" grid  grid-cols-1 lg:grid-cols-2 place-items-center xl:mx-24 mx-4 my-10 gap-10  ">
        {pillars.map((pillar, i) => (
          <PillarCard pillar={pillar} key={i} />
        ))}
      </ul>
    </>
  );
}
