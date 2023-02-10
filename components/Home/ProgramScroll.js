import React from "react";
import ProgramCard from "../../components/ProgramCard";

export default function ProgramScroll({ programs }) {
  return (
    <>
      <h3 className="text-3xl text-center font-bold lg:text-4xl font-['Philosopher'] py-2 mt-10">
        Programs
      </h3>
      <div className="ml-10 flex overflow-x-auto overflow-scroll gap-8 snap-x">
        {programs.map((program) => (
          <ProgramCard program={program} />
        ))}
      </div>
    </>
  );
}
