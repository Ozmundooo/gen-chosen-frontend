import React from "react";
import HomeHero from "../../assets/HomeHeroBg.png";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div className="">
        <div className="relative ">
          <Image
            src={HomeHero}
            className="h-[50vh] lg:h-[90vh] brightness-[30%] opacity-80 object-cover  w-full"
            alt="Home Hero Image of the team"
          />
          <div className="absolute top-1/2 ml-8 lg:ml-16 xl:ml-20  -translate-y-1/2 text-3xl lg:text-4xl font-['Raleway'] text-white font-semibold">
            <h2 className="text-2xl lg:text-4xl font-['Raleway']  mb-5">
              Generation Chosen
            </h2>
            <p className="text-sm lg:text-xl font-['Poppins'] font-normal w-2/3 lg:w-1/2">
              Generation Chosen is a non-profit organization devoted to
              interrupting intergenerational cycles of trauma and poverty in
              lower-income communities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
