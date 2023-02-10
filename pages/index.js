import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Home/Hero";
import Pillars from "../components/Home/Pillars";
import Principles from "../components/Home/Principle";
import ProgramScroll from "../components/Home/ProgramScroll";
import { sanityClient } from "../lib/sanity/client";
import { pillarsQuery } from "../lib/sanity/pillarsQuery";
import { principlesQuery } from "../lib/sanity/principlesQuery";
import { programsQuery } from "../lib/sanity/programsQuery";
export default function Home({ pillars, principles, programs }) {
  return (
    <>
      <Hero />
      <Pillars pillars={pillars} />
      <ProgramScroll programs={programs} />
      <Principles principles={principles} />
    </>
  );
}

export async function getStaticProps() {
  const pillars = await sanityClient.fetch(pillarsQuery);
  const principles = await sanityClient.fetch(principlesQuery);
  const programs = await sanityClient.fetch(programsQuery);
  if (!pillars.length && !principles.length && !programs.length) {
    return {
      props: {
        pillars: [],
        principles: [],
        programs: [],
      },
    };
  } else
    return {
      props: {
        pillars,
        principles,
        programs,
      },
    };
}
