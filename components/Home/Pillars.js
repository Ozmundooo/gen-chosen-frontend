import React from "react";
import PillarCard from "./PillarCard";
import Carousel from "react-elastic-carousel";
export default function Pillars({ pillars }) {
  return (
    <>
      <h3 className="text-3xl text-center font-bold lg:text-4xl font-['Philosopher'] py-2 mt-10">
        Pillars
      </h3>
      <div className="lg:hidden">
        <Carousel>
          {pillars.map((pillar) => (
            <PillarCard pillar={pillar} />
          ))}
        </Carousel>
      </div>
      <div className="hidden lg:flex flex-wrap justify-center mx-5 my-10">
        {pillars.map((pillar) => (
          <PillarCard pillar={pillar} />
        ))}
      </div>
    </>
  );
}
