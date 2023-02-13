import React from "react";
import PrincipleCard from "./PrincipleCard";
import Carousel from "react-elastic-carousel";
export default function Principles({ principles }) {
  return (
    <>
      <h3 className="text-3xl text-center font-bold lg:text-4xl font-['Raleway'] py-2 mt-20">
        Principles
      </h3>
      <p className="text-sm lg:text-xl text-center font-['Poppins'] font-normal xl:mx-80">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </p>
      {/* <div className="lg:hidden">
        <Carousel>
          {principles.map((principles) => (
            <PillarCard pillar={principles} />
          ))}
        </Carousel>
      </div> */}
      <div className="hidden lg:flex flex-wrap justify-center mx-5 my-10">
        {principles.map((principle) => (
          <PrincipleCard principle={principle} />
        ))}
      </div>
    </>
  );
}
