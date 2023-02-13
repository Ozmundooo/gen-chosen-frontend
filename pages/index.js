import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Home/Hero";
import Partners from "../components/Home/Partners";
import Pillars from "../components/Home/Pillars";
import Principles from "../components/Home/Principle";
import ProgramScroll from "../components/Home/ProgramScroll";
import { sanityClient } from "../lib/sanity/client";
import { pillarsQuery } from "../lib/sanity/pillarsQuery";
import { principlesQuery } from "../lib/sanity/principlesQuery";
import { programsQuery } from "../lib/sanity/programsQuery";
import { partnersQuery } from "../lib/sanity/partnersQuery";
export default function Home({ pillars, principles, programs, partners }) {
  return (
    <>
      <Hero />
      <Pillars pillars={pillars} />

      <ProgramScroll programs={programs} />
      <Partners partners={partners} />
      <Principles principles={principles} />
    </>
  );
}

export async function getStaticProps() {
  const pillars = await sanityClient.fetch(pillarsQuery);
  const principles = await sanityClient.fetch(principlesQuery);
  const programs = await sanityClient.fetch(programsQuery);
  const partners = await sanityClient.fetch(partnersQuery);
  if (
    !pillars.length &&
    !principles.length &&
    !programs.length &&
    !partners.length
  ) {
    return {
      props: {
        pillars: [],
        principles: [],
        programs: [],
        partners: [],
      },
    };
  } else
    return {
      props: {
        pillars,
        principles,
        programs,
        partners,
      },
    };
}
