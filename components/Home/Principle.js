import React from "react";
import PillarCard from "./PillarCard";
import Carousel from "react-elastic-carousel";
export default function Principles({ principles }) {
  return (
    <>
      <h3 className="text-3xl text-center font-bold lg:text-4xl font-['Philosopher'] py-2 mt-10">
        Principles
      </h3>
      <div className="lg:hidden">
        <Carousel>
          {principles.map((principles) => (
            <PillarCard pillar={principles} />
          ))}
        </Carousel>
      </div>
      <div className="hidden lg:flex flex-wrap justify-center mx-5 my-10">
        {principles.map((principles) => (
          <PillarCard pillar={principles} />
        ))}
      </div>
    </>
  );
}
