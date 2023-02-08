import React from "react";

export default function Hero() {
  return (
    <div className="h-[50vh] lg:h-[80vh] bg-[url('../assets/HomeHeroBg.png')] bg-cover text-white grid content-center ">
      <div className="pl-5">
        <h2 className="text-2xl lg:text-4xl font-['Philosopher']">Title</h2>
        <p className="text-sm lg:text-xl font-['Open Sans'] w-2/3 lg:w-1/2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
}
