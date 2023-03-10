import React from "react";
import ProgramCard from "../components/ProgramCard";
import { sanityClient } from "../lib/sanity/client";
import { programsQuery } from "../lib/sanity/programsQuery";
import videoHero from "../assets/programHero.jpg";
import Image from "next/image";
import Head from "next/head";
export default function programs({ programs }) {
  return (
    <>
      <Head>
        <title>Generation Chosen: Our Programs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="">
          <div className="relative ">
            <Image
              src={videoHero}
              className="opacity-[50%] object-cover object-top brightness-[25%] h-[30vh]  xl:h-[40vh] w-full"
              alt="image of the team participating in an events"
            />
            <h1 className="absolute top-1/2 ml-8 lg:ml-16 xl:ml-20  -translate-y-1/2 text-3xl lg:text-4xl font-['Raleway'] text-white font-semibold">
              Programs
            </h1>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-3 place-items-center my-10">
          {programs.map((program, i) => (
            <ProgramCard program={program} key={i} />
          ))}
        </div>
      </div>
    </>
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
