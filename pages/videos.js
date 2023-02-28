import React from "react";
import ProgramCard from "../components/ProgramCard";
import { sanityClient } from "../lib/sanity/client";
import { videosQuery } from "../lib/sanity/videosQuery";
import videoHero from "../assets/videosHero.jpg";
import Image from "next/image";
import Head from "next/head";
export default function programs({ videos }) {
  return (
    <>
      <Head>
        <title>Generation Chosen: Videos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="">
          <div className="relative ">
            <Image
              src={videoHero}
              className="opacity-[50%] object-cover object-top brightness-[25%] h-[30vh]  xl:h-[40vh] w-full"
              alt="image of a Gen chosen at event"
            />
            <h1 className="absolute top-1/2 ml-8 lg:ml-16 xl:ml-20  -translate-y-1/2 text-3xl lg:text-4xl font-['Raleway'] text-white font-semibold">
              Videos
            </h1>
          </div>
        </div>

        <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-3 place-items-center my-14">
          {videos.map((video, i) => (
            <>
              <div className="flex flex-col place-items-center" key={i}>
                <h3 className="text-xl font-bold text-center lg:text-2xl font-['Raleway'] py-2">
                  {video.title}
                </h3>
                <iframe
                  src={video.link}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="h-[220px] w-[345px] lg:w-[540px] lg:h-[300px]"
                ></iframe>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const videos = await sanityClient.fetch(videosQuery);

  if (!videos.length) {
    return {
      props: {
        videos: [],
      },
    };
  } else
    return {
      props: {
        videos,
      },
    };
}
