import React from "react";
import { sanityClient } from "../lib/sanity/client";
import { boardQuery } from "../lib/sanity/boardQuery";
import ourBoardHero from "../assets/BoardHeroBg.png";
import Image from "next/image";
import BoardCard from "../components/BoardCard";
import Head from "next/head";
export default function ourboard({ boards }) {
  return (
    <>
      {" "}
      <Head>
        <title>Generation Chosen: Our Board</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="">
        <div className="relative ">
          <Image
            src={ourBoardHero}
            className="opacity-[50%] object-cover object-center brightness-[25%] h-[30vh]  xl:h-[40vh] w-full"
            alt="Our Board Background"
          />
          <h1 className="absolute top-1/2 ml-8 lg:ml-16 xl:ml-20  -translate-y-1/2 text-3xl lg:text-4xl font-['Raleway'] text-white font-semibold">
            Our Board
          </h1>
        </div>
      </div>
      <div className="mt-20 xl:w-5/6 xl:mx-auto">
        {boards.map((board, i) => (
          <BoardCard board={board} index={i} key={i} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const boards = await sanityClient.fetch(boardQuery);

  if (!boards.length) {
    return {
      props: {
        boards: [],
      },
    };
  } else
    return {
      props: {
        boards,
      },
    };
}
