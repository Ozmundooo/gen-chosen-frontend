import React from "react";
import PillarCard from "./PillarCard";

export default function Pillars({ pillars }) {
  return (
    <>
      <h3 className="text-3xl text-center font-bold lg:text-4xl font-['Raleway'] py-2 mt-10">
        Our Pillars
      </h3>
      <p className="text-sm lg:text-xl text-center font-['Poppins'] font-normal mt-6 mb-10 xl:mx-80">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </p>
      <div className=" grid  grid-cols-1 lg:grid-cols-2 place-items-center xl:mx-24 mx-4 my-10 gap-10  ">
        {pillars.map((pillar, i) => (
          <PillarCard pillar={pillar} index={i} />
        ))}
      </div>
    </>
  );
}
