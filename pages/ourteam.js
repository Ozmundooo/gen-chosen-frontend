import React from "react";

import { sanityClient } from "../lib/sanity/client";
import { teamQuery } from "../lib/sanity/teamQuery";
import ourTeamHero from "../assets/HomeHeroBg.png";
import Image from "next/image";
import TeamCard from "../components/TeamCard";
export default function ourteam({ team }) {
  return (
    <>
      <Head>
        <title>Generation Chosen: Programs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="">
        <div className="relative ">
          <Image
            src={ourTeamHero}
            className="opacity-[40%] object-cover  xl:h-[30vh] w-full"
            alt="image of the team"
          />
          <h1 className="absolute top-1/2 ml-8 lg:ml-16 xl:ml-20  -translate-y-1/2 text-3xl lg:text-4xl font-['Raleway'] text-white font-semibold">
            Our Team
          </h1>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 place-items-center">
        {team.map((member, i) => (
          <TeamCard member={member} key={i} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const team = await sanityClient.fetch(teamQuery);

  if (!team.length) {
    return {
      props: {
        team: [],
      },
    };
  } else
    return {
      props: {
        team,
      },
    };
}
