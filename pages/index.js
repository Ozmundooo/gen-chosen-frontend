import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Home/Hero";
import Pillars from "../components/Home/Pillars";
import Principles from "../components/Home/Principle";
import { sanityClient } from "../lib/sanity/client";
import { pillarsQuery } from "../lib/sanity/pillarsQuery";
import { principlesQuery } from "../lib/sanity/principlesQuery";
export default function Home({ pillars, principles }) {
  return (
    <>
      <Hero />
      <Pillars pillars={pillars} />
      <Principles principles={principles} />
    </>
  );
}

export async function getStaticProps() {
  const pillars = await sanityClient.fetch(pillarsQuery);
  const principles = await sanityClient.fetch(principlesQuery);

  if (!pillars.length && !principles.length) {
    return {
      props: {
        pillars: [],
        principles: [],
      },
    };
  } else
    return {
      props: {
        pillars,
        principles,
      },
    };
}
