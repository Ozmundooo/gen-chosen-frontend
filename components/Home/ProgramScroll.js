import React from "react";
import ProgramCard from "../../components/ProgramCard";

export default function ProgramScroll({ programs }) {
  return (
    <>
      <h3 className="text-3xl mb-8 text-center font-bold lg:text-4xl font-['Raleway'] py-2 mt-20">
        Our Programs
      </h3>
      <div className="ml-10 lg:ml-24 flex overflow-x-auto overflow-scroll gap-8 snap-x">
        {programs.map((program, i) => (
          <ProgramCard program={program} key={i} />
        ))}
      </div>
    </>
  );
}
