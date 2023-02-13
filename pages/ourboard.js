import React from "react";
import { sanityClient } from "../lib/sanity/client";
import { boardQuery } from "../lib/sanity/boardQuery";
import ourBoardHero from "../assets/HomeHeroBg.png";
import Image from "next/image";
import BoardCard from "../components/BoardCard";
export default function ourboard({ boards }) {
  return (
    <>
      <div className="">
        <div class="relative ">
          <Image
            src={ourBoardHero}
            className="opacity-[40%] object-cover  xl:h-[30vh] w-full"
          />
          <h1 class="absolute top-1/2 ml-8 lg:ml-16 xl:ml-20  -translate-y-1/2 text-3xl lg:text-4xl font-['Raleway'] text-white font-semibold">
            Our Board
          </h1>
        </div>
      </div>
      <div className="mt-20 xl:w-5/6 xl:mx-auto">
        {boards.map((board, i) => (
          <BoardCard board={board} index={i} />
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
