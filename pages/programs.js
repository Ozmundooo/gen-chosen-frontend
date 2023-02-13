import React from "react";
import ProgramCard from "../components/ProgramCard";
import { sanityClient } from "../lib/sanity/client";
import { programsQuery } from "../lib/sanity/programsQuery";
import programHero from "../assets/HomeHeroBg.png";
import Image from "next/image";
export default function programs({ programs }) {
  return (
    <div>
      <div className="">
        <div class="relative ">
          <Image
            src={programHero}
            className="opacity-[40%] object-cover  xl:h-[30vh] w-full"
          />
          <h1 class="absolute top-1/2 ml-8 lg:ml-16 xl:ml-20  -translate-y-1/2 text-3xl lg:text-4xl font-['Raleway'] text-white font-semibold">
            Programs
          </h1>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-3 place-items-center my-10">
        {programs.map((program) => (
          <ProgramCard program={program} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const programs = await sanityClient.fetch(programsQuery);

  if (!programs.length) {
    return {
      props: {
        programs: [],
      },
    };
  } else
    return {
      props: {
        programs,
      },
    };
}
